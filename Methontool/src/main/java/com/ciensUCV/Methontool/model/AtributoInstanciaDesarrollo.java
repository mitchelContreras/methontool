package com.ciensUCV.Methontool.model;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

public class AtributoInstanciaDesarrollo {

	private int id;
	private int idGlosario;
	private String precision;
	private String rangoValores;
	private String cardinalidadMinima;
	private String cardinaliadMaxima;
	private String nombre;
	private String descripcion;
	private ArrayList <String> valores;
	
	private static final Logger logger = LoggerFactory.getLogger(AtributoInstanciaDesarrollo.class);
	
	public AtributoInstanciaDesarrollo (){
		this.valores = new ArrayList <String> ();
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
	public String getCardinalidadMinima() {
		return cardinalidadMinima;
	}
	public void setCardinalidadMinima(String cardinalidadMinima) {
		this.cardinalidadMinima = cardinalidadMinima;
	}
	public String getCardinaliadMaxima() {
		return cardinaliadMaxima;
	}
	public void setCardinaliadMaxima(String cardinaliadMaxima) {
		this.cardinaliadMaxima = cardinaliadMaxima;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public ArrayList<String> getValores() {
		return valores;
	}
	public String getValoresJsonString(){	
		JsonArray jArray = new JsonArray();
		
		Gson gson = new Gson();
		JsonElement element = gson.toJsonTree(this.valores, new TypeToken<List<String>>() {}.getType());
		JsonArray jsonArray = element.getAsJsonArray();
		
		return jsonArray.toString();
	}	
	public void setValores(ArrayList<String> valores) {
		this.valores = valores;
	}
	public void setValores(String valores) {
		JsonParser parser = new JsonParser();
		JsonElement tradeElement = parser.parse(valores);
		JsonArray trade = tradeElement.getAsJsonArray();
		if (trade != null) { 
		   for (int i=0;i<trade.size();i++){ 
		    this.valores.add(trade.get(i).toString());
		   } 
		} 
	}
	@Override
	public String toString() {
		return "AtributoInstanciaDesarrollo [id=" + id + ", idGlosario="
				+ idGlosario + ", precision=" + precision + ", rangoValores="
				+ rangoValores + ", cardinalidadMinima=" + cardinalidadMinima
				+ ", cardinaliadMaxima=" + cardinaliadMaxima + ", nombre="
				+ nombre + ", descripcion=" + descripcion + ", valores="
				+ valores + "]";
	}
	
	public void copyElement (AtributoInstanciaDesarrollo entrada){
		this.id = entrada.getId();
		this.idGlosario = entrada.idGlosario;
		this.precision = entrada.getPrecision();
		this.rangoValores = entrada.getRangoValores();
		this.cardinalidadMinima = entrada.getCardinalidadMinima();
		this.cardinaliadMaxima = entrada.getCardinaliadMaxima();
		this.nombre = entrada.getNombre();
		this.descripcion = entrada.getDescripcion();
		this.valores = cloneList(entrada.getValores());		
	}
	
	private ArrayList <String> cloneList(ArrayList <String> list) {
		logger.debug("entrada en Clone "+list.toString());
		logger.debug("this.valores actual "+this.valores);
		
		ArrayList <String>  clone = new ArrayList <String> (list.size());
		if(this.valores.size() == 0){
		    for(String item: list){
		    	clone.add(item);
		    }
		}else{
			clone = this.valores;
		}
		

	    return clone;
	}
	
}
