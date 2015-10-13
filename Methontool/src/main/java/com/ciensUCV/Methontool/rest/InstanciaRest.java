package com.ciensUCV.Methontool.rest;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
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
import com.ciensUCV.Methontool.model.TipoGlosario;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.LeerConfig;

import javax.servlet.http.HttpServletResponse;

@Controller
public class InstanciaRest {
	private static final Logger logger = LoggerFactory.getLogger(InstanciaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	
	private String construirArchivoSalida (int idProyecto, int idGlosarioConcepto){
//		Busco informacion del concepto en glosario
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		Glosario glosarioConcepto = glosarioDAO.verGlosario(idGlosarioConcepto);
		
		logger.debug("Glosario de Concepto "+glosarioConcepto.toString());
		
//		Busco informacion de las Instancias
		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
		ArrayList<Instancia> instancias = instanciaDAO.listaInstanciaDadoIdGlosarioConcepto(7);
		logger.debug("Total de instancias "+instancias.size());
		
		String aux = "";
//		Genero StringBuilder del archivo de salida
		StringBuilder sb = new StringBuilder();
		sb.append(LeerConfig.obtenerPropiedad("archivoSalida.MensajePrincipal"));
		sb.append("\n");
		sb.append(LeerConfig.obtenerPropiedad("archivoSalida.MensajeLlenado"));
		sb.append("\n");sb.append("\n");
		sb.append(LeerConfig.obtenerPropiedad("archivoSalida.concepto"));
		sb.append("\n");
		aux = LeerConfig.obtenerPropiedad("archivoSalida.id")+" "+glosarioConcepto.getId();
		sb.append(aux);sb.append("\n");
		aux = LeerConfig.obtenerPropiedad("archivoSalida.Nombre")+" "+glosarioConcepto.getNombre();
		sb.append(aux);sb.append("\n");		
		aux = LeerConfig.obtenerPropiedad("archivoSalida.Descripcion")+" "+glosarioConcepto.getDescripcion();
		sb.append(aux);sb.append("\n");sb.append("\n");
	
		Glosario auxGlosario;
		Instancia instancia;
		for(int i = 0; i<instancias.size(); i++ ){
			sb.append("\n");
			instancia = instancias.get(i);
//			Agrego descripcion de la instancia
			sb.append(LeerConfig.obtenerPropiedad("archivoSalida.separador2"));	sb.append("\n");	
			auxGlosario = glosarioDAO.verGlosario(instancia.getIdGlosario());			
			aux = LeerConfig.obtenerPropiedad("archivoSalida.instancia")+" "+(i+1);
			sb.append(aux);sb.append("\n");
			aux = LeerConfig.obtenerPropiedad("archivoSalida.id")+" "+auxGlosario.getId();
			sb.append(aux);sb.append("\n");
			aux = LeerConfig.obtenerPropiedad("archivoSalida.Nombre")+" "+auxGlosario.getNombre();
			sb.append(aux);sb.append("\n");		
			aux = LeerConfig.obtenerPropiedad("archivoSalida.Descripcion")+" "+auxGlosario.getDescripcion();
			sb.append(aux);sb.append("\n");
			for(int j=0; j<instancia.getDefinicion().size(); j++){
				AtributoInstanciaDesarrollo atrbInstancia = instancia.getDefinicion().get(j);
				sb.append("\n");
				sb.append("\t");sb.append(LeerConfig.obtenerPropiedad("archivoSalida.AtributoInstancia"));sb.append("\n");
				aux = LeerConfig.obtenerPropiedad("archivoSalida.id")+" "+atrbInstancia.getIdGlosario();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");
				aux = LeerConfig.obtenerPropiedad("archivoSalida.Nombre")+" "+atrbInstancia.getNombre();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");
				aux = LeerConfig.obtenerPropiedad("archivoSalida.Descripcion")+" "+atrbInstancia.getDescripcion();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");				
				aux = LeerConfig.obtenerPropiedad("archivoSalida.precision")+" "+atrbInstancia.getPrecision();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");	
				aux = LeerConfig.obtenerPropiedad("archivoSalida.rangoValores")+" "+atrbInstancia.getRangoValores();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");					
				aux = LeerConfig.obtenerPropiedad("archivoSalida.cardinalidad")+" ["+atrbInstancia.getCardinalidadMinima()+";"+atrbInstancia.getCardinaliadMaxima()+"]";
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");		
				aux = LeerConfig.obtenerPropiedad("archivoSalida.valores")+" "+atrbInstancia.getValoresJsonString();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");			
			}
		}
		
		String salida = sb.toString();
		return salida;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/concepto/{idGlosarioConcepto}/donwloadFileInstancias", method = RequestMethod.GET)
	public void donwloadInstancias(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioConcepto") int idGlosarioConcepto
			,HttpServletResponse response
			) throws IOException{
		
		logger.trace("*** donwloadInstancias ");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGlosarioConcepto "+idGlosarioConcepto);		
		
		response.setContentType("application/octet-stream");
		// Response header
		response.setHeader("Content-Disposition", "attachment; filename=\""
				+ LeerConfig.obtenerPropiedad("archivoSalida.nombreDelArchivo") + "\"");
		// Read from the file and write into the response
		OutputStream os = response.getOutputStream();
		PrintStream printStream = new PrintStream(os);
		printStream.print(construirArchivoSalida (idProyecto, idGlosarioConcepto));
		
		os.flush();
		os.close();
		
	}
	
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
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/instancia", method = RequestMethod.POST)
	public @ResponseBody ElementoMensaje<Instancia> crearInstancia(
			@PathVariable("idProyecto") int idProyecto
			,@RequestParam(value = "nombreInstancia") String nombreInstancia
			,@RequestParam(value = "idConcepto") int idConcepto
			){
		logger.trace("***crearInstancia");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idConcepto "+idConcepto);
		logger.trace("nombreInstancia "+nombreInstancia);
		
		//Objeto de salida
		ElementoMensaje<Instancia> elementoMensaje = new ElementoMensaje<Instancia>();
		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		Glosario glosario;
		Instancia instancia = new Instancia();

		glosario = 
				new Glosario(
						null, 
						nombreInstancia, 
						null, 
						null,
						"",
						new TipoGlosario (
								8, 
								null, 
								null, 
								null));
		
		try {
			logger.debug("antes de agregar glosario");
			glosario = glosarioDAO.crearGlosario(idProyecto, glosario);
			if(!glosario.getId().equalsIgnoreCase("")){
				logger.debug("id Glosario es diferente de vacio");
				instancia.setIdGlosario(Integer.parseInt(glosario.getId()));
				instancia.setIdGlosarioConceptoRelacion(idConcepto);
				if(instancia.getIdGlosario() != 0){
					logger.debug("id instancia es diferente de vacio");
					instancia = instanciaDAO.crearInstancia(instancia);
					elementoMensaje.setSucces(true);
					elementoMensaje.setElemento(instancia);
				}else{
					ErrorEnviar enviarError;
					enviarError = new ErrorEnviar("0060", null, "Error al insertar en BD");
					elementoMensaje.getListaError().add(enviarError);					
				}
			}else{
				ErrorEnviar enviarError;
				enviarError = new ErrorEnviar("0061", null, "Error al insertar en BD");
				elementoMensaje.getListaError().add(enviarError);				
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			elementoMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0051", null, "Error al insertar en BD");
			elementoMensaje.getListaError().add(enviarError);
		}			

		return elementoMensaje;
	}	
	
}
