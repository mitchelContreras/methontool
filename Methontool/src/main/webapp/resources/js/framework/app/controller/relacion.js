/**
 * En el controller encargado de la seccion relaciones binarias
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
	.controller('ControllerRelacion', ControllerRelacion);

ControllerRelacion.$inject = ['$rootScope', 
                              'InformacionPrincipalApp',
                              '$http'];	

function ControllerRelacion(
    	$rootScope,
    	InformacionPrincipalAp,
    	$http
    ){
	console.log("Entro en ControllerRelacion");
	var cnRelacion = this;

	
	cnRelacion.concepto = [
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
	cnRelacion.relaciones = [
	                      	{"id": 1, "nombre":"Parte de"},
	                      	{"id": 2, "nombre":"Pertenece a"},
	                      	{"id": 3, "nombre":"Incluido en"}
	                          ];
	
	cnRelacion.selectedConceptoOrigen = {"id": 3, "nombre":"Casa"};
	cnRelacion.selectedConceptoDestino = {"id": 2, "nombre":"Agua"};
	cnRelacion.selectedRelacionInversa = {"id": 1, "nombre":"Parte de"};
                   
	
	
	
	cnRelacion.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnRelacion.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnRelacion.modificar = false; //si se permite modificar los valores 


//-------------------Variables de edicion---------------------
	cnRelacion.conceptoOrigen = {};
	cnRelacion.conceptoDestino = {};
	cnRelacion.Cardinalidad = "";
	cnRelacion.relacionInversa = {};
	cnRelacion.enGlosario = {};
	
	
//-------------------Funciones----------------------------------	
	
	cnRelacion.verConceptoOrigen = verConceptoOrigen;
	cnRelacion.verConceptoDestino = verConceptoDestino;
	cnRelacion.verDescripcionGlosario = verDescripcionGlosario;
	cnRelacion.verRelacionInversa = verRelacionInversa;
	cnRelacion.modificarRelacion = modificarRelacion;
	cnRelacion.modifiqueRelacion = modifiqueRelacion;
	cnRelacion.cancelarModificarRelacion = cancelarModificarRelacion;

	function cancelarModificarRelacion(){
		cnRelacion.disabled = true;
		cnRelacion.modificar = false;
	}
	function modifiqueRelacion(){
		
	}
	function modificarRelacion(){
		cnRelacion.disabled = false;
		cnRelacion.modificar = true;
	}
	function verRelacionInversa(){
		$('#verRelacionInversaRelacionModal').modal('show');
	}
	function  verDescripcionGlosario(){
		$('#verDescripcionGlosarioRelacionModal').modal('show');
	}
	function verConceptoDestino(){
		$('#verConceptoDestinoRelacionModal').modal('show');
	}
	function verConceptoOrigen(id){
		$('#verConceptoOrigenRelacionModal').modal('show');
	}

	
	
	
}
	
})();