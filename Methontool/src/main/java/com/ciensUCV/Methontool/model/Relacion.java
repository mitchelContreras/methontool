package com.ciensUCV.Methontool.model;

public class Relacion {
	
	private int idRelacion;
	private int idGlosarioRelacion;
	private int idGlosarioOrigen;
	private int idGlosarioDestino;
	private int idGlosarioRelacionInversa;
	private String cardinalidad;
	
	@Override
	public String toString() {
		return "Relacion [idRelacion=" + idRelacion + ", idGlosarioRelacion="
				+ idGlosarioRelacion + ", idGlosarioOrigen=" + idGlosarioOrigen
				+ ", idGlosarioDestino=" + idGlosarioDestino
				+ ", idGlosarioRelacionInversa=" + idGlosarioRelacionInversa
				+ ", cardinalidad=" + cardinalidad + "]";
	}


	public Relacion(int idRelacion, int idGlosarioRelacion,
			int idGlosarioOrigen, int idGlosarioDestino,
			int idGlosarioRelacionInversa, String cardinalidad) {
		super();
		this.idRelacion = idRelacion;
		this.idGlosarioRelacion = idGlosarioRelacion;
		this.idGlosarioOrigen = idGlosarioOrigen;
		this.idGlosarioDestino = idGlosarioDestino;
		this.idGlosarioRelacionInversa = idGlosarioRelacionInversa;
		this.cardinalidad = cardinalidad;
	}


	public int getIdRelacion() {
		return idRelacion;
	}


	public void setIdRelacion(int idRelacion) {
		this.idRelacion = idRelacion;
	}


	public int getIdGlosarioRelacion() {
		return idGlosarioRelacion;
	}


	public void setIdGlosarioRelacion(int idGlosarioRelacion) {
		this.idGlosarioRelacion = idGlosarioRelacion;
	}


	public int getIdGlosarioOrigen() {
		return idGlosarioOrigen;
	}


	public void setIdGlosarioOrigen(int idGlosarioOrigen) {
		this.idGlosarioOrigen = idGlosarioOrigen;
	}


	public int getIdGlosarioDestino() {
		return idGlosarioDestino;
	}


	public void setIdGlosarioDestino(int idGlosarioDestino) {
		this.idGlosarioDestino = idGlosarioDestino;
	}


	public int getIdGlosarioRelacionInversa() {
		return idGlosarioRelacionInversa;
	}


	public void setIdGlosarioRelacionInversa(int idGlosarioRelacionInversa) {
		this.idGlosarioRelacionInversa = idGlosarioRelacionInversa;
	}


	public String getCardinalidad() {
		return cardinalidad;
	}


	public void setCardinalidad(String cardinalidad) {
		this.cardinalidad = cardinalidad;
	}


	public Relacion() {
		super();
		// TODO Auto-generated constructor stub
	}

}
