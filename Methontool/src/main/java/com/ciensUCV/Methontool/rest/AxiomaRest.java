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

import com.ciensUCV.Methontool.dao.AxiomaDAO;
import com.ciensUCV.Methontool.dao.ConstanteDAO;
import com.ciensUCV.Methontool.model.Axioma;
import com.ciensUCV.Methontool.model.Constante;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.model.TipoDeDato;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class AxiomaRest {
	private static final Logger logger = LoggerFactory.getLogger(AxiomaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/axioma/{idGlosarioAxioma}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Axioma> verAxioma(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAxioma") int idGlosarioAxioma
			){
		logger.trace("*** verAxioma");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGlosarioAxioma "+idGlosarioAxioma);
		
		ElementoMensaje<Axioma> elementoMensaje = new ElementoMensaje<Axioma>();
		elementoMensaje.setElemento(new Axioma());
		elementoMensaje.getElemento().setIdGlosarioAxioma(idGlosarioAxioma);
		
		AxiomaDAO axiomaDAO = (AxiomaDAO) context.getBean("axiomaDAO");
		elementoMensaje.setElemento(axiomaDAO.verAxioma(idProyecto, idGlosarioAxioma));
		elementoMensaje.setSucces(true);
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/axioma/{idGlosarioAxioma}", method = RequestMethod.PUT)
	public @ResponseBody ElementoMensaje<Axioma> crearActualizarAxioma(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAxioma") int idGlosarioAxioma
	        ,@RequestParam(value = "expresion") String expresion
	        ,@RequestParam(value = "variables") String variables
	        ,@RequestParam(value = "atrbClase") String atrbClase
	        ,@RequestParam(value = "atrbInstancia") String atrbInstancia
	        ,@RequestParam(value = "concepto") String concepto
	        ,@RequestParam(value = "relacion") String relacion
			){
		logger.trace("*** crearActualizarAxioma");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGosarioAxioma "+idGlosarioAxioma);
		logger.trace("expresion "+expresion);
		logger.trace("variables "+variables);
		logger.trace("atrbClase "+atrbClase);
		logger.trace("atrbInstancia "+atrbInstancia);
		logger.trace("concepto "+concepto);
		logger.trace("relacion "+relacion);
		
//		http://localhost:8080/Methontool/api/proyecto/1/axioma/23?expresion=expresion&variables=variables&atrbClase=atrbClase&atrbInstancia=atrbInstancia&concepto=concepto&relacion=relacion
		ElementoMensaje<Axioma> elementoMensaje = new ElementoMensaje<Axioma>();
		elementoMensaje.setElemento(new Axioma());
		AxiomaDAO axiomaDAO = (AxiomaDAO) context.getBean("axiomaDAO");
		Axioma axioma = new Axioma ();
		
		try {
			axioma = axiomaDAO.verAxioma(idProyecto, idGlosarioAxioma);
			if(axioma.getId() == 0){
				int salida = axiomaDAO.crearAxioma(idProyecto, idGlosarioAxioma);
				logger.trace("creo con id "+salida);
			}
			axioma = new Axioma ();
			axioma.setIdGlosarioAxioma(idGlosarioAxioma);
			axioma.setExpresion(expresion);
			axioma.variablesStringToArray(variables);
			axioma.atributoClaseStringToArray(atrbClase);
			axioma.atributoInstanciaStringToArray(atrbInstancia);
			axioma.conceptoStringToArray(concepto);
			axioma.relacionesStringToArray(relacion);
			if(axiomaDAO.actualizarAxioma(idProyecto, axioma) == 1){
				elementoMensaje.setElemento(axioma);
				elementoMensaje.setSucces(true);			
			}else{
				elementoMensaje.setSucces(false);			
			}			
		} catch (Exception e) {
			// TODO: handle exception
			elementoMensaje.setSucces(false);	
		}
		return elementoMensaje;
	}
	
}
