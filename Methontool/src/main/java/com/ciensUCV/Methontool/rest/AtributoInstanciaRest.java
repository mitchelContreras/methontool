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

import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class AtributoInstanciaRest {
	private static final Logger logger = LoggerFactory.getLogger(AtributoInstanciaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoInstancia", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<AtributoInstancia> listarAtributoInstanciaSinConceptoAsociado(
			@PathVariable("idProyecto") int idProyecto
			){
		logger.trace("***listarAtributoInstanciaSinConceptoAsociado");
		logger.trace("el idProyecto es "+idProyecto);
		
		ElementosMensaje<AtributoInstancia> elementosMensaje = new ElementosMensaje<AtributoInstancia> ();
		
		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
		elementosMensaje.setElementos(atributoInstanciaDAO.listarAtributoInstanciaSinConceptoAsociado(idProyecto));
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoInstancia/{idGlosarioAtributo}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<AtributoInstancia> verAtributoInstancia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAtributo") int idGlosarioAtributo
			){
		logger.trace("***verAtributoInstancia");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioAtributo es "+idGlosarioAtributo);
		
		ElementoMensaje<AtributoInstancia> elementoMensaje = new ElementoMensaje<AtributoInstancia> ();
		
		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
		elementoMensaje.setElemento(atributoInstanciaDAO.verAtributoInstancia(idProyecto, idGlosarioAtributo));
		elementoMensaje.setSucces(true);
		return elementoMensaje;
	}

}
