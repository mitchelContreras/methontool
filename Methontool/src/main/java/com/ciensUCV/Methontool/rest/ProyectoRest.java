package com.ciensUCV.Methontool.rest;

import java.text.SimpleDateFormat;
import java.util.Date;

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

import com.ciensUCV.Methontool.dao.ProyectoDAO;
import com.ciensUCV.Methontool.model.Proyecto;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.rest.model.ProyectoMensaje;
import com.ciensUCV.Methontool.rest.model.ProyectosMensaje;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class ProyectoRest {

	private static final Logger logger = LoggerFactory.getLogger(ProyectoRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/usuario/{id}/proyecto", method = RequestMethod.GET)
	public @ResponseBody ProyectosMensaje listarProyectos(@PathVariable("id") int idUsuario){
		ProyectosMensaje proyectosMensaje = new ProyectosMensaje ();
		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
		try {
			proyectosMensaje.setProyectos(proyectoDAO.listarProyectos(idUsuario));
			proyectosMensaje.setSucces(true);
		} catch (Exception e) {
			// TODO: handle exception
			proyectosMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0050", null, "Error al traer datos de BD");
			proyectosMensaje.getListaError().add(enviarError);
		}
		return proyectosMensaje;
	}
	
	@RequestMapping(value="/api/usuario/{idUsuario}/proyecto/{idProyecto}", method = RequestMethod.GET)
	public @ResponseBody ProyectoMensaje verProyecto(@PathVariable("idUsuario") int idUsuario, @PathVariable("idProyecto") int idProyecto){

		ProyectoMensaje proyectoMensaje = new ProyectoMensaje ();
		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
		try {
			proyectoMensaje.setProyecto(proyectoDAO.verProyecto(idUsuario, idProyecto));
			proyectoMensaje.setSucces(true);
		} catch (Exception e) {
			// TODO: handle exception
			proyectoMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0051", null, "Error al traer datos de BD");
			proyectoMensaje.getListaError().add(enviarError);
		}
		return proyectoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto", method = RequestMethod.POST, 
			params = {"nombre", "fuenteConocimiento", "dominio", "proposito", "alcance", "preguntasCompetencia", "fecha", "idNivelFormalidad", "idUsuario"})
	public @ResponseBody ProyectoMensaje crearProyecto(
            @RequestParam(value = "nombre") String nombre,
            @RequestParam(value = "fuenteConocimiento") String fuenteConocimiento,
            @RequestParam(value = "dominio") String dominio,
            @RequestParam(value = "proposito") String proposito,
            @RequestParam(value = "alcance") String alcance,
            @RequestParam(value = "preguntasCompetencia") String preguntasCompetencia,
            @RequestParam(value = "fecha") String fecha,
            @RequestParam(value = "idNivelFormalidad") int idNivelFormalidad,
            @RequestParam(value = "idUsuario") String idUsuario
            ){

//		logger.info("El usuario es "+idUsuario.length);
		logger.info("El nombre es "+nombre);
		logger.info("El fuenteConocimiento es "+fuenteConocimiento);
		logger.info("El dominio es "+dominio);
		logger.info("El proposito es "+proposito);
		logger.info("El alcance es "+alcance);
		logger.info("El preguntasCompetencia es "+preguntasCompetencia);
		logger.info("El fecha es "+fecha);
		logger.info("El idNivelFormalidad es "+idNivelFormalidad);
		logger.info("El idUsuario es "+idUsuario);
		
		ProyectoMensaje proyectoMensaje = new ProyectoMensaje ();
		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
		Proyecto proyecto = new Proyecto();
		proyecto.setNombre(nombre);
		proyecto.setFuenteConocimiento(fuenteConocimiento);
		proyecto.setDominio(dominio);
		proyecto.setAlcance(alcance);
		proyecto.setProposito(proposito);
		proyecto.preguntasCompetenciaStringToArray(preguntasCompetencia);
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
			Date fechaDate = sdf.parse(fecha);
			proyecto.setFecha(fechaDate);
		} catch (Exception e) {
			// TODO: handle exception
			logger.info("Error al parsear la fecha");
			proyecto.setFecha(null);
		}
		proyecto.getNivelFormalidad().setIdNivelFormalidad(idNivelFormalidad);
		
		idUsuario = idUsuario.replace("[", "");
		idUsuario = idUsuario.replace("]", "");
		logger.info("idUsuario es "+idUsuario);
		String aux [] = idUsuario.split(",");
		logger.info("longitud es "+aux.length);
		int arrayUsuario [] = new int [aux.length];
		for(int i = 0; i<aux.length;i++){
			arrayUsuario[i] = Integer.parseInt(aux[i]);
		}
		int salida;
		
		//Debo borrar los corcheste y separar por ',' idUsuario para obtener los ID
		try {
			salida = proyectoDAO.crearProyecto(proyecto, arrayUsuario);
			proyectoMensaje.setProyecto(proyecto);
			if(salida == -1){
				proyectoMensaje.setSucces(false);
				ErrorEnviar enviarError;
				enviarError = new ErrorEnviar("0101", null, "Error al Crear proyecto en BD");
				proyectoMensaje.getListaError().add(enviarError);
			}else{
				proyectoMensaje.setSucces(true);
			}
		} catch (Exception e) {
			// TODO: handle exception
			proyectoMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0101", null, "Error al Crear proyecto en BD");
			proyectoMensaje.getListaError().add(enviarError);
		}
		return proyectoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{id}", method = RequestMethod.PUT, 
			params = {"nombre", "fuenteConocimiento", "dominio", "proposito", "alcance", "preguntasCompetencia", "fecha", "idNivelFormalidad", "idUsuario"})
	public @ResponseBody ProyectoMensaje actualizarProyecto(
            @RequestParam(value = "nombre") String nombre,
            @RequestParam(value = "fuenteConocimiento") String fuenteConocimiento,
            @RequestParam(value = "dominio") String dominio,
            @RequestParam(value = "proposito") String proposito,
            @RequestParam(value = "alcance") String alcance,
            @RequestParam(value = "preguntasCompetencia") String preguntasCompetencia,
            @RequestParam(value = "fecha") String fecha,
            @RequestParam(value = "idNivelFormalidad") int idNivelFormalidad,
            @RequestParam(value = "idUsuario") String idUsuario,
            @PathVariable("id") int idProyecto
            ){

		logger.info("El nombre es "+nombre);
		logger.info("El fuenteConocimiento es "+fuenteConocimiento);
		logger.info("El dominio es "+dominio);
		logger.info("El proposito es "+proposito);
		logger.info("El alcance es "+alcance);
		logger.info("El preguntasCompetencia es "+preguntasCompetencia);
		logger.info("El fecha es "+fecha);
		logger.info("El idNivelFormalidad es "+idNivelFormalidad);
		logger.info("El idUsuario es "+idUsuario);
		logger.info("El idProyecto es "+idProyecto);
		
		ProyectoMensaje proyectoMensaje = new ProyectoMensaje ();
		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
		Proyecto proyecto = new Proyecto();
		proyecto.setIdProyecto(idProyecto);
		proyecto.setNombre(nombre);
		proyecto.setFuenteConocimiento(fuenteConocimiento);
		proyecto.setDominio(dominio);
		proyecto.setAlcance(alcance);
		proyecto.setProposito(proposito);
		proyecto.preguntasCompetenciaStringToArray(preguntasCompetencia);
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
			Date fechaDate = sdf.parse(fecha);
			proyecto.setFecha(fechaDate);
		} catch (Exception e) {
			// TODO: handle exception
			logger.info("Error al parsear la fecha");
			proyecto.setFecha(null);
		}
		proyecto.getNivelFormalidad().setIdNivelFormalidad(idNivelFormalidad);
		
		idUsuario = idUsuario.replace("[", "");
		idUsuario = idUsuario.replace("]", "");
		logger.info("idUsuario es "+idUsuario);
		String aux [] = idUsuario.split(",");
		logger.info("longitud es "+aux.length);
		int arrayUsuario [] = new int [aux.length];
		for(int i = 0; i<aux.length;i++){
			arrayUsuario[i] = Integer.parseInt(aux[i]);
		}
		int salida;
		
		//Debo borrar los corcheste y separar por ',' idUsuario para obtener los ID
		try {
			salida = proyectoDAO.actualizarProyecto(proyecto, arrayUsuario);
			proyectoMensaje.setProyecto(proyecto);
			if(salida == -1){
				proyectoMensaje.setSucces(false);
				ErrorEnviar enviarError;
				enviarError = new ErrorEnviar("0101", null, "Error al Crear proyecto en BD");
				proyectoMensaje.getListaError().add(enviarError);
			}else{
				proyectoMensaje.setSucces(true);
			}
		} catch (Exception e) {
			// TODO: handle exception
			proyectoMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0101", null, "Error al Crear el proyecto en BD");
			proyectoMensaje.getListaError().add(enviarError);
		}
		return proyectoMensaje;
	}	
	
	@RequestMapping(value="/api/proyecto/{id}", method = RequestMethod.DELETE)
	public @ResponseBody ProyectoMensaje eliminarProyecto(@PathVariable("id") int idProyecto){

		ProyectoMensaje proyectoMensaje = new ProyectoMensaje ();
		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
		Proyecto proyecto = new Proyecto();
		proyecto.setIdProyecto(idProyecto);
		int salida = -1;
		try {
			salida = proyectoDAO.eliminarProyecto(proyecto.getIdProyecto());
			if(salida == -1){
				proyectoMensaje.setSucces(false);
				ErrorEnviar enviarError;
				enviarError = new ErrorEnviar("0151", null, "Error al Eliminar el proyecto en BD");
				proyectoMensaje.getListaError().add(enviarError);
			}else{
				proyectoMensaje.setSucces(true);
			}
		} catch (Exception e) {
			proyectoMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0151", null, "Error al Eliminar el proyecto en BD");
			proyectoMensaje.getListaError().add(enviarError);
		}
		return proyectoMensaje;
	}

}
