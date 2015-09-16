package com.ciensUCV.Methontool.export;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.annotation.Nonnull;

import org.semanticweb.owlapi.apibinding.OWLManager;
import org.semanticweb.owlapi.formats.OWLXMLDocumentFormat;
import org.semanticweb.owlapi.model.AddAxiom;
import org.semanticweb.owlapi.model.IRI;
import org.semanticweb.owlapi.model.OWLAxiom;
import org.semanticweb.owlapi.model.OWLClass;
import org.semanticweb.owlapi.model.OWLDataFactory;
import org.semanticweb.owlapi.model.OWLDocumentFormat;
import org.semanticweb.owlapi.model.OWLException;
import org.semanticweb.owlapi.model.OWLObjectProperty;
import org.semanticweb.owlapi.model.OWLOntology;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;
import org.semanticweb.owlapi.model.OWLOntologyManager;
import org.semanticweb.owlapi.model.OWLOntologyIRIMapper;
import org.semanticweb.owlapi.model.OWLOntologyStorageException;
import org.semanticweb.owlapi.model.SWRLAtom;
import org.semanticweb.owlapi.model.SWRLClassAtom;
import org.semanticweb.owlapi.model.SWRLObjectPropertyAtom;
import org.semanticweb.owlapi.model.SWRLRule;
import org.semanticweb.owlapi.model.SWRLVariable;
import org.semanticweb.owlapi.util.AutoIRIMapper;
import org.semanticweb.owlapi.util.PriorityCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.util.LeerConfig;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;

public class ExportarOWL {
	private static final Logger logger = LoggerFactory.getLogger(ExportarOWL.class);
	static ApplicationContext context = 
    		new ClassPathXmlApplicationContext(LeerConfig.obtenerPropiedad("Spring.rutaArchivoSpringDaoImpl"));
	
//	Variables globales usadas en el desarrollo
	
//	IRI
//	NOMBRE DEL DOCUMENTO SALIDA
//	ID DEL PROYECTO
//	ONTOLOGY
//	DEFINITION FACTORY
//	RUTA DE SALIDA
	
	private int idProyecto;
	private String nameDocumentoSalida;
	private IRI iriOntology;
	
	public ExportarOWL (int idProyecto, String nameDocumentoSalida){
		logger.trace("dentro de constructor");
		this.idProyecto = idProyecto;
		this.nameDocumentoSalida = nameDocumentoSalida;
		this.iriOntology = IRI.create(LeerConfig.obtenerPropiedad("OWLAPI.iri")
				+ nameDocumentoSalida
				+ LeerConfig.obtenerPropiedad("OWLAPI.extensionOWL"));
		logger.trace("idProyecto "+this.idProyecto);
		logger.trace("nameDocumentoSalida "+this.nameDocumentoSalida);
		logger.trace("iriOntology "+this.iriOntology.toString());
	}
	
	public void crearOntologia(){
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		ArrayList<Glosario> listaGlosario = glosarioDAO.listarGlosario(idProyecto);
		logger.trace("listaGlosario "+listaGlosario.size());
	}
	
	
    
}
