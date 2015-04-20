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
                       ];	

function ControllerAxioma($rootScope,
		InformacionPrincipalApp,
		$http
		){
	
	console.log("Entro en ControllerAxioma");
	var cnAxioma = this;

	
	cnAxioma.concepto1 = [
	                      	{"id": 1, "nombre":"Arbol"},
	                      	{"id": 2, "nombre":"Agua"},
	                      	{"id": 3, "nombre":"Casa"},
	                      	{"id": 4, "nombre":"Cocina"},
	                      	{"id": 5, "nombre":"Ventana"},
	                      	{"id": 6, "nombre":"Mesa"},
	                      	{"id": 7, "nombre":"Nevera"},
	                      	{"id": 8, "nombre":"Antena"},
	                      	{"id": 9, "nombre":"Computadora"},
	                      	{"id": 10, "nombre":"Cama"},
	                      	{"id": 11, "nombre":"Microhonda"},
	                      	{"id": 12, "nombre":"Familia"},
	                      	{"id": 13, "nombre":"Ventilador"}
	                          ];
	cnAxioma.relaciones = [
	   	                      	{"id": 1, "nombre":"Parte de"},
	   	                      	{"id": 2, "nombre":"Pertenece a"},
	   	                      	{"id": 3, "nombre":"Incluido en"}
	   	                          ];
	   	
	cnAxioma.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnAxioma.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnAxioma.modificar = false; //si se permite modificar los valores 
	
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
}
	
	
})();	
/**
 * 
 */