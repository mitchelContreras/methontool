package com.ciensUCV.Methontool.model;

public class AtributoClase {

	private int id;
	private int idGlosario;
	private int idGlosarioConcepto;
	private TipoDeDato tipoDeDato;
	private String value;
	private String precision;
	private String rangoValores;
	private String cardinalidadMin;
	private String cardinalidadMax;
	
	public AtributoClase() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AtributoClase(int id, int idGlosario, int idGlosarioConcepto,
			TipoDeDato tipoDeDato, String value, String precision,
			String rangoValores, String cardinalidadMin, String cardinalidadMax) {
		super();
		this.id = id;
		this.idGlosario = idGlosario;
		this.idGlosarioConcepto = idGlosarioConcepto;
		this.tipoDeDato = tipoDeDato;
		this.value = value;
		this.precision = precision;
		this.rangoValores = rangoValores;
		this.cardinalidadMin = cardinalidadMin;
		this.cardinalidadMax = cardinalidadMax;
	}

	@Override
	public String toString() {
		return "AtributoClase [id=" + id + ", idGlosario=" + idGlosario
				+ ", idGlosarioConcepto=" + idGlosarioConcepto
				+ ", tipoDeDato=" + tipoDeDato + ", value=" + value
				+ ", precision=" + precision + ", rangoValores=" + rangoValores
				+ ", cardinalidadMin=" + cardinalidadMin + ", cardinalidadMax="
				+ cardinalidadMax + "]";
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

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
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
	
	
	
}
