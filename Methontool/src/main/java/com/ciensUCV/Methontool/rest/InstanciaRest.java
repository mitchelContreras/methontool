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

import com.ciensUCV.Methontool.dao.AtributoClaseDAO;
import com.ciensUCV.Methontool.dao.InstanciaDAO;
import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class InstanciaRest {
	private static final Logger logger = LoggerFactory.getLogger(InstanciaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/proyecto/{idProyecto}/instancia", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<Instancia> listarInstanciaSinConceptoAsociado(
			@PathVariable("idProyecto") int idProyecto
			){
		logger.trace("***listarInstanciaSinConceptoAsociado");
		logger.trace("el idProyecto es "+idProyecto);
		
		ElementosMensaje<Instancia> elementosMensaje = new ElementosMensaje<Instancia> ();
		
		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
		elementosMensaje.setElementos(instanciaDAO.listarInstanciaSinConceptoAsociado(idProyecto));
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/instancia/{idInstancia}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Instancia> verInstancia(
			@PathVariable("idProyecto") int idProyecto,
			@PathVariable("idInstancia") int idInstancia
			){
		logger.trace("verInstancia");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idInstancia "+idInstancia);
		ElementoMensaje<Instancia> elementoMensaje = null;
		return elementoMensaje;
	}

	
}
