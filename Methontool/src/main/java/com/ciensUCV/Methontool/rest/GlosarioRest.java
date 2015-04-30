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

import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.TipoGlosario;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.rest.model.ElementosMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.LeerConfig;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

@Controller
public class GlosarioRest {

	private static final Logger logger = LoggerFactory.getLogger(GlosarioRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/glosario", method = RequestMethod.GET)
	public @ResponseBody ElementosMensaje<Glosario> listarGlosario(@PathVariable("idProyecto") int idProyecto){
		logger.info("el id es "+idProyecto);
		ElementosMensaje<Glosario> elementosMensaje = new ElementosMensaje<Glosario> ();
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		try {
			elementosMensaje.setElementos(glosarioDAO.listarGlosario(idProyecto));
			logger.info("Cantidad de la lista es "+elementosMensaje.getElementos().size());
			elementosMensaje.setSucces(true);
		} catch (Exception e) {
			// TODO: handle exception
			elementosMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0050", null, "Error al traer datos de BD");
			elementosMensaje.getListaError().add(enviarError);
		}
		return elementosMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/glosario/{idGlosario}", method = RequestMethod.GET)
	public @ResponseBody ElementoMensaje<Glosario> verGlosario(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosario") int idGlosario){
		logger.info("el idProyecto es "+idProyecto);
		logger.info("el idGlosario es "+idGlosario);
		ElementoMensaje<Glosario> elementoMensaje = new ElementoMensaje<Glosario> ();
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		try {
			elementoMensaje.setElemento(glosarioDAO.verGlosario(idProyecto, idGlosario));
			elementoMensaje.setSucces(true);
		} catch (Exception e) {
			// TODO: handle exception
			elementoMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0050", null, "Error al traer datos de BD");
			elementoMensaje.getListaError().add(enviarError);
		}
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/glosario", method = RequestMethod.POST)
	public @ResponseBody ElementoMensaje<Glosario> crearGlosario(
			@PathVariable("idProyecto") int idProyecto
			,@RequestParam(value = "nombre") String nombre
	        ,@RequestParam(value = "tipoGlosario") String tipoGlosario
	        ,@RequestParam(value = "descripcion") String descripcion
	        ,@RequestParam(value = "sinonimo") String sinonimo
	        ,@RequestParam(value = "acronimo") String acronimo
			){
		logger.info("el id es "+idProyecto);
		logger.info("el nombre es "+nombre);
		logger.info("el tipoGlosario es "+tipoGlosario);
		logger.info("el descripcion es "+descripcion);
		logger.info("el sinonimo es "+sinonimo);
		logger.info("el acronimo es "+acronimo);
		Glosario glosario = 
				new Glosario(
						null, 
						nombre, 
						null, 
						null,
						descripcion,
						new TipoGlosario (
								Integer.parseInt(tipoGlosario), 
								null, 
								null, 
								null));
					glosario.sinonimosStringToArray(sinonimo);
					glosario.acronimosStringToArray(acronimo);
		ElementoMensaje<Glosario> elementoMensaje = new ElementoMensaje<Glosario> ();
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		try {
			elementoMensaje.setElemento(glosarioDAO.crearGlosario(idProyecto, glosario));
			logger.info("EL id es "+glosario.getId());
			elementoMensaje.setSucces(true);
		} catch (Exception e) {
			// TODO: handle exception
			elementoMensaje.setSucces(false);
			ErrorEnviar enviarError;
			enviarError = new ErrorEnviar("0051", null, "Error al insertar en BD");
			elementoMensaje.getListaError().add(enviarError);
		}
		return elementoMensaje;
	}
	
	@RequestMapping(value="/api/proyecto/{idProyecto}/glosario/{idGlosario}", method = RequestMethod.PUT)
	public @ResponseBody ElementoMensaje<Glosario> actualizarGlosario(
			@PathVariable("idProyecto") int idProyecto
			,@PathVariable("idGlosario") int idGlosario
			,@RequestParam(value = "nombre") String nombre
	        ,@RequestParam(value = "tipoGlosario") String tipoGlosario
	        ,@RequestParam(value = "descripcion") String descripcion
	        ,@RequestParam(value = "sinonimo") String sinonimo
	        ,@RequestParam(value = "acronimo") String acronimo
			){
		logger.info("el idProyecto es "+idProyecto);
		logger.info("el idGlosario es "+idGlosario);
		logger.info("el nombre es "+nombre);
		logger.info("el tipoGlosario es "+tipoGlosario);
		logger.info("el descripcion es "+descripcion);
		logger.info("el sinonimo es "+sinonimo);
		logger.info("el acronimo es "+acronimo);
		ElementoMensaje<Glosario> elementoMensaje = new ElementoMensaje<Glosario> ();
		String salida = null;
		Glosario glosario = 
				new Glosario(
						String.valueOf(idGlosario), 
						nombre, 
						null, 
						null,
						descripcion,
						new TipoGlosario (
								Integer.parseInt(tipoGlosario), 
								null, 
								null, 
								null));
					glosario.sinonimosStringToArray(sinonimo);
					glosario.acronimosStringToArray(acronimo);
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		try {
			salida = glosarioDAO.actualizarGlosario(glosario);
			if(salida.equalsIgnoreCase(glosario.getId())){
				elementoMensaje.setSucces(true);
				elementoMensaje.setElemento(glosario);
			}else{
				elementoMensaje.setSucces(false);
				//Debo desarrollar aca como manejar el error enviado por el guardar en BD
			}
			logger.info("EL id es "+glosario.getId());
			elementoMensaje.setSucces(true);
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
