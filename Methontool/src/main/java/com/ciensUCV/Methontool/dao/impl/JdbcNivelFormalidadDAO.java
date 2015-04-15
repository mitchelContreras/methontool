package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.NivelFormalidadDAO;
import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.model.Proyecto;

public class JdbcNivelFormalidadDAO implements NivelFormalidadDAO {
	private DataSource dataSource;
	private static final Logger logger = LoggerFactory.getLogger(JdbcNivelFormalidadDAO.class);
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public ArrayList<NivelFormalidad> listarNivelFormalidad() {
		// TODO Auto-generated method stub
		String sql = "SELECT NF.id_nivel_formalidad "
				+",NF.codigo "
				+",NF.nombre "
				+",NF.descripcion "
				+"FROM nivel_formalidad AS NF";
		
		Connection conn = null;
		NivelFormalidad nivelFormalidad = null;
		ArrayList<NivelFormalidad>  arrayNivelFormalidad = new ArrayList<NivelFormalidad> ();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			logger.info("Antes de ejecutar query");
			ResultSet rs = ps.executeQuery();
			logger.info("Despues de ejecutar query");
			while(rs.next()){
				logger.info("Iterando");
				nivelFormalidad = new NivelFormalidad();
				nivelFormalidad.setIdNivelFormalidad(rs.getInt("id_nivel_formalidad"));
				nivelFormalidad.setCodigo(rs.getString("codigo"));
				nivelFormalidad.setNombre(rs.getString("nombre"));
				nivelFormalidad.setDescripcion(rs.getString("descripcion"));
				arrayNivelFormalidad.add(nivelFormalidad);
			}
			rs.close();
			ps.close();
			logger.info("Longitud de arreglo "+arrayNivelFormalidad.size());
			return arrayNivelFormalidad;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return arrayNivelFormalidad;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return arrayNivelFormalidad;
				}
			}
		}
	}

	@Override
	public NivelFormalidad verNivelFormalidad(int idNivelFormalidad) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int crearNivelFormalidad(NivelFormalidad nivelFormalidad) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int actualizarNivelFormalidad(NivelFormalidad nivelFormalidad) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int eliminarNivelFormalidad(int idNivelFormalidad) {
		// TODO Auto-generated method stub
		return 0;
	}

}
