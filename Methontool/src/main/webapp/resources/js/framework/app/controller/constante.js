/**
 * En el controller encargado de la seccion atributo de Clase
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
 */

(function(){
	"use strict"	

angular.module('methontool')
	.controller('ControllerConstante', ControllerConstante);

ControllerConstante.$inject = ['$rootScope', 
                       'InformacionPrincipalApp'
                       ];	

function ControllerConstante($rootScope,
		InformacionPrincipalApp
		){
	
	console.log("Entro en ControllerConstante");
	var cnConstante = this;
	
	cnConstante.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnConstante.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnConstante.modificar = false; //si se permite modificar los valores 
	
	//-------------------Variables de edicion---------------------
	cnConstante.unidad = "";
	cnConstante.tipoValor = "";
	cnConstante.valor = "";
	cnConstante.enGlosario = {};	
	
//-------------------Funciones----------------------------------	
	
	cnConstante.modificarConstante = modificarConstante;
	cnConstante.modifiqueConstante = modifiqueConstante;
	cnConstante.cancelaConstante = cancelaConstante;
	cnConstante.verDescripcionGlosario = verDescripcionGlosario;
	
	function modificarConstante (){
		cnConstante.disabled = false;
		cnConstante.modificar = true;
	}
	function modifiqueConstante (){
		
	}
	function cancelaConstante (){
		cnConstante.disabled = true;
		cnConstante.modificar = false;
	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioConstanteModal').modal('show');
	}
}
	
	
})();	
/**
 * 
 */