import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.semanticweb.owlapi.model.OWLOntologyCreationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ciensUCV.Methontool.dao.AtributoClaseDAO;
import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.dao.AxiomaDAO;
import com.ciensUCV.Methontool.dao.ConceptoDAO;
import com.ciensUCV.Methontool.dao.ConstanteDAO;
import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.dao.InstanciaDAO;
import com.ciensUCV.Methontool.dao.InstanciadoDAO;
import com.ciensUCV.Methontool.dao.MedidaDAO;
import com.ciensUCV.Methontool.dao.ProyectoDAO;
import com.ciensUCV.Methontool.dao.ReglaDAO;
import com.ciensUCV.Methontool.dao.RelacionDAO;
import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.dao.TipoDeDatoDAO;
import com.ciensUCV.Methontool.export.ExportarOWL;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.Constante;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.model.Instanciado;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.model.Proyecto;
import com.ciensUCV.Methontool.model.Relacion;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.model.TipoDeDato;
import com.ciensUCV.Methontool.rest.model.ElementoMensaje;
import com.ciensUCV.Methontool.util.LeerConfig;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;



public class PruebaFunciones {

	private static final Logger logger = LoggerFactory.getLogger(PruebaFunciones.class);
	static ApplicationContext context = 
    		new ClassPathXmlApplicationContext(VariablesConfiguracion.rutaArchivoSpringDaoImpl);
	
