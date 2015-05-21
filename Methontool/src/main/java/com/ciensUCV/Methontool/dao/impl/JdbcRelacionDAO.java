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
		return null;
	}

	@Override
	public int eliminarRelacion(int idProyecto, int idRelacion) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Relacion actualizarRelacion(int idProyecto, Relacion relacion) {
		// TODO Auto-generated method stub
		return null;
	}

}
