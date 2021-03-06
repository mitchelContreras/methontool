package com.ciensUCV.Methontool.dao.impl;

import java.sql.Array;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.ProyectoDAO;
import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.model.Proyecto;

public class JdbcProyectoDAO implements ProyectoDAO {
	private DataSource dataSource;
	private static final Logger logger = LoggerFactory.getLogger(JdbcProyectoDAO.class);
	
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public ArrayList<Proyecto> listarProyectos(int idUsuario) {
		// TODO Auto-generated method stub
		String sql = "Select p.id_proyecto"+
				",p.nombre"+
				",p.fuente_conocimiento"+
				",p.dominio"+
				",p.proposito"+
				",p.alcance"+
				",p.preguntas_competencia"+
				",p.id_nivel_formalidad"+
				",p.desarrolladores"+
				",to_char(p.fecha, 'dd/mm/YYYY') AS fecha "+
				",nivel.codigo "+
				",nivel.nombre "+
				",nivel.descripcion "+
				"from proyecto as p "+
				"left join puede_ver as ver on p.id_proyecto = ver.id_proyecto "+
				"left join nivel_formalidad as nivel on p.id_nivel_formalidad = nivel.id_nivel_formalidad "+
				"where ver.id_usuario = ? ";
		
		
		Connection conn = null;
		Proyecto proyecto = null;
		NivelFormalidad nivelFormalidad= null;
		ArrayList<Proyecto>  arrayProyecto = new ArrayList<Proyecto> ();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idUsuario);
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				proyecto = new Proyecto();
				nivelFormalidad = new NivelFormalidad();
				proyecto.setIdProyecto(rs.getInt("id_proyecto"));
				proyecto.setNombre(rs.getString(2));
				proyecto.fuenteConocimientoStringToArray(rs.getString("fuente_conocimiento"));
				proyecto.desarrolladoresStringToArray(rs.getString("desarrolladores"));
				proyecto.setDominio(rs.getString("dominio"));
				proyecto.setProposito(rs.getString("proposito"));
				proyecto.setAlcance(rs.getString("alcance"));
				proyecto.setFecha(rs.getString("fecha"));
				proyecto.preguntasCompetenciaStringToArray(rs.getString("preguntas_competencia"));
				nivelFormalidad.setIdNivelFormalidad(rs.getInt("id_nivel_formalidad"));
				nivelFormalidad.setCodigo(rs.getString("codigo"));
				nivelFormalidad.setNombre(rs.getString(12));
				nivelFormalidad.setDescripcion(rs.getString("descripcion"));
				proyecto.setNivelFormalidad(nivelFormalidad);
				arrayProyecto.add(proyecto);
			}
			rs.close();
			ps.close();
			return arrayProyecto;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return arrayProyecto;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return arrayProyecto;
				}
			}
		}
	}
	@Override
	public Proyecto verProyecto(int idUsuario, int idProyecto) {
		// TODO Auto-generated method stub

		String sql = "Select * from "+
				"proyecto as p "+
				"join puede_ver as ver on p.id_proyecto = ver.id_proyecto "+
				"join nivel_formalidad as nivel on p.id_nivel_formalidad = nivel.id_nivel_formalidad "+
				"where p.id_proyecto = ? "+ //1	idProyecto
				"and ver.id_usuario = ?";	//2	idUsuario
		
		Connection conn = null;
		Proyecto proyecto = null;
		NivelFormalidad nivelFormalidad= null;
	
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ps.setInt(2, idUsuario);
			
			ResultSet rs = ps.executeQuery();
			if(rs.next()){
				proyecto = new Proyecto();
				nivelFormalidad = new NivelFormalidad();
				proyecto.setIdProyecto(rs.getInt("id_proyecto"));
				proyecto.setNombre(rs.getString(2));
//				proyecto.setFuenteConocimiento(rs.getString("fuente_conocimiento"));
				proyecto.setDominio(rs.getString("dominio"));
				proyecto.setProposito(rs.getString("proposito"));
				proyecto.setAlcance(rs.getString("alcance"));
				proyecto.setFecha(rs.getString("fecha"));
				proyecto.preguntasCompetenciaStringToArray(rs.getString("preguntas_competencia"));				
				nivelFormalidad.setIdNivelFormalidad(rs.getInt("id_nivel_formalidad"));
				proyecto.setNivelFormalidad(nivelFormalidad);

			}
			rs.close();
			ps.close();
			logger.info("proyecto es "+proyecto.toString());
			return proyecto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return proyecto;
				}
			}
		}
	}
	
	@Override
	public int crearProyecto(Proyecto proyecto, int [] usuarios) {
		// TODO Auto-generated method stub
		
		String sql = "SELECT sp_crear_proyecto( ?, ?)";
		Connection conn = null;
		int salida = -1;
//		logger.info("el ombre es en jdbc "+proyecto.getNombre());
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, proyecto.getNombre());
//			logger.info("antes del for");
			Object[] array = new Object[usuarios.length];
			for(int i =0;i<array.length; i++){
				array[i] = (Object)usuarios[i];
			}
