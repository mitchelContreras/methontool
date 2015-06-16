package com.ciensUCV.Methontool.model;

public class Constante {
	int id;
	int idGlosarioConstante;
	Medida medida;
	TipoDeDato tipoDeDato;
	String valor;
	
	public Constante() {
		super();
		// TODO Auto-generated constructor stub
		this.medida = new Medida();
		this.tipoDeDato = new TipoDeDato();
	}

	public Constante(int id, int idGlosarioConstante, Medida medida,
			TipoDeDato tipoDeDato, String valor) {
		super();
		this.id = id;
		this.idGlosarioConstante = idGlosarioConstante;
		this.medida = medida;
		this.tipoDeDato = tipoDeDato;
		this.valor = valor;
	}

	@Override
	public String toString() {
		return "Constante [id=" + id + ", idGlosarioConstante="
				+ idGlosarioConstante + ", medida=" + medida + ", tipoDeDato="
				+ tipoDeDato + ", valor=" + valor + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdGlosarioConstante() {
		return idGlosarioConstante;
	}

	public void setIdGlosarioConstante(int idGlosarioConstante) {
		this.idGlosarioConstante = idGlosarioConstante;
	}

	public Medida getMedida() {
		return medida;
	}

	public void setMedida(Medida medida) {
		this.medida = medida;
	}

	public TipoDeDato getTipoDeDato() {
		return tipoDeDato;
	}

	public void setTipoDeDato(TipoDeDato tipoDeDato) {
		this.tipoDeDato = tipoDeDato;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}
	

}