	private static void leerArchivoCargaMasivas(String entrada){

		String[] splitEntrada =entrada.split(LeerConfig.obtenerPropiedad("archivoSalida.separador"));
//		logger.debug("total de elementos splitEntrada "+splitEntrada.length);
		
//		1. Busco indicador de proyecto
		int auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.Proyecto"));
		int auxOri, auxFin;
		if(auxCont == -1){
//			romper ejecucion
		}
//		logger.debug("auxCont - "+auxCont);
		auxCont += LeerConfig.obtenerPropiedad("archivoSalida.Proyecto").length();
//		logger.debug("auxCont + "+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.id"), auxCont);
//		logger.debug("auxCont ++"+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		
		auxOri = splitEntrada[0].indexOf("\"", (auxCont+1));
		if(auxOri == -1){
//			romper ejecucion
		}
		auxFin = splitEntrada[0].indexOf("\"", (auxOri+1));
		if(auxFin == -1){
//			romper ejecucion
		}		
		String idProyectoString = splitEntrada[0].substring((auxOri+1), auxFin);
//		logger.trace("idProyectoString "+idProyectoString);
		idProyectoString = idProyectoString.trim();
		int idProyectoInt = 0;
		try {
			idProyectoInt = Integer.parseInt(idProyectoString);
		} catch (Exception e) {
			// TODO: handle exception
//			romper ejecucion
		}
		
//		Consigo el idProyecto
//		logger.debug("auxOri "+auxOri+" auxFin "+auxFin);
		logger.debug("idProyectoInt "+idProyectoInt);
		
		
//		Busco idConcepto
		auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.concepto"), auxFin);
		if(auxCont == -1){
//			romper ejecucion
		}		
//		logger.debug("auxCont -"+auxCont);
		auxCont += LeerConfig.obtenerPropiedad("archivoSalida.concepto").length();		
//		logger.debug("auxCont +"+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		auxCont = splitEntrada[0].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.id"), auxCont);
//		logger.debug("auxCont ++"+auxCont);
		if(auxCont == -1){
//			romper ejecucion
		}
		
		auxOri = splitEntrada[0].indexOf("\"", (auxCont+1));
		if(auxOri == -1){
//			romper ejecucion
		}
		auxFin = splitEntrada[0].indexOf("\"", (auxOri+1));
		if(auxFin == -1){
//			romper ejecucion
		}	
		String idConceptoString = splitEntrada[0].substring((auxOri+1), auxFin);
		idProyectoString = idProyectoString.trim();
		int idConceptoInt = 0;
		try {
			idConceptoInt = Integer.parseInt(idConceptoString);
		} catch (Exception e) {
			// TODO: handle exception
//			romper ejecucion
		}		

//		Consigo el idConceptoInt
//		logger.debug("auxOri "+auxOri+" auxFin "+auxFin);
		logger.debug("idConceptoInt "+idConceptoInt);
		
		for(int i=1;i<splitEntrada.length;i++){
			logger.debug("****************** "+i);
			auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.Nombre"));
			auxOri = splitEntrada[i].indexOf("\"", (auxCont+1));
			if(auxOri == -1){
//				romper ejecucion
			}
			
			auxFin = splitEntrada[i].indexOf("\"", (auxOri+1));
			if(auxFin == -1){
//				romper ejecucion
			}	
			
			String nombre = splitEntrada[i].substring((auxOri+1), auxFin);	
//			logger.debug("auxOri "+auxOri+" auxFin "+auxFin);
			logger.debug("Nombre "+nombre);
			
			auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.Descripcion"), auxFin);
			auxOri = splitEntrada[i].indexOf("\"", (auxCont+1));
			if(auxOri == -1){
//				romper ejecucion
			}
			
			auxFin = splitEntrada[i].indexOf("\"", (auxOri+1));
			if(auxFin == -1){
//				romper ejecucion
			}	

			String descripcion = splitEntrada[i].substring((auxOri+1), auxFin);
			logger.debug("descripcion "+descripcion);
			
//			logger.debug("auxOri "+auxOri+" auxFin "+auxFin);
//			logger.debug("splitEntrada[i].length "+splitEntrada[i].length());
			auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.AtributoInstancia"), (auxFin+1)); 
//			String imprimir;
//			logger.debug("auxCont1: "+auxCont);
			
			
			while(auxCont != -1){
				logger.debug("_____________________________________________________________");
				if(auxCont == -1){
//					romper ejecucion
				}
				auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.id"), auxCont+1);
//				imprimir = splitEntrada[i].substring(auxCont, auxCont+15);logger.debug("imprimir "+imprimir);
				auxOri = splitEntrada[i].indexOf("\"", (auxCont+1));
				if(auxOri == -1){
//					romper ejecucion
				}
				
				auxFin = splitEntrada[i].indexOf("\"", (auxOri+1));
				if(auxFin == -1){
//					romper ejecucion
				}
//				imprimir = splitEntrada[i].substring(auxOri+1, auxFin);logger.debug("imprimir "+imprimir);
				idConceptoString = splitEntrada[i].substring((auxOri+1), auxFin);
				idProyectoString = idProyectoString.trim();
				idConceptoInt = 0;
				try {
					idConceptoInt = Integer.parseInt(idConceptoString);
				} catch (Exception e) {
					// TODO: handle exception
//					romper ejecucion
				}
				
//				ID atrbInstancia1
				logger.debug("idAtrbInst "+idConceptoInt);
				
				auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.valores"), auxFin+1);
//				imprimir = splitEntrada[i].substring(auxCont, auxCont+15);logger.debug("imprimir "+imprimir);
				auxOri = splitEntrada[i].indexOf("[", (auxCont+1));
				if(auxOri == -1){
//					romper ejecucion
				}
				
				auxFin = splitEntrada[i].indexOf("]", (auxOri+1));
				if(auxFin == -1){
//					romper ejecucion
				}
				String valores = splitEntrada[i].substring(auxOri+1, auxFin);
				logger.debug("valores "+valores);
				
				auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.AtributoInstancia"), (auxFin+1)); 
//				logger.debug("***auxCont: "+auxCont);
			}
//			auxCont = splitEntrada[i].indexOf(LeerConfig.obtenerPropiedad("archivoSalida.valores"), auxFin);
//			auxCont += LeerConfig.obtenerPropiedad("archivoSalida.valores").length();
//			auxOri = splitEntrada[i].indexOf("[", auxCont);
//			if(auxOri == -1){
////				romper ejecucion
//			}
//			auxFin = splitEntrada[i].indexOf("]", auxOri);
//			if(auxFin == -1){
////				romper ejecucion
//			}	
//			String valores = splitEntrada[i].substring(auxOri, auxFin);
//			logger.debug("valores "+valores);
		}
	}
	