//			logger.info("despues del for");
			Array aArray = conn.createArrayOf("int", array);
			ps.setArray(2, aArray);
			
//			logger.info("antes del execute");
			ResultSet rs = ps.executeQuery();
//			logger.info("despues del execute");
			if(rs.next()){
				salida = rs.getInt("sp_crear_proyecto");
			}
//			logger.info("salida es "+salida);
			rs.close();
			ps.close();
//			logger.info("proyecto es "+proyecto.toString());
			return salida;
		} catch (SQLException e) {
			logger.info("SQLException "+e.toString());
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					logger.error(e.toString());
					return salida;
				} catch(Exception e){
					logger.info(e.toString());
				}
			}
		}
	}
	@Override
	public int actualizarProyecto(Proyecto proyecto) {
		// TODO Auto-generated method stub
		
		String sql = "SELECT sp_actualizar_proyecto(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Connection conn = null;
		int salida = -1;
		logger.info("dentro de sp_actualizar_proyecto");
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1,proyecto.getIdProyecto());
			ps.setString(2, proyecto.getNombre());
			ps.setString(3, proyecto.fuenteConocimientoArrayToString());
			ps.setString(4, proyecto.getDominio());
			ps.setString(5, proyecto.getProposito());
			ps.setString(6, proyecto.getAlcance());
			ps.setString(7, proyecto.preguntasCompetenciaArrayToString());
			
			SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
			
			try {
		 
				java.util.Date date = formatter.parse(proyecto.getFecha());
				ps.setDate(8, new java.sql.Date(date.getTime()));
		 
			} catch (ParseException e) {
				e.printStackTrace();
			}
			ps.setInt(9, proyecto.getNivelFormalidad().getIdNivelFormalidad());
			ps.setString(10, proyecto.desarrolladoresArrayToString());

			ResultSet rs = ps.executeQuery();
			if(rs.next()){
				salida = rs.getInt("sp_actualizar_proyecto");
			}
			logger.info("salida es "+salida);
			rs.close();
			ps.close();
			logger.info("proyecto es "+proyecto.toString());
			return salida;
		} catch (SQLException e) {
			logger.info("SQLException "+e.toString());
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					logger.error(e.toString());
					return salida;
				} catch(Exception e){
					logger.info(e.toString());
				}
			}
		}
	}
	
	@Override
	public int eliminarProyecto(int idProyecto) {
		// TODO Auto-generated method stub
		
		String sql = "SELECT sp_eliminar_proyecto(?)";
		Connection conn = null;
		int salida = -1;
		logger.info("dentro de sp_eliminar_proyecto");
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1,idProyecto);
			
			logger.info("antes del execute");
			ResultSet rs = ps.executeQuery();
			logger.info("despues del execute");
			if(rs.next()){
				salida = rs.getInt("sp_eliminar_proyecto");
			}
			logger.info("salida es "+salida);
			rs.close();
			ps.close();
			return salida;
		} catch (SQLException e) {
			logger.info("SQLException "+e.toString());
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					logger.error(e.toString());
					return salida;
				} catch(Exception e){
					logger.info(e.toString());
				}
			}
		}
	}
	@Override
	public Proyecto verProyecto(int idProyecto) {
		// TODO Auto-generated method stub

		String sql = "Select * from "+
				"proyecto as p "+
				"join nivel_formalidad as nivel on p.id_nivel_formalidad = nivel.id_nivel_formalidad "+
				"where p.id_proyecto = ? "; //1	idProyecto
		
		Connection conn = null;
		Proyecto proyecto = null;
		NivelFormalidad nivelFormalidad= null;
	
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			
			ResultSet rs = ps.executeQuery();
			if(rs.next()){
				proyecto = new Proyecto();
				nivelFormalidad = new NivelFormalidad();
				proyecto.setIdProyecto(rs.getInt("id_proyecto"));
				proyecto.setNombre(rs.getString(2));
				proyecto.setDominio(rs.getString("dominio"));
				proyecto.setProposito(rs.getString("proposito"));
				proyecto.setAlcance(rs.getString("alcance"));
				proyecto.setFecha(rs.getString("fecha"));
				proyecto.preguntasCompetenciaStringToArray(rs.getString("preguntas_competencia"));				
				nivelFormalidad.setIdNivelFormalidad(rs.getInt("id_nivel_formalidad"));
				proyecto.setNivelFormalidad(nivelFormalidad);
			}
			rs.close();
			ps.close();
			logger.info("proyecto es "+proyecto.toString());
			return proyecto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return proyecto;
				}
			}
		}
	}
}
