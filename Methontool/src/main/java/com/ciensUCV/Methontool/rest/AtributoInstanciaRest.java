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

import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.model.TipoDeDato;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;

@Controller
public class AtributoInstanciaRest {
	private static final Logger logger = LoggerFactory.getLogger(AtributoInstanciaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoInstancia", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<AtributoInstancia> listarAtributoInstanciaSinConceptoAsociado(
			@PathVariable("idProyecto") int idProyecto
			){
		logger.trace("***listarAtributoInstanciaSinConceptoAsociado");
		logger.trace("el idProyecto es "+idProyecto);
		
		ElementosMensaje<AtributoInstancia> elementosMensaje = new ElementosMensaje<AtributoInstancia> ();
		
		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
		elementosMensaje.setElementos(atributoInstanciaDAO.listarAtributoInstanciaSinConceptoAsociado(idProyecto));
		elementosMensaje.setSucces(true);
		return elementosMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoInstancia/{idGlosarioAtributo}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<AtributoInstancia> verAtributoInstancia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAtributo") int idGlosarioAtributo
			){
		logger.trace("***verAtributoInstancia");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioAtributo es "+idGlosarioAtributo);
		
		ElementoMensaje<AtributoInstancia> elementoMensaje = new ElementoMensaje<AtributoInstancia> ();
		
		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
		elementoMensaje.setElemento(atributoInstanciaDAO.verAtributoInstancia(idProyecto, idGlosarioAtributo));
		elementoMensaje.setSucces(true);
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/atributoInstancia/{idGlosarioAtributo}", method = RequestMethod.POST)
	public @ResponseBody ElementoMensaje<AtributoInstancia> actualizarAtributoInstancia(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioAtributo") int idGlosarioAtributo
			,@RequestParam(value = "cardinalidadMax") String cardinalidadMax
	        ,@RequestParam(value = "cardinalidadMin") String cardinalidadMin
			,@RequestParam(value = "idGlosarioConcepto") int idGlosarioConcepto
	        ,@RequestParam(value = "cod_medida") String cod_medida
			,@RequestParam(value = "precision") String precision
	        ,@RequestParam(value = "rangoValores") String rangoValores
			,@RequestParam(value = "cod_tipoDato") String cod_tipoDato
	        ,@RequestParam(value = "valueDefecto") String valueDefecto
			){
		
		logger.trace("***actualizarAtributoInstancia");
		logger.trace("el idProyecto es "+idProyecto);
		logger.trace("el idGlosarioAtributo es "+idGlosarioAtributo);
		logger.trace("el cardinalidadMax es "+cardinalidadMax);
		logger.trace("el cardinalidadMin es "+cardinalidadMin);
		logger.trace("el cod_medida es "+cod_medida);
		logger.trace("el precision es "+precision);
		logger.trace("el rangoValores es "+rangoValores);
		logger.trace("el cod_tipoDato es "+cod_tipoDato);
		logger.trace("el valueDefecto es "+valueDefecto);
		logger.trace("el idGlosarioConcepto es "+idGlosarioConcepto);
		
//		http://localhost:8080/Methontool/api/proyecto/1/atributoInstancia/25?cardinalidadMax=cardinalidadMax&cardinalidadMin=cardinalidadMin&idGlosarioConcepto=7&cod_medida=mtrs&precision=precision&rangoValores=rangoValores&cod_tipoDato=int&valueDefecto=valuuue
		
		ElementoMensaje<AtributoInstancia> elementoMensaje = new ElementoMensaje<AtributoInstancia> ();
		AtributoInstancia atributoInstancia = new AtributoInstancia();
		atributoInstancia.setCardinalidadMax(cardinalidadMax);
		atributoInstancia.setCardinalidadMin(cardinalidadMin);
		atributoInstancia.setIdGlosario(idGlosarioAtributo);
		atributoInstancia.setIdGlosarioConcepto(idGlosarioConcepto);
		Medida medida = new Medida ();
		medida.setCodigo(cod_medida);
		atributoInstancia.setMedida(medida);
		atributoInstancia.setPrecision(precision);
		atributoInstancia.setRangoValores(rangoValores);
		TipoDeDato tipoDeDato = new TipoDeDato ();
		tipoDeDato.setCodigo(cod_tipoDato);
		atributoInstancia.setTipoDeDato(tipoDeDato);
		atributoInstancia.setValue(valueDefecto);

		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
		elementoMensaje.setElemento(atributoInstanciaDAO.actualizarAtributoInstancia(idProyecto, atributoInstancia));
		if(elementoMensaje.getElemento().getId() != 0){
			elementoMensaje.setSucces(true);
		}else{
			elementoMensaje.setSucces(false);
		}
		
		return elementoMensaje;
	}

}
