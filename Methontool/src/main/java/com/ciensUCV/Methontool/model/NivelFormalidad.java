/**
 * 
 */
package com.ciensUCV.Methontool.model;

/**
 * @author mitchell
 *
 */
public class NivelFormalidad {

	int idNivelFormalidad;
	String codigo;
	String nombre;
	String descripcion;
	
	public NivelFormalidad() {
		super();
		// TODO Auto-generated constructor stub
	}
	public NivelFormalidad(int idNivelFormalidad, String codigo, String nombre,
			String descripcion) {
		super();
		this.idNivelFormalidad = idNivelFormalidad;
		this.codigo = codigo;
		this.nombre = nombre;
		this.descripcion = descripcion;
	}
	public int getIdNivelFormalidad() {
		return idNivelFormalidad;
	}
	public void setIdNivelFormalidad(int idNivelFormalidad) {
		this.idNivelFormalidad = idNivelFormalidad;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	@Override
	public String toString() {
		return "NivelFormalidad [idNivelFormalidad=" + idNivelFormalidad
				+ ", codigo=" + codigo + ", nombre=" + nombre
				+ ", descripcion=" + descripcion + "]";
	}
	
	

}
