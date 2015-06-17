package com.ciensUCV.Methontool.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ciensUCV.Methontool.model.Regla;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class ReglaRest {
	private static final Logger logger = LoggerFactory.getLogger(ReglaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/regla/{idGosarioRegla}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Regla> verRegla(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGosarioRegla") int idGosarioRegla
			){
		logger.trace("*** verRegla");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGosarioAxioma "+idGosarioRegla);
		
		
		return null;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/regla/{idGosarioRegla}", method = RequestMethod.PUT)
	public @ResponseBody ElementoMensaje<Regla> crearActualizarRegla(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGosarioRegla") int idGosarioRegla
	        ,@RequestParam(value = "expresion") String expresion
	        ,@RequestParam(value = "variables") String variables
	        ,@RequestParam(value = "atrbClase") String atrbClase
	        ,@RequestParam(value = "atrbInstancia") String atrbInstancia
	        ,@RequestParam(value = "concepto") String concepto
	        ,@RequestParam(value = "relacion") String relacion
			){
		logger.trace("*** crearActualizarAxioma");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGosarioRegla "+idGosarioRegla);
		logger.trace("expresion "+expresion);
		logger.trace("variables "+variables);
		logger.trace("atrbClase "+atrbClase);
		logger.trace("atrbInstancia "+atrbInstancia);
		logger.trace("concepto "+concepto);
		logger.trace("relacion "+relacion);
		
//		http://localhost:8080/Methontool/api/proyecto/1/regla/23?expresion=expresion&variables=variables&atrbClase=atrbClase&atrbInstancia=atrbInstancia&concepto=concepto&relacion=relacion
		return null;
	}
}
