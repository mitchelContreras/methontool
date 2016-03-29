package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.TipoDeDatoDAO;
import com.ciensUCV.Methontool.model.TipoDeDato;

public class JdbcTipoDeDatoDAO implements TipoDeDatoDAO {

	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	private static final Logger logger = LoggerFactory.getLogger(JdbcTipoDeDatoDAO.class);
	@Override
	public ArrayList<TipoDeDato> listarTipoDeDato() {
		// TODO Auto-generated method stub
		
		String sql;
		sql = "SELECT"
				+ " id_tipo_dato,"
				+ " codigo, "
				+ "nombre, "
				+ "descripcion "
				+ "FROM tipo_de_dato "
				+ "WHERE status = 1 ";
		Connection conn = null;
		TipoDeDato tipoDeDato = null;
		ArrayList<TipoDeDato> arrayList = new ArrayList<TipoDeDato>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				tipoDeDato = new TipoDeDato(rs.getInt("id_tipo_dato"), 
						rs.getString("codigo"), 
						rs.getString("nombre"), 
						rs.getString("descripcion"));

				arrayList.add(tipoDeDato);
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
	public TipoDeDato verTipoDeDato(String codTipoDeDato) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TipoDeDato actualizarTipoDeDato(TipoDeDato tipoDeDato) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String eliminarTipoDeDato(String codTipoDato) {
		// TODO Auto-generated method stub
		return null;
	}

}
