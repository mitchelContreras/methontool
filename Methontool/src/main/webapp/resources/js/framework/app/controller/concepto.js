/**
 * En el controller encargado de la seccion concepto
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
	.controller('ControllerConcepto', ControllerConcepto);

ControllerConcepto.$inject = [
                              '$rootScope' 
                              ,'InformacionPrincipalApp'
                              ,'FactoryGlosario'
                              ,'FactoryConcepto'
                              ,'FactoryMensajeCarga'
                              ,'FactoryAtributoClase'
                              ,'FactoryAtributoInstancia'
                              ,'FactoryInstancia'
                              ,'$scope'
                              ];	


function ControllerConcepto(
    	$rootScope
    	,InformacionPrincipalApp
    	,FactoryGlosario
    	,FactoryConcepto
    	,FactoryMensajeCarga
    	,FactoryAtributoClase
    	,FactoryAtributoInstancia
    	,FactoryInstancia
    	,$scope
    ){
	
	console.log("Entro en ControllerConcepto");
	var cnConcepto = this;

	cnConcepto.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnConcepto.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnConcepto.modificar = false; //si se permite modificar los valores 
	cnConcepto.enBlanco = true;	    //mostrar seccion en blanco
	cnConcepto.enCrear = false;		//en true entra en paso 3 y false entra en paso 5
	
//-------------------Variables de edicion---------------------

	cnConcepto.eliminadoInstancia = [];
	cnConcepto.eliminadoAtributoInstancia = [];
	cnConcepto.eliminadoAtributoClase = [];

//-------------------Variables----------------------------------
	cnConcepto.seleccionado = -1;
	cnConcepto.seleccionadoAgregar = 0;
	cnConcepto.mensajeAlertPositiva = "";
	cnConcepto.mensajeAlertNegativa = "";
	cnConcepto.alertPositiva = false;
	cnConcepto.alertNegativa = false;
	
	
	
//-------------------Funciones----------------------------------	
	cnConcepto.seleccioneGlosario = seleccioneGlosario;
	cnConcepto.modificarConcepto = modificarConcepto;
	cnConcepto.modifiqueConcepto = modifiqueConcepto;
	cnConcepto.cancelarModificarConcepto = cancelarModificarConcepto;
	cnConcepto.eliminarConcepto = eliminarConcepto;
	cnConcepto.agregarConcepto = agregarConcepto;
	cnConcepto.agregueConcepto = agregueConcepto;
	
	function agregueConcepto(lista){
		switch(lista){
		case 'relacion':
			console.log("relacion");
			break;
		case 'instancia':
			console.log("instancia");
			console.log("cnConcepto.AuxAgregar "+cnConcepto.AuxAgregar.nombre+" "+cnConcepto.AuxAgregar.id);
			cnConcepto.ConceptoActual.instancias.push(cnConcepto.AuxAgregar.originalObject);
			$('#verAgregarInstanciaConcepto').modal('hide');
			break;
		case 'atributoClase':
			console.log("atributoClase");
			console.log("cnConcepto.AuxAgregar "+cnConcepto.AuxAgregar.nombre+" "+cnConcepto.AuxAgregar.id);
			cnConcepto.ConceptoActual.atributosClase.push(cnConcepto.AuxAgregar.originalObject);
			$('#verAgregarAtributoClaseConcepto').modal('hide');
			break;	
		case 'atributoInstancia':
			console.log("atributoInstancia");
			console.log("cnConcepto.AuxAgregar "+cnConcepto.AuxAgregar.nombre+" "+cnConcepto.AuxAgregar.id);
			cnConcepto.ConceptoActual.atributosInstancia.push(cnConcepto.AuxAgregar.originalObject);
			$('#verAgregarAtributoInstanciaConcepto').modal('hide');
			break;		
		}
		cnConcepto.AuxAgregar = "";
	}
	
	function agregarConcepto(lista){
//		console.log("enro en cnConcepto.agregarConcepto");
		
		cnConcepto.ConceptoActual.agregarAtributosClase = [];
		cnConcepto.ConceptoActual.agregarAtributosInstancia = [];
		cnConcepto.ConceptoActual.agregarInstancia = [];
		$scope.$broadcast('angucomplete-alt:asignar-defoult', 'autoAgregarInstanciaConcepto', "");
		$scope.$broadcast('angucomplete-alt:asignar-defoult', 'autoAgregarAtributoClaseConcepto', "");
		$scope.$broadcast('angucomplete-alt:asignar-defoult', 'autoAgregarAtributoInstanciaConcepto',"");
		cnConcepto.AuxAgregar = "";
		
		switch(lista){
		case 'relacion':
			console.log("relacion");
			break;
		case 'instancia':
			console.log("instancia");
			var salida;
			salida = FactoryInstancia.listarElementoSinConceptoAsociado();
			FactoryMensajeCarga.abrirMensaje("Cargando");
			salida.then(
		            function(aux) {
		                if(aux.succes){
		                	console.log("consultar instancia es true");
		                	console.log("aux.elementos.length "+aux.elementos.length);
		                	var i;
		                	for(i=0;i<aux.elementos.length;i++){
		                		cnConcepto.ConceptoActual.agregarInstancia.push(
		                				FactoryGlosario.consultarElemento(aux.elementos[i].idGlosario));
		                	}
		                	
		                	
//		                	console.log("antes de la locura");
//		                	console.log("cnConcepto.ConceptoActual.agregarInstancia.length "+cnConcepto.ConceptoActual.agregarInstancia.length);
		                	unirParaAgregar(cnConcepto.ConceptoActual.agregarInstancia, cnConcepto.eliminadoInstancia, cnConcepto.ConceptoActual.instancias);
//		                	console.log("cnConcepto.ConceptoActual.agregarInstancia.length fin "+cnConcepto.ConceptoActual.agregarInstancia.length);
		                	
		                	FactoryMensajeCarga.cerrarMensaje();
		                	$('#verAgregarInstanciaConcepto').modal('show');
		                	
		                }else{
		                	
		                }
		            }
		        );
			
			break;
		case 'atributoClase':
			console.log("atributoClase");
			var salida;
			salida = FactoryAtributoClase.listarElementoSinConceptoAsociado();
			FactoryMensajeCarga.abrirMensaje("Cargando");
			salida.then(
		            function(aux) {
		                if(aux.succes){
		                	console.log("consultar instancia es true");
		                	console.log("aux.elementos.length "+aux.elementos.length);
		                	var i;
		                	for(i=0;i<aux.elementos.length;i++){
		                		cnConcepto.ConceptoActual.agregarAtributosClase.push(
		                				FactoryGlosario.consultarElemento(aux.elementos[i].idGlosario));
		                	} 	
		                	
		                	unirParaAgregar(cnConcepto.ConceptoActual.agregarAtributosClase, cnConcepto.eliminadoAtributoClase, cnConcepto.ConceptoActual.atributosClase);
		                	
		                	FactoryMensajeCarga.cerrarMensaje();
		                	$('#verAgregarAtributoClaseConcepto').modal('show');
		                }else{
		                	
		                }
		            }
		        );
			
			break;	
		case 'atributoInstancia':
			console.log("atributoInstancia");
			var salida;
			salida = FactoryAtributoInstancia.listarElementoSinConceptoAsociado();
			FactoryMensajeCarga.abrirMensaje("Cargando");
			salida.then(
		            function(aux) {
		                if(aux.succes){
		                	console.log("consultar instancia es true");
		                	console.log("aux.elementos.length "+aux.elementos.length);
		                	var i;
		                	for(i=0;i<aux.elementos.length;i++){
		                		cnConcepto.ConceptoActual.agregarAtributosInstancia.push(
		                				FactoryGlosario.consultarElemento(aux.elementos[i].idGlosario));
		                	} 	
		                	
		                	unirParaAgregar(cnConcepto.ConceptoActual.agregarAtributosInstancia, cnConcepto.eliminadoAtributoInstancia, cnConcepto.ConceptoActual.atributosInstancia);
		                	
		                	FactoryMensajeCarga.cerrarMensaje();
		                	$('#verAgregarAtributoInstanciaConcepto').modal('show');
		                }else{
		                	
		                }
		            }
		        );
			
			break;		
		}
	}
	function eliminarConcepto(index, lista){
		switch(lista){
		case 'relacion':
			cnConcepto.ConceptoActual.relaciones.splice(index, 1);
			break;
		case 'instancia':
			agregarArreglo(cnConcepto.eliminadoInstancia, cnConcepto.ConceptoActual.instancias[index]);
//			cnConcepto.eliminadoInstancia.push(cnConcepto.ConceptoActual.instancias[index]);
//			console.log("cnConcepto.eliminadoInstancia.length "+cnConcepto.eliminadoInstancia.length);
			cnConcepto.ConceptoActual.instancias.splice(index, 1);
			break;
		case 'atributoClase':
			agregarArreglo(	cnConcepto.eliminadoAtributoClase, cnConcepto.ConceptoActual.atributosClase[index]);
//			cnConcepto.eliminadoAtributoClase.push(cnConcepto.ConceptoActual.atributosClase[index]);
//			console.log("cnConcepto.eliminadoAtributoClase.length "+cnConcepto.eliminadoAtributoClase.length);
			cnConcepto.ConceptoActual.atributosClase.splice(index, 1);
			break;	
		case 'atributoInstancia':
			agregarArreglo(	cnConcepto.eliminadoAtributoInstancia, cnConcepto.ConceptoActual.atributosInstancia[index]);
//			cnConcepto.eliminadoAtributoInstancia.push(cnConcepto.ConceptoActual.atributosInstancia[index]);
//			console.log("cnConcepto.eliminadoAtributoInstancia.length "+cnConcepto.eliminadoAtributoInstancia.length);
			cnConcepto.ConceptoActual.atributosInstancia.splice(index, 1);
			break;		
		}
	}
	
	function cancelarModificarConcepto(){
		cnConcepto.disabled = true;
		cnConcepto.modificar = false;
		seleccioneGlosario({'id':cnConcepto.ConceptoActual.id},true); //Llamo con el id del seleccionado porque es su posicion en el arreglo lo que necesito y no su id en bd
	}
	function modifiqueConcepto(){
		var salida;
		salida = FactoryConcepto.actualizarElemento(cnConcepto.ConceptoActual.id
				,cnConcepto.ConceptoActual.instancias
				,cnConcepto.ConceptoActual.atributosClase
				,cnConcepto.ConceptoActual.atributosInstancia);
		salida.then(
            function(aux) {
                // success
                if(aux.succes){
                	console.log("actualizar es true");
                	cnConcepto.alertPositiva = true;
                	cnConcepto.mensajeAlertPositiva = "El Concepto ha sido actualizado";
                	seleccioneGlosario({'id':cnConcepto.ConceptoActual.id},false);
                	
                }
             }
		);	
	}
	function modificarConcepto(){
		cnConcepto.disabled = false;
		cnConcepto.modificar = true;
		cnConcepto.eliminadoInstancia = [];
		cnConcepto.eliminadoAtributoInstancia = [];
		cnConcepto.eliminadoAtributoClase = [];
	}
	function seleccioneGlosario(elemento, limpiar){
		console.log("dentro de seleccioneGlosario");
		console.log("Seleccione con id "+elemento.id+" codigo="+limpiar);
		
		cnConcepto.seleccionado = elemento.id;
		cnConcepto.enBlanco = false;
		cnConcepto.modificar = false;
		cnConcepto.disabled = true;
		
//		asigno la relacion con la que estoy trabajando
		cnConcepto.ConceptoActual = FactoryGlosario.consultarElemento(elemento.id);
		
		if(limpiar){
			cnConcepto.alertPositiva = false;
		}
		cnConcepto.alertNegativa = false;
		
		
		var salida;
		salida = FactoryConcepto.consultarElemento(elemento.id);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("consultar es true");

	                	
	                	var i;
	                	
	                	cnConcepto.ConceptoActual.relaciones = [];
	                	for(i=0;i<aux.elemento.relaciones.length;i++){
	                		cnConcepto.ConceptoActual.relaciones.push(FactoryGlosario.consultarElemento(aux.elemento.relaciones[i].idGlosarioRelacion));
	                	}
	                	
	                	cnConcepto.ConceptoActual.instancias = [];
	                	for(i=0;i<aux.elemento.instancias.length;i++){
	                		cnConcepto.ConceptoActual.instancias.push(FactoryGlosario.consultarElemento(aux.elemento.instancias[i].idGlosario));
	                	}
	                	
	                	cnConcepto.ConceptoActual.atributosClase = [];
	                	for(i=0;i<aux.elemento.atributosClase.length;i++){
	                		cnConcepto.ConceptoActual.atributosClase.push(FactoryGlosario.consultarElemento(aux.elemento.atributosClase[i].idGlosario));
	                	}
	                	
	                	cnConcepto.ConceptoActual.atributosInstancia = [];
	                	for(i=0;i<aux.elemento.atributosInstancia.length;i++){
	                		cnConcepto.ConceptoActual.atributosInstancia.push(FactoryGlosario.consultarElemento(aux.elemento.atributosInstancia[i].idGlosario));
	                	}
	                	
              	
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
	}



	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		FactoryGlosario.getListaElementos(
				function (output){
					cnConcepto.listaGlosario = output;
				},function (){
					console.log("error");
				}
			);
	}

//	retorna la posicion en el arreglo si existe sino -1
//	la entrada es un arreglo de glosario
	function posicionEnArreglo(arreglo, idBuscar){
		var i, len;
		len = arreglo.length;
		if(len == 0){
			return -1;
		}
		for(i=0;i<len;i++){
			if(arreglo[i].id == idBuscar){
				return i;
			}
		}
		return -1;
	}
	
//	agregar a la lista sino existe
	function agregarArreglo(arreglo, objeto){
//		console.log("arreglo.length antes"+arreglo.length);
		if(posicionEnArreglo(arreglo, objeto.id) == -1){
			arreglo.push(objeto);
		}
//		console.log("arreglo.length despues"+arreglo.length);
	}
	
//	une las lista actual+eliminada-actual
//	con esto garantizo
//	1. si ya esta en actual no puede mostrarse de nuevo
//	2. si fue eliminada puedo volver a agregarla
	function unirParaAgregar(consultada, eliminada, actual){
		
		var i;
		
//		consultada + eliminada
//		console.log("consultada.length antes 1 "+consultada.length);
		for(i=0;i<eliminada.length;i++){
//			console.log("eliminada[i].nombre "+eliminada[i].nombre);
			agregarArreglo(consultada, eliminada[i]);
		}
//		console.log("consultada.length despues 1 "+consultada.length);
		
//		consultada + eliminada - actual
		var aux;
		for(i=0;i<actual.length;i++){
			aux = posicionEnArreglo(consultada, actual[i].id);
//			console.log("actual[i].nombre "+actual[i].nombre);
//			console.log("aux es "+aux);
			if(aux != -1){
				consultada.splice(aux, 1);
			}
		}
//		console.log("consultada.length despues 1 "+consultada.length);
	}


//---------------------Watch variables de controller---------------------	
//	$scope.$watch('cnRelacion.varEdicion.glosarioOrigenSelected', function (newValue, oldValue) {
//		if (newValue !== oldValue) {
//			cnRelacion.varEdicion.glosarioOrigen = cnRelacion.varEdicion.glosarioOrigenSelected.originalObject;
//			llenarListaGlosarioConceptoDestino ();
//    	}
//	}, false);
	
//-------------------Funciones extranjeras-------------------------------		
    $rootScope.$on('menuConceptoPrincipal', function(event, data){
    	console.log("menuConceptoPrincipal");
    	InformacionPrincipalApp.voyAvista("Concepto");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnConcepto.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnConcepto.modificar = false; //si se permite modificar los valores 
    	cnConcepto.enBlanco = true;	    //mostrar seccion en blanco
    	cnConcepto.seleccionado = -1; //Para que no aparezca seleccionado algun glosario
    	cnConcepto.alertPositiva = false;																												
    	cnConcepto.alertNegativa = false;
    });

    $rootScope.$watch('actual.concepto', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.concepto a '"+newValue+"'");;
            cnConcepto.soyActual = InformacionPrincipalApp.soyVistaActual('Concepto');	//Indico al controlador actual si se debe mostrar
            listarGlosario(); 
    	}
    }, false);
    
	
	
}// fin controller
	
})();