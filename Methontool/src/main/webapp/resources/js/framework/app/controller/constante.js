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
	cnConstante.enBlanco = true;	    //mostrar seccion en blanco
	
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
	
    $rootScope.$on('menuConstantePrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Constante");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnConstante.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnConstante.modificar = false; //si se permite modificar los valores 
    	cnConstante.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.constante', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.constante a '"+newValue+"'");
            cnConstante.soyActual = InformacionPrincipalApp.soyVistaActual('Constante');	//Indico al controlador actual si se debe mostrar
    	}
    }, false);
    
}//fin controller
	
	
})();	
/**
 * 
 */