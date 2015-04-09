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
	private ArrayList<String> fuenteConocimiento;
	private String dominio;
	private String proposito;
	private String alcance;
	private ArrayList<String> preguntasCompetencia;
	private ArrayList<String> desarrolladores;
	private NivelFormalidad nivelFormalidad;
	private Date fecha;
	private String separador = "-||-";
	public Proyecto() {
		super();
		this.preguntasCompetencia = new  ArrayList<String> ();
		this.fuenteConocimiento = new  ArrayList<String> ();
		this.desarrolladores = new  ArrayList<String> ();
		this.nivelFormalidad = new NivelFormalidad();
		// TODO Auto-generated constructor stub
	}
	public Proyecto(int idProyecto, String nombre,
			ArrayList<String> fuenteConocimiento, String dominio,
			String proposito, String alcance,
			ArrayList<String> preguntasCompetencia,
			ArrayList<String> desarrolladores, NivelFormalidad nivelFormalidad,
			Date fecha, String separador) {
		super();
		this.idProyecto = idProyecto;
		this.nombre = nombre;
		this.fuenteConocimiento = fuenteConocimiento;
		this.dominio = dominio;
		this.proposito = proposito;
		this.alcance = alcance;
		this.preguntasCompetencia = preguntasCompetencia;
		this.desarrolladores = desarrolladores;
		this.nivelFormalidad = nivelFormalidad;
		this.fecha = fecha;
		this.separador = separador;
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
	public ArrayList<String> getFuenteConocimiento() {
		return fuenteConocimiento;
	}
	public void setFuenteConocimiento(ArrayList<String> fuenteConocimiento) {
		this.fuenteConocimiento = fuenteConocimiento;
	}
	public ArrayList<String> getDesarrolladores() {
		return desarrolladores;
	}
	public void setDesarrolladores(ArrayList<String> desarrolladores) {
		this.desarrolladores = desarrolladores;
	}
	public String getSeparador() {
		return separador;
	}
	public void setSeparador(String separador) {
		this.separador = separador;
	}
	@Override
	public String toString() {
		return "Proyecto [idProyecto=" + idProyecto + ", nombre=" + nombre
				+ ", fuenteConocimiento=" + fuenteConocimiento + ", dominio="
				+ dominio + ", proposito=" + proposito + ", alcance=" + alcance
				+ ", preguntasCompetencia=" + preguntasCompetencia
				+ ", desarrolladores=" + desarrolladores + ", nivelFormalidad="
				+ nivelFormalidad + ", fecha=" + fecha + ", separador="
				+ separador + "]";
	}
	
	public void preguntasCompetenciaStringToArray(String entrada){
		this.preguntasCompetencia = new  ArrayList<String> ();
		if(entrada != null){
			String [] aux = entrada.split(this.separador);
			for (String auxS : aux){
				this.preguntasCompetencia.add(auxS);
			}
		}
	}
	
	public String preguntasCompetenciaArrayToString(){
		String salida = "";
		if (preguntasCompetencia != null){
			for (String aux : preguntasCompetencia){
				salida = salida+aux+this.separador;
			}
		}
		return salida;
	}
	public void desarrolladoresStringToArray(String entrada){
		this.desarrolladores = new  ArrayList<String> ();
		if (entrada != null){
			String [] aux = entrada.split(this.separador);
			for (String auxS : aux){
				this.desarrolladores.add(auxS);
			}
		}
	}
	
	public String desarrolladoresArrayToString(){
		String salida = "";
		if(desarrolladores != null){
			for (String aux : desarrolladores){
				salida = salida+aux+this.separador;
			}
		}
		return salida;
	}
	public void fuenteConocimientoStringToArray(String entrada){
		this.fuenteConocimiento = new  ArrayList<String> ();
		if(entrada != null){
			String [] aux = entrada.split(this.separador);
			for (String auxS : aux){
				this.fuenteConocimiento.add(auxS);
			}
		}

	}
	
	public String fuenteConocimientoArrayToString(){
		String salida = "";
		if(fuenteConocimiento != null){
			for (String aux : fuenteConocimiento){
				salida = salida+aux+this.separador;
			}
		}
		return salida;
	}	
	
	
}
