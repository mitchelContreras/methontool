/**
 * 
 */
package com.ciensUCV.Methontool.model;

/**
 * @author mitchell
 *
 */
public class RolUsuario {

	int idRolUsuario;
	String nombre;
	
	public RolUsuario(int idRolUsuario, String nombre) {
		super();
		this.idRolUsuario = idRolUsuario;
		this.nombre = nombre;
	}
	public int getIdRolUsuario() {
		return idRolUsuario;
	}
	public void setIdRolUsuario(int idRolUsuario) {
		this.idRolUsuario = idRolUsuario;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	@Override
	public String toString() {
		return "RolUsuario [idRolUsuario=" + idRolUsuario + ", nombre="
				+ nombre + "]";
	}
	
	
}
