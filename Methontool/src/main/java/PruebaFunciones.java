import java.util.ArrayList;

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
import com.ciensUCV.Methontool.dao.MedidaDAO;
import com.ciensUCV.Methontool.dao.ProyectoDAO;
import com.ciensUCV.Methontool.dao.ReglaDAO;
import com.ciensUCV.Methontool.dao.RelacionDAO;
import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.dao.TipoDeDatoDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.Constante;
import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.model.NivelFormalidad;
import com.ciensUCV.Methontool.model.Proyecto;
import com.ciensUCV.Methontool.model.Relacion;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.model.TipoDeDato;
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
//		Taxonomia taxonomia = new Taxonomia(); 
//		TaxonomiaDAO taxonomiaDAO = (TaxonomiaDAO) context.getBean("taxonomiaDAO");
		
//		Relacion relacion;
//		RelacionDAO relacionDAO = (RelacionDAO) context.getBean("relacionDAO");
//		
//		relacion = new Relacion();
//		relacion.setIdGlosarioRelacion(13);
//		relacion.setIdGlosarioOrigen(6);
//		relacion.setIdGlosarioDestino(2);
//		relacion.setCardinalidad("blaaaaa");
//		relacion.setIdGlosarioRelacionInversa(2);
//		relacion.setIdRelacion(6);
//		relacion = relacionDAO.crearRelacion(1, relacion);
//		relacion = relacionDAO.actualizarRelacion(1, relacion);
//		ArrayList<Relacion> prueba = relacionDAO.listarRelacionDadoIdGlosarioConcepto(15);
//		logger.trace("longitud de lista es"+prueba.size());
		
//		AtributoClaseDAO atributoClaseDAO = (AtributoClaseDAO) context.getBean("atributoClaseDAO");
//		ArrayList<AtributoClase> prueba = atributoClaseDAO.listarAtributoClaseDadoIdGlosarioConcepto(7);
//		logger.trace("prueba "+prueba.size());
//		logger.trace("salida de atributo clase es "+atributoClaseDAO.verAtributoClase(1, 19).getIdGlosario());
//		
//		AtributoInstanciaDAO atributoInstanciaDAO = (AtributoInstanciaDAO) context.getBean("atributoInstanciaDAO");
//		ArrayList<AtributoInstancia> prueba1 = atributoInstanciaDAO.listarAtributoInstanciaDadoIdGlosarioConcepto(7);
//		logger.trace("prueba "+prueba1.size());
//		logger.trace("salida de atributoInstancia "+atributoInstanciaDAO.verAtributoInstancia(1, 23).getCardinalidadMax());
//		InstanciaDAO instanciaDAO = (InstanciaDAO) context.getBean("instanciaDAO");
//		ArrayList<Instancia> prueba2 = instanciaDAO.listaInstanciaDadoIdGlosarioConcepto(7);
//		logger.trace("prueba2 "+prueba2.size());
//		AtributoInstancia atributoInstancia = new AtributoInstancia ();
//		atributoInstancia.setCardinalidadMax("CardMAx");
//		atributoInstancia.setCardinalidadMin("CardMin");
//		atributoInstancia.setIdGlosario(24);
//		atributoInstancia.setIdGlosarioConcepto(7);
//		Medida medida = new Medida ();
//		medida.setCodigo("mtrs");
//		atributoInstancia.setMedida(medida);
//		atributoInstancia.setPrecision("precision");
//		atributoInstancia.setRangoValores("rango valores");
//		TipoDeDato tipoDeDato = new TipoDeDato ();
//		tipoDeDato.setCodigo("int");
//		atributoInstancia.setTipoDeDato(tipoDeDato);
//		atributoInstancia.setValue("valooor");
//		AtributoInstancia salida = atributoInstanciaDAO.actualizarAtributoInstancia(1, atributoInstancia);
//		logger.trace("el id_atributo es "+salida.getId());
		
