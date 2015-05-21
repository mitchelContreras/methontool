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

import com.ciensUCV.Methontool.dao.RelacionDAO;
import com.ciensUCV.Methontool.model.Relacion;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class RelacionRest {
	private static final Logger logger = LoggerFactory.getLogger(RelacionRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/proyecto/{idProyecto}/relacion/{idGlosarioRelacionOrigen}", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<Relacion> listarRelaciones(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioRelacionOrigen") int idGlosarioRelacionOrigen
			){
		logger.trace("***listarRelaciones");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioRelacionOrigen es "+idGlosarioRelacionOrigen);
		
		ElementosMensaje<Relacion> elementosMensaje = new ElementosMensaje<Relacion> ();
		RelacionDAO relacionDAO = (RelacionDAO) context.getBean("relacionDAO");
		elementosMensaje.setElementos(relacionDAO.listarRelacion(idProyecto, idGlosarioRelacionOrigen));
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
}
