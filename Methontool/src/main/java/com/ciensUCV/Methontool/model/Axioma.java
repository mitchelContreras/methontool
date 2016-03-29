package com.ciensUCV.Methontool.model;

import java.util.ArrayList;
import java.util.StringTokenizer;

import com.ciensUCV.Methontool.util.LeerConfig;

public class Axioma {
	
	private int id;
	private int idGlosarioAxioma;
	private String expresion;
	private ArrayList<String> variables;
	private ArrayList<Integer> conceptos;
	private ArrayList<Integer> relaciones;
	private ArrayList<Integer> atributosClase;
	private ArrayList<Integer> atributoInstancia;
	
	public Axioma() {
		super();
		// TODO Auto-generated constructor stub
		variables = new  ArrayList<String>();
		conceptos = new ArrayList<Integer>();
		relaciones = new ArrayList<Integer>();
		atributosClase = new ArrayList<Integer>();
		atributoInstancia = new ArrayList<Integer>();
	}
	public Axioma(int id, int idGlosarioAxioma, String expresion,
			ArrayList<String> variables, ArrayList<Integer> conceptos,
			ArrayList<Integer> relaciones, ArrayList<Integer> atributosClase,
			ArrayList<Integer> atributoInstancia) {
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
	public void variablesStringToArray(String entrada){
		this.variables = new  ArrayList<String> ();
		if(entrada != null){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.variables.add(token.nextToken());
			}
		}
	}
	public String variablesArrayToString(){
		String salida = "";
		if(this.variables != null){
			for(int i = 0; i <this.variables.size();i++ ){
				salida = salida + this.variables.get(i);
				if(i != this.variables.size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}

	public void atributoClaseStringToArray(String entrada){
		this.atributosClase = new  ArrayList<Integer> ();
		if(entrada != null){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.atributosClase.add(Integer.parseInt(token.nextToken()));
			}
		}
	}
	public String atributoClaseArrayToString(){
		String salida = "";
		if(this.atributosClase != null){
			for(int i = 0; i <this.atributosClase.size();i++ ){
				salida = salida + this.atributosClase.get(i);
				if(i != this.atributosClase.size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}
	
	public void atributoInstanciaStringToArray(String entrada){
		this.atributoInstancia = new  ArrayList<Integer> ();
		if(entrada != null){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.atributoInstancia.add(Integer.parseInt(token.nextToken()));
			}
		}
	}
	public String atributoInstanciaArrayToString(){
		String salida = "";
		if(this.atributoInstancia != null){
			for(int i = 0; i <this.atributoInstancia.size();i++ ){
				salida = salida + this.atributoInstancia.get(i);
				if(i != this.atributoInstancia.size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}
	
	
	public void relacionesStringToArray(String entrada){
		this.relaciones = new  ArrayList<Integer> ();
		if(entrada != null){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.relaciones.add(Integer.parseInt(token.nextToken()));
			}
		}
	}
	public String relacionesArrayToString(){
		String salida = "";
		if(this.relaciones != null){
			for(int i = 0; i <this.relaciones.size();i++ ){
				salida = salida + this.relaciones.get(i);
				if(i != this.relaciones.size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}
	
	public void conceptoStringToArray(String entrada){
		this.conceptos = new  ArrayList<Integer> ();
		if(entrada != null){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.conceptos.add(Integer.parseInt(token.nextToken()));
			}
		}
	}
	public String conceptoArrayToString(){
		String salida = "";
		if(this.conceptos != null){
			for(int i = 0; i <this.conceptos.size();i++ ){
				salida = salida + this.conceptos.get(i);
				if(i != this.conceptos.size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}
		
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdGlosarioAxioma() {
		return idGlosarioAxioma;
	}

	public void setIdGlosarioAxioma(int idGlosarioAxioma) {
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

	public ArrayList<Integer> getConceptos() {
		return conceptos;
	}

	public void setConceptos(ArrayList<Integer> conceptos) {
		this.conceptos = conceptos;
	}

	public ArrayList<Integer> getRelaciones() {
		return relaciones;
	}

	public void setRelaciones(ArrayList<Integer> relaciones) {
		this.relaciones = relaciones;
	}

	public ArrayList<Integer> getAtributosClase() {
		return atributosClase;
	}

	public void setAtributosClase(ArrayList<Integer> atributosClase) {
		this.atributosClase = atributosClase;
	}

	public ArrayList<Integer> getAtributoInstancia() {
		return atributoInstancia;
	}

	public void setAtributoInstancia(ArrayList<Integer> atributoInstancia) {
		this.atributoInstancia = atributoInstancia;
	}

	
}
