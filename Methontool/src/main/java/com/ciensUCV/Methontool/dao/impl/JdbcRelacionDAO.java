package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.RelacionDAO;
import com.ciensUCV.Methontool.model.Relacion;

public class JdbcRelacionDAO implements RelacionDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcRelacionDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public ArrayList<Relacion> listarRelacion(int idProyecto,
			int idGlosarioRelacion) {
		// TODO Auto-generated method stub
		String sql;
		sql = "SELECT"
				+ " id_relacion,"
				+ " id_glosario_relacion, "
				+ "id_glosario_origen, "
				+ "id_glosario_destino, "
				+ "id_glosario_relacion_inversa, "
				+ "cardinalidad "
				+ "FROM relacion "
				+ "WHERE id_proyecto = ? "
				+ "AND  id_glosario_relacion = ?";
		Connection conn = null;
		Relacion relacion = null;
		ArrayList<Relacion> arrayList = new ArrayList<Relacion>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ps.setInt(2, idGlosarioRelacion);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				relacion = new Relacion(
						rs.getInt("id_relacion"),
						rs.getInt("id_glosario_relacion"),
						rs.getInt("id_glosario_origen"),
						rs.getInt("id_glosario_destino"),
						rs.getInt("id_glosario_relacion_inversa"),
						rs.getString("cardinalidad"));
				logger.trace(relacion.toString());
				arrayList.add(relacion);
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
	public Relacion crearRelacion(int idProyecto, Relacion relacion) {
		// TODO Auto-generated method stub
		String sqlInicio, sqlFin, sql;
		sqlInicio = "  INSERT INTO relacion ("
				+ "id_glosario_relacion "
				+ ",id_glosario_origen "
				+ ",id_glosario_destino "
				+ ",id_proyecto ";
		sqlFin = " VALUES (? ,? ,? ,? ";
		if(relacion.getIdGlosarioRelacionInversa() != 0){
			sqlInicio = sqlInicio + ",id_glosario_relacion_inversa ";
			sqlFin = sqlFin + ",? ";
		}
		if(relacion.getCardinalidad() != null){
			sqlInicio = sqlInicio + ",cardinalidad ";
			sqlFin = sqlFin + ",? ";
		}
		sqlInicio = sqlInicio +") ";
		sqlFin = sqlFin +")  RETURNING id_relacion;";
		sql = sqlInicio + sqlFin;
		
		logger.trace("sql es "+sql);
//		sql = "  INSERT INTO relacion ("
//				+ "id_glosario_relacion, "
//				+ "id_glosario_origen, "
//				+ "id_glosario_destino, "
//				+ "id_glosario_relacion_inversa, "
//				+ "cardinalidad, "
//				+ "id_proyecto) "
//				+ "VALUES (?, ?, ?, ?, ?, ?) RETURNING id_relacion";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, relacion.getIdGlosarioRelacion());
			ps.setInt(2, relacion.getIdGlosarioOrigen());
			ps.setInt(3, relacion.getIdGlosarioDestino());
			ps.setInt(4, idProyecto);
			
			if(relacion.getIdGlosarioRelacionInversa() != 0){
				ps.setInt(5, relacion.getIdGlosarioRelacionInversa());
				if(relacion.getCardinalidad() != null){
					ps.setString(6, relacion.getCardinalidad());
				}
			}else{
				if(relacion.getCardinalidad() != null){
					ps.setString(5, relacion.getCardinalidad());
				}
			}
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				relacion.setIdRelacion(rs.getInt("id_relacion")); 
			}
			rs.close();
			ps.close();
			return relacion;	
		} catch (SQLException e) {
//			logger.info("SQLException "+e);
			relacion.setIdRelacion(0); 
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			relacion.setIdRelacion(0); 
			return relacion;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					relacion.setIdRelacion(0); 
					return relacion;
				}
			}
		}
	}

	@Override
	public int eliminarRelacion(int idProyecto, int idRelacion) {
		// TODO Auto-generated method stub
		String sql;
		sql = "DELETE FROM relacion WHERE id_proyecto = ? and id_relacion = ?;";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1,idProyecto);
			ps.setInt(2, idRelacion);

			ResultSet rs = ps.executeQuery();
			rs.close();
			ps.close();
			return 1;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			return 0;
//			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return 0;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return 0;
				}
			}
		}
	}

	@Override
	public Relacion actualizarRelacion(int idProyecto, Relacion relacion) {
		// TODO Auto-generated method stub
		
//		UPDATE relacion set id_glosario_relacion_inversa = null, cardinalidad = null where id_relacion = 4;
		String sql;
		sql = "UPDATE relacion set "
				+ "id_glosario_relacion_inversa = ?, "
				+ "cardinalidad = ? where id_relacion = ?  and id_proyecto = ? RETURNING id_relacion;";
				
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			if(relacion.getIdGlosarioRelacionInversa() != 0){
				ps.setInt(1, relacion.getIdGlosarioRelacionInversa());
			}else{
				ps.setNull(1, java.sql.Types.INTEGER);
			}
			if(relacion.getCardinalidad() != null){
				ps.setString(2, relacion.getCardinalidad());
			}else{
				ps.setNull(2, java.sql.Types.VARCHAR);
			}
			ps.setInt(3, relacion.getIdRelacion());
			ps.setInt(4, idProyecto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				relacion.setIdRelacion(rs.getInt("id_relacion")); 
			}
			rs.close();
			ps.close();
			return relacion;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			relacion.setIdRelacion(0); 
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			relacion.setIdRelacion(0); 
			return relacion;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					relacion.setIdRelacion(0); 
					return relacion;
				}
			}
		}
	}
	@Override
	public ArrayList<Relacion> listarRelacionDadoIdGlosarioConcepto(
			int idGLosarioProyecto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_relacion, id_glosario_relacion "
				+ "from relacion where "
				+ "id_glosario_origen = ? "
				+ "or id_glosario_destino = ? "
				+ "and id_glosario_origen != id_glosario_destino;";

		Connection conn = null;
		Relacion relacion = null;
		ArrayList<Relacion> arrayList = new ArrayList<Relacion>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGLosarioProyecto);
			ps.setInt(2, idGLosarioProyecto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				relacion = new Relacion();
				relacion.setIdGlosarioRelacion(rs.getInt("id_relacion"));
				relacion.setIdGlosarioRelacion(rs.getInt("id_glosario_relacion"));
				logger.trace(relacion.toString());
				arrayList.add(relacion);
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

}
