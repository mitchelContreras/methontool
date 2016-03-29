package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.ConstanteDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.Constante;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.model.TipoDeDato;

public class JdbcConstanteDAO implements ConstanteDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcConstanteDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public int crearConstante(int idGlosarioConstante) {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
		String sql;
		sql = " INSERT INTO constante (id_glosario_constante)"
				+ " VALUES (?) RETURNING id_constante;";

		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioConstante);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				return rs.getInt("id_constante");
			}
			rs.close();
			ps.close();
			return 0;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
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
	public Constante actualizarConstante(int idProyecto, Constante constante) {
		// TODO Auto-generated method stub
		String sql;
		sql = "UPDATE constante set "
				+ " cod_medida = ?,"
				+ " cod_dato = ?, "
				+ " valor = ? "
				+ "where id_glosario_constante = ? "
				+ "RETURNING id_constante ;";
		logger.trace("sql "+sql);
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, constante.getMedida().getCodigo());
			ps.setString(2, constante.getTipoDeDato().getCodigo());
			ps.setString(3, constante.getValor());
			ps.setInt(4, constante.getIdGlosarioConstante());
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				logger.trace("entro en rs");
				constante.setId(rs.getInt("id_constante"));
			}
			rs.close();
			ps.close();
			return constante;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return constante;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return constante;
				}
			}
		}
	}

	@Override
	public Constante verConstante(int idProyecto, int idGlosarioConstante) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_constante, "
				+ "id_glosario_constante,"
				+ " cod_medida, "
				+ "cod_dato, "
				+ "valor "
				+ "from constante where "
				+ "id_glosario_constante = ?";

		Connection conn = null;
		Constante constante = new Constante();
		constante.setIdGlosarioConstante(idGlosarioConstante);
		logger.trace("sql es "+sql);
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioConstante);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				constante.setId(rs.getInt("id_constante"));
				constante.setIdGlosarioConstante(rs.getInt("id_glosario_constante"));
				constante.setMedida(new Medida(0, rs.getString("cod_medida"), null, null));
				constante.setTipoDeDato(new TipoDeDato(0, rs.getString("cod_dato"), null, null));
				constante.setValor( rs.getString("valor"));
				
			}
			rs.close();
			ps.close();
			return constante;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return constante;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return constante;
				}
			}
		}
	}

}
