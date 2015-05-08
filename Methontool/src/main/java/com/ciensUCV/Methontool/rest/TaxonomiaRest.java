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

import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class TaxonomiaRest {
	private static final Logger logger = LoggerFactory.getLogger(TipoGlosarioRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/taxonomia/{idTaxonomiaGlosario}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Taxonomia> verTaxonomiaIDGlosario(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idTaxonomiaGlosario") int idTaxonomiaGlosario
			){
		logger.info("el idProyecto es "+idProyecto);
		logger.info("el idTaxonomiaGlosario es "+idTaxonomiaGlosario);
		
		ElementoMensaje<Taxonomia> elementoMensaje = new ElementoMensaje<Taxonomia> ();

		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/taxonomia/{idTaxonomiaGlosario}", method = RequestMethod.POST)
	public @ResponseBody ElementoMensaje<Taxonomia> actualizarTaxonomia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idTaxonomiaGlosario") int idTaxonomiaGlosario
			){
		logger.info("el idProyecto es "+idProyecto);
		logger.info("el idTaxonomiaGlosario es "+idTaxonomiaGlosario);
		
		ElementoMensaje<Taxonomia> elementoMensaje = new ElementoMensaje<Taxonomia> ();

		return elementoMensaje;
	}
}
