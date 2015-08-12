package com.ciensUCV.Methontool.model;

public class Instancia {

	private int id;
	private int idGlosario;
	private int idGlosarioConceptoRelacion;
	
	public Instancia() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdGlosario() {
		return idGlosario;
	}

	public void setIdGlosario(int idGlosario) {
		this.idGlosario = idGlosario;
	}

	public int getIdGlosarioConceptoRelacion() {
		return idGlosarioConceptoRelacion;
	}

	public void setIdGlosarioConceptoRelacion(int idGlosarioConceptoRelacion) {
		this.idGlosarioConceptoRelacion = idGlosarioConceptoRelacion;
	}

	@Override
	public String toString() {
		return "Instancia [id=" + id + ", idGlosario=" + idGlosario
				+ ", idGlosarioConceptoRelacion=" + idGlosarioConceptoRelacion
				+ "]";
	}
	

}
