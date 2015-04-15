package com.ciensUCV.Methontool.rest.model;

import java.util.ArrayList;


public class ElementosMensaje<T>  extends MensajeBase{
	private ArrayList<T> elementos;

	public ArrayList<T> getElementos() {
		return elementos;
	}

	public void setElementos(ArrayList<T> elementos) {
		this.elementos = elementos;
	}

	public ElementosMensaje(ArrayList<T> elementos) {
		super();
		this.elementos = elementos;
	}

	public ElementosMensaje() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "elementosMensaje [elementos=" + elementos.toString() + "]";
	}
}
