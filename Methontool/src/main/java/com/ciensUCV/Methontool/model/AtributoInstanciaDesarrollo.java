package com.ciensUCV.Methontool.model;

import java.util.ArrayList;

public class AtributoInstanciaDesarrollo {

	private int id;
	private int idGlosario;
	private String precision;
	private String rangoValores;
	private String cardinalidadMinima;
	private String cardinaliadMaxima;
	private String nombre;
	private String descripcion;
	private ArrayList <String> valores;
	
	AtributoInstanciaDesarrollo (){
		this.valores = new ArrayList <String> ();
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
	public String getPrecision() {
		return precision;
	}
	public void setPrecision(String precision) {
		this.precision = precision;
	}
	public String getRangoValores() {
		return rangoValores;
	}
	public void setRangoValores(String rangoValores) {
		this.rangoValores = rangoValores;
	}
	public String getCardinalidadMinima() {
		return cardinalidadMinima;
	}
	public void setCardinalidadMinima(String cardinalidadMinima) {
		this.cardinalidadMinima = cardinalidadMinima;
	}
	public String getCardinaliadMaxima() {
		return cardinaliadMaxima;
	}
	public void setCardinaliadMaxima(String cardinaliadMaxima) {
		this.cardinaliadMaxima = cardinaliadMaxima;
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
	public ArrayList<String> getValores() {
		return valores;
	}
	public void setValores(ArrayList<String> valores) {
		this.valores = valores;
	}
	@Override
	public String toString() {
		return "AtributoInstanciaDesarrollo [id=" + id + ", idGlosario="
				+ idGlosario + ", precision=" + precision + ", rangoValores="
				+ rangoValores + ", cardinalidadMinima=" + cardinalidadMinima
				+ ", cardinaliadMaxima=" + cardinaliadMaxima + ", nombre="
				+ nombre + ", descripcion=" + descripcion + ", valores="
				+ valores + "]";
	}
	
	public void copyElement (AtributoInstanciaDesarrollo entrada){
		this.id = entrada.getId();
		this.idGlosario = entrada.idGlosario;
		this.precision = entrada.getPrecision();
		this.rangoValores = entrada.getRangoValores();
		this.cardinalidadMinima = entrada.getCardinalidadMinima();
		this.cardinaliadMaxima = entrada.getCardinaliadMaxima();
		this.nombre = entrada.getNombre();
		this.descripcion = entrada.getDescripcion();
		this.valores = cloneList(entrada.getValores());		
	}
	
	private ArrayList <String> cloneList(ArrayList <String> list) {
		ArrayList <String>  clone = new ArrayList <String> (list.size());
		if(this.valores.size() == 0){
		    for(String item: list){
		    	clone.add(item);
		    }
		}else{
			clone = this.valores;
		}
		

	    return clone;
	}
	
}
