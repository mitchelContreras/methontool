package com.ciensUCV.Methontool.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ciensUCV.Methontool.dao.NivelFormalidadDAO;
import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class NivelFormalidadRest {
	
	private static final Logger logger = LoggerFactory.getLogger(NivelFormalidadRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/nivelFormalidad", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<NivelFormalidad> listarNivelFormalidad(){
		ElementosMensaje<NivelFormalidad> elementosMensaje = new ElementosMensaje<NivelFormalidad> ();
		NivelFormalidadDAO nivelFormalidadDAO = (NivelFormalidadDAO) context.getBean("nivelFormalidadDAO");
		try {
			elementosMensaje.setElementos(nivelFormalidadDAO.listarNivelFormalidad());
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
