package com.ciensUCV.Methontool.rest.model;


public class ElementoMensaje<T>  extends MensajeBase{
	private T elemento ;

	public ElementoMensaje(T elemento) {
		super();
		this.elemento = elemento;
	}

	public ElementoMensaje() {
		super();
		// TODO Auto-generated constructor stub
	}

	public T getElemento() {
		return elemento;
	}

	public void setElemento(T elemento) {
		this.elemento = elemento;
	}

	@Override
	public String toString() {
		return "elementoMensaje [elemento=" + elemento + "]";
	}
	
	
}
