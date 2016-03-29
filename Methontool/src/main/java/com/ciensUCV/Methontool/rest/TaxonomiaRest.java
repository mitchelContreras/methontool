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

import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class TaxonomiaRest {
	private static final Logger logger = LoggerFactory.getLogger(TaxonomiaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/taxonomia/{idGlosarioOrigen}", method = RequestMethod.POST)
	public @ResponseBody ElementoMensaje<Taxonomia> actualizarTaxonomia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioOrigen") int idGlosarioOrigen
			,@RequestParam(value = "desDisjunta") String desDisjunta
	        ,@RequestParam(value = "desExhaustiva") String desExhaustiva
	        ,@RequestParam(value = "particion") String particion
	        ,@RequestParam(value = "subClase") String subClase
			){
		logger.trace("***actualizar taxonomia");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioOrigen es "+idGlosarioOrigen);
		logger.trace("desDisjunta "+desDisjunta);
		logger.trace("desExhaustiva "+desExhaustiva);
		logger.trace("particion "+particion);
		logger.trace("subClase "+subClase);
		
		ElementoMensaje<Taxonomia> elementoMensaje = new ElementoMensaje<Taxonomia> ();
		elementoMensaje.setElemento(new Taxonomia());
		elementoMensaje.getElemento().setConceptoOrigen(idGlosarioOrigen);
		elementoMensaje.getElemento().stringToArray(desDisjunta, 0);
		elementoMensaje.getElemento().stringToArray(desExhaustiva, 1);
		elementoMensaje.getElemento().stringToArray(particion, 2);
		elementoMensaje.getElemento().stringToArray(subClase, 3);
		
		TaxonomiaDAO taxonomiaDAO = (TaxonomiaDAO) context.getBean("taxonomiaDAO");
		int salida = taxonomiaDAO.actualizarTaxonomia(idProyecto, elementoMensaje.getElemento());
		if(salida == 1){
			elementoMensaje.setSucces(true);
		}else{
			elementoMensaje.setSucces(false);
		}
		
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/taxonomia/{idGlosarioOrigen}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Taxonomia> verTaxonomia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioOrigen") int idGlosarioOrigen
			){
		logger.trace("***ver taxonomia");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioOrigen es "+idGlosarioOrigen);
		
		ElementoMensaje<Taxonomia> elementoMensaje = new ElementoMensaje<Taxonomia> ();
		TaxonomiaDAO taxonomiaDAO = (TaxonomiaDAO) context.getBean("taxonomiaDAO");
		elementoMensaje.setElemento(taxonomiaDAO.verTaxonomia(idProyecto, idGlosarioOrigen));
		if(elementoMensaje.getElemento().getConceptoOrigen() == 0){
			logger.trace("error");
			elementoMensaje.setSucces(false);
		}else{
			logger.trace("exito");
			elementoMensaje.setSucces(true);
		}
		
		return elementoMensaje;
	}
}
