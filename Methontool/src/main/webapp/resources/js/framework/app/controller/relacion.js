/**
 * En el controller encargado de la seccion relaciones binarias
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param
 */
(function(){
    "use strict"
	
angular.module('methontool')
	.controller('ControllerRelacion', ControllerRelacion);

ControllerRelacion.$inject = ['$rootScope', 'InformacionPrincipalApp'];	

function ControllerRelacion(
    	$rootScope,
    	InformacionPrincipalAp
    ){
	console.log("Entro en ControllerRelacion");
	var cnRelacion = this;
	
	
	cnRelacion.soyActual = true; //debo cambiarlo a false al terminar el desarrollo   -1
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
		$('#verRelacionInversaModal').modal('show');
	}
	function  verDescripcionGlosario(){
		$('#verDescripcionGlosarioModal').modal('show');
	}
	function verConceptoDestino(){
		$('#verConceptoDestinoModal').modal('show');
	}
	function verConceptoOrigen(id){
		$('#verConceptoOrigenModal').modal('show');
	}

	
	
	
}
	
})();