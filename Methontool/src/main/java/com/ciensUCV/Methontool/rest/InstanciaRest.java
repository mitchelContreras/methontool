package com.ciensUCV.Methontool.rest;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.StringTokenizer;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;

import org.apache.commons.io.IOUtils;
import org.apache.commons.io.output.TeeOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.ciensUCV.Methontool.dao.AtributoClaseDAO;
import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.dao.InstanciaDAO;
import com.ciensUCV.Methontool.dao.InstanciadoDAO;
import com.ciensUCV.Methontool.dao.ProyectoDAO;
import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.AtributoInstanciaDesarrollo;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.model.Instanciado;
import com.ciensUCV.Methontool.model.Proyecto;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.model.TipoGlosario;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.LeerConfig;

import javax.servlet.http.HttpServletResponse;

@Controller
//@PropertySource("classpath:application.properties")
public class InstanciaRest {
	private static final Logger logger = LoggerFactory.getLogger(InstanciaRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(
    				LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));

	
	private String construirArchivoSalida (int idProyecto, int idGlosarioConcepto, int cantidadInstancia){
		
//		Busco informacion del proyecto
		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
		Proyecto proyecto = proyectoDAO.verProyecto(idProyecto);
		logger.debug("Proyecto es "+proyecto.toString());
		
//		Busco informacion del concepto en glosario
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		Glosario glosarioConcepto = glosarioDAO.verGlosario(idGlosarioConcepto);
		
		logger.debug("Glosario de Concepto "+glosarioConcepto.toString());
		
//		Busco informacion de los atribtuos de instancia
		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
		ArrayList<AtributoInstancia> atributoInstancia = atributoInstanciaDAO.listarAtributoInstanciaDadoIdGlosarioConcepto(idGlosarioConcepto);
		logger.debug("Total de atributoInstancia "+atributoInstancia.size());
		logger.debug("lista imprimir "+atributoInstancia.toString());
		
//		Buscar Glosario de cada uno de los atributo de Instancia
		ArrayList<Glosario> glosarioAtrbInstancia = new ArrayList<Glosario>();
		for (AtributoInstancia aux : atributoInstancia){
			glosarioAtrbInstancia.add( glosarioDAO.verGlosario(aux.getIdGlosario()) );
		}
		
		String aux = "";
//		Genero StringBuilder del archivo de salida
		StringBuilder sb = new StringBuilder();
		sb.append(LeerConfig.obtenerPropiedad("archivoSalida.MensajePrincipal"));
		sb.append("\n");
		sb.append(LeerConfig.obtenerPropiedad("archivoSalida.MensajeLlenado"));
		sb.append("\n");sb.append("\n");
		
		sb.append(LeerConfig.obtenerPropiedad("archivoSalida.Proyecto"));
		sb.append("\n");		
		aux = LeerConfig.obtenerPropiedad("archivoSalida.id")+"\""+proyecto.getIdProyecto()+"\"";
		sb.append(aux);sb.append("\n");
		aux = LeerConfig.obtenerPropiedad("archivoSalida.Nombre")+" "+proyecto.getNombre();
		sb.append(aux);sb.append("\n");sb.append("\n");	
		sb.append(LeerConfig.obtenerPropiedad("archivoSalida.concepto"));
		sb.append("\n");
		aux = LeerConfig.obtenerPropiedad("archivoSalida.id")+"\""+glosarioConcepto.getId()+"\"";
		sb.append(aux);sb.append("\n");
		aux = LeerConfig.obtenerPropiedad("archivoSalida.Nombre")+" "+glosarioConcepto.getNombre();
		sb.append(aux);sb.append("\n");		
		aux = LeerConfig.obtenerPropiedad("archivoSalida.Descripcion")+" "+glosarioConcepto.getDescripcion();
		sb.append(aux);sb.append("\n");sb.append("\n");
	
		for(int i = 0; i<cantidadInstancia; i++ ){
			sb.append("\n");
//			Agrego descripcion de la instancia
			sb.append(LeerConfig.obtenerPropiedad("archivoSalida.separador2"));	sb.append("\n");		
			aux = LeerConfig.obtenerPropiedad("archivoSalida.instancia")+" "+(i+1);
			sb.append(aux);sb.append("\n");
			aux = LeerConfig.obtenerPropiedad("archivoSalida.Nombre")+"\"\"";
			sb.append(aux);sb.append("\n");		
			aux = LeerConfig.obtenerPropiedad("archivoSalida.Descripcion")+"\"\"";
			sb.append(aux);sb.append("\n");
			for(int j=0; j<atributoInstancia.size(); j++){
				AtributoInstancia atrbInstancia = atributoInstancia.get(j);
				sb.append("\n");
				sb.append("\t");sb.append(LeerConfig.obtenerPropiedad("archivoSalida.AtributoInstancia"));sb.append("\n");
				aux = LeerConfig.obtenerPropiedad("archivoSalida.id")+"\""+atrbInstancia.getIdGlosario()+"\"";
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");
				aux = LeerConfig.obtenerPropiedad("archivoSalida.Nombre")+" "+glosarioAtrbInstancia.get(j).getNombre();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");
				aux = LeerConfig.obtenerPropiedad("archivoSalida.Descripcion")+" "+glosarioAtrbInstancia.get(j).getDescripcion();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");				
				aux = LeerConfig.obtenerPropiedad("archivoSalida.precision")+" "+atrbInstancia.getPrecision();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");	
				aux = LeerConfig.obtenerPropiedad("archivoSalida.rangoValores")+" "+atrbInstancia.getRangoValores();
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");					
				aux = LeerConfig.obtenerPropiedad("archivoSalida.cardinalidad")+" ["+atrbInstancia.getCardinalidadMin()+";"+atrbInstancia.getCardinalidadMax()+"]";
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");		
				aux = LeerConfig.obtenerPropiedad("archivoSalida.valores")+" [";
				if (!atrbInstancia.getValue().equalsIgnoreCase("")){
					aux+="\""+atrbInstancia.getValue()+"\"";
				}
				aux +="]";
				sb.append("\t");sb.append("\t");sb.append(aux);sb.append("\n");			
			}
		}
		
		String salida = sb.toString();
		
		
		return salida;
	}
	
