package com.ciensUCV.Methontool.model;

import java.util.ArrayList;

public class Axioma {
	
	private int id;
	private Glosario idGlosarioAxioma;
	private String expresion;
	private ArrayList<String> variables;
	private ArrayList<Glosario> conceptos;
	private ArrayList<Relacion> relaciones;
	private ArrayList<AtributoClase> atributosClase;
	private ArrayList<AtributoInstancia> atributoInstancia;
	
	public Axioma() {
		super();
		// TODO Auto-generated constructor stub
		variables = new  ArrayList<String>();
		conceptos = new ArrayList<Glosario>();
		relaciones = new  ArrayList<Relacion>();
		atributosClase = new ArrayList<AtributoClase>();
		atributoInstancia = new ArrayList<AtributoInstancia> ();
	}

	public Axioma(int id, Glosario idGlosarioAxioma, String expresion,
			ArrayList<String> variables, ArrayList<Glosario> conceptos,
			ArrayList<Relacion> relaciones,
			ArrayList<AtributoClase> atributosClase,
			ArrayList<AtributoInstancia> atributoInstancia) {
		super();
		this.id = id;
		this.idGlosarioAxioma = idGlosarioAxioma;
		this.expresion = expresion;
		this.variables = variables;
		this.conceptos = conceptos;
		this.relaciones = relaciones;
		this.atributosClase = atributosClase;
		this.atributoInstancia = atributoInstancia;
	}

	@Override
	public String toString() {
		return "Axioma [id=" + id + ", idGlosarioAxioma=" + idGlosarioAxioma
				+ ", expresion=" + expresion + ", variables=" + variables
				+ ", conceptos=" + conceptos + ", relaciones=" + relaciones
				+ ", atributosClase=" + atributosClase + ", atributoInstancia="
				+ atributoInstancia + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Glosario getIdGlosarioAxioma() {
		return idGlosarioAxioma;
	}

	public void setIdGlosarioAxioma(Glosario idGlosarioAxioma) {
		this.idGlosarioAxioma = idGlosarioAxioma;
	}

	public String getExpresion() {
		return expresion;
	}

	public void setExpresion(String expresion) {
		this.expresion = expresion;
	}

	public ArrayList<String> getVariables() {
		return variables;
	}

	public void setVariables(ArrayList<String> variables) {
		this.variables = variables;
	}

	public ArrayList<Glosario> getConceptos() {
		return conceptos;
	}

	public void setConceptos(ArrayList<Glosario> conceptos) {
		this.conceptos = conceptos;
	}

	public ArrayList<Relacion> getRelaciones() {
		return relaciones;
	}

	public void setRelaciones(ArrayList<Relacion> relaciones) {
		this.relaciones = relaciones;
	}

	public ArrayList<AtributoClase> getAtributosClase() {
		return atributosClase;
	}

	public void setAtributosClase(ArrayList<AtributoClase> atributosClase) {
		this.atributosClase = atributosClase;
	}

	public ArrayList<AtributoInstancia> getAtributoInstancia() {
		return atributoInstancia;
	}

	public void setAtributoInstancia(ArrayList<AtributoInstancia> atributoInstancia) {
		this.atributoInstancia = atributoInstancia;
	}

	
}
