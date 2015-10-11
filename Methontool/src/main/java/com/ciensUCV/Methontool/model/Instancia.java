package com.ciensUCV.Methontool.model;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.Arrays;
import java.lang.reflect.Type;

import org.postgresql.util.PGobject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.dao.InstanciaDAO;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

public class Instancia {

	private int id;
	private int idGlosario;
	private int idGlosarioConceptoRelacion;
	private ArrayList<AtributoInstanciaDesarrollo> definicion;

	
	private static final Logger logger = LoggerFactory.getLogger(Instancia.class);
	
	public Instancia() {
		super();
		// TODO Auto-generated constructor stub
		definicion = new ArrayList<AtributoInstanciaDesarrollo> ();
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

	public int getIdGlosarioConceptoRelacion() {
		return idGlosarioConceptoRelacion;
	}

	public void setIdGlosarioConceptoRelacion(int idGlosarioConceptoRelacion) {
		this.idGlosarioConceptoRelacion = idGlosarioConceptoRelacion;
	}

	public ArrayList<AtributoInstanciaDesarrollo> getDefinicion() {
		return definicion;
	}

	public void setDefinicion(ArrayList<AtributoInstanciaDesarrollo> definicion) {
		this.definicion = definicion;
	}
	public void setDefinicion(JsonArray definicion) {	
//		new Gson().fromJson(jsonArray, AtributoInstanciaDesarrollo[].class
		this.definicion = new ArrayList<AtributoInstanciaDesarrollo>(Arrays.asList(new Gson().fromJson(definicion, AtributoInstanciaDesarrollo[].class)));
		logger.debug("this.definicion.size() "+this.definicion.size());
	}

	public void setDefinicion(String definion){
		this.definicion = (ArrayList<AtributoInstanciaDesarrollo>) fromJson(definion,
                new TypeToken<ArrayList<AtributoInstanciaDesarrollo>>() {
                }.getType());

	}

	private Object fromJson(String jsonString, Type type) {
	    return new Gson().fromJson(jsonString, type);
	}
	
	@Override
	public String toString() {
		return "Instancia [id=" + id + ", idGlosario=" + idGlosario
				+ ", idGlosarioConceptoRelacion=" + idGlosarioConceptoRelacion
				+ ", definicion=" + definicion + "]";
	}
	
	private ArrayList<AtributoInstanciaDesarrollo> listarAtributoInstanciaDadoIdGlosarioConcepto (int idGlosarioConcepto){
		ApplicationContext context = 
				new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);		
		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		
    	ArrayList<AtributoInstancia> listaAtributoInstancia = new ArrayList<AtributoInstancia> ();
    	ArrayList<AtributoInstanciaDesarrollo> addListaAtributoInstancia = new ArrayList<AtributoInstanciaDesarrollo> (); 
    	listaAtributoInstancia = atributoInstanciaDAO.listarAtributoInstanciaDadoIdGlosarioConcepto(idGlosarioConcepto);
		for(AtributoInstancia aux : listaAtributoInstancia){
			Glosario glosario = glosarioDAO.verGlosario(aux.getIdGlosario());
			AtributoInstanciaDesarrollo auxAtributoInstanciaDesarrollo = new AtributoInstanciaDesarrollo();
			
			auxAtributoInstanciaDesarrollo.setId(aux.getId());
			auxAtributoInstanciaDesarrollo.setIdGlosario(aux.getIdGlosario());
			auxAtributoInstanciaDesarrollo.setPrecision(aux.getPrecision());
			auxAtributoInstanciaDesarrollo.setRangoValores(aux.getRangoValores());
			auxAtributoInstanciaDesarrollo.setCardinalidadMinima(aux.getCardinalidadMin());
			auxAtributoInstanciaDesarrollo.setCardinaliadMaxima(aux.getCardinalidadMax());
			auxAtributoInstanciaDesarrollo.setNombre(glosario.getNombre());
			auxAtributoInstanciaDesarrollo.setDescripcion(glosario.getDescripcion());
			auxAtributoInstanciaDesarrollo.getValores().add(aux.getValue());
			addListaAtributoInstancia.add(auxAtributoInstanciaDesarrollo);
			
		}
		
		return addListaAtributoInstancia;
	}
	
