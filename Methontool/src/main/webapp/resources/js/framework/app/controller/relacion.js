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

ControllerRelacion.$inject = [
                              '$rootScope' 
                              ,'InformacionPrincipalApp'
                              ,'$http'
                              ,'FactoryRelacion'
                              ,'FactoryMensajeCarga'
                              ,'FactoryGlosario'
                              ,'$scope'
                              ];	

function ControllerRelacion(
    	$rootScope
    	,InformacionPrincipalApp
    	,$http
    	,FactoryRelacion
    	,FactoryMensajeCarga
    	,FactoryGlosario
    	,$scope
    ){
	console.log("Entro en ControllerRelacion");
	var cnRelacion = this;

	cnRelacion.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnRelacion.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnRelacion.modificar = false; //si se permite modificar los valores 
	cnRelacion.enBlanco = true;	    //mostrar seccion en blanco
	
//-------------------Variables de edicion---------------------
	cnRelacion.varEdicion = {};
	cnRelacion.varEdicion.glosarioOrigenSelected = {};
	cnRelacion.varEdicion.glosarioDestinoSelected = {};
	cnRelacion.varEdicion.glosarioOrigen = {};
	cnRelacion.varEdicion.glosarioDestino = {};	
	cnRelacion.varEdicion.cardinalidad = "";
	cnRelacion.varEdicion.relacionInversa = {};
	cnRelacion.varEdicion.idRelacion ="";
	cnRelacion.glosarioRelacionActual = {};
	
	cnRelacion.listaGlosarioConceptoOrigen = [];
	cnRelacion.listaGlosarioDestinoOrigen = [];
	cnRelacion.listaRelacionInversa = [];

//-------------------Variables----------------------------------
	cnRelacion.listaGlosario = {};
	cnRelacion.listaRelacion = [];
	cnRelacion.seleccionado = -1;
	cnRelacion.varAgregar = 0;
	cnRelacion.seleccionadoAgregar = 0;
	cnRelacion.mensajeAlertPositiva = "";
	cnRelacion.mensajeAlertNegativa = "";
	cnRelacion.alertPositiva = false;
	cnRelacion.alertNegativa = false;
	
	
	
//-------------------Funciones----------------------------------	
	
	cnRelacion.modificarRelacion = modificarRelacion;
	cnRelacion.modifiqueRelacion = modifiqueRelacion;
	cnRelacion.cancelarModificarRelacion = cancelarModificarRelacion;
	cnRelacion.seleccioneGlosario = seleccioneGlosario;
	cnRelacion.crearRelacion = crearRelacion;
	cnRelacion.modificarRelacion = modificarRelacion;
	cnRelacion.eliminarRelacion = eliminarRelacion;
	
	function eliminarRelacion(idRelacion){
		console.log("eliminarRelacion "+idRelacion);
	}
	function modificarRelacion(idRelacion){
		console.log("modificarRelacion "+idRelacion);
	}
	function crearRelacion(){
		console.log("crearRelacion");
		$('#verModalRelacion').modal('show');
		cnRelacion.listaGlosarioDestinoOrigen = [];
		llenarListaGlosarioConceptoOrigen ();
	}
	function seleccioneGlosario(elemento, limpiar){
		console.log("Seleccione con id "+elemento.id+" codigo="+limpiar);
		
		cnRelacion.seleccionado = elemento.id;
		cnRelacion.enBlanco = false;
		cnRelacion.modificar = false;
		cnRelacion.disabled = true;
		
//		asigno la relacion con la que estoy trabajando
		cnRelacion.glosarioRelacionActual = elemento;
		
		if(limpiar){
			cnRelacion.alertPositiva = false;
		}
		cnRelacion.alertNegativa = false;
		
		//Limpio la lista
		//falta la lista :D xD
		
		var salida;
		salida = FactoryRelacion.consultarElemento(elemento.id);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("consultar es true");
	                	var len = aux.elementos.length;
	                	cnRelacion.listaRelacion = [];
	                	var elemento ;
	                	var i;
	                	for (i=0;i<len;i++){
	                		elemento = {'idRelacion':'',
		                			'glosarioOrigen':{},
		                			'glosarioDestino':{},
		                			'glosarioRelacionInversa':{},
		                			'cardinalidad':''};
	                		elemento.idRelacion = aux.elementos[i].idRelacion;
	                		elemento.glosarioOrigen = FactoryGlosario.consultarElemento(aux.elementos[i].idGlosarioOrigen);
	                		elemento.glosarioDestino = FactoryGlosario.consultarElemento(aux.elementos[i].idGlosarioDestino);
	                		elemento.glosarioRelacionInversa = FactoryGlosario.consultarElemento(aux.elementos[i].idGlosarioRelacionInversa);
	                		elemento.cardinalidad = aux.elementos[i].cardinalidad;
	                		cnRelacion.listaRelacion.push(elemento);
	                	}
	                	console.log("cnRelacion.listaRelacion.length "+cnRelacion.listaRelacion.length);
	                	
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
	}

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
	function modalRelacion(){
		$('#vermodalRelacion').modal('show');
	}

	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		cnRelacion.listaGlosario = FactoryGlosario.getListaElemento();
	}

	
	function llenarListaGlosarioConceptoOrigen (){
		console.log("en llenarListaGlosarioConceptoOrigen");
		cnRelacion.listaGlosarioConceptoOrigen = [];
		var len = cnRelacion.listaGlosario.length;
		var i;
		for(i=0;i<len;i++){
			if(cnRelacion.listaGlosario[i].tipoGlosario.id == 2){
				cnRelacion.listaGlosarioConceptoOrigen.push(cnRelacion.listaGlosario[i]);
			}
		}
		console.log("cnRelacion.listaGlosarioConceptoOrigen.length "+cnRelacion.listaGlosarioConceptoOrigen.length);
	}
	
	function llenarListaGlosarioConceptoDestino (){
		cnRelacion.listaGlosarioConceptoDestino = [];
		cnRelacion.varEdicion.glosarioDestinoSelected = {};
		cnRelacion.varEdicion.glosarioDestino = {};
		var len = cnRelacion.listaGlosario.length;
		var i;
		console.log("cnRelacion.varEdicion.glosarioOrigen.id "+cnRelacion.varEdicion.glosarioOrigen.id);
		console.log("cnRelacion.varEdicion.glosarioOrigen.nombre "+cnRelacion.varEdicion.glosarioOrigen.nombre);
		for(i=0;i<len;i++){
			if(cnRelacion.listaGlosario[i].tipoGlosario.id == 2 && cnRelacion.listaGlosario[i].id != cnRelacion.varEdicion.glosarioOrigen.id){
				console.log("i = "+i+" cnRelacion.listaGlosario[i].id "+cnRelacion.listaGlosario[i].id);
				cnRelacion.listaGlosarioConceptoDestino.push(cnRelacion.listaGlosario[i]);
			}
		}
	}
	
	function llenarListaRelacionInversa(){
		cnRelacion.listaRelacionInversa = {};
	}

//---------------------Watch variables de controller---------------------	
	$scope.$watch('cnRelacion.varEdicion.glosarioOrigenSelected', function (newValue, oldValue) {
		if (newValue !== oldValue) {
			cnRelacion.varEdicion.glosarioOrigen = cnRelacion.varEdicion.glosarioOrigenSelected.originalObject;
			llenarListaGlosarioConceptoDestino ();
    	}
	}, false);
	
//-------------------Funciones extranjeras-------------------------------		
    $rootScope.$on('menuRelacionPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Relacion");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnRelacion.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnRelacion.modificar = false; //si se permite modificar los valores 
    	cnRelacion.enBlanco = true;	    //mostrar seccion en blanco
    	cnRelacion.seleccionado = -1; //Para que no aparezca seleccionado algun glosario
    	cnRelacion.alertPositiva = false;																												
    	cnRelacion.alertNegativa = false;
    });
	
    $rootScope.$watch('actual.relacion', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio va																																																									lor actual.relacion a '"+newValue+"'");
            cnRelacion.soyActual = InformacionPrincipalApp.soyVistaActual('Relacion');	//Indico al controlador actual si se debe mostrar
            listarGlosario(); 
    	}
    }, false);
	
	
}// fin controller
	
})();