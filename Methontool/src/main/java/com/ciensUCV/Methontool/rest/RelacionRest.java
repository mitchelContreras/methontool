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
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/relacion/{idRelacion}", method = RequestMethod.PUT)
	public @ResponseBody ElementoMensaje<Relacion> actualizarRelacion(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idRelacion") int idRelacion
			,@RequestParam(value = "idGlosarioRelacionInversa") int idGlosarioRelacionInversa
	        ,@RequestParam(value = "cardinalidad") String cardinalidad
			){
		logger.trace("***actualizarRelacion");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("idGlosarioRelacionInversa "+idGlosarioRelacionInversa);
		logger.trace("cardinalidad "+cardinalidad);
		logger.trace("idRelacion "+idRelacion);
		
		ElementoMensaje<Relacion> elementoMensaje = new ElementoMensaje<Relacion> ();
		RelacionDAO relacionDAO = (RelacionDAO) context.getBean("relacionDAO");
		Relacion relacion = new Relacion ();
		relacion.setIdRelacion(idRelacion);
		relacion.setCardinalidad(cardinalidad);
		relacion.setIdGlosarioRelacionInversa(idGlosarioRelacionInversa);
		elementoMensaje.setElemento(relacionDAO.actualizarRelacion(idProyecto, relacion));
		if(elementoMensaje.getElemento().getIdRelacion() != 0){
			elementoMensaje.setSucces(true);
		}else{
			elementoMensaje.setSucces(false);
		}
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/relacion/{idGlosarioRelacionOrigen}", method = RequestMethod.POST)
	public @ResponseBody ElementoMensaje<Relacion> agregarRelacion(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioRelacionOrigen") int idGlosarioRelacionOrigen
			,@RequestParam(value = "idGlosarioOrigen") String idGlosarioOrigen
	        ,@RequestParam(value = "idGlosarioDestino") String idGlosarioDestino
			){
		logger.trace("***agregarRelacion");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioRelacionOrigen es "+idGlosarioRelacionOrigen);
		logger.trace("idGlosarioOrigen "+idGlosarioOrigen);
		logger.trace("idGlosarioDestino "+idGlosarioDestino);
		
		Relacion relacion = new Relacion ();
		relacion.setIdGlosarioRelacion(idGlosarioRelacionOrigen);
		relacion.setIdGlosarioOrigen(Integer.parseInt(idGlosarioOrigen));
		relacion.setIdGlosarioDestino(Integer.parseInt(idGlosarioDestino));
		
		ElementoMensaje<Relacion> elementoMensaje = new ElementoMensaje<Relacion> ();
		RelacionDAO relacionDAO = (RelacionDAO) context.getBean("relacionDAO");
		elementoMensaje.setElemento(relacionDAO.crearRelacion(idProyecto, relacion));
		if(elementoMensaje.getElemento().getIdRelacion() != 0){
			elementoMensaje.setSucces(true);
		}else{
			elementoMensaje.setSucces(false);
		}
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/relacion/{idRelacion}", method = RequestMethod.DELETE)
	public @ResponseBody ElementoMensaje<Relacion> eliminarRelacion(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idRelacion") int idRelacion
			){
		logger.trace("***eliminarRelacion");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idRelacion es "+idRelacion);

		ElementoMensaje<Relacion> elementosMensaje = new ElementoMensaje<Relacion> ();
		RelacionDAO relacionDAO = (RelacionDAO) context.getBean("relacionDAO");
		int salida = relacionDAO.eliminarRelacion(idProyecto, idRelacion);
		if(salida == 1){
			elementosMensaje.setSucces(true);
		}else{
			elementosMensaje.setSucces(false);
		}
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
	
}
