package com.ciensUCV.Methontool.model;

import java.util.ArrayList;

public class Glosario {
	private String id;
	private ArrayList <Glosario> sinonimos;
	private String acronimos;
	private String descripcion;
	private TipoGlosario tipoGlosario;
	private String idRelacion;
	private String idConcepto;
	private String idAtributoInstancia;
	private String idAtributoClase;
	private String idConstante;
	private String idAxiomaFormal;
	private String idRegla;
	private String idInstancia;
	private String nombre;
	
	public Glosario(String id, ArrayList<Glosario> sinonimos, String acronimos,
			String descripcion, TipoGlosario tipoGlosario, String idRelacion,
			String idConcepto, String idAtributoInstancia,
			String idAtributoClase, String idConstante, String idAxiomaFormal,
			String idRegla, String idInstancia, String nombre) {
		super();
		this.id = id;
		this.sinonimos = sinonimos;
		this.acronimos = acronimos;
		this.descripcion = descripcion;
		this.tipoGlosario = tipoGlosario;
		this.idRelacion = idRelacion;
		this.idConcepto = idConcepto;
		this.idAtributoInstancia = idAtributoInstancia;
		this.idAtributoClase = idAtributoClase;
		this.idConstante = idConstante;
		this.idAxiomaFormal = idAxiomaFormal;
		this.idRegla = idRegla;
		this.idInstancia = idInstancia;
		this.nombre = nombre;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Glosario() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Glosario(String id, ArrayList<Glosario> sinonimos, String acronimos,
			String descripcion, TipoGlosario tipoGlosario, String idRelacion,
			String idConcepto, String idAtributoInstancia,
			String idAtributoClase, String idConstante, String idAxiomaFormal,
			String idRegla, String idInstancia) {
		super();
		this.id = id;
		this.sinonimos = sinonimos;
		this.acronimos = acronimos;
		this.descripcion = descripcion;
		this.tipoGlosario = tipoGlosario;
		this.idRelacion = idRelacion;
		this.idConcepto = idConcepto;
		this.idAtributoInstancia = idAtributoInstancia;
		this.idAtributoClase = idAtributoClase;
		this.idConstante = idConstante;
		this.idAxiomaFormal = idAxiomaFormal;
		this.idRegla = idRegla;
		this.idInstancia = idInstancia;
	}
	@Override
	public String toString() {
		return "Glosario [id=" + id + ", sinonimos=" + sinonimos
				+ ", acronimos=" + acronimos + ", descripcion=" + descripcion
				+ ", tipoGlosario=" + tipoGlosario + ", idRelacion="
				+ idRelacion + ", idConcepto=" + idConcepto
				+ ", idAtributoInstancia=" + idAtributoInstancia
				+ ", idAtributoClase=" + idAtributoClase + ", idConstante="
				+ idConstante + ", idAxiomaFormal=" + idAxiomaFormal
				+ ", idRegla=" + idRegla + ", idInstancia=" + idInstancia
				+ ", nombre=" + nombre + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public ArrayList<Glosario> getSinonimos() {
		return sinonimos;
	}
	public void setSinonimos(ArrayList<Glosario> sinonimos) {
		this.sinonimos = sinonimos;
	}
	public String getAcronimos() {
		return acronimos;
	}
	public void setAcronimos(String acronimos) {
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
	public String getIdRelacion() {
		return idRelacion;
	}
	public void setIdRelacion(String idRelacion) {
		this.idRelacion = idRelacion;
	}
	public String getIdConcepto() {
		return idConcepto;
	}
	public void setIdConcepto(String idConcepto) {
		this.idConcepto = idConcepto;
	}
	public String getIdAtributoInstancia() {
		return idAtributoInstancia;
	}
	public void setIdAtributoInstancia(String idAtributoInstancia) {
		this.idAtributoInstancia = idAtributoInstancia;
	}
	public String getIdAtributoClase() {
		return idAtributoClase;
	}
	public void setIdAtributoClase(String idAtributoClase) {
		this.idAtributoClase = idAtributoClase;
	}
	public String getIdConstante() {
		return idConstante;
	}
	public void setIdConstante(String idConstante) {
		this.idConstante = idConstante;
	}
	public String getIdAxiomaFormal() {
		return idAxiomaFormal;
	}
	public void setIdAxiomaFormal(String idAxiomaFormal) {
		this.idAxiomaFormal = idAxiomaFormal;
	}
	public String getIdRegla() {
		return idRegla;
	}
	public void setIdRegla(String idRegla) {
		this.idRegla = idRegla;
	}
	public String getIdInstancia() {
		return idInstancia;
	}
	public void setIdInstancia(String idInstancia) {
		this.idInstancia = idInstancia;
	}
	
	
}
