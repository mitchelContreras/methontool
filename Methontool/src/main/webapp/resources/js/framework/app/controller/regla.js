/**
 * En el controller encargado de la seccion regla
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
	.controller('ControllerRegla', ControllerRegla);

ControllerRegla.$inject = ['$rootScope', 
                       'InformacionPrincipalApp',
                       '$http'
                       ,'FactoryGlosario'
                       ];	

function ControllerRegla($rootScope,
		InformacionPrincipalApp,
		$http
		,FactoryGlosario
		){
	
	console.log("Entro en ControllerRegla");
	var cnRegla = this;

	
	cnRegla.concepto1 = [
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
	cnRegla.relaciones = [
	   	                      	{"id": 1, "nombre":"Parte de"},
	   	                      	{"id": 2, "nombre":"Pertenece a"},
	   	                      	{"id": 3, "nombre":"Incluido en"}
	   	                          ];
	
	cnRegla.atributos = [
 	                      	{"id": 1, "nombre":"atirbuto prueba"},
 	                      	{"id": 2, "nombre":"Atributo 2"},
 	                      	{"id": 3, "nombre":"Atributo 3"}
 	                          ];
	   	
	cnRegla.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnRegla.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnRegla.modificar = false; //si se permite modificar los valores 
	
	//-------------------Variables de edicion---------------------
	cnRegla.variables = "";
	cnRegla.expresion = "";
	cnRegla.enGlosario = {};	
	cnRegla.listaConceptos = [{"id": 1, "nombre":"Arbol"}];
	cnRegla.listaRelaciones = [{"id": 1, "nombre":"Parte de"}];
	cnRegla.listaAtributo = [{"id": 1, "nombre":"atirbuto prueba"}];
	
//-------------------Funciones----------------------------------	
	
	cnRegla.modificarRegla = modificarRegla;
	cnRegla.modifiqueRegla = modifiqueRegla;
	cnRegla.cancelaRegla = cancelaRegla;
	cnRegla.verDescripcionGlosario = verDescripcionGlosario;
	cnRegla.verConceptoRegla = verConceptoRegla;
	cnRegla.eliminarConceptoRegla = eliminarConceptoRegla;
	cnRegla.agregarConceptoRegla = agregarConceptoRegla;
	cnRegla.verRelacionRegla = verRelacionRegla;
	cnRegla.eliminarRelacionRegla = eliminarRelacionRegla; 
	cnRegla.agregarRelacionRegla = agregarRelacionRegla;
	cnRegla.verAtributoRegla = verAtributoRegla;
	cnRegla.eliminarAtributoRegla = eliminarAtributoRegla; 
	cnRegla.agregarAtributoRegla = agregarAtributoRegla;
	
	function agregarAtributoRegla(){
		$('#verAtributoReglaModal').modal('show');
	}
	function eliminarAtributoRegla (id){
		
	}
	function verAtributoRegla(id){
		$('#verAtributoReglaModal').modal('show');
	}
	function agregarRelacionRegla (){
		$('#verAgregarRelacionReglaModal').modal('show');
	}
	function eliminarRelacionRegla (id){
		
	}
	function verRelacionRegla (id){
		$('#verRelacionReglaModal').modal('show');
	}
	function agregarConceptoRegla (){
		$('#verAgregarConceptoReglaModal').modal('show');
	}
	function eliminarConceptoRegla(id){
		
	}
	function verConceptoRegla(id){
		$('#verConceptoReglaModal').modal('show');
	}
	function modificarRegla (){
		cnRegla.disabled = false;
		cnRegla.modificar = true;
	}
	function modifiqueRegla (){
		
	}
	function cancelaRegla (){
		cnRegla.disabled = true;
		cnRegla.modificar = false;
	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioReglaModal').modal('show');
	}
	
    $rootScope.$on('menuReglaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Regla");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnRegla.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnRegla.modificar = false; //si se permite modificar los valores 
    	cnRegla.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.regla', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
    		console.log("cambio valor actual.regla a '"+newValue+"'");
    		cnRegla.soyActual = InformacionPrincipalApp.soyVistaActual('Regla');	//Indico al controlador actual si se debe mostrar
    		cnRegla.listaGlosario = FactoryGlosario.getListaElemento();
    	}
    }, false);
	
}//fin controller
	
	
})();	