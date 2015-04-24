package com.ciensUCV.Methontool.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ciensUCV.Methontool.dao.TipoGlosarioDAO;
import com.ciensUCV.Methontool.model.TipoGlosario;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.LeerConfig;


@Controller
public class TipoGlosarioRest {
	private static final Logger logger = LoggerFactory.getLogger(TipoGlosarioRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/tipoGlosario", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<TipoGlosario> listarGlosario(){
		logger.info("entre ne listar tipoGlosario");
		ElementosMensaje<TipoGlosario> elementosMensaje = new ElementosMensaje<TipoGlosario> ();
		TipoGlosarioDAO tipoGlosarioDAO = (TipoGlosarioDAO) context.getBean("tipoGlosarioDAO");
		try {
			elementosMensaje.setElementos(tipoGlosarioDAO.listarTipoGlosario());
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
