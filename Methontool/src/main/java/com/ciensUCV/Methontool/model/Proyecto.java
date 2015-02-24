/**
 * 
 */
package com.ciensUCV.Methontool.model;

import java.util.ArrayList;
import java.util.Date;

/**
 * @author mitchell
 *
 */
public class Proyecto {
	private int idProyecto;
	private String nombre;
	private String fuenteConocimiento;
	private String dominio;
	private String proposito;
	private String alcance;
	private ArrayList<String> preguntasCompetencia;
	private NivelFormalidad nivelFormalidad;
	private Date fecha;
	private String separador = "\\/";
	public Proyecto() {
		super();
		this.preguntasCompetencia = new  ArrayList<String> ();
		this.nivelFormalidad = new NivelFormalidad();
		// TODO Auto-generated constructor stub
	}
	public Proyecto(int idProyecto, String nombre, String fuenteConocimiento,
			String dominio, String proposito, String alcance,
			ArrayList<String> preguntasCompetencia, NivelFormalidad nivelFormalidad,
			Date fecha) {
		super();
		this.preguntasCompetencia = new  ArrayList<String> ();
		this.idProyecto = idProyecto;
		this.nombre = nombre;
		this.fuenteConocimiento = fuenteConocimiento;
		this.dominio = dominio;
		this.proposito = proposito;
		this.alcance = alcance;
		this.preguntasCompetencia = preguntasCompetencia;
		this.nivelFormalidad = nivelFormalidad;
		this.fecha = fecha;
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
	public ArrayList<String> getPreguntasCompetencia() {
		return preguntasCompetencia;
	}
	public void setPreguntasCompetencia(ArrayList<String> preguntasCompetencia) {
		this.preguntasCompetencia = preguntasCompetencia;
	}
	public NivelFormalidad getNivelFormalidad() {
		return nivelFormalidad;
	}
	public void setNivelFormalidad(NivelFormalidad nivelFormalidad) {
		this.nivelFormalidad = nivelFormalidad;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	@Override
	public String toString() {
		return "Proyecto [idProyecto=" + idProyecto + ", nombre=" + nombre
				+ ", fuenteConocimiento=" + fuenteConocimiento + ", dominio="
				+ dominio + ", proposito=" + proposito + ", alcance=" + alcance
				+ ", preguntasCompetencia=" + preguntasCompetencia.toString()
				+ ", nivelFormalidad=" + nivelFormalidad.toString() + ", fecha=" + fecha
				+ "]";
	}
	
	public void preguntasCompetenciaStringToArray(String entrada){
		this.preguntasCompetencia = new  ArrayList<String> ();
		String [] aux = entrada.split(this.separador);
		for (String auxS : aux){
			this.preguntasCompetencia.add(auxS);
		}
	}
	
	public String preguntasCompetenciaArrayToString(){
		String salida = "";
		for (String aux : preguntasCompetencia){
			salida = salida+aux+this.separador;
		}
		return salida;
	}
	
	
}
