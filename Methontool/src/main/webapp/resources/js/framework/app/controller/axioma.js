/**
 * En el controller encargado de la seccion axioma
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
* @param $http este se incluye porque la directiva de autocompletar la requiere
 */

(function(){
	"use strict"	

angular.module('methontool')
	.controller('ControllerAxioma', ControllerAxioma);

ControllerAxioma.$inject = ['$rootScope', 
                       'InformacionPrincipalApp',
                       '$http'
                       ,'FactoryGlosario'
                       ];	

function ControllerAxioma($rootScope,
		InformacionPrincipalApp,
		$http
		,FactoryGlosario
		){
	
	console.log("Entro en ControllerAxioma");
	var cnAxioma = this;


	cnAxioma.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnAxioma.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnAxioma.modificar = false; //si se permite modificar los valores 
	cnAxioma.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnAxioma.variables = "";
	cnAxioma.expresion = "";
	cnAxioma.enGlosario = {};	
	cnAxioma.listaConceptos = [{"id": 1, "nombre":"Arbol"}];
	cnAxioma.listaRelaciones = [{"id": 1, "nombre":"Parte de"}];
	
//-------------------Funciones----------------------------------	
	
	cnAxioma.modificarAxioma = modificarAxioma;
	cnAxioma.modifiqueAxioma = modifiqueAxioma;
	cnAxioma.cancelaAxioma = cancelaAxioma;
	cnAxioma.verDescripcionGlosario = verDescripcionGlosario;
	cnAxioma.verConceptoAxioma = verConceptoAxioma;
	cnAxioma.eliminarConceptoAxioma = eliminarConceptoAxioma;
	cnAxioma.agregarConceptoAxioma = agregarConceptoAxioma;
	cnAxioma.verRelacionAxioma = verRelacionAxioma;
	cnAxioma.eliminarRelacionAxioma = eliminarRelacionAxioma; 
	cnAxioma.agregarRelacionAxioma = agregarRelacionAxioma;
	cnAxioma.seleccioneGlosario = seleccioneGlosario;
	
	function seleccioneGlosario(elemento, limpiar){
		cnAxioma.seleccionado = elemento.id;
		cnAxioma.enBlanco = false;
		cnAxioma.modificar = false;
		cnAxioma.disabled = true;
		
//		limpio variables
		cnAxioma.varEdicion = {};
		cnAxioma.varEdicion.glosarioAxiomaActual = {};
		
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnAxioma.alertPositiva = false;
		}
		cnAxioma.alertNegativa = false;
		
		
//		asigno la relacion con la que estoy trabajando
		cnAxioma.varEdicion.glosarioAxiomaActual = elemento;
		console.log("cnAxioma.varEdicion.glosarioAxiomaActual "+cnAxioma.varEdicion.glosarioAxiomaActual.id+" "+cnAxioma.varEdicion.glosarioAxiomaActual.nombre);
	}
	function agregarRelacionAxioma (){
		$('#verAgregarRelacionAxiomaModal').modal('show');
	}
	function eliminarRelacionAxioma (id){
		
	}
	function verRelacionAxioma (id){
		$('#verRelacionAxiomaModal').modal('show');
	}
	function agregarConceptoAxioma (){
		$('#verAgregarConceptoAxiomaModal').modal('show');
	}
	function eliminarConceptoAxioma(id){
		
	}
	function verConceptoAxioma(id){
		$('#verConceptoAxiomaModal').modal('show');
	}
	function modificarAxioma (){
		cnAxioma.disabled = false;
		cnAxioma.modificar = true;
	}
	function modifiqueAxioma (){
		
	}
	function cancelaAxioma (){
		cnAxioma.disabled = true;
		cnAxioma.modificar = false;
	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioAxiomaModal').modal('show');
	}
	
    $rootScope.$on('menuAxiomaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Axioma");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnAxioma.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnAxioma.modificar = false; //si se permite modificar los valores 
    	cnAxioma.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.axioma', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.axioma a '"+newValue+"'");
            cnAxioma.soyActual = InformacionPrincipalApp.soyVistaActual('Axioma');	//Indico al controlador actual si se debe mostrar
            cnAxioma.listaGlosario = FactoryGlosario.getListaElemento();
            
    	}
    }, false);
    
}//fin controller
	
	
})();	
/**
 * 
 */