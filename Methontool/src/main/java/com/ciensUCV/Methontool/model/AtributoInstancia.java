package com.ciensUCV.Methontool.model;

import java.util.ArrayList;

public class AtributoInstancia {

	private int id;
	private int idGlosario;
	private int idGlosarioConcepto;
	private TipoDeDato tipoDeDato;
	private Medida medida;
	private String precision;
	private String rangoValores;
	private String cardinalidadMin;
	private String cardinalidadMax;
	private String value;
	private ArrayList<String> arrValue;
	
	
	public AtributoInstancia(int id, int idGlosario, int idGlosarioConcepto,
			TipoDeDato tipoDeDato, Medida medida, String precision,
			String rangoValores, String cardinalidadMin,
			String cardinalidadMax, String value) {
		super();
		this.id = id;
		this.idGlosario = idGlosario;
		this.idGlosarioConcepto = idGlosarioConcepto;
		this.tipoDeDato = tipoDeDato;
		this.medida = medida;
		this.precision = precision;
		this.rangoValores = rangoValores;
		this.cardinalidadMin = cardinalidadMin;
		this.cardinalidadMax = cardinalidadMax;
		this.value = value;
		arrValue = new ArrayList<String> ();
	}

	public AtributoInstancia() {
		super();
		// TODO Auto-generated constructor stub
		this.tipoDeDato = new TipoDeDato();
		this.medida = new Medida();
		arrValue = new ArrayList<String> ();
	}

	@Override
	public String toString() {
		return "AtributoInstancia [id=" + id + ", idGlosario=" + idGlosario
				+ ", idGlosarioConcepto=" + idGlosarioConcepto
				+ ", tipoDeDato=" + tipoDeDato + ", medida=" + medida
				+ ", precision=" + precision + ", rangoValores=" + rangoValores
				+ ", cardinalidadMin=" + cardinalidadMin + ", cardinalidadMax="
				+ cardinalidadMax + ", value=" + value + "]";
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getIdGlosario() {
		return idGlosario;
	}
	public void setIdGlosario(int idGlosario) {
		this.idGlosario = idGlosario;
	}
	public int getIdGlosarioConcepto() {
		return idGlosarioConcepto;
	}
	public void setIdGlosarioConcepto(int idGlosarioConcepto) {
		this.idGlosarioConcepto = idGlosarioConcepto;
	}
	public TipoDeDato getTipoDeDato() {
		return tipoDeDato;
	}
	public void setTipoDeDato(TipoDeDato tipoDeDato) {
		this.tipoDeDato = tipoDeDato;
	}
	public Medida getMedida() {
		return medida;
	}
	public void setMedida(Medida medida) {
		this.medida = medida;
	}
	public String getPrecision() {
		return precision;
	}
	public void setPrecision(String precision) {
		this.precision = precision;
	}
	public String getRangoValores() {
		return rangoValores;
	}
	public void setRangoValores(String rangoValores) {
		this.rangoValores = rangoValores;
	}
	public String getCardinalidadMin() {
		return cardinalidadMin;
	}
	public void setCardinalidadMin(String cardinalidadMin) {
		this.cardinalidadMin = cardinalidadMin;
	}
	public String getCardinalidadMax() {
		return cardinalidadMax;
	}
	public void setCardinalidadMax(String cardinalidadMax) {
		this.cardinalidadMax = cardinalidadMax;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}

}
