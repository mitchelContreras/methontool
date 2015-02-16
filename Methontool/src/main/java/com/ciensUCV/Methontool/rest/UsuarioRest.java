package com.ciensUCV.Methontool.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ciensUCV.Methontool.dao.RolUsuarioDAO;
import com.ciensUCV.Methontool.dao.UsuarioDAO;
import com.ciensUCV.Methontool.model.Usuario;
import com.ciensUCV.Methontool.rest.model.UsuarioMensaje;
import com.ciensUCV.Methontool.rest.model.ErrorEnviar;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;


@Controller
public class UsuarioRest {

	private static final Logger logger = LoggerFactory.getLogger(UsuarioRest.class);
	ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	@RequestMapping(value="/usuario", method = RequestMethod.GET)
	public @ResponseBody Usuario usuarioDadoId(@RequestParam(value="idUsuario", required=true) int idUsuario){
		logger.debug("entro en rest usuario con "+idUsuario);
		Usuario usuario = new Usuario();
		usuario.setIdUsuario(idUsuario);
		usuario.setNombre("Mitchell");
		usuario.setApellido("Contreras");
		return usuario;
	}
	
	@RequestMapping(value="/usuarioDadoCorreo", method = RequestMethod.GET)
	public @ResponseBody Usuario usuarioDadoCorreo(@RequestParam(value="correo", required=true) String correo){
		logger.debug("entro en rest usuario con "+correo);
		Usuario usuario = new Usuario();
		
        UsuarioDAO usuarioDAO = (UsuarioDAO) context.getBean("usuarioDAO");
        usuario = usuarioDAO.buscarByCorreo(correo);
        if(usuario != null){
            RolUsuarioDAO rolusuarioDAO = (RolUsuarioDAO) context.getBean("rolUsuarioDAO");
            usuario.setRolUsuario(rolusuarioDAO.
            		buscarByRolUsuarioId(usuario.getRolUsuario().getIdRolUsuario()));
            		usuario.setContrasena("");
            logger.info(usuario.toString());
        }
		return usuario;
	}
	/*
	 * @User: Mitchell Contreras
	 * @Param correo: correo del usuario
	 * @Param pass: password del usuario
	 */
	@RequestMapping(value="/api/usuario/validarUsuario", method = RequestMethod.GET)
	public @ResponseBody UsuarioMensaje validarUsuario(@RequestParam(value="correo", required=true) String correo, 
			@RequestParam(value="pass", required=true) String pass){
		
		logger.info("entro en validarUsuario con correo="+correo+" con pass="+pass);
		Usuario usuario = new Usuario();
		UsuarioMensaje usuarioMensaje = new UsuarioMensaje ();
		ErrorEnviar errorEnviar;
		
        UsuarioDAO usuarioDAO = (UsuarioDAO) context.getBean("usuarioDAO");
        usuario = usuarioDAO.buscarByCorreo(correo);
//        logger.info("Usuario es "+usuario.toString());
        if(usuario == null){
        	logger.info("Usuario es null");
        	usuarioMensaje.setSucces(false);
        	errorEnviar = new ErrorEnviar("0001", "correo", "Usuario o Correo incorrecto");
        	usuarioMensaje.getListaError().add(errorEnviar);
        }else{
            RolUsuarioDAO rolusuarioDAO = (RolUsuarioDAO) context.getBean("rolUsuarioDAO");
            usuario.setRolUsuario(rolusuarioDAO.
            		buscarByRolUsuarioId(usuario.getRolUsuario().getIdRolUsuario()));
            logger.info(usuario.toString());
            
            if(usuario.getContrasena().equals(pass)){
            	logger.info("Usuario valido");
            	usuarioMensaje.setSucces(true);
            	usuario.setContrasena("");
            	usuarioMensaje.setUsuario(usuario);
            }else{
            	logger.info("Usuario es invalido");
            	usuarioMensaje.setSucces(false);
            	errorEnviar = new ErrorEnviar("0002", "correo", "Usuario o Correo incorrecto");
            	usuarioMensaje.getListaError().add(errorEnviar);
            }
        }
        logger.info(usuarioMensaje.toString());
        
		return usuarioMensaje;
	}
}
