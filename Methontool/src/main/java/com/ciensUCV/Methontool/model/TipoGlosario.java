package com.ciensUCV.Methontool.model;

public class TipoGlosario {
	private int id;
	private String codigo;
	private String nombre;
	private String descripcion;
	public TipoGlosario() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TipoGlosario(int id, String codigo, String nombre,
			String descripcion) {
		super();
		this.id = id;
		this.codigo = codigo;
		this.nombre = nombre;
		this.descripcion = descripcion;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
		return "TipoGlosario [id=" + id + ", codigo=" + codigo + ", nombre="
				+ nombre + ", descripcion=" + descripcion + "]";
	}
	
	
}