	private ArrayList<AtributoInstanciaDesarrollo> elementosEnANoB (ArrayList<AtributoInstanciaDesarrollo> arrayA, ArrayList<AtributoInstanciaDesarrollo> arrayB){
		ArrayList<AtributoInstanciaDesarrollo> salida = new ArrayList<AtributoInstanciaDesarrollo>();
		
		for (AtributoInstanciaDesarrollo aux1  : arrayA){
			
		}
		return salida;
	}
	
	private void actualizarValoresAtrbInstanciaEliminarNoExisteAgregarNuevos(ArrayList<AtributoInstanciaDesarrollo> listaActualAtributoInstancia){
		
		boolean encontre;
//		Actualizo
		ArrayList<AtributoInstanciaDesarrollo> listaEliminar = new ArrayList<AtributoInstanciaDesarrollo> ();
		logger.debug("size antes "+this.definicion.size()+" ");
		for(AtributoInstanciaDesarrollo aux1 : this.definicion){
			encontre = false;
			for(int i=0;i<listaActualAtributoInstancia.size();i++){
				if(aux1.getId() == listaActualAtributoInstancia.get(i).getId()){
					aux1.copyElement(listaActualAtributoInstancia.get(i));
					encontre = true;
					break;
				}
			}
			if(!encontre){
				logger.debug("Elimine a "+aux1.toString());
				listaEliminar.add(aux1);
			}
		}
		logger.debug("luego de cambiar this.definicion "+this.definicion.toString());
//		Elimino
		for(AtributoInstanciaDesarrollo aux2 : listaEliminar){
			this.definicion.remove(aux2);
		}
		logger.debug("size despues eliminar "+this.definicion.size());
//		Agregar los nuevos AtributoInstancia
		
		boolean noEsta;
		for (AtributoInstanciaDesarrollo aux1 : listaActualAtributoInstancia){
			noEsta = true;
			for (AtributoInstanciaDesarrollo aux2 : this.definicion){
				if(aux1.getId() == aux2.getId()){
					noEsta = false;
				}
			}
			if(noEsta){
				logger.debug("voy a agregar "+aux1.toString());
				this.definicion.add(aux1);
			}
		}
		logger.debug("size despues agregar "+this.definicion.size()+" quedo asi "+this.definicion.toString());
		
	}
	
	public void actualizarAtributoInstancia(){
		logger.debug("this.idGlosarioConceptoRelacion "+this.idGlosarioConceptoRelacion);
		if(this.idGlosarioConceptoRelacion != 0){
    		ArrayList<AtributoInstanciaDesarrollo> listaActualAtributoInstancia = listarAtributoInstanciaDadoIdGlosarioConcepto(this.idGlosarioConceptoRelacion);
    		
    		logger.debug("listaActualAtributoInstancia.size() "+listaActualAtributoInstancia.size()+" listarAtributoInstanciaDadoIdGlosarioConcepto "+listaActualAtributoInstancia.toString());
    		if(this.definicion.size() == 0){
    			this.definicion = listaActualAtributoInstancia;
    		}else{
    			actualizarValoresAtrbInstanciaEliminarNoExisteAgregarNuevos(listaActualAtributoInstancia);
    		}
    		
    		ApplicationContext context = 
    				new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);		
    		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
    		instanciaDAO.actualizarInstancia(this);
    	}
	}


	public String definicionToJsonString(){
		String salida = null;
		Gson gson = new GsonBuilder().create();
		salida = gson.toJson(this.definicion);
		return salida;
	}

	

}
