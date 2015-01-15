package com.ciensUCV.Methontool.util;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * @author Mitchell Contreras
 * @version 1.0
 *  Lee el archivo .config deja properti publico para ser usado por todas las clases
 */
public class LeerConfig {
	
	private static final Logger logger = LoggerFactory.getLogger(LeerConfig.class);
	
	public static String direccionConfig = "/propiedades.config"; 
	private static Properties prop;
	
	/*
	 * @author Mitchell Contreras
	 * @version 1.0
	 * @return True consiguio el archivo
	 * @return False no consiguio el archivo
	 * cargarConfig: Se conecta al archivo property y deja en prop la inf del property
	 */
	public static boolean cargarConfig(){
		logger.info("Estoy en  cargarConfig");
		try {
			prop = new Properties();
			InputStream is = null;
			is = new FileInputStream(LeerConfig.class.getResource(direccionConfig).getFile());
			prop.load(is);
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("No pude leer el config");
			logger.error("     "+e);
			return false;
		}
	}
	
	/*
	 * @author Mitchell Contreras
	 * @version 1.0
	 * @return null propiedad no existe
	 * @return String si propidad existe
	 * @param propiedad: propiedad a buscar
	 * obtenerPropiedad: Dada una propiedad la busca en el documento config 
	 */
	public static String obtenerPropiedad(String propiedad){
		try {
			return prop.getProperty(propiedad);
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("No consigo la propiedad "+propiedad);
			logger.error("     "+e);
			return null;
		}
	}
}
