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
		if(elementoMensaje.getElemento() == null){
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

//	@RequestMapping(value="/api/proyecto/{idProyecto}/instanciado1/{idInstancia}", method = RequestMethod.GET)
//	public @ResponseBody ElementoMensaje<Instanciado> verInstanciado(
//			@PathVariable("idProyecto") int idProyecto
//			,@PathVariable("idInstancia") int idInstancia
//			){
//		logger.trace("***verInstanciado");
//		logger.trace("idProyecto "+idProyecto);
//		logger.trace("idInstancia "+idInstancia);
//
//		//		1. consultar instanciada si id = 0
//		//		-> Consulto instancia asociada
//		//		-> Consulto atributoInstancia 
//		//		-> Consulto 
//		//Objeto de salida
//		ElementoMensaje<Instanciado> elementoMensaje = new ElementoMensaje<Instanciado>(); 
//		//Consulto instanciado
//		InstanciadoDAO instanciadoDAO = (InstanciadoDAO) context.getBean("instanciadoDAO");
//		
//		Instanciado instanciado = new Instanciado();
//		Instancia instancia = new Instancia();
//		
//		instancia.setId(idInstancia);
//		instanciado.setInstancia(instancia);
//		instanciado = instanciadoDAO.verInstanciado(instanciado, idProyecto);
//		logger.trace("instanciado despues de verInstanciado "+instanciado);
//		
//		if(instanciado.getId() != 0){
//			//el elemento ya existe y envio a la vista
//			logger.trace("entro en instanciado.getId() != 0" );
//			elementoMensaje.setElemento(instanciado);
////			el problema se da cuando a elemento le seteo el instanciado y lo intento retornar 
//			elementoMensaje.setSucces(true);
//			return elementoMensaje;
//		}else{
//			InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
//			instancia = instanciaDAO.verInstanciaDadoIdInstancia(instancia.getId());
//			logger.trace("instancia "+instancia);
//			if(instancia.getId() > 0){
//				instanciado.setInstancia(instancia);
//				logger.trace("es mayor a 0");
//				AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
//				logger.trace("instancia.getIdGlosarioConceptoRelacion() "+instancia.getIdGlosarioConceptoRelacion());
//				ArrayList<AtributoInstancia> arrayAtributoInstancia= atributoInstanciaDAO.listarAtributoInstanciaDadoIdGlosarioConcepto(instancia.getIdGlosarioConceptoRelacion());
//				logger.trace("arrayAtributoInstancia.size() "+arrayAtributoInstancia.size());
//				//Crear lista de JSON con los objetos de atirbuto instancia y setear en la primera posicion del arreglo el valor por defecto
////				estructura de ese elemento agrgado
//
//				Glosario glosario;
//				String json, valor;
//				json = "";
//				for (int i=0;i<arrayAtributoInstancia.size();i++){
//					GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
//					glosario = new Glosario();
//					glosario = glosarioDAO.verGlosario(idProyecto, arrayAtributoInstancia.get(i).getIdGlosario());
//					valor = arrayAtributoInstancia.get(i).getValue();
//					json = jsonAtributoInstancia(json
//							,String.valueOf(arrayAtributoInstancia.get(i).getId())
//							,String.valueOf(arrayAtributoInstancia.get(i).getIdGlosario())
//							,arrayAtributoInstancia.get(i).getPrecision()
//							,arrayAtributoInstancia.get(i).getRangoValores()
//							,arrayAtributoInstancia.get(i).getCardinalidadMin()
//							,arrayAtributoInstancia.get(i).getCardinalidadMax()
//							,glosario.getNombre()
//							,valor
//							,glosario.getDescripcion());
//				}
//				instanciado.setDefinicion(json);
//				instanciado = instanciadoDAO.crearInstanciado(instanciado, idProyecto);
//				logger.trace("cree instanciado con "+instanciado);
//				elementoMensaje.setSucces(true);
//				elementoMensaje.setElemento(instanciado);
//				return elementoMensaje;
//			}else{
////				elementoMensaje.setElemento(instanciado);
////				mismo problema que el anterior
//				elementoMensaje.setSucces(false);
//				ErrorEnviar errorEnviar = new ErrorEnviar();
//				errorEnviar.setMensaje("La instancia con id "+instancia.getId()+" no se encuentra registrada comuniquese con el administrador");
//				logger.error("La instancia con id "+instancia.getId()+" no se encuentra registrada comuniquese con el administrador");
//				ArrayList<ErrorEnviar> listaError = new ArrayList<ErrorEnviar>();
//				listaError.add(errorEnviar);
//				elementoMensaje.setListaError(listaError);
//				return elementoMensaje;
//			}
//		}
//	}
	
}
