package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.TipoGlosario;

public class JdbcGlosarioDAO implements GlosarioDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcGlosarioDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public ArrayList<Glosario> listarGlosario(int idProyecto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select "
				+ "glo.id_glosario "
				+ ",glo.nombre "
				+ ",glo.acronimos "
				+ ",glo.tipo_glosario "
				+ ",glo.descripcion "
				+ ",glo.sinonimo "
				+ ",glo.id_proyecto "
				+ "from glosario as glo "
				+ "where glo.id_Proyecto = ?";
		Connection conn = null;
		Glosario glosario = null;
		ArrayList<Glosario> arrayList = new ArrayList<Glosario>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				glosario = new Glosario();
				glosario.setId(rs.getString("id_glosario"));
				glosario.setNombre(rs.getString("nombre"));
				glosario.sinonimosStringToArray(rs.getString("sinonimo"));
				glosario.acronimosStringToArray(rs.getString("acronimos"));
				glosario.setTipoGlosario(new TipoGlosario (rs.getInt("tipo_glosario"), null, null, null));
				glosario.setDescripcion (rs.getString("descripcion"));
				arrayList.add(glosario);
			}
			rs.close();
			ps.close();
			return arrayList;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return arrayList;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return arrayList;
				}
			}
		}
	}

	@Override
	public Glosario verGlosario(int idProyecto, int idGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Glosario crearGlosario(int idProyecto, Glosario glosario) {
		// TODO Auto-generated method stub
		String sql = null;
		sql = "INSERT INTO glosario"
				+ " (nombre, acronimos, tipo_glosario, descripcion, id_proyecto, sinonimo)"
				+ " VALUES (?, ?, ?, ?, ?, ?) RETURNING id_glosario;";
		
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, glosario.getNombre());
			ps.setString(2, glosario.acronimosArrayToString());
			ps.setInt(3, glosario.getTipoGlosario().getId());
			ps.setString(4, glosario.getDescripcion());
			ps.setInt(5, idProyecto);
			ps.setString(6, glosario.sinonimosArrayToString());
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				glosario.setId(String.valueOf(rs.getInt("id_glosario")));
			}
			rs.close();
			ps.close();
			return glosario;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			glosario.setId("0");
			return glosario;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					glosario.setId("0");
					return glosario;
				}
			}
		}
	}

	@Override
	public String actualizarGlosario(Glosario glosario) {
		// TODO Auto-generated method stub
		String sql = null;
		String salida = null;
		sql = "UPDATE glosario set "
				+ "nombre = ?"
				+ ", acronimos = ?"
				+ ", tipo_glosario = ?"
				+ ", descripcion = ?"
				+ ", sinonimo = ?"
				+ " WHERE id_glosario = ? "
				+ "RETURNING ID_GLOSARIO;";
		
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, glosario.getNombre());
			ps.setString(2, glosario.acronimosArrayToString());
			ps.setInt(3, glosario.getTipoGlosario().getId());
			ps.setString(4, glosario.getDescripcion());
			ps.setString(5, glosario.sinonimosArrayToString());
			ps.setInt(6, Integer.parseInt(glosario.getId()));
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				salida = (String.valueOf(rs.getInt("id_glosario")));
			}
			rs.close();
			ps.close();
			if(salida != null && glosario.getId().equalsIgnoreCase(salida)){
				return salida;
			}else{
				return "ERROR";
			}
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return "ERROR";	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return "ERROR";
				}
			}
		}

	}

	@Override
	public String eliminarGlosario(int idProyecto, int idGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

}
