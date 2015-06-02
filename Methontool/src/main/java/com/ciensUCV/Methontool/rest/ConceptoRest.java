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

import com.ciensUCV.Methontool.model.Concepto;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class ConceptoRest {

	private static final Logger logger = LoggerFactory.getLogger(ConceptoRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/concepto/{idGlosarioConcepto}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Concepto> verConcepto(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioConcepto") int idGlosarioConcepto){
		
		ElementoMensaje<Concepto> elementoMensaje = new ElementoMensaje<Concepto> ();
		logger.trace("*** verConcepto ");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGlosarioConcepto "+idGlosarioConcepto);
		
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/concepto/{idGlosarioConcepto}", method = RequestMethod.POST)
	public @ResponseBody ElementoMensaje<Concepto> actualizarConcepto(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioConcepto") int idGlosarioConcepto
			,@RequestParam(value = "listInstancia") String listInstancia
	        ,@RequestParam(value = "listAtrbInstancia") String listAtrbInstancia
	        ,@RequestParam(value = "listAtrbClase") String listAtrbClase){
		
		ElementoMensaje<Concepto> elementoMensaje = new ElementoMensaje<Concepto> ();
		logger.trace("***actualizarConcepto ");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGlosarioConcepto "+idGlosarioConcepto);
		logger.trace("listInstancia "+listInstancia);
		logger.trace("listAtrbInstancia "+listAtrbInstancia);
		logger.trace("listAtrbClase "+listAtrbClase);
		
		return elementoMensaje;
	}	
}
