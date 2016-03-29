package com.ciensUCV.Methontool.model;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class Instanciado {
	
	private int id;
	private Instancia instancia;
	private String definicion;
	
	public Instanciado() {
		super();
		// TODO Auto-generated constructor stub
		instancia = new Instancia();
	}
	public Instanciado(int id, Instancia instancia, JsonObject definicion) {
		super();
		instancia = new Instancia();
		definicion = new JsonObject();		
		this.id = id;
		this.instancia = instancia;
		this.definicion = definicion.getAsString();
	}
	public Instanciado(int id, Instancia instancia, String definicion) {
		super();
		instancia = new Instancia();	
		this.id = id;
		this.instancia = instancia;
		this.definicion = definicion;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Instancia getInstancia() {
		return instancia;
	}
	public void setInstancia(Instancia instancia) {
		this.instancia = instancia;
	}
	public String getDefinicion() {
		return definicion;
	}
	public void setDefinicion(JsonObject definicion) {
		this.definicion = definicion.getAsString();
	}
	public void setDefinicion(String definicion) {
		this.definicion = definicion;
	}
	@Override
	public String toString() {
		return "Instanciado [id=" + id + ", instancia=" + instancia + ", definicion="
				+ definicion + "]";
	}
	
	
	
}
