/**
 * 
 */
package com.ciensUCV.Methontool.rest.model;

import java.util.ArrayList;

/**
 * @author mitchell
 *
 */
public class MensajeBase {
	private boolean succes;
	private ArrayList<ErrorEnviar> listaError;
	
	
	public boolean isSucces() {
		return succes;
	}
	public void setSucces(boolean succes) {
		this.succes = succes;
	}
	public ArrayList<ErrorEnviar> getListaError() {
		return listaError;
	}
	public void setListaError(ArrayList<ErrorEnviar> listaError) {
		this.listaError = listaError;
	}
	public MensajeBase() {
		super();
		// TODO Auto-generated constructor stub
		this.succes = false;
		this.listaError = new ArrayList<ErrorEnviar>();
	}
	@Override
	public String toString() {
		return "MensajeBase [succes=" + succes + ", listaError=" + listaError
				+ "]";
	}
	
	
}
