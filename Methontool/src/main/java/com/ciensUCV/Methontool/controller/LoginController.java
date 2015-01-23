/*
 *Aca se encontraran la logica de validar un usuario 
 */
package com.ciensUCV.Methontool.controller;


import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ciensUCV.Methontool.dao.RolUsuarioDAO;
import com.ciensUCV.Methontool.dao.UsuarioDAO;
import com.ciensUCV.Methontool.model.RolUsuario;
import com.ciensUCV.Methontool.model.Usuario;
//import com.ciensUCV.Methontool.util.ConeccionBD;
//import com.ciensUCV.Methontool.util.LeerConfig;



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
//		LeerConfig.cargarConfig();
//		ConeccionBD.leerConfigConeccion();
		
		//Agregado
    	ApplicationContext context = 
    		new ClassPathXmlApplicationContext("Spring-Module.xml");
 
//    	RolUsuarioDAO rolUsuarioDao = (RolUsuarioDAO) context.getBean("rolUsuarioDAO");
// 
//    	RolUsuario rolUsuario = rolUsuarioDao.buscarByRolUsuarioId(1);
//        logger.info(rolUsuario.toString());
    	UsuarioDAO usuarioDAO = (UsuarioDAO) context.getBean("usuarioDAO");
    	Usuario usuario = usuarioDAO.buscarByCorreo("mitchellcontreras@gmail.com");
    	logger.info(usuario.toString());
		return "pruebaAjaxAngularJS";
	}
}
