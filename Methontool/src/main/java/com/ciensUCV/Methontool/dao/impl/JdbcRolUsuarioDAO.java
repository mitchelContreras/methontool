package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.ciensUCV.Methontool.dao.RolUsuarioDAO;
import com.ciensUCV.Methontool.model.RolUsuario;

public class JdbcRolUsuarioDAO implements RolUsuarioDAO {

	private DataSource dataSource;

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public RolUsuario buscarByRolUsuarioId(int idRolUsuario) {
		// TODO Auto-generated method stub
		String sql = "SELECT * FROM rol_usuario WHERE id_rol_usuario = ?";
		 
		Connection conn = null;
		RolUsuario rolUsuario = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idRolUsuario);
			
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				rolUsuario = new RolUsuario(
					rs.getInt("id_rol_usuario"),
					rs.getString("nombre")
				);
			}
			rs.close();
			ps.close();
			return rolUsuario;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return rolUsuario;
				}
			}
		}
	}
}
