package com.ciensUCV.Methontool.model;

import java.util.ArrayList;
import java.util.StringTokenizer;

import com.ciensUCV.Methontool.util.LeerConfig;

public class Glosario {
	private String id;
	private String nombre;
	private ArrayList <String> sinonimos;
	private ArrayList <String> acronimos;
	private String descripcion;
	private TipoGlosario tipoGlosario;
	public Glosario() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Glosario(String id, String nombre, ArrayList<String> sinonimos,
			ArrayList<String> acronimos, String descripcion,
			TipoGlosario tipoGlosario) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.sinonimos = sinonimos;
		this.acronimos = acronimos;
		this.descripcion = descripcion;
		this.tipoGlosario = tipoGlosario;
	}
	@Override
	public String toString() {
		return "Glosario [id=" + id + ", nombre=" + nombre + ", sinonimos="
				+ sinonimos + ", acronimos=" + acronimos + ", descripcion="
				+ descripcion + ", tipoGlosario=" + tipoGlosario + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public ArrayList<String> getSinonimos() {
		return sinonimos;
	}
	public void setSinonimos(ArrayList<String> sinonimos) {
		this.sinonimos = sinonimos;
	}
	public ArrayList<String> getAcronimos() {
		return acronimos;
	}
	public void setAcronimos(ArrayList<String> acronimos) {
		this.acronimos = acronimos;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public TipoGlosario getTipoGlosario() {
		return tipoGlosario;
	}
	public void setTipoGlosario(TipoGlosario tipoGlosario) {
		this.tipoGlosario = tipoGlosario;
	}
	
	public void sinonimosStringToArray(String entrada){
		this.sinonimos = new  ArrayList<String> ();
		if(entrada != null){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.sinonimos.add(token.nextToken());
			}
		}

	}
	public String sinonimosArrayToString(){
		String salida = "";
		if(sinonimos != null){
			for(int i = 0; i <sinonimos.size();i++ ){
				salida = salida + sinonimos.get(i);
				if(i != sinonimos.size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}	
	public void acronimosStringToArray(String entrada){
		this.acronimos = new  ArrayList<String> ();
		if(entrada != null){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.acronimos.add(token.nextToken());
			}
		}

	}
	public String acronimosArrayToString(){
		String salida = "";
		if(acronimos != null){
			for(int i = 0; i <acronimos.size();i++ ){
				salida = salida + acronimos.get(i);
				if(i != acronimos.size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}		
}
