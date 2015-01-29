/**
 * 
 */
package com.ciensUCV.Methontool.model;

import java.util.Arrays;

/**
 * @author mitchell
 *
 */
public class proyecto {
	private int idProyecto;
	private String nombre;
	private String fuenteConocimiento;
	private String dominio;
	private String proposito;
	private String alcance;
	private String [] preguntasCompetencia;
	
	proyecto(){}
	
	public proyecto(int idProyecto, String nombre, String fuenteConocimiento,
			String dominio, String proposito, String alcance,
			String[] preguntasCompetencia) {
		super();
		this.idProyecto = idProyecto;
		this.nombre = nombre;
		this.fuenteConocimiento = fuenteConocimiento;
		this.dominio = dominio;
		this.proposito = proposito;
		this.alcance = alcance;
		this.preguntasCompetencia = preguntasCompetencia;
	}

	public int getIdProyecto() {
		return idProyecto;
	}
	public void setIdProyecto(int idProyecto) {
		this.idProyecto = idProyecto;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getFuenteConocimiento() {
		return fuenteConocimiento;
	}
	public void setFuenteConocimiento(String fuenteConocimiento) {
		this.fuenteConocimiento = fuenteConocimiento;
	}
	public String getDominio() {
		return dominio;
	}
	public void setDominio(String dominio) {
		this.dominio = dominio;
	}
	public String getProposito() {
		return proposito;
	}
	public void setProposito(String proposito) {
		this.proposito = proposito;
	}
	public String getAlcance() {
		return alcance;
	}
	public void setAlcance(String alcance) {
		this.alcance = alcance;
	}
	public String[] getPreguntasCompetencia() {
		return preguntasCompetencia;
	}
	public void setPreguntasCompetencia(String[] preguntasCompetencia) {
		this.preguntasCompetencia = preguntasCompetencia;
	}

	@Override
	public String toString() {
		return "proyecto [idProyecto=" + idProyecto + ", nombre=" + nombre
				+ ", fuenteConocimiento=" + fuenteConocimiento + ", dominio="
				+ dominio + ", proposito=" + proposito + ", alcance=" + alcance
				+ ", preguntasCompetencia="
				+ Arrays.toString(preguntasCompetencia) + "]";
	}
	
	public void StringToArrPreguntasCompetencia(String lista, String separador){
		preguntasCompetencia = lista.split(separador);
	}
	
}
