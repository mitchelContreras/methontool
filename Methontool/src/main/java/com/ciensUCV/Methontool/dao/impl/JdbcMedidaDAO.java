package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.MedidaDAO;
import com.ciensUCV.Methontool.model.Medida;

public class JdbcMedidaDAO implements MedidaDAO {

	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	private static final Logger logger = LoggerFactory.getLogger(JdbcMedidaDAO.class);
	
	@Override
	public ArrayList<Medida> listarMedida() {
		// TODO Auto-generated method stub
		String sql;
		sql = "SELECT"
				+ " id_unidad_medida,"
				+ " codigo, "
				+ "nombre, "
				+ "descripcion "
				+ "FROM medida "
				+ "WHERE status = 1 ";
		Connection conn = null;
		Medida medida = null;
		ArrayList<Medida> arrayList = new ArrayList<Medida>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				medida = new Medida(rs.getInt("id_unidad_medida"), 
						rs.getString("codigo"), 
						rs.getString("nombre"), 
						rs.getString("descripcion"));

				arrayList.add(medida);
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
	public Medida verMedida(Medida medida) {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
		String sql;
		sql = "SELECT"
				+ " id_unidad_medida,"
				+ " codigo, "
				+ "nombre, "
				+ "descripcion "
				+ "FROM medida "
				+ "WHERE codigo = ? ";
		Connection conn = null;
		
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, medida.getCodigo());
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				medida.setId(rs.getInt("id_unidad_medida"));
				medida.setCodigo(rs.getString("codigo"));
				medida.setNombre(rs.getString("codigo"));
				medida.setDescripcion(rs.getString("descripcion"));
			}
			rs.close();
			ps.close();
			return medida;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return medida;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return medida;
				}
			}
		}
	}

	@Override
	public Medida actualizarMedida(Medida medida) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String eliminarMedida(Medida medida) {
		// TODO Auto-generated method stub
		return null;
	}

}
