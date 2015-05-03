/**
 * En el controller encargado de la seccion taxonomia
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
 */

(function(){
	"use strict"	

angular.module('methontool')
	.controller('ControllerTaxonomia', ControllerTaxonomia);

ControllerTaxonomia.$inject = ['$rootScope'
                                       ,'InformacionPrincipalApp'
                                       ];	

function ControllerTaxonomia($rootScope
		,InformacionPrincipalApp
		){
	
	console.log("Entro en ControllerTaxonomia");
	var cnTaxonomia = this;
	
	cnTaxonomia.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnTaxonomia.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnTaxonomia.modificar = false; //si se permite modificar los valores 
	cnTaxonomia.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnTaxonomia.subClase = [];
	cnTaxonomia.desDisjunta = [];
	cnTaxonomia.desExhaustiva = [];
	cnTaxonomia.particion = [];
	cnTaxonomia.enGlosario = {};
	cnTaxonomia.taxonomiaActual = {};
	
	
//-------------------Funciones en scope----------------------------------	
	
	
//-------------------Funciones complementarias---------------------------
	
	
	
//-------------------Funciones extranjeras-------------------------------	
		
    $rootScope.$on('menuTaxonomiaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Taxonomia");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnTaxonomia.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnTaxonomia.modificar = false; //si se permite modificar los valores 
    	cnTaxonomia.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.taxonomia', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.taxonomia a '"+newValue+"'");
            cnTaxonomia.soyActual = InformacionPrincipalApp.soyVistaActual('Taxonomia');	//Indico al controlador actual si se debe mostrar
    	}
    }, false);
	
}//fin controller
	
	
})();	
