/**
 * En el controller encargado de la seccion atributo de Clase
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
 * @param $http la funcion de autocompletar da uso a esta variable
 */

(function(){
	"use strict"	

angular.module('methontool')
	.controller('ControllerAtributoClase', ControllerAtributoClase);

ControllerAtributoClase.$inject = ['$rootScope', 
                                       'InformacionPrincipalApp',
                                       '$http'
                                       ];	

function ControllerAtributoClase($rootScope,
		InformacionPrincipalApp,
		$http
		){
	
	console.log("Entro en ControllerAtributoClase");
	var cnAtributoClase = this;
	
	cnAtributoClase.concepto1 = [
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
	cnAtributoClase.selectedConcepto = {"id": 3, "nombre":"Casa"};
	
	cnAtributoClase.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnAtributoClase.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnAtributoClase.modificar = false; //si se permite modificar los valores 
	
	//-------------------Variables de edicion---------------------
	cnAtributoClase.concepto = {};
	cnAtributoClase.cardinalidad = "";
	cnAtributoClase.tipoValor = "";
	cnAtributoClase.valores = "";
	cnAtributoClase.enGlosario = {};	
	
//-------------------Funciones----------------------------------	
	
	cnAtributoClase.modificarAtributoClase = modificarAtributoClase;
	cnAtributoClase.modifiqueAtributoClase = modifiqueAtributoClase;
	cnAtributoClase.cancelaAtributoClase = cancelaAtributoClase;
	cnAtributoClase.verDescripcionGlosario = verDescripcionGlosario;
	cnAtributoClase.verConcepto = verConcepto;
	
	function modificarAtributoClase (){
		cnAtributoClase.disabled = false;
		cnAtributoClase.modificar = true;
	}
	function modifiqueAtributoClase (){
		
	}
	function cancelaAtributoClase (){
		cnAtributoClase.disabled = true;
		cnAtributoClase.modificar = false;
	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioAtributoClaseModal').modal('show');
	}
	function verConcepto(){
		$('#verConceptoAtributoClaseModal').modal('show');
	}
		
	
}
	
	
})();	