	private String construirArchivoSalida1 (int idProyecto, int idGlosarioConcepto){
//		Busco informacion del concepto en glosario
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		Glosario glosarioConcepto = glosarioDAO.verGlosario(idGlosarioConcepto);
		
		logger.debug("Glosario de Concepto "+glosarioConcepto.toString());
		
//		Busco informacion de las Instancias
		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
		ArrayList<Instancia> instancias = instanciaDAO.listaInstanciaDadoIdGlosarioConcepto(idGlosarioConcepto);
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

	private void leerArchivoCargaMasivas(String entrada){

		String[] splitEntrada =entrada.split(LeerConfig.obtenerPropiedad("archivoSalida.separador2"));
		logger.debug("total de elementos splitEntrada "+splitEntrada.length);
		
//		1. Busco indicador de proyecto
		int auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.Proyecto"));
		int auxOri, auxFin;
		if(auxCont == -1){
//			romper ejecucion
		}
		logger.debug("auxCont -"+auxCont);
		auxCont += LeerConfig.obtenerPropiedad("archivoSalida.Proyecto").length();
		logger.debug("auxCont +"+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.id"), auxCont);
		logger.debug("auxCont ++"+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		
		auxOri = splitEntrada[0].indexOf("\"", auxCont);
		if(auxOri == -1){
//			romper ejecucion
		}
		auxFin = splitEntrada[0].indexOf("\"", auxOri);
		if(auxFin == -1){
//			romper ejecucion
		}		
		String idProyectoString = splitEntrada[0].substring(auxOri, auxFin);
		idProyectoString = idProyectoString.trim();
		int idProyectoInt = 0;
		try {
			idProyectoInt = Integer.parseInt(idProyectoString);
		} catch (Exception e) {
			// TODO: handle exception
//			romper ejecucion
		}
		
//		Consigo el idProyecto
		logger.debug("idProyectoInt "+idProyectoInt);
		
//		Busco idConcepto
		auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.concepto"), auxFin);
		if(auxCont == -1){
//			romper ejecucion
		}		
		logger.debug("auxCont -"+auxCont);
		auxCont += LeerConfig.obtenerPropiedad("archivoSalida.concepto").length();		
		logger.debug("auxCont +"+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.id"), auxCont);
		logger.debug("auxCont ++"+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		
		auxOri = splitEntrada[0].indexOf("\"", auxCont);
		if(auxOri == -1){
//			romper ejecucion
		}
		auxFin = splitEntrada[0].indexOf("\"", auxOri);
		if(auxFin == -1){
//			romper ejecucion
		}	
		String idConceptoString = splitEntrada[0].substring(auxOri, auxFin);
		idProyectoString = idProyectoString.trim();
		int idConceptoInt = 0;
		try {
			idConceptoInt = Integer.parseInt(idConceptoString);
		} catch (Exception e) {
			// TODO: handle exception
//			romper ejecucion
		}		

//		Consigo el idConceptoInt
		logger.debug("idConceptoInt "+idConceptoInt);
		
		for(int i=1;i<splitEntrada.length;i++){
			logger.debug("****************** "+i);
			auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.Nombre"));
			auxCont += LeerConfig.obtenerPropiedad("archivoSalida.Nombre").length();
			auxOri = splitEntrada[i].indexOf("\"", auxCont);
			if(auxOri == -1){
//				romper ejecucion
			}
			auxFin = splitEntrada[i].indexOf("\"", auxOri);
			if(auxFin == -1){
//				romper ejecucion
			}	
			String nombre = splitEntrada[i].substring(auxOri, auxFin);	
			logger.debug("Nombre "+nombre);
			
			auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.Descripcion"), auxFin);
			auxCont += LeerConfig.obtenerPropiedad("archivoSalida.Descripcion").length();
			auxOri = splitEntrada[i].indexOf("\"", auxCont);
			if(auxOri == -1){
//				romper ejecucion
			}
			auxFin = splitEntrada[i].indexOf("\"", auxOri);
			if(auxFin == -1){
//				romper ejecucion
			}	
			String descripcion = splitEntrada[i].substring(auxOri, auxFin);
			logger.debug("descripcion "+descripcion);
			
			auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.valores"), auxFin);
			auxCont += LeerConfig.obtenerPropiedad("archivoSalida.valores").length();
			auxOri = splitEntrada[i].indexOf("[", auxCont);
			if(auxOri == -1){
//				romper ejecucion
			}
			auxFin = splitEntrada[i].indexOf("]", auxOri);
			if(auxFin == -1){
//				romper ejecucion
			}	
			String valores = splitEntrada[i].substring(auxOri, auxFin);
			logger.debug("valores "+valores);
		}
	}
	
    @RequestMapping(value="/upload", method=RequestMethod.GET)
    public @ResponseBody String provideUploadInfo() {
    	logger.debug("entre a la funcion coño2!");
        return "You can upload a file by posting to this same URL.";
    }
 
    @RequestMapping(value="/upload", method=RequestMethod.POST)
    public @ResponseBody String handleFileUpload( @RequestParam("file") MultipartFile file){
    	
    	logger.debug("entre a la funcion coño!");
        try {
            String filePath="C:/temp/";
            StringBuffer result=new StringBuffer();
            byte[] bytes=null;
            result.append("Uploading of File(s) ");

            if (!file.isEmpty()) {
            		logger.debug("file no es vacio "+file.getOriginalFilename());
            		logger.debug(" file.toString() "+ file.toString());
            		logger.debug(" file.getSize() "+ file.getSize());
            		
	    		ByteArrayInputStream stream = new   ByteArrayInputStream(file.getBytes());
	    		String myString = IOUtils.toString(stream, "UTF-8");           		
	    		logger.debug(" myString "+ myString);	
                }
                else
                    result.append( file.getOriginalFilename() + " Failed. ");

            logger.debug("dentro con "+result.toString());

        } catch (Exception e) {
            return "Error Occured while uploading files." + " => " + e.getMessage();
        }    	
    	return "algo";
//        if (!file.isEmpty()) {
//        	logger.debug("file no es null");
//            try {
//                byte[] bytes = file.getBytes();
//                BufferedOutputStream stream =
//                        new BufferedOutputStream(new FileOutputStream(new File(name)));
//                stream.write(bytes);
//                stream.close();
//                return "You successfully uploaded " + name + "!";
//            } catch (Exception e) {
//                return "You failed to upload " + name + " => " + e.getMessage();
//            }
//        } else {
//        	logger.debug("file es null");
//            return "You failed to upload " + name + " because the file was empty.";
//        }
    }	
    
	@RequestMapping(value="/api/proyecto/{idProyecto}/concepto/{idGlosarioConcepto}/donwloadFileInstancias/{cantidadInstancia}", method = RequestMethod.GET)
	public void donwloadInstancias(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosarioConcepto") int idGlosarioConcepto
			,@PathVariable("cantidadInstancia")int cantidadInstancia
			,HttpServletResponse response
			) throws IOException{
		
		logger.trace("*** donwloadInstancias ");
		logger.trace("idProyecto "+idProyecto);
		logger.trace("idGlosarioConcepto "+idGlosarioConcepto);
		logger.trace("cantidadInstancia "+cantidadInstancia);
		
		logger.trace("coño llama a las vainas");
		response.setContentType("application/octet-stream");
		// Response header
		response.setHeader("Content-Disposition", "attachment; filename=\""
				+ LeerConfig.obtenerPropiedad("archivoSalida.nombreDelArchivo") + "\"");
		// Read from the file and write into the response
		OutputStream os = response.getOutputStream();
		PrintStream printStream = new PrintStream(os);
		printStream.print(construirArchivoSalida (idProyecto, idGlosarioConcepto, cantidadInstancia));
		
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
