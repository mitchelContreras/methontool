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

import com.ciensUCV.Methontool.dao.AtributoClaseDAO;
import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.TipoDeDato;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class AtributoClaseRest {
	private static final Logger logger = LoggerFactory.getLogger(AtributoClaseRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoClase", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<AtributoClase> listarAtributoClaseSinConceptoAsociado(
			@PathVariable("idProyecto") int idProyecto
			){
		logger.trace("***listarAtributoClaseSinConceptoAsociado");
		logger.trace("el idProyecto es "+idProyecto);
		
		ElementosMensaje<AtributoClase> elementosMensaje = new ElementosMensaje<AtributoClase> ();
		
		AtributoClaseDAO atributoClaseDAO = (AtributoClaseDAO) context.getBean("atributoClaseDAO");
		elementosMensaje.setElementos(atributoClaseDAO.listarAtributoClaseSinConceptoAsociado(idProyecto));
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoClase/{idGlosarioAtributo}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<AtributoClase> verAtributoClase(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAtributo") int idGlosarioAtributo
			){
		logger.trace("***verAtributoClase");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioAtributo es "+idGlosarioAtributo);
		
		ElementoMensaje<AtributoClase> elementoMensaje = new ElementoMensaje<AtributoClase> ();
		
		AtributoClaseDAO atributoclaseDAO = (AtributoClaseDAO) context.getBean("atributoClaseDAO");
		elementoMensaje.setElemento(atributoclaseDAO.verAtributoClase(idProyecto, idGlosarioAtributo));
		elementoMensaje.setSucces(true);
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoClase/{idGlosarioAtributo}", method = RequestMethod.PUT)
	public @ResponseBody ElementoMensaje<AtributoClase> actualizarAtributoClase(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAtributo") int idGlosarioAtributo
			,@RequestParam(value = "cardinalidadMax") String cardinalidadMax
	        ,@RequestParam(value = "cardinalidadMin") String cardinalidadMin
			,@RequestParam(value = "idGlosarioConcepto") int idGlosarioConcepto
			,@RequestParam(value = "precision") String precision
	        ,@RequestParam(value = "rangoValores") String rangoValores
			,@RequestParam(value = "cod_tipoDato") String cod_tipoDato
	        ,@RequestParam(value = "value") String value
			){
		logger.trace("***verAtributoInstancia");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioAtributo es "+idGlosarioAtributo);
		logger.trace("el cardinalidadMax es "+cardinalidadMax);
		logger.trace("el cardinalidadMin es "+cardinalidadMin);
		logger.trace("el precision es "+precision);
		logger.trace("el rangoValores es "+rangoValores);
		logger.trace("el cod_tipoDato es "+cod_tipoDato);
		logger.trace("el value es "+value);
		logger.trace("el idGlosarioConcepto es "+idGlosarioConcepto);
//		http://localhost:8080/Methontool/api/proyecto/1/atributoClase/18?cardinalidadMax=max&cardinalidadMin=min&cod_tipoDato=int&idGlosarioConcepto=7&precision=presciciooon&rangoValores=ranguitooo&valueDefecto=valooor
//		http://localhost:8080/Methontool/api/proyecto/1/atributoClase/19?cardinalidadMax=cardinalidadMax&cardinalidadMin=cardinalidadMin&idGlosarioConcepto=7&precision=precision&rangoValores=rangoValores&cod_tipoDato=int&value=valuuue
		ElementoMensaje<AtributoClase> elementoMensaje = new ElementoMensaje<AtributoClase> ();
		AtributoClase atributoClase = new AtributoClase();
		atributoClase.setCardinalidadMax(cardinalidadMax);
		atributoClase.setCardinalidadMin(cardinalidadMin);
		atributoClase.setIdGlosario(idGlosarioAtributo);
		atributoClase.setIdGlosarioConcepto(idGlosarioConcepto);
		atributoClase.setPrecision(precision);
		atributoClase.setRangoValores(rangoValores);
		TipoDeDato tipoDeDato = new TipoDeDato ();
		tipoDeDato.setCodigo(cod_tipoDato);
		atributoClase.setTipoDeDato(tipoDeDato);
		atributoClase.setValue(value);
		
		AtributoClaseDAO atributoClaseDAO = (AtributoClaseDAO) context.getBean("atributoClaseDAO");
		elementoMensaje.setElemento(atributoClaseDAO.actualizarAtributoClase(idProyecto, atributoClase));
		if(elementoMensaje.getElemento().getId() != 0){
			elementoMensaje.setSucces(true);
		}else{
			elementoMensaje.setSucces(false);
		}
		return elementoMensaje;
	}

}
