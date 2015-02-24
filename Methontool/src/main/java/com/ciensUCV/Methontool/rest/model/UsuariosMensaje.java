package com.ciensUCV.Methontool.rest.model;

import java.util.ArrayList;
import com.ciensUCV.Methontool.model.Usuario;

/*
 * 
 */
public class UsuariosMensaje extends MensajeBase {
	private ArrayList<Usuario> Usuarios;

	public ArrayList<Usuario> getUsuarios() {
		return Usuarios;
	}
	public void setUsuarios(ArrayList<Usuario> usuarios) {
		Usuarios = usuarios;
	}
	@Override
	public String toString() {
		return "UsuarioMensaje [Usuarios=" + Usuarios + ", MensajeBase()="
				+ super.toString() + "]";
	}
}
