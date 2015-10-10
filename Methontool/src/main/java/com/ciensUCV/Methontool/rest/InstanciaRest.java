package com.ciensUCV.Methontool.rest;

import java.util.ArrayList;

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

import com.ciensUCV.Methontool.dao.AtributoClaseDAO;
import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.dao.InstanciaDAO;
import com.ciensUCV.Methontool.dao.InstanciadoDAO;
import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.AtributoInstanciaDesarrollo;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.model.Instanciado;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class InstanciaRest {
	private static final Logger logger = LoggerFactory.getLogger(InstanciaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/proyecto/{idProyecto}/instancia", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<Instancia> listarInstanciaSinConceptoAsociado(
			@PathVariable("idProyecto") int idProyecto
			){
		logger.trace("***listarInstanciaSinConceptoAsociado");
		logger.trace("el idProyecto es "+idProyecto);
		
		ElementosMensaje<Instancia> elementosMensaje = new ElementosMensaje<Instancia> ();
		
		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
		elementosMensaje.setElementos(instanciaDAO.listarInstanciaSinConceptoAsociado(idProyecto));
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/instancia/{idGlosarioInstancia}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Instancia> verInstancia(
			@PathVariable("idProyecto") int idProyecto,
			@PathVariable("idGlosarioInstancia") int idGlosarioInstancia
			){
		logger.trace("verInstancia");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGlosarioInstancia "+idGlosarioInstancia);
		ElementoMensaje<Instancia> elementoMensaje = new ElementoMensaje<Instancia>(); 
		
		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
		elementoMensaje.setElemento(instanciaDAO.verInstanciaDadoIdGlosarioInstancia(idGlosarioInstancia));
		if(elementoMensaje.getElemento().getIdGlosario() == 0){
			elementoMensaje.setSucces(false);
			ErrorEnviar errorEnviar = new ErrorEnviar();
			errorEnviar.setMensaje("La instancia seleccionada no ha sido asociada a un concepto");
			ArrayList<ErrorEnviar> listaError = new ArrayList<ErrorEnviar>();
			listaError.add(errorEnviar);
			elementoMensaje.setListaError(listaError);
			return elementoMensaje;			
		}else{
			elementoMensaje.setSucces(true);
		}
		
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/instancia/{idGlosarioInstancia}", method = RequestMethod.PUT)
	public @ResponseBody ElementoMensaje<Instancia> actualizarInstancia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioInstancia") int idGlosarioInstancia
			,@RequestParam(value = "idConcepto") int idConcepto
			,@RequestParam(value = "definicion") String definicion
			){
		logger.trace("***actualizarInstancia");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGlosarioInstancia "+idGlosarioInstancia);
		logger.trace("idConcepto "+idConcepto);
		logger.trace("definicion "+definicion);
		
		//Objeto de salida
		ElementoMensaje<Instancia> elementoMensaje = new ElementoMensaje<Instancia>();
		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");

		Instancia instancia = new Instancia();
		
		instancia.setIdGlosario(idGlosarioInstancia);
		instancia.setIdGlosarioConceptoRelacion(idConcepto);
		instancia.setDefinicion(definicion);
		
		logger.trace("La instancia a guardar es "+instancia);
		instancia = instanciaDAO.actualizarInstancia(instancia);
		elementoMensaje.setElemento(instancia);
		logger.debug("Chamoooo es "+instancia.getIdGlosario());
		if(instancia.getIdGlosario() != 0){
			elementoMensaje.setSucces(true);
		}else{
			elementoMensaje.setSucces(false);
		}
		return elementoMensaje;
	}
	
}
