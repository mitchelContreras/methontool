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

import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class GlosarioRest {

	private static final Logger logger = LoggerFactory.getLogger(GlosarioRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/glosario", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<Glosario> listarGlosario(@PathVariable("idProyecto") int idProyecto){
		logger.info("el id es "+idProyecto);
		ElementosMensaje<Glosario> elementosMensaje = new ElementosMensaje<Glosario> ();
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		try {
			elementosMensaje.setElementos(glosarioDAO.listarGlosario(idProyecto));
			logger.info("Cantidad de la lista es "+elementosMensaje.getElementos().size());
			elementosMensaje.setSucces(true);
		} catch (Exception e) {
			// TODO: handle exception
			elementosMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0050", null, "Error al traer datos de BD");
			elementosMensaje.getListaError().add(enviarError);
		}
		return elementosMensaje;
	}
}
