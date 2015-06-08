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
    ){
	
	console.log("Entro en ControllerConcepto");
	var cnConcepto = this;

	cnConcepto.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnConcepto.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnConcepto.modificar = false; //si se permite modificar los valores 
	cnConcepto.enBlanco = true;	    //mostrar seccion en blanco
	cnConcepto.enCrear = false;		//en true entra en paso 3 y false entra en paso 5
	
//-------------------Variables de edicion---------------------


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
	
	function agregarConcepto(lista){
//		console.log("enro en cnConcepto.agregarConcepto");
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
			cnConcepto.ConceptoActual.instancias.splice(index, 1);
			break;
		case 'atributoClase':
			cnConcepto.ConceptoActual.atributosClase.splice(index, 1);
			break;	
		case 'atributoInstancia':
			cnConcepto.ConceptoActual.atributosInstancia.splice(index, 1);
			break;		
		}
	}
	
	function cancelarModificarConcepto(){
		cnConcepto.disabled = true;
		cnConcepto.modificar = false;
		seleccioneGlosario({'id':cnGlosario.idGlosario},1); //Llamo con el id del seleccionado porque es su posicion en el arreglo lo que necesito y no su id en bd
	}
	function modifiqueConcepto(){
		
	}
	function modificarConcepto(){
		cnConcepto.disabled = false;
		cnConcepto.modificar = true;
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
		cnConcepto.listaGlosario = FactoryGlosario.getListaElemento();
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