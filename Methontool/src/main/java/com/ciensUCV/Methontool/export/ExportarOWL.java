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
import org.semanticweb.owlapi.model.OWLObjectPropertyExpression;
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
	private OWLOntologyManager manager;
	private OWLOntology ontology;
	private OWLDataFactory datafactory;

    public void createFile(){
        File fileformated = new File("/home/mitchell/Desktop/salidaPrueba1.owl");
        //Save the ontology in a different format
        OWLDocumentFormat format = manager.getOntologyFormat(ontology);
        OWLXMLDocumentFormat owlxmlFormat = new OWLXMLDocumentFormat();
        if (format.isPrefixOWLOntologyFormat()) { 
          owlxmlFormat.copyPrefixesFrom(format.asPrefixOWLOntologyFormat()); 
        }
        try {
			manager.saveOntology(ontology, owlxmlFormat, IRI.create(fileformated.toURI()));
		} catch (OWLOntologyStorageException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			logger.trace("Exploto con el metodo save");
		}
        logger.trace("Genero archivo salida");
    }
    
	public ExportarOWL (int idProyecto, String nameDocumentoSalida) throws OWLOntologyCreationException{
		logger.trace("dentro de constructor");
		this.idProyecto = idProyecto;
		this.nameDocumentoSalida = nameDocumentoSalida;
		logger.trace("idProyecto "+this.idProyecto);
		logger.trace("nameDocumentoSalida "+this.nameDocumentoSalida);
		
//		Variables de OWLAPI
		
//		nameDocumentoSalida puedo traerlo de bd ojo con eso
		this.iriOntology = IRI.create(LeerConfig.obtenerPropiedad("OWLAPI.iri")
				+ nameDocumentoSalida
				+ LeerConfig.obtenerPropiedad("OWLAPI.extensionOWL"));
		logger.trace("iriOntology "+this.iriOntology.toString());		
		manager = OWLManager.createOWLOntologyManager();
		ontology = manager.createOntology(this.iriOntology);
		datafactory = manager.getOWLDataFactory();
	}
	
	public void crearOntologia(){
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		ArrayList<Glosario> listaGlosario = glosarioDAO.listarGlosario(idProyecto);
		logger.trace("listaGlosario "+listaGlosario.size());
			
//		variables
		OWLClass owlClass;
		OWLAxiom axiom;
		AddAxiom addAxiom;
		OWLObjectPropertyExpression objectPropertyExpression; 
//		Un concepto es una OWLClass
		
//      Add Class
		for(int i = 0; i < listaGlosario.size(); i++){
			if(listaGlosario.get(i).getTipoGlosario().getId() == 2){
				owlClass = datafactory.getOWLClass(IRI.create(this.iriOntology + "#" + listaGlosario.get(i).getNombre()));
				axiom = datafactory.getOWLDeclarationAxiom(owlClass);
				addAxiom = new AddAxiom(ontology, axiom);
				manager.applyChange(addAxiom);

			}
		}
		
		
//		private void addProperty( OWLObjectPropertyExpression property, Set<OWLClass> classes) {
//			Set<OWLClass> existingClasses = restrictedProperties.get(property);
//			if (existingClasses != null) {
//				classes.addAll(existingClasses);
//			}
//			restrictedProperties.put(property, classes);
//		}
//		
		
		

		
		createFile();
	}
	
	
    
}
