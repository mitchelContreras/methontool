package com.ciensUCV.Methontool.export;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.HashSet;

import javax.annotation.Nonnull;

import org.semanticweb.owlapi.apibinding.OWLManager;
import org.semanticweb.owlapi.formats.OWLXMLDocumentFormat;
import org.semanticweb.owlapi.model.AddAxiom;
import org.semanticweb.owlapi.model.IRI;
import org.semanticweb.owlapi.model.OWLAnnotation;
import org.semanticweb.owlapi.model.OWLAnnotationProperty;
import org.semanticweb.owlapi.model.OWLAnnotationValue;
import org.semanticweb.owlapi.model.OWLAxiom;
import org.semanticweb.owlapi.model.OWLClass;
import org.semanticweb.owlapi.model.OWLDataFactory;
import org.semanticweb.owlapi.model.OWLDataProperty;
import org.semanticweb.owlapi.model.OWLDatatype;
import org.semanticweb.owlapi.model.OWLDocumentFormat;
import org.semanticweb.owlapi.model.OWLException;
import org.semanticweb.owlapi.model.OWLLiteral;
import org.semanticweb.owlapi.model.OWLObjectProperty;
import org.semanticweb.owlapi.model.OWLObjectPropertyExpression;
import org.semanticweb.owlapi.model.OWLOntology;
import org.semanticweb.owlapi.model.OWLOntologyCreationException;
import org.semanticweb.owlapi.model.OWLOntologyManager;
import org.semanticweb.owlapi.model.OWLOntologyIRIMapper;
import org.semanticweb.owlapi.model.OWLOntologyStorageException;
import org.semanticweb.owlapi.model.OWLSubClassOfAxiom;
import org.semanticweb.owlapi.model.PrefixManager;
import org.semanticweb.owlapi.model.SWRLAtom;
import org.semanticweb.owlapi.model.SWRLClassAtom;
import org.semanticweb.owlapi.model.SWRLObjectPropertyAtom;
import org.semanticweb.owlapi.model.SWRLRule;
import org.semanticweb.owlapi.model.SWRLVariable;
import org.semanticweb.owlapi.util.AutoIRIMapper;
import org.semanticweb.owlapi.util.DefaultPrefixManager;
import org.semanticweb.owlapi.util.PriorityCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.util.LeerConfig;
import com.ciensUCV.Methontool.util.TwoDimentionalArrayList;
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
	private PrefixManager prefixManager;

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
		this.prefixManager = new DefaultPrefixManager(
				LeerConfig.obtenerPropiedad("OWLAPI.iri")
				+ nameDocumentoSalida
				+"#");
		manager = OWLManager.createOWLOntologyManager();
		ontology = manager.createOntology(this.iriOntology);
		datafactory = manager.getOWLDataFactory();
		
	}
	
	private Glosario buscarEnListaGlosario(ArrayList<Glosario> listaGlosario, int elemento){
		
		for(Glosario glosario : listaGlosario){
			if(Integer.parseInt(glosario.getId()) == elemento){
				return glosario;
			}
		}
		return null;
		
	}
	
	public void crearOntologia(){
		GlosarioDAO glosarioDAO = (GlosarioDAO) context.getBean("glosarioDAO");
		TaxonomiaDAO taxonomiaDAO = (TaxonomiaDAO) context.getBean("taxonomiaDAO");
		ArrayList<Glosario> listaGlosario = glosarioDAO.listarGlosario(idProyecto);
		
		
		logger.trace("listaGlosario "+listaGlosario.size());
			
//		variables
		OWLClass owlClass, owlClass1;
		OWLAxiom axiom;
		AddAxiom addAxiom;
		OWLObjectPropertyExpression objectPropertyExpression; 
		OWLSubClassOfAxiom subClassOfAxiom;
		Taxonomia taxonomia;
		Glosario glosario1, glosario2;
		Set<OWLAxiom> axioms = new HashSet<OWLAxiom>();
		OWLDataProperty dataProperty;
		OWLDatatype dataType;
		OWLLiteral literal;
		OWLAnnotationProperty annotationProperty;
		OWLAnnotationValue annotationValue;
		OWLAnnotation annotation;
//		Un concepto es una OWLClass
		
//      Add Class		
//			Add descripcion
//				dataProperty = datafactory.getOWLDataProperty(IRI.create(this.iriOntology + "#" + LeerConfig.obtenerPropiedad("OWLAPI.classDescripcion")));
		for(int i = 0; i < listaGlosario.size(); i++){
			if(listaGlosario.get(i).getTipoGlosario().getId() == 2){
				owlClass = datafactory.getOWLClass(IRI.create(this.iriOntology +"#" + listaGlosario.get(i).getNombre()));
				axiom = datafactory.getOWLDeclarationAxiom(owlClass);
				addAxiom = new AddAxiom(ontology, axiom);
				manager.applyChange(addAxiom);
				if(!listaGlosario.get(i).getDescripcion().equalsIgnoreCase("")){
					dataType = datafactory.getOWLDatatype("xsd:string", prefixManager);
//					literal= datafactory.getOWLLiteral(listaGlosario.get(i).getDescripcion(), dataType);
					annotationProperty = datafactory.getOWLAnnotationProperty(IRI.create(prefixManager + LeerConfig.obtenerPropiedad("OWLAPI.classDescripcion")));
					annotationValue = datafactory.getOWLLiteral(listaGlosario.get(i).getDescripcion(), dataType);
					annotation = datafactory.getOWLAnnotation(annotationProperty,annotationValue);
					axiom = datafactory.getOWLAnnotationAssertionAxiom(owlClass.getIRI(),annotation);
					addAxiom = new AddAxiom(ontology, axiom);
					manager.applyChange(addAxiom);					
				}
			}
		}
		
//		Add taxonomias
		Set<OWLClass> conceptosSet = ontology.getClassesInSignature();		
		OWLClass conceptosArr [] = new OWLClass[conceptosSet.size()];		
		
		for(Glosario aux : listaGlosario){
			if(aux.getTipoGlosario().getId() == 2){
				logger.trace("aux.getNombre() "+aux.getNombre());
				taxonomia = taxonomiaDAO.verTaxonomia(idProyecto, Integer.parseInt(aux.getId()));
				
//				relaciones.add("desDisjunta");
//				relaciones.add("desExhaustiva");
//				relaciones.add("particion");
//				relaciones.add("subClase");
				
//				Add subClase
				logger.trace("add subClase");
				for(int j = 0;j<taxonomia.getConceptosDestino().get(3).size();j++){
					glosario1 = null; glosario2 = null;
					
					logger.trace("taxonomia.getConceptosDestino().get(i).get(j) "+taxonomia.getConceptosDestino().get(3).get(j));
					glosario1 = buscarEnListaGlosario(listaGlosario, taxonomia.getConceptoOrigen());
					glosario2 = buscarEnListaGlosario(listaGlosario, taxonomia.getConceptosDestino().get(3).get(j));
					
					if(glosario1 != null && glosario2 != null){
						owlClass = datafactory.getOWLClass(IRI.create(this.iriOntology +"#"+glosario1.getNombre()));
						owlClass1 = datafactory.getOWLClass(IRI.create(this.iriOntology +"#"+glosario2.getNombre()));
						axioms.add(datafactory.getOWLSubClassOfAxiom(owlClass, owlClass1));			
					}else{
						logger.trace("Alguna de las dos es null");
						if(glosario1 == null)
							logger.trace("owlClass ");
						if(glosario2 == null)
						logger.trace("owlClass ");
					}
				}
				
//				Add desDisjunta
				for(int j = 0;j<taxonomia.getConceptosDestino().get(3).size();j++){
					glosario1 = null; glosario2 = null;
					
					logger.trace("taxonomia.getConceptosDestino().get(i).get(j) "+taxonomia.getConceptosDestino().get(3).get(j));
					glosario1 = buscarEnListaGlosario(listaGlosario, taxonomia.getConceptoOrigen());
					glosario2 = buscarEnListaGlosario(listaGlosario, taxonomia.getConceptosDestino().get(3).get(j));
					
					if(glosario1 != null && glosario2 != null){
						owlClass = datafactory.getOWLClass(IRI.create(this.iriOntology +"#"+glosario1.getNombre()));
						owlClass1 = datafactory.getOWLClass(IRI.create(this.iriOntology +"#"+glosario2.getNombre()));
						axioms.add(datafactory.getOWLDisjointClassesAxiom(owlClass, owlClass1));
					}else{
						logger.trace("Alguna de las dos es null");
						if(glosario1 == null)
							logger.trace("owlClass ");
						if(glosario2 == null)
						logger.trace("owlClass ");
					}
				}		
//				Add desExhaustiva
//				Add particion
			}
		}
		manager.addAxioms(ontology, axioms);
		
//		owlClass = datafactory.getOWLClass(IRI.create(this.iriOntology + "#b"));
//		owlClass1 = datafactory.getOWLClass(IRI.create(this.iriOntology + "#a"));
//		axiom = datafactory.getOWLDeclarationAxiom(owlClass);
//		addAxiom = new AddAxiom(ontology, axiom);
//		manager.applyChange(addAxiom);
//		
//		axiom = datafactory.getOWLDeclarationAxiom(owlClass1);
//		addAxiom = new AddAxiom(ontology, axiom);
//		manager.applyChange(addAxiom);
//		
//		Set<OWLClass> verga = ontology.getClassesInSignature();
//		OWLClass ordenado [] = new OWLClass[verga.size()];
//		verga.toArray(ordenado);
//		for(OWLClass aux : ordenado ){
//			logger.trace("** aux.getIRI() "+aux.toString());
//			if(aux.getIRI().equals(IRI.create(this.iriOntology + "#b"))){
//				logger.trace("encontre a b");
//			}
//		}	
//		
//		OWLClass uno, dos;
//		uno = ordenado[0];
//		dos = ordenado[1];
//		subClassOfAxiom = datafactory.getOWLSubClassOfAxiom(uno, dos);
//		addAxiom = new AddAxiom(ontology, subClassOfAxiom);
//		manager.applyChange(addAxiom);
		
//		logger.trace("ordenado "+ordenado.length);
//		logger.trace("verga "+verga.size());
//		for(OWLClass aux : verga ){
//			
//			logger.trace("aux.getIRI() "+aux.toString());
//		}
		//subClassOfAxiom = datafactory.getOWLSubClassOfAxiom(arg0, arg1);
		
		
//        OWLClass adult = df.getOWLClass(IRI.create(EXAMPLE_IRI + "#Adult"));
//        OWLSubClassOfAxiom ax = df.getOWLSubClassOfAxiom(adult, adultDefinition);
//        m.applyChange(new AddAxiom(o, ax));
//        
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
