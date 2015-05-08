package com.ciensUCV.Methontool.model;

import java.util.ArrayList;

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
	
	
	
	
}
