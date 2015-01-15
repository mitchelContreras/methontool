/*
 *Aca se encontraran la logica de validar un usuario 
 */
package com.ciensUCV.Methontool.controller;


import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ciensUCV.Methontool.util.ConeccionBD;
import com.ciensUCV.Methontool.util.LeerConfig;

/**
 * @author mitchell
 *
 */
@Controller
public class LoginController {

	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Dentro de home ");
		LeerConfig.cargarConfig();
		ConeccionBD.leerConfigConeccion();

		return "login";
	}
	
	
	
}
