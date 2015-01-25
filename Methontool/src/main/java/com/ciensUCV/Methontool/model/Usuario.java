/**
 * 
 */
package com.ciensUCV.Methontool.model;

/**
 * @author mitchell
 *
 */
public class Usuario {
	int idUsuario;
	RolUsuario rolUsuario;
	String nombre;
	String apellido;
	String usuario;
	String correo;
	String contrasena;
	public Usuario(){}
	public Usuario(int idUsuario, String nombre,
			String apellido, String usuario, String correo, String contrasena, int idRolUsuario, String nombreRol) {
		super();
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		this.correo = correo;
		this.contrasena = contrasena;
		this.rolUsuario = new RolUsuario (idRolUsuario, nombreRol);
	}
	public Usuario(int idUsuario, RolUsuario rolUsuario, String nombre,
			String apellido, String usuario, String correo, String contrasena) {
		super();
		this.idUsuario = idUsuario;
		this.rolUsuario = rolUsuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		this.correo = correo;
		this.contrasena = contrasena;
	}
	public Usuario(int idUsuario, String nombre,
			String apellido, String usuario, String correo, String contrasena) {
		super();
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.usuario = usuario;
		this.correo = correo;
		this.contrasena = contrasena;
		this.rolUsuario = new RolUsuario();
	}	
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public RolUsuario getRolUsuario() {
		return rolUsuario;
	}
	public void setRolUsuario(RolUsuario rolUsuario) {
		this.rolUsuario = rolUsuario;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getContrasena() {
		return contrasena;
	}
	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
	@Override
	public String toString() {
		return "Usuario [idUsuario=" + idUsuario + ", rolUsuario=" + rolUsuario
				+ ", nombre=" + nombre + ", apellido=" + apellido
				+ ", usuario=" + usuario + ", correo=" + correo
				+ ", contrasena=" + contrasena + "]";
	}
	
	

	
	
}
