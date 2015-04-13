import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ciensUCV.Methontool.dao.ProyectoDAO;
import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.model.Proyecto;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;



public class PruebaFunciones {

	private static final Logger logger = LoggerFactory.getLogger(PruebaFunciones.class);
	static ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		logger.info("entro en main");
		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
		Proyecto proyecto = new Proyecto();
		proyecto.setIdProyecto(Integer.parseInt("2"));
		proyecto.setNombre("nombre");
		proyecto.fuenteConocimientoStringToArray("fuenteConocimiento");
		proyecto.setDominio("dominio");
		proyecto.setAlcance("alcance");
		proyecto.setProposito("proposito");
		proyecto.preguntasCompetenciaStringToArray("preguntasCompetencia");
		proyecto.desarrolladoresStringToArray("desarrolladores");
		proyecto.setFecha("02/04/1970");
		proyecto.setNivelFormalidad(new NivelFormalidad(1,"bla", "bla", "bla"));
		logger.info("antes de llamar a actualziar");
		int salida = proyectoDAO.actualizarProyecto(proyecto);
		logger.info("salida es "+salida);
		
	}

}
