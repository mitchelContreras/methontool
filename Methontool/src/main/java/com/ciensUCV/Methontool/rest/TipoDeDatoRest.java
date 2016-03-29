package com.ciensUCV.Methontool.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ciensUCV.Methontool.dao.TipoDeDatoDAO;
import com.ciensUCV.Methontool.model.TipoDeDato;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class TipoDeDatoRest {
	private static final Logger logger = LoggerFactory.getLogger(TipoDeDatoRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));
	
	@RequestMapping(value="/api/tipoDeDato", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<TipoDeDato> listarTipoDeDato(
			){
		logger.trace("***listarTipoDeDato");
		
		ElementosMensaje<TipoDeDato> elementosMensaje = new ElementosMensaje<TipoDeDato> ();
		
		TipoDeDatoDAO tipoDeDatoDAO = (TipoDeDatoDAO) context.getBean("tipoDeDatoDAO");
		elementosMensaje.setElementos(tipoDeDatoDAO.listarTipoDeDato());
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
}
