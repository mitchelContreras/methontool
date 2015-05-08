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
		System.out.println("Entro en el main");
		logger.info("entro en main");
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
		
		taxonomia.getConceptosDestino().addToInnerArray(0, 1);
		taxonomia.getConceptosDestino().addToInnerArray(0, 10);
		taxonomia.getConceptosDestino().addToInnerArray(0, 100);
		taxonomia.getConceptosDestino().addToInnerArray(0, 1000);
		taxonomia.getConceptosDestino().addToInnerArray(0, 101);
		taxonomia.getConceptosDestino().addToInnerArray(0, 102);
		taxonomia.getConceptosDestino().addToInnerArray(0, 11);
		logger.trace(" "+taxonomia.getConceptosDestino().get(0).size());
		Integer[] salidaFuncion = taxonomia.getConceptosDestino().returnArr(0);
		
		logger.trace("longitud es "+taxonomia.getConceptosDestino().size());
		logger.trace("salida funcion "+salidaFuncion.length);
		for (int i = 0; i < taxonomia.getConceptosDestino().size(); i++){
			logger.trace("iterando con i "+i);
//			Object[] aux = new Object[taxonomia.getConceptosDestino().get(i).size()];
			Integer[] aux1 = null;
			aux1 = new Integer[taxonomia.getConceptosDestino().get(i).size()];
			aux1 = (Integer[])taxonomia.getConceptosDestino().get(i).toArray();
			for(int j = 0; j < aux1.length; j++){
				logger.trace("dentro de j "+aux1[j]);
			}
		}
		
		
		
		
		taxonomia = taxonomiaDAO.actualizarTaxonomia(1, taxonomia);
		
		
	}

}
