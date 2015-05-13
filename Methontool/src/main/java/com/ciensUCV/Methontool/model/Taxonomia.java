package com.ciensUCV.Methontool.model;

import java.util.ArrayList;
import java.util.StringTokenizer;

import com.ciensUCV.Methontool.util.LeerConfig;
import com.ciensUCV.Methontool.util.TwoDimentionalArrayList;

public class Taxonomia {
	
	private int conceptoOrigen;
	private TwoDimentionalArrayList<Integer> conceptosDestino;
	private ArrayList<String> relaciones;
	
	public Taxonomia() {
		super();
		// TODO Auto-generated constructor stub
		relaciones = new ArrayList<String>();
		conceptosDestino = new TwoDimentionalArrayList<Integer>();
		conceptosDestino.add(new ArrayList<Integer>());
		conceptosDestino.add(new ArrayList<Integer>());
		conceptosDestino.add(new ArrayList<Integer>());
		conceptosDestino.add(new ArrayList<Integer>());
		
		relaciones.add("desDisjunta");
		relaciones.add("desExhaustiva");
		relaciones.add("particion");
		relaciones.add("subClase");
	}

	public Taxonomia(int conceptoOrigen,
			TwoDimentionalArrayList<Integer> conceptosDestino,
			ArrayList<String> relaciones) {
		super();
		this.conceptoOrigen = conceptoOrigen;
		this.conceptosDestino = conceptosDestino;
		this.relaciones = relaciones;
	}

	@Override
	public String toString() {
		return "Taxonomia [conceptoOrigen=" + conceptoOrigen
				+ ", conceptosDestino=" + conceptosDestino + ", relaciones="
				+ relaciones + "]";
	}

	public int getConceptoOrigen() {
		return conceptoOrigen;
	}

	public void setConceptoOrigen(int conceptoOrigen) {
		this.conceptoOrigen = conceptoOrigen;
	}

	public TwoDimentionalArrayList<Integer> getConceptosDestino() {
		return conceptosDestino;
	}

	public void setConceptosDestino(
			TwoDimentionalArrayList<Integer> conceptosDestino) {
		this.conceptosDestino = conceptosDestino;
	}

	public ArrayList<String> getRelaciones() {
		return relaciones;
	}

	public void setRelaciones(ArrayList<String> relaciones) {
		this.relaciones = relaciones;
	}
	public void stringToArray(String entrada, int lista){
		if(entrada != null && entrada != ""){
			StringTokenizer token = new StringTokenizer(entrada, LeerConfig.obtenerPropiedad("variable.separadorString"));
			while(token.hasMoreTokens()){
				this.conceptosDestino.addToInnerArray(lista, Integer.parseInt(token.nextToken()));
			}
		}
	}
	public String arrayToString(int lista){
		String salida = "";
		if(conceptosDestino.get(lista) != null){
			for(int i = 0; i < conceptosDestino.get(lista).size();i++ ){
				salida = salida + conceptosDestino.get(lista).get(i);
				if(i != conceptosDestino.get(lista).size()-1){
					salida = salida+LeerConfig.obtenerPropiedad("variable.separadorString");
				}
			}
		}
		return salida;
	}
	
	
	
	
}
