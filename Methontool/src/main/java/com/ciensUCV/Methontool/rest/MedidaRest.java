package com.ciensUCV.Methontool.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ciensUCV.Methontool.dao.MedidaDAO;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class MedidaRest {
	private static final Logger logger = LoggerFactory.getLogger(MedidaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));
	
	@RequestMapping(value="/api/medida", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<Medida> listarMedida(
			){
		logger.trace("***listarMedida");
		
		ElementosMensaje<Medida> elementosMensaje = new ElementosMensaje<Medida> ();
		
		MedidaDAO medidaDAO = (MedidaDAO) context.getBean("medidaDAO");
		elementosMensaje.setElementos(medidaDAO.listarMedida());
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
}
