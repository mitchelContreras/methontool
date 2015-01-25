package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.ciensUCV.Methontool.dao.UsuarioDAO;
import com.ciensUCV.Methontool.model.Usuario;

public class JdbcUsuarioDAO implements UsuarioDAO {
	
	private DataSource dataSource;
	
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	@Override
	public Usuario buscarByUsuarioId(int idUsuario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Usuario buscarByCorreo(String correo) {
		// TODO Auto-generated method stub
		String sql = "SELECT * FROM usuario WHERE correo = ?";
		 
		Connection conn = null;
		Usuario usuario = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, correo);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				usuario = new Usuario(
					rs.getInt("id_usuario"),
					rs.getString("nombre"),
					rs.getString("apellido"),
					rs.getString("usuario"),
					rs.getString("correo"),
					rs.getString("contrasena"),
					rs.getInt("id_rol_usuario"),
					null
				);
			}
			rs.close();
			ps.close();
			
			return usuario;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return usuario;
				}
			}
		}
		
	}

	@Override
	public boolean modificar(Usuario usuario) {
		// TODO Auto-generated method stub
		return false;
	}

}