	public static void main(String[] args) {
		
		String archivo = "Llena bien esta vaina, deja el sabotaje. Solo edita los campos correspondientes."+
				"Debe llenar solo los campo valores  de los atributos, tiene formato JSON. Es un arreglo [] separados por ','. Quedara [\"A\",\"B\",\"C\",\"D\"]"+

				"___Proyecto"+
				"Id: \"123\""+
				"Nombre: proyectoPrueba"+

				"___CONCEPTO"+
				"Id: \"789\""+
				"Nombre: Artrópodos"+
				"Descripcion: Son animales invertebrados, de cuerpo cpm so,etría bilateral, cubierto por cutícula, formado por una serie lineal de segmentos más o menos ostensibles y provistos de apéndices compuestos de piezas articuladas o artejos"+


				"___________________________________________________ "+
				"___INSTANCIA 1"+
				"Nombre:\"Nombre de la instancia 1\""+
				"Descripcion:\"Descripcion de la instancia 1\""+

				"	___ATRIBUTO INSTANCIA"+
				"		Id: \"24\""+
				"		Nombre: atrbInstancia3"+
				"		Descripcion: atrbInstancia3"+
				"		Precision: precision"+
				"		Rango valores: rango valores"+
				"		Cardinalidad: [CardMin;CardMAx]"+
				"		Valores:  [\"valor24\"]"+

				"	___ATRIBUTO INSTANCIA"+
				"		Id: \"25\""+
				"		Nombre: atrbInstancia4"+
				"		Descripcion: atrbInstancia4"+
				"		Precision: precision"+
				"		Rango valores: rangoValores"+
				"		Cardinalidad: [cardinalidadMin;cardinalidadMax]"+
				"		Valores:  [\"valor25\"]"+

				"	___ATRIBUTO INSTANCIA"+
				"		Id: \"23\""+
				"		Nombre: atrbInstancia2"+
				"		Descripcion: atrbInstancia2 -----mas masm as"+
				"		Precision: Mitchell te amo"+
				"		Rango valores: 1..10000"+
				"		Cardinalidad: [1;n]"+
				"		Valores:  [\"valor23\"]"+

				"___________________________________________________ "+
				"___INSTANCIA 2"+
				"Nombre:\"nombre isntancia2\""+
				"Descripcion:\" descripcion instancia2\""+
				"	___ATRIBUTO INSTANCIA"+
				"		Id: \"27\""+
				"		Nombre: atrbInstancia3"+
				"		Descripcion: atrbInstancia3"+
				"		Precision: precision"+
				"		Rango valores: rango valores"+
				"		Cardinalidad: [CardMin;CardMAx]"+
				"		Valores:  [\"valooor24\"]"+

				"	___ATRIBUTO INSTANCIA"+
				"		Id: \"28\""+
				"		Nombre: atrbInstancia4"+
				"		Descripcion: atrbInstancia4"+
				"		Precision: precision"+
				"		Rango valores: rangoValores"+
				"		Cardinalidad: [cardinalidadMin;cardinalidadMax]"+
				"		Valores:  [\"valuuue25\"]"+

				"	___ATRIBUTO INSTANCIA"+
				"		Id: \"29\""+
				"		Nombre: atrbInstancia2"+
				"		Descripcion: atrbInstancia2 -----mas masm as"+
				"		Precision: Mitchell te amo"+
				"		Rango valores: 1..10000"+
				"		Cardinalidad: [1;n]"+
				"		Valores:  [\"valorate23\"]";
		leerArchivoCargaMasivas (archivo);
	}

	
}
