/**
 * En el controller encargado de la seccion atributo de instancia
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
	.controller('ControllerAtributoInstancia', ControllerAtributoInstancia);

ControllerAtributoInstancia.$inject = ['$rootScope', 
                                       'InformacionPrincipalApp',
                                       '$http'
                                       ];	

function ControllerAtributoInstancia($rootScope,
		InformacionPrincipalApp,
		$http
		){
	
	console.log("Entro en ControllerAtributoInstancia");
	var cnAtributoInstancia = this;
	
	cnAtributoInstancia.concepto1 = [
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
	cnAtributoInstancia.selectedConcepto = {"id": 3, "nombre":"Casa"};
	
	cnAtributoInstancia.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnAtributoInstancia.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnAtributoInstancia.modificar = false; //si se permite modificar los valores 
	cnAtributoInstancia.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnAtributoInstancia.concepto = {};
	cnAtributoInstancia.cardinalidad = "";
	cnAtributoInstancia.tipoValor = "";
	cnAtributoInstancia.rangoValor = "";
	cnAtributoInstancia.enGlosario = {};	
	
//-------------------Funciones----------------------------------	
	
	cnAtributoInstancia.modificarAtributoInstancia = modificarAtributoInstancia;
	cnAtributoInstancia.modifiqueAtributoInstancia = modifiqueAtributoInstancia;
	cnAtributoInstancia.cancelaAtributoInstancia = cancelaAtributoInstancia;
	cnAtributoInstancia.verDescripcionGlosario = verDescripcionGlosario;
	cnAtributoInstancia.verConcepto = verConcepto;
	function modificarAtributoInstancia (){
		cnAtributoInstancia.disabled = false;
		cnAtributoInstancia.modificar = true;
	}
	function modifiqueAtributoInstancia (){
		
	}
	function cancelaAtributoInstancia (){
		cnAtributoInstancia.disabled = true;
		cnAtributoInstancia.modificar = false;
	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioAtributoInstanciaModal').modal('show');
	}
	function verConcepto(){
		$('#verConceptoAtributoInstanciaModal').modal('show');
	}
	
    $rootScope.$on('menuAtributoInstanciaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("AtributoInstancia");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnAtributoInstancia.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnAtributoInstancia.modificar = false; //si se permite modificar los valores 
    	cnAtributoInstancia.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.atributoInstancia', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.atributoInstancia a '"+newValue+"'");
            cnAtributoInstancia.soyActual = InformacionPrincipalApp.soyVistaActual('AtributoInstancia');	//Indico al controlador actual si se debe mostrar
    	}
    }, false);	
	
}//fin controller
	
	
})();

