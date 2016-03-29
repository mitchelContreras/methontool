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
	cnRelacion.enCrear = false;		//en true entra en paso 3 y false entra en paso 5
	
//-------------------Variables de edicion---------------------
	cnRelacion.varEdicion = {};
	cnRelacion.varEdicion.glosarioOrigenSelected = {};
	cnRelacion.varEdicion.glosarioDestinoSelected = {};
	cnRelacion.varEdicion.relacionInversaSelected = {};
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
	cnRelacion.eliminarRelacion = eliminarRelacion;
	cnRelacion.creadaRelacion = creadaRelacion;
	
	function creadaRelacion(){
//		cnRelacion.varEdicion.glosarioOrigen = cnRelacion.varEdicion.glosarioOrigenSelected.originalObject;
		cnRelacion.varEdicion.glosarioDestino = cnRelacion.varEdicion.glosarioDestinoSelected.originalObject;
		
		console.log("cnRelacion.glosarioRelacionActual.id "+cnRelacion.glosarioRelacionActual.id);
		console.log("cnRelacion.varEdicion.glosarioOrigen.id="+cnRelacion.varEdicion.glosarioOrigen.id+" cnRelacion.varEdicion.glosarioOrigen.nombre="+cnRelacion.varEdicion.glosarioOrigen.nombre);
		console.log("cnRelacion.varDestino.glosarioOrigen.id="+cnRelacion.varEdicion.glosarioDestino.id+" cnRelacion.varEdicion.glosarioDestino.nombre="+cnRelacion.varEdicion.glosarioDestino.nombre);
		
		var salida1;
		salida1 = FactoryRelacion.crearElemento(cnRelacion.glosarioRelacionActual.id, cnRelacion.varEdicion.glosarioOrigen.id, cnRelacion.varEdicion.glosarioDestino.id);
		$('#verModalRelacion').modal('hide');
		FactoryMensajeCarga.abrirMensaje("Guardando");
		salida1.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("guardar es true");
	                	cnRelacion.alertPositiva = true;
	                	cnRelacion.mensajeAlertPositiva = "La relación ha sido creado";	                	
	                	seleccioneGlosario(cnRelacion.glosarioRelacionActual, false);     	
	                }else{
//	                	$('#verModalRelacion').modal('show');
	                	//siguiendo el orden de ideas
	                }
	            }
	        );
		
		
	}
	function eliminarRelacion(idRelacion){
		console.log("eliminarRelacion "+idRelacion);
		
		var salida1;
		salida1 = FactoryRelacion.eliminarElemento(idRelacion);
		FactoryMensajeCarga.abrirMensaje("Eliminando");
		salida1.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("eliminar es true");
	                	seleccioneGlosario(cnRelacion.glosarioRelacionActual, false); 
	                	cnRelacion.alertPositiva = true;
	                	cnRelacion.mensajeAlertPositiva = "La relación ha sido eliminada";	 
	                }else{
//	                	$('#verModalRelacion').modal('show');
	                	//siguiendo el orden de ideas
	                }
	            }
	        );
	}
	function modificarRelacion(idRelacion){
		console.log("modificarRelacion "+idRelacion);
		
		cnRelacion.varEdicion.relacionInversaSelected = {};
		cnRelacion.varEdicion.cardinalidad = "";
		cnRelacion.varEdicion.relacionInversa = {};
		cnRelacion.varEdicion.idRelacion =idRelacion;

//		$scope.$broadcast('angucomplete-alt:clearInput');
		llenarListaRelacionInversa();
		
//		lleno atributos de la relacion
		var i;
		var relacionBuscada;
		for (i=0;i<cnRelacion.listaRelacion.length;i++){
			if(cnRelacion.listaRelacion[i].idRelacion == idRelacion){
				console.log("encontre");
				relacionBuscada = cnRelacion.listaRelacion[i];
			}
		}
		
		
		if(relacionBuscada != undefined){
			if(relacionBuscada.cardinalidad){
				var card = relacionBuscada.cardinalidad.split(";");
				cnRelacion.varEdicion.origenCardinalidad = card[0];
				cnRelacion.varEdicion.destinoCardinalidad = card[1];
			}else{
				cnRelacion.varEdicion.origenCardinalidad = "";
				cnRelacion.varEdicion.destinoCardinalidad = "";
			}
			console.log("relacionBuscada.glosarioRelacionInversa "+relacionBuscada.glosarioRelacionInversa);
			console.log("relacionBuscada.glosarioRelacionInversa.nombre "+relacionBuscada.glosarioRelacionInversa.nombre);
			console.log("relacionBuscada.glosarioRelacionInversa.id "+relacionBuscada.glosarioRelacionInversa.id);
			if(relacionBuscada.glosarioRelacionInversa.nombre != undefined){
				cnRelacion.varEdicion.relacionInversaSelected.originalObject = relacionBuscada.glosarioRelacionInversa;
				cnRelacion.varEdicion.relacionInversa = relacionBuscada.glosarioRelacionInversa;
				console.log("relacionBuscada.glosarioRelacionInversa.nombre "+relacionBuscada.glosarioRelacionInversa.nombre);
				$scope.$broadcast('angucomplete-alt:asignar-defoult', 'completeListaRelacionInversa', relacionBuscada.glosarioRelacionInversa.nombre);
			}
			else{
				console.log("debo limpiar");
				$scope.$broadcast('angucomplete-alt:clearInput', 'completeListaRelacionInversa');
			}
		}
		
		$('#verModalactualizarRelacion').modal('show');
	}
	function crearRelacion(){
		console.log("crearRelacion");
		$('#verModalRelacion').modal('show');
		
		cnRelacion.varEdicion.glosarioOrigenSelected = {};
		cnRelacion.varEdicion.glosarioDestinoSelected = {};
		cnRelacion.varEdicion.relacionInversaSelected = {};
		cnRelacion.varEdicion.glosarioOrigen = {};
		cnRelacion.varEdicion.glosarioDestino = {};	
		cnRelacion.varEdicion.cardinalidad = "";
		cnRelacion.varEdicion.relacionInversa = {};
		cnRelacion.varEdicion.idRelacion ="";
		$scope.$broadcast('angucomplete-alt:clearInput', 'completeListaGlosarioOrigenRelacion');
		$scope.$broadcast('angucomplete-alt:clearInput', 'completeListaGlosarioDestinoRelacion');
		
		llenarListaGlosarioConceptoOrigen();
		llenarListaGlosarioConceptoDestino();
		llenarListaRelacionInversa();
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
		var auxIdRelacionInversa = "0";
		try{
			auxIdRelacionInversa = cnRelacion.varEdicion.relacionInversaSelected.originalObject.id;
			console.log("entre en != undefined "+auxIdRelacionInversa);			
		}catch(err){
			console.log("no encuentro cnRelacion.varEdicion.relacionInversaSelected.originalObject");
		}
//		if(typeof cnRelacion.varEdicion.relacionInversaSelected.originalObject != "undefined"){
//			auxIdRelacionInversa = cnRelacion.varEdicion.relacionInversaSelected.originalObject.id;
//			console.log("entre en != undefined "+auxIdRelacionInversa);
//		}
		
		
		if((cnRelacion.varEdicion.origenCardinalidad == "" && cnRelacion.varEdicion.destinoCardinalidad !="") || 
				(cnRelacion.varEdicion.origenCardinalidad != "" && cnRelacion.varEdicion.destinoCardinalidad =="")){
			return false;
		}
		var auxCardinalidad = "";
		if(cnRelacion.varEdicion.origenCardinalidad != ""){
			auxCardinalidad = cnRelacion.varEdicion.origenCardinalidad+";"+cnRelacion.varEdicion.destinoCardinalidad;
		}
//		console.log("cnRelacion.varEdicion.relacionInversa.id="+cnRelacion.varEdicion.relacionInversa.id+" cnRelacion.varEdicion.relacionInversa.nombre="+cnRelacion.varEdicion.relacionInversa.nombre);
		console.log("cardinalidad "+cnRelacion.varEdicion.origenCardinalidad+";"+cnRelacion.varEdicion.destinoCardinalidad);
		console.log("auxIdRelacionInversa "+auxIdRelacionInversa);
		var salida1;
		salida1 = FactoryRelacion.actualizarElemento (cnRelacion.varEdicion.idRelacion, auxIdRelacionInversa, auxCardinalidad);
		$('#verModalactualizarRelacion').modal('hide');
		FactoryMensajeCarga.abrirMensaje("Guardando");
		salida1.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("modificar es true");
	                	cnRelacion.alertPositiva = true;
	                	cnRelacion.mensajeAlertPositiva = "La relación ha sido modificada";	 
	                	seleccioneGlosario(cnRelacion.glosarioRelacionActual, false);     	
	                }else{
//	                	$('#verModalRelacion').modal('show');
	                	//siguiendo el orden de ideas
	                }
	            }
	        );
	}
	function modalRelacion(){
		$('#vermodalRelacion').modal('show');
	}

	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		cnRelacion.listaGlosario = FactoryGlosario.getListaElemento();
	}

	
	function llenarListaGlosarioConceptoOrigen (){
		cnRelacion.listaGlosarioConceptoOrigen = [];
		cnRelacion.varEdicion.glosarioOrigenSelected = {};
		cnRelacion.varEdicion.glosarioOrigen = {};
		var len = cnRelacion.listaGlosario.length;
		var i;
		for(i=0;i<len;i++){
			if(cnRelacion.listaGlosario[i].tipoGlosario.id == 2){
				cnRelacion.listaGlosarioConceptoOrigen.push(cnRelacion.listaGlosario[i]);
			}
		}
	}
	
	function llenarListaGlosarioConceptoDestino (){
		cnRelacion.listaGlosarioConceptoDestino = [];
		cnRelacion.varEdicion.glosarioDestinoSelected = {};
		cnRelacion.varEdicion.glosarioDestino = {};
		var len = cnRelacion.listaGlosario.length;
		var i;
		for(i=0;i<len;i++){
			if(cnRelacion.listaGlosario[i].tipoGlosario.id == 2){
				cnRelacion.listaGlosarioConceptoDestino.push(cnRelacion.listaGlosario[i]);
			}
		}
	}
	
	function llenarListaRelacionInversa(){
		cnRelacion.listaRelacionInversa = [];
		cnRelacion.varEdicion.relacionInversaSelected = {};
		cnRelacion.varEdicion.relacionInversa = {};
		var len = cnRelacion.listaGlosario.length;
		var i;
		for(i=0;i<len;i++){
			if(cnRelacion.listaGlosario[i].tipoGlosario.id == 1){
				cnRelacion.listaRelacionInversa.push(cnRelacion.listaGlosario[i]);
			}
		}
		console.log("cnRelacion.listaRelacionInversa.length "+cnRelacion.listaRelacionInversa.length);
	}

//---------------------Watch variables de controller---------------------	
//	$scope.$watch('cnRelacion.varEdicion.glosarioOrigenSelected', function (newValue, oldValue) {
//		if (newValue !== oldValue) {
//			cnRelacion.varEdicion.glosarioOrigen = cnRelacion.varEdicion.glosarioOrigenSelected.originalObject;
//			llenarListaGlosarioConceptoDestino ();
//    	}
//	}, false);
	
//-------------------Funciones extranjeras-------------------------------		
    $rootScope.$on('menuRelacionPrincipal', function(event, data){
    	console.log("menuRelacionPrincipal");
    	InformacionPrincipalApp.voyAvista("Relacion");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnRelacion.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnRelacion.modificar = false; //si se permite modificar los valores 
    	cnRelacion.enBlanco = true;	    //mostrar seccion en blanco
    	cnRelacion.seleccionado = -1; //Para que no aparezca seleccionado algun glosario
    	cnRelacion.alertPositiva = false;																												
    	cnRelacion.alertNegativa = false;
    	cnRelacion.enCrear = true;
    });
    
    $rootScope.$on('menuRelacionDosPrincipal', function(event, data){
    	console.log("menuRelacionDosPrincipal");
    	InformacionPrincipalApp.voyAvista("RelacionDos");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnRelacion.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnRelacion.modificar = false; //si se permite modificar los valores 
    	cnRelacion.enBlanco = true;	    //mostrar seccion en blanco
    	cnRelacion.seleccionado = -1; //Para que no aparezca seleccionado algun glosario
    	cnRelacion.alertPositiva = false;																												
    	cnRelacion.alertNegativa = false;
        cnRelacion.enCrear = false;
    });
	
    $rootScope.$watch('actual.relacion', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.relacion a '"+newValue+"'");
            cnRelacion.soyActual = InformacionPrincipalApp.soyVistaActual('Relacion') || InformacionPrincipalApp.soyVistaActual('RelacionDos');	//Indico al controlador actual si se debe mostrar
            listarGlosario(); 
    	}
    }, false);
    
    $rootScope.$watch('actual.relacionDos', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.relacionDos a '"+newValue+"'");
            cnRelacion.soyActual = InformacionPrincipalApp.soyVistaActual('Relacion') || InformacionPrincipalApp.soyVistaActual('RelacionDos');	//Indico al controlador actual si se debe mostrar
            listarGlosario(); 
    	}
    }, false);
	
	
}// fin controller
	
})();