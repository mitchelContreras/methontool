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

import com.ciensUCV.Methontool.dao.AtributoClaseDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class AtributoClaseRest {
	private static final Logger logger = LoggerFactory.getLogger(AtributoClaseRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoClase", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<AtributoClase> listarAtributoClaseSinConceptoAsociado(
			@PathVariable("idProyecto") int idProyecto
			){
		logger.trace("***listarAtributoClaseSinConceptoAsociado");
		logger.trace("el idProyecto es "+idProyecto);
		
		ElementosMensaje<AtributoClase> elementosMensaje = new ElementosMensaje<AtributoClase> ();
		
		AtributoClaseDAO atributoClaseDAO = (AtributoClaseDAO) context.getBean("atributoClaseDAO");
		elementosMensaje.setElementos(atributoClaseDAO.listarAtributoClaseSinConceptoAsociado(idProyecto));
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoClase/{idGlosarioAtributo}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<AtributoClase> verAtributoInstancia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAtributo") int idGlosarioAtributo
			){
		logger.trace("***verAtributoInstancia");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioAtributo es "+idGlosarioAtributo);
		
		ElementoMensaje<AtributoClase> elementoMensaje = new ElementoMensaje<AtributoClase> ();
		
		AtributoClaseDAO atributoClaseDAO = (AtributoClaseDAO) context.getBean("atributoClaseDAO");
		elementoMensaje.setElemento(atributoClaseDAO.verAtributoClase(idProyecto, idGlosarioAtributo));
		elementoMensaje.setSucces(true);
		return elementoMensaje;
	}

}
