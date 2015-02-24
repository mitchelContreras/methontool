/**
 * 
 */
package com.ciensUCV.Methontool.rest.model;

import com.ciensUCV.Methontool.model.Usuario;

/**
 * @author mitchell
 *
 */
public class UsuarioMensaje extends MensajeBase {
	private Usuario usuario;
	/**
	 * 
	 */
	public UsuarioMensaje() {
		// TODO Auto-generated constructor stub
		super();
		usuario = new Usuario();
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	@Override
	public String toString() {
		return "UsuarioMensaje [usuario=" + usuario + ", MensajeBase()="
				+ super.toString() + "]";
	}
	
}
