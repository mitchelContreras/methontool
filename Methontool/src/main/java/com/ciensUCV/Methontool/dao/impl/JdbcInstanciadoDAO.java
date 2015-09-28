package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.InstanciadoDAO;
import com.ciensUCV.Methontool.model.Instanciado;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import org.postgresql.util.PGobject;

public class JdbcInstanciadoDAO implements InstanciadoDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcInstanciadoDAO.class);
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public Instanciado crearInstanciado(Instanciado instanciado, int idProyecto) {
		// TODO Auto-generated method stub
		
		String sql =  "INSERT INTO instanciado "+
				"(id_proyecto, id_concepto, id_instancia, definicion) "+
				"VALUES (?, ?, ?, to_json(?::json)) RETURNING id_instanciado";
		
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1,idProyecto);
			ps.setInt(2, instanciado.getInstancia().getIdGlosarioConceptoRelacion());
			ps.setInt(3, instanciado.getInstancia().getId());
			ps.setString(4, instanciado.getDefinicion());
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				instanciado.setId(rs.getInt("id_instanciado"));
			}
			rs.close();
			ps.close();
			return instanciado;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			return instanciado;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return instanciado;
				}
			}
		}
	}

	@Override
	public Instanciado actualizarInstanciado(Instanciado instanciado,
			int idProyecto) {
		// TODO Auto-generated method stub
		String sql = null;
		sql = "UPDATE instanciado set "
				+ " definicion =  to_json(?::json)"
				+ " WHERE id_proyecto = ? and "
				+ " id_concepto = ? and "
				+ " id_instancia = ? and "
				+ " id_instanciado = ? "
				+ "RETURNING id_instanciado;";
		
		
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, instanciado.getDefinicion());
			ps.setInt(2, idProyecto);
			ps.setInt(3, instanciado.getInstancia().getIdGlosarioConceptoRelacion());
			ps.setInt(4, instanciado.getInstancia().getId());
			ps.setInt(5, instanciado.getId());
			ResultSet rs = ps.executeQuery();
			instanciado.setId(0);
			while(rs.next()){
				instanciado.setId(rs.getInt("id_instanciado"));
			}
			rs.close();
			ps.close();
			return instanciado;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			return instanciado;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return instanciado;
				}
			}
		}
	}

	@Override
	public ArrayList<Instanciado> listarInstanciado(int idProyecto){
		// TODO Auto-generated method stub
		ArrayList<Instanciado> listaInstanciado = new ArrayList<Instanciado> ();
		Instanciado instanciado;
		String sql;
		sql = "select "
				+ "definicion"
				+ ",id_concepto "
				+ ",id_instanciado"
				+ " from instanciado "
				+ " where id_proyecto = ?";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				JsonObject jsonObject;
				JsonParser parser = new JsonParser();
	            PGobject dataObject = new PGobject();
	            dataObject.setType("json");
	            dataObject = (PGobject)rs.getObject("definicion");
	            jsonObject = (JsonObject) parser.parse(dataObject.toString());
	            instanciado = new Instanciado();
				instanciado.setDefinicion(jsonObject.toString());
				instanciado.getInstancia().setIdGlosarioConceptoRelacion(rs.getInt("id_concepto"));
				instanciado.setId(rs.getInt("id_instanciado"));
				instanciado.getInstancia().setId(rs.getInt("id_instanciado"));
				listaInstanciado.add(instanciado);
			}
			rs.close();
			ps.close();
			return listaInstanciado;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("Exception "+e);
			return listaInstanciado;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return listaInstanciado;
				}
			}
		}		
		
	}
	
	@Override
	public Instanciado verInstanciado(Instanciado instanciado, int idProyecto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select "
				+ "definicion"
				+ ",id_concepto "
				+ ",id_instanciado"
				+ " from instanciado "
				+ " where id_instancia = ? "
				+ " and id_proyecto = ?";
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, instanciado.getInstancia().getId());
			ps.setInt(2, idProyecto);
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				JsonObject jsonObject;
				JsonParser parser = new JsonParser();
	            PGobject dataObject = new PGobject();
	            dataObject.setType("json");
	            dataObject = (PGobject)rs.getObject("definicion");
	            jsonObject = (JsonObject) parser.parse(dataObject.toString());
				instanciado.setDefinicion(jsonObject.toString());
				instanciado.getInstancia().setIdGlosarioConceptoRelacion(rs.getInt("id_concepto"));
				instanciado.setId(rs.getInt("id_instanciado"));
			}
			rs.close();
			ps.close();
			return instanciado;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("Exception "+e);
			return instanciado;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return instanciado;
				}
			}
		}
	}

	@Override
	public int eliminarInstnaciado(Instanciado instanciado) {
		// TODO Auto-generated method stub
		return 0;
	}

}
