package com.ciensUCV.Methontool.model;

import java.util.ArrayList;

public class Concepto {

	private int idGlosario;
	private ArrayList<Relacion> relaciones;
	private ArrayList<Instancia> instancias;
	private ArrayList<AtributoClase> atributosClase;
	private ArrayList<AtributoInstancia> atributosInstancia;
	
	public Concepto() {
		super();
		relaciones = new ArrayList<Relacion>();
		instancias = new ArrayList<Instancia>();
		atributosClase = new ArrayList<AtributoClase>();
		atributosInstancia  = new ArrayList<AtributoInstancia>();
		// TODO Auto-generated constructor stub
	}

	public int getIdGlosario() {
		return idGlosario;
	}

	public void setIdGlosario(int idGlosario) {
		this.idGlosario = idGlosario;
	}

	public ArrayList<Relacion> getRelaciones() {
		return relaciones;
	}

	public void setRelaciones(ArrayList<Relacion> relaciones) {
		this.relaciones = relaciones;
	}

	public ArrayList<Instancia> getInstancias() {
		return instancias;
	}

	public void setInstancias(ArrayList<Instancia> instancias) {
		this.instancias = instancias;
	}

	public ArrayList<AtributoClase> getAtributosClase() {
		return atributosClase;
	}

	public void setAtributosClase(ArrayList<AtributoClase> atributosClase) {
		this.atributosClase = atributosClase;
	}

	public ArrayList<AtributoInstancia> getAtributosInstancia() {
		return atributosInstancia;
	}

	public void setAtributosInstancia(
			ArrayList<AtributoInstancia> atributosInstancia) {
		this.atributosInstancia = atributosInstancia;
	}

	@Override
	public String toString() {
		return "Concepto [idGlosario=" + idGlosario + ", relaciones="
				+ relaciones + ", instancias=" + instancias
				+ ", atributosClase=" + atributosClase
				+ ", atributosInstancia=" + atributosInstancia + "]";
	}
	

	
}
