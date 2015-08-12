package com.ciensUCV.Methontool.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class InstanciadaRest {
	private static final Logger logger = LoggerFactory.getLogger(InstanciadaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/instanciado/{idInstancia}", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<Instancia> verInstanciado(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idInstancia") int idInstancia
			){
		logger.trace("***verInstanciado");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idInstancia "+idInstancia);
		
		return null;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/instanciado", method = RequestMethod.POST)
	public @ResponseBody ElementosMensaje<Instancia> crearInstanciado(
			@PathVariable("idProyecto") int idProyecto
			){
		logger.trace("***crearInstanciado");
		logger.trace("idProyecto "+idProyecto);
		
		return null;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/instanciado/{idInstancia}", method = RequestMethod.PUT)
	public @ResponseBody ElementosMensaje<Instancia> actualizarInstanciado(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idInstancia") int idInstancia
			){
		logger.trace("***actualizarInstanciado");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idInstancia "+idInstancia);
		
		return null;
	}


}