//		AtributoClaseDAO atributoClaseDAO = (AtributoClaseDAO) context.getBean("atributoClaseDAO");
//		AtributoClase atributoClase = new AtributoClase();
//		atributoClase.setCardinalidadMax("maxCard");
//		atributoClase.setCardinalidadMin("cardMin");
//		atributoClase.setIdGlosario(20);
//		atributoClase.setIdGlosarioConcepto(7);
//		atributoClase.setPrecision("pres pres");
//		atributoClase.setRangoValores("rango de vooolres");
//		TipoDeDato tipoDeDato = new TipoDeDato ();
//		tipoDeDato.setCodigo("int");
//		atributoClase.setTipoDeDato(tipoDeDato);
//		atributoClase.setValue("valuandoooo");
//		AtributoClase salida = atributoClaseDAO.actualizarAtributoClase(1, atributoClase);
//		logger.trace("id atributo es "+salida.getId());
////		taxonomia.setConceptoOrigen(1);
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
		
//		ConceptoDAO conceptoDAO = (ConceptoDAO) context.getBean("conceptoDAO");
//		ArrayList<Integer> aux = new ArrayList<Integer>();
//		ArrayList<Integer> aux1 = new ArrayList<Integer>();
//		ArrayList<Integer> aux2 = new ArrayList<Integer>();
//		aux.add(1);
//		aux.add(2);
//		aux1.add(8);
//		aux1.add(9);
		
//		String salida;
//		salida = conceptoDAO.actualizarConcepto(aux, aux1, aux2, 7);
//		logger.trace("salida "+salida);
		
//		MedidaDAO medidaDAO = (MedidaDAO) context.getBean("medidaDAO");
//		logger.trace("total lista1 "+medidaDAO.listarMedida().get(0).getCodigo());
//		
//		TipoDeDatoDAO tipoDeDatoDAO = (TipoDeDatoDAO)  context.getBean("tipoDeDatoDAO");
//		logger.trace("total lista2 "+tipoDeDatoDAO.listarTipoDeDato().get(0).getCodigo());
		
		ConstanteDAO constanteDAO = (ConstanteDAO) context.getBean("constanteDAO");
//		int salida = constanteDAO.crearConstante(26);
//		logger.trace("salida es "+salida);
		
//		Constante constante = new Constante ();
//		constante.setIdGlosarioConstante(26);
//		constante.setMedida(new Medida(0, "mtrs", null, null));
//		constante.setTipoDeDato(new TipoDeDato(0, "int", null, null));
//		constante.setValor( "valor");
//		
//		constanteDAO.actualizarConstante(1, constante);
//		logger.trace("id es "+constante.getId());
		
//		constante = constanteDAO.verConstante(1, 26);
//		logger.trace("id es "+constante.getId());
//		logger.trace("valor "+constante.getValor());
//		logger.trace("glosario "+constante.getIdGlosarioConstante());
//		logger.trace("medida "+constante.getMedida().toString());
//		logger.trace("dato "+constante.getTipoDeDato().toString());
		
		AxiomaDAO axiomaDAO = (AxiomaDAO) context.getBean("axiomaDAO");
//		logger.trace("longitud "+axiomaDAO.atrbInstanciaDadoAxioma(1, 30));
//		axiomaDAO.verAxioma(1, 30);
		axiomaDAO.crearAxioma(1, 1);
		
		ReglaDAO reglaDAO = (ReglaDAO) context.getBean("reglaDAO");
//		logger.trace("concepto "+reglaDAO.conceptoDadoRegla(1, 34));
//		logger.trace("relacion "+reglaDAO.relacionDadoRegla(1, 34));
//		logger.trace("clase "+reglaDAO.atrbClaseDadoRegla(1, 34));
//		logger.trace("instancia "+reglaDAO.atrbInstanciaDadoRegla(1, 34));
		logger.trace(reglaDAO.verRegla(1, 34).toString());
		reglaDAO.crearRegla(1, 1);
	}

}
