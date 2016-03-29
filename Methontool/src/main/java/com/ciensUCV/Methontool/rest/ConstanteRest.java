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

import com.ciensUCV.Methontool.dao.ConstanteDAO;
import com.ciensUCV.Methontool.model.Constante;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.model.TipoDeDato;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class ConstanteRest {
	
	private static final Logger logger = LoggerFactory.getLogger(ConstanteRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/constante/{idGosarioConstante}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Constante> verConstante(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGosarioConstante") int idGosarioConstante
			){
		
		logger.trace("*** verConstante");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGosarioConstante "+idGosarioConstante);
		
		ElementoMensaje<Constante> elementoMensaje = new ElementoMensaje<Constante>();
		elementoMensaje.setElemento(new Constante());
		elementoMensaje.getElemento().setIdGlosarioConstante(idGosarioConstante);
		
		ConstanteDAO constanteDAO = (ConstanteDAO) context.getBean("constanteDAO");
		elementoMensaje.setElemento(constanteDAO.verConstante(idProyecto, idGosarioConstante));
		elementoMensaje.setSucces(true);
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/constante/{idGosarioConstante}", method = RequestMethod.PUT)
	public @ResponseBody ElementoMensaje<Constante> crearActualizarConstante(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGosarioConstante") int idGosarioConstante
	        ,@RequestParam(value = "codMedida") String codMedida
	        ,@RequestParam(value = "codDato") String codDato
	        ,@RequestParam(value = "valor") String valor
			){
		
		logger.trace("*** crearActualizarConstante");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGosarioConstante "+idGosarioConstante);
		logger.trace("codMedida "+codMedida);
		logger.trace("codDato "+codDato);
		logger.trace("valor "+valor);
		
		ElementoMensaje<Constante> elementoMensaje = new ElementoMensaje<Constante>();
		ConstanteDAO constanteDAO = (ConstanteDAO) context.getBean("constanteDAO");
		Constante constante = new Constante ();
	
		try {
			constante = constanteDAO.verConstante(idProyecto, idGosarioConstante);
			if(constante.getId() == 0){
				int salida = constanteDAO.crearConstante(idGosarioConstante);
				logger.trace("creo con id "+salida);
			}
			constante = new Constante ();
			constante.setIdGlosarioConstante(idGosarioConstante);
			constante.setMedida(new Medida(0, codMedida, null, null));
			constante.setTipoDeDato(new TipoDeDato(0, codDato, null, null));
			constante.setValor( valor);
			elementoMensaje.setElemento(constanteDAO.actualizarConstante(idProyecto, constante));
			elementoMensaje.setSucces(true);			
		} catch (Exception e) {
			// TODO: handle exception
			elementoMensaje.setSucces(false);	
		}

		return elementoMensaje;
	}
}
