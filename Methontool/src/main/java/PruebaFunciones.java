import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.dao.ProyectoDAO;
import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.model.Proyecto;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;



public class PruebaFunciones {

	private static final Logger logger = LoggerFactory.getLogger(PruebaFunciones.class);
	static ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
//--------------Prueba de actualizar proyecto -----------------------------		
//		ProyectoDAO proyectoDAO = (ProyectoDAO) context.getBean("proyectoDAO");
//		Proyecto proyecto = new Proyecto();
//		proyecto.setIdProyecto(Integer.parseInt("2"));
//		proyecto.setNombre("nombre");
//		proyecto.fuenteConocimientoStringToArray("fuenteConocimiento");
//		proyecto.setDominio("dominio");
//		proyecto.setAlcance("alcance");
//		proyecto.setProposito("proposito");
//		proyecto.preguntasCompetenciaStringToArray("preguntasCompetencia");
//		proyecto.desarrolladoresStringToArray("desarrolladores");
//		proyecto.setFecha("02/04/1970");
//		proyecto.setNivelFormalidad(new NivelFormalidad(1,"bla", "bla", "bla"));
//		logger.info("antes de llamar a actualziar");
//		int salida = proyectoDAO.actualizarProyecto(proyecto);
//		logger.info("salida es "+salida);
//------------------Fin----------------------
		
//-------------------Prueba de ElementoMensaje---------------------		
//		Proyecto proyecto = new Proyecto();
//		proyecto.setIdProyecto(Integer.parseInt("2"));
//		proyecto.setNombre("nombre");
//		proyecto.fuenteConocimientoStringToArray("fuenteConocimiento");
//		proyecto.setDominio("dominio");
//		proyecto.setAlcance("alcance");
//		proyecto.setProposito("proposito");
//		proyecto.preguntasCompetenciaStringToArray("preguntasCompetencia");
//		proyecto.desarrolladoresStringToArray("desarrolladores");
//		proyecto.setFecha("02/04/1970");
//		proyecto.setNivelFormalidad(new NivelFormalidad(1,"bla", "bla", "bla"));
//		ElementoMensaje<Proyecto> prueba;
//		prueba = new ElementoMensaje<Proyecto> (proyecto);
//		System.out.println("Prueba de template el nombre del proyecto= "+prueba.getElemento().getNombre());
//		
		
		logger.trace("En pruebaFunciones");
		Taxonomia taxonomia = new Taxonomia(); 
		TaxonomiaDAO taxonomiaDAO = (TaxonomiaDAO) context.getBean("taxonomiaDAO");
		
		taxonomia.setConceptoOrigen(1);
//		taxonomia.getRelaciones().add("desDisjunta");
//		taxonomia.getConceptosDestino().addToInnerArray(0, 4);
//		taxonomia.getConceptosDestino().addToInnerArray(0, 6);
//		taxonomia.getRelaciones().add("desExhaustiva");
//		taxonomia.getConceptosDestino().addToInnerArray(1, 7);
//		taxonomia.getRelaciones().add("particion");
//		taxonomia.getConceptosDestino().addToInnerArray(2, 9);
//		taxonomia.getRelaciones().add("subClase");
//		taxonomia.getConceptosDestino().addToInnerArray(3, 9);
		
//		taxonomia.getRelaciones().add("desDisjunta");
//		taxonomia.getRelaciones().add("desExhaustiva");
//		taxonomia.getRelaciones().add("particion");
//		taxonomia.getRelaciones().add("subClase");
		
//		taxonomia.getConceptosDestino().addToInnerArray(0, 4);
//		taxonomia.getConceptosDestino().addToInnerArray(0, 6);	
//		taxonomia.getConceptosDestino().addToInnerArray(1, 4);
//		taxonomia.getConceptosDestino().addToInnerArray(1, 6);
//		taxonomia.getConceptosDestino().addToInnerArray(2, 4);
//		taxonomia.getConceptosDestino().addToInnerArray(2, 6);	
//		taxonomia.getConceptosDestino().addToInnerArray(3, 4);
//		taxonomia.getConceptosDestino().addToInnerArray(3, 6);	
//		int salida = taxonomiaDAO.actualizarTaxonomia(1, taxonomia);
		
		
	}

}
