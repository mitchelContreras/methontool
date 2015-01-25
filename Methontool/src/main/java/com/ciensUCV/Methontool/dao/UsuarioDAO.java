package com.ciensUCV.Methontool.dao;

import com.ciensUCV.Methontool.model.Usuario;

public interface UsuarioDAO {
	public Usuario buscarByUsuarioId(int idUsuario);
	public Usuario buscarByCorreo(String correo);
	public boolean modificar (Usuario usuario);
}
