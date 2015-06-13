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

	cnRegla.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnRegla.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnRegla.modificar = false; //si se permite modificar los valores 
	
	//-------------------Variables de edicion---------------------
	cnRegla.varEdicion = {};
	cnRegla.varEdicion.glosarioReglaActual = {};
	
//-------------------Funciones----------------------------------	
	
	cnRegla.modificarRegla = modificarRegla;
	cnRegla.modifiqueRegla = modifiqueRegla;
	cnRegla.cancelaRegla = cancelaRegla;
	cnRegla.eliminarConceptoRegla = eliminarConceptoRegla;
	cnRegla.agregarConceptoRegla = agregarConceptoRegla;
	cnRegla.eliminarRelacionRegla = eliminarRelacionRegla; 
	cnRegla.agregarRelacionRegla = agregarRelacionRegla;
	cnRegla.eliminarAtributoRegla = eliminarAtributoRegla; 
	cnRegla.agregarAtributoRegla = agregarAtributoRegla;
	cnRegla.seleccioneGlosario = seleccioneGlosario;

	function seleccioneGlosario(elemento, limpiar){
		cnRegla.seleccionado = elemento.id;
		cnRegla.enBlanco = false;
		cnRegla.modificar = false;
		cnRegla.disabled = true;
		
//		limpio variables
		cnRegla.varEdicion = {};
		cnRegla.varEdicion.glosarioReglaActual = {};
		
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnRegla.alertPositiva = false;
		}
		cnRegla.alertNegativa = false;
		
		
//		asigno la relacion con la que estoy trabajando
		cnRegla.varEdicion.glosarioReglaActual = elemento;
		console.log("cnRegla.varEdicion.glosarioReglaActual "+cnRegla.varEdicion.glosarioReglaActual.id+" "+cnRegla.varEdicion.glosarioReglaActual.nombre);
	}
	function agregarAtributoRegla(){
		$('#verAtributoReglaModal').modal('show');
	}
	function eliminarAtributoRegla (id){
		
	}

	function agregarRelacionRegla (){
		$('#verAgregarRelacionReglaModal').modal('show');
	}
	function eliminarRelacionRegla (id){
		
	}
	function agregarConceptoRegla (){
		$('#verAgregarConceptoReglaModal').modal('show');
	}
	function eliminarConceptoRegla(id){
		
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