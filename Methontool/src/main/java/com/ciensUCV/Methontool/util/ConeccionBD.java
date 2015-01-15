/**
 * 
 */
package com.ciensUCV.Methontool.util;

/**
 * @author mitchell
 *En esta clase se tendra la informacion relacionada al acceso a la BD del sistema
 */
public final class ConeccionBD {
	private static String ipBD;
	private static String puertoBD;
	private static String userBD;
	private static String passBD;
	private static String nameBD;
	
	public static String getIpBD() {
		return ipBD;
	}
	public static String getPuertoBD() {
		return puertoBD;
	}
	public static String getUserBD() {
		return userBD;
	}
	public static String getPassBD() {
		return passBD;
	}
	public static String getNameBD() {
		return nameBD;
	}
	
	/*
	 * @author Mitchell Contreras
	 * @version 1.0
	 * @return True consiguio el archivo
	 * @return False no consiguio el archivo
	 */
	public static void leerConfigConeccion(){
		ipBD = LeerConfig.obtenerPropiedad("servidorBD.ip");
		puertoBD = LeerConfig.obtenerPropiedad("servidorBD.puerto");
		userBD = LeerConfig.obtenerPropiedad("servidorBD.user");
		passBD = LeerConfig.obtenerPropiedad("servidorBD.pass");
		nameBD = LeerConfig.obtenerPropiedad("servidorBD.name");
	}
}
