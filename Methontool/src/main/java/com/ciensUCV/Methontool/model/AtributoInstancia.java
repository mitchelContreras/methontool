package com.ciensUCV.Methontool.model;

public class AtributoInstancia {

	private int id;
	private int idGlosario;
	private int idGlosarioRelacion;
	private TipoDeDato tipoDeDato;
	private Medida medida;
	private String precision;
	private String rangoValores;
	private String cardinalidadMin;
	private String cardinalidadMax;
	private String value;
	
	
	public AtributoInstancia(int id, int idGlosario, int idGlosarioRelacion,
			TipoDeDato tipoDeDato, Medida medida, String precision,
			String rangoValores, String cardinalidadMin,
			String cardinalidadMax, String value) {
		super();
		this.id = id;
		this.idGlosario = idGlosario;
		this.idGlosarioRelacion = idGlosarioRelacion;
		this.tipoDeDato = tipoDeDato;
		this.medida = medida;
		this.precision = precision;
		this.rangoValores = rangoValores;
		this.cardinalidadMin = cardinalidadMin;
		this.cardinalidadMax = cardinalidadMax;
		this.value = value;
	}

	public AtributoInstancia() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "AtributoInstancia [id=" + id + ", idGlosario=" + idGlosario
				+ ", idGlosarioRelacion=" + idGlosarioRelacion
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

	public int getIdGlosarioRelacion() {
		return idGlosarioRelacion;
	}

	public void setIdGlosarioRelacion(int idGlosarioRelacion) {
		this.idGlosarioRelacion = idGlosarioRelacion;
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
