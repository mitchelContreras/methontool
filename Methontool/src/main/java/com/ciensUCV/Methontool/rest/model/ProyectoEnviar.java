package com.ciensUCV.Methontool.rest.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.model.Proyecto;

public class ProyectoEnviar {

	private int idProyecto;
	private String nombre;
	private NivelFormalidad nivelFormalidad;
	private String fecha;
	private String dominio;
	private String proposito;
	private String alcance;
	Map<String,String> fuenteConocimiento; 
	Map<String,String> preguntasCompetencia; 
	Map<String,String> desarrolladores; 
	
	ProyectoEnviar(Proyecto proyecto){
		fuenteConocimiento= new LinkedHashMap<String,String>(); 
		preguntasCompetencia= new LinkedHashMap<String,String>(); 
		desarrolladores= new LinkedHashMap<String,String>();
		
		idProyecto = proyecto.getIdProyecto();
		nombre = proyecto.getNombre();
		nivelFormalidad = proyecto.getNivelFormalidad();
		fecha = proyecto.getFecha().toString();
		dominio = proyecto.getDominio();
		proposito = proyecto.getProposito();
		alcance =proyecto.getAlcance();
		
		if(proyecto.getFuenteConocimiento() != null){
			for (String aux : proyecto.getFuenteConocimiento()){
				fuenteConocimiento.put(aux, aux);
			}
		}
		if(proyecto.getPreguntasCompetencia() != null){
			for (String aux : proyecto.getPreguntasCompetencia()){
				preguntasCompetencia.put(aux, aux);
			}
		}
		if(proyecto.getDesarrolladores() != null){
			for (String aux : proyecto.getDesarrolladores()){
				desarrolladores.put(aux, aux);
			}
		}
	}


}
