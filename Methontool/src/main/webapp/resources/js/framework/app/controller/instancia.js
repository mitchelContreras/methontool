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
	.controller('ControllerInstancia', ControllerInstancia);

ControllerInstancia.$inject = ['$rootScope', 
                       'InformacionPrincipalApp'
                       ,'FactoryGlosario'
                       ,'FactoryMensajeCarga'
                       ,'$scope'
                       ];	

function ControllerInstancia($rootScope,
		InformacionPrincipalApp
		,FactoryGlosario
		,FactoryMensajeCarga
		,$scope
		){
	
	console.log("Entro en ControllerInstancia");
	var cnInstancia = this;
	
	cnInstancia.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnInstancia.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnInstancia.modificar = false; //si se permite modificar los valores 
	cnInstancia.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnInstancia.varEdicion = {};
	cnInstancia.varEdicion.glosarioInstanciaActual = {};
	
//-------------------Variables----------------------------------
	cnInstancia.listaInstancia = {};
	cnInstancia.listaConcepto = {};
	cnInstancia.mensajeAlertPositiva = "";
	cnInstancia.mensajeAlertNegativa = "";
	cnInstancia.alertPositiva = false;
	cnInstancia.alertNegativa = false;
	

	
	
//	{
//		  "array": [
//		    {
//		      "listaAtributo": ["uno", "dos","tres"]
//		      ,"CardinalidadOrigen": "origen"
//		      ,"CardinalidadDestino":"destino"
//		      ,"Nombre":"Atributo Uno"
//		      ,"tipoAributo":"1"
//		      ,"idAtributo":"12"
//		    }
//		    ,{
//		      "listaAtributo": ["cuatro", "cinco","seis"]
//		      ,"CardinalidadOrigen": "M"
//		      ,"CardinalidadDestino":"N"
//		      ,"Nombre":"Atributo Dos"
//		      ,"tipoAributo":"2"
//		      ,"idAtributo":"113"
//		    }
//		    ,{
//		      "listaAtributo": ["siete", "ocho","nueve"]
//		      ,"CardinalidadOrigen": "A"
//		      ,"CardinalidadDestino":"B"
//		      ,"Nombre":"Atributo Tres"
//		      ,"tipoAributo":"3"
//		      ,"idAtributo":"14"
//		    }
//		  ]
//		}
	
	
//-------------------Funciones----------------------------------	
	
	cnInstancia.modificarInstancia = modificarInstancia;
	cnInstancia.modifiqueInstancia = modifiqueInstancia;
	cnInstancia.cancelaInstancia = cancelaInstancia;
//	cnInstancia.verDescripcionGlosario = verDescripcionGlosario;
	cnInstancia.seleccioneGlosario = seleccioneGlosario;
	cnInstancia.cambiarConcepto = cambiarConcepto;
	cnInstancia.cambieConcepto = cambieConcepto;
	cnInstancia.verAtributoLista = verAtributoLista;
	cnInstancia.eliminarAtributoLista = eliminarAtributoLista;
	cnInstancia.agregarAtributoLista = agregarAtributoLista;
	cnInstancia.confirmoAgregarAtributoLista = confirmoAgregarAtributoLista;
	
	function confirmoAgregarAtributoLista(){
		console.log("confirmoAgregarAtributoLista");
		$('#verModalAlertaAgregarNuevoValorListaInstancia1').modal('hide');
		$('#verModalagregarNuevoValorListaInstancia1').modal('show');
	}
	function agregarAtributoLista (atributo){
		console.log("agregarAtributoLista");
		cnInstancia.atributoAuxiliar = atributo;
		$('#verModalAlertaAgregarNuevoValorListaInstancia1').modal('show');
	}
	function eliminarAtributoLista(posicion, atributo){
		console.log("eliminarAtributoLista "+posicion+" atributo.listaAtributo.length: "+atributo.listaAtributo.length);
		atributo.listaAtributo.splice(posicion, 1);
		console.log("atributo.listaAtributo.length: "+atributo.listaAtributo.length);
	}
	function verAtributoLista(atributo){
		console.log("verAtributoLista");
		cnInstancia.auxAtributo = {};
		cnInstancia.auxAtributo.nombre = atributo.Nombre;
		cnInstancia.auxAtributo.cardMin = atributo.CardinalidadOrigen;
		cnInstancia.auxAtributo.carMax = atributo.CardinalidadDestino;
		cnInstancia.auxAtributo.tipoAtributo = atributo.tipoAributo;
		cnInstancia.auxAtributo.descripcion = atributo.descripcion;
//		  "listaAtributo": ["uno", "dos","tres"]
//		  ,"CardinalidadOrigen": "origen"
//		  ,"CardinalidadDestino":"destino"
//		  ,"Nombre":"Atributo Uno"
//		  ,"tipoAributo":"1"
//		  ,"idAtributo":"12"
//		  ,"descripcion":"describiendote"	  
		$('#verModaldescripcionAtributoInstancia1').modal('show');
	}
	function cambieConcepto(){
		console.log("cambie concepto");
//		cnInstancia.varEdicion.conceptoSelected;
//		cnRelacion.varEdicion.glosarioOrigen = cnRelacion.varEdicion.glosarioOrigenSelected.originalObject;
		cnInstancia.varEdicion.glosarioInstanciaActual.concepto = 
			cnInstancia.varEdicion.conceptoSelected.originalObject;
		console.log("nuevo concepto "+cnInstancia.varEdicion.conceptoSelected.originalObject.nombre+" "+cnInstancia.varEdicion.conceptoSelected.originalObject.id);
		$('#verModalactualizarConceptoInstancia1').modal('hide');
	}
	function cambiarConcepto(){
		console.log("Dentro de cambiar concepto");
		$scope.$broadcast('angucomplete-alt:clearInput', 'completeListaConceptoInstancia1');
		$('#verModalactualizarConceptoInstancia1').modal('show');
	}
	function seleccioneGlosario(elemento, limpiar){
		
	
		cnInstancia.seleccionado = elemento.id;
		cnInstancia.enBlanco = false;
		cnInstancia.modificar = false;
		cnInstancia.disabled = true;
		
		
//		limpio variables
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnInstancia.alertPositiva = false;
		}
		cnInstancia.varEdicion = {};
		cnInstancia.varEdicion.glosarioInstanciaActual = {};
		
//		asigno la relacion con la que estoy trabajando
		cnInstancia.varEdicion.glosarioInstanciaActual = elemento;
		
//		var salida;
//		salida = FactoryInstancia.verElemento(elemento.id);
//		FactoryMensajeCarga.abrirMensaje("Cargando");
//		salida.then(
//	            function(aux) {
//	                if(aux.succes){
//	                	console.log("consultar Instancia es true");
//
//	            		cnInstancia.varEdicion.tipoDeDato 
//	            			= FactoryTipoDato.consultarElemento(aux.elemento.tipoDeDato.codigo);
//	            		
//	            		cnInstancia.varEdicion.valor
//	            			= aux.elemento.valor;
//	            		
//	            		cnInstancia.varEdicion.medida
//	                		= FactoryMedida.consultarElemento(aux.elemento.medida.codigo);
//	                	
//	                	FactoryMensajeCarga.cerrarMensaje();
//	                }else{
//	                	
//	                }
//	            }
//	        );
		
		
		cnInstancia.varEdicion.atributos =
			[
				{
				  "listaAtributo": ["uno", "dos","tres"]
				  ,"CardinalidadOrigen": "origen"
				  ,"CardinalidadDestino":"destino"
				  ,"Nombre":"Atributo Uno"
				  ,"tipoAributo":"1"
				  ,"idAtributo":"12"
				  ,"descripcion":"describiendote"	  
				}
				,{
				  "listaAtributo": ["cuatro", "cinco","seis"]
				  ,"CardinalidadOrigen": "M"
				  ,"CardinalidadDestino":"N"
				  ,"Nombre":"Atributo Dos"
				  ,"tipoAributo":"2"
				  ,"idAtributo":"113"
					  ,"descripcion":"describiendote"	
				}
				,{
				  "listaAtributo": ["siete", "ocho","nueve"]
				  ,"CardinalidadOrigen": "A"
				  ,"CardinalidadDestino":"B"
				  ,"Nombre":"Atributo Tres"
				  ,"tipoAributo":"3"
				  ,"idAtributo":"14"
					  ,"descripcion":"describiendote"	
				}
			];

	}
	function modificarInstancia (){
		cnInstancia.disabled = false;
		cnInstancia.modificar = true;
	}
	function modifiqueInstancia (){
//		var salida;
//		salida = FactoryInstancia.actualizarElemento(
//				cnInstancia.varEdicion.glosarioInstanciaActual.id
//				,cnInstancia.varEdicion.medida.codigo
//				,cnInstancia.varEdicion.tipoDeDato.codigo
//				,cnInstancia.varEdicion.valor
//				);
//		salida.then(
//            function(aux) {
//                // success
//                if(aux.succes){
//                	console.log("actualizar es true");
//                	cnInstancia.alertPositiva = true;
//                	cnInstancia.mensajeAlertPositiva = "La Instancia ha sido actualizado";
//                	cnInstancia.seleccioneGlosario (cnInstancia.varEdicion.glosarioInstanciaActual, 'false');
//                }
//             }
//		);	
	}
	function cancelaInstancia (){
		cnInstancia.disabled = true;
		cnInstancia.modificar = false;
	}
//	function verDescripcionGlosario(){
//		$('#verDescripcionGlosarioInstanciaModal').modal('show');
//	}
	
	

//-------------------Funciones extranjeras-------------------------------		
    $rootScope.$on('menuInstanciaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Instancia");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnInstancia.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnInstancia.modificar = false; //si se permite modificar los valores 
    	cnInstancia.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.instancia', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.Instancia a '"+newValue+"'");
            cnInstancia.soyActual = InformacionPrincipalApp.soyVistaActual('Instancia');	//Indico al controlador actual si se debe mostrar
            cnInstancia.listaInstancia = FactoryGlosario.getGlosarioDadoTipoGlosario(8);
            cnInstancia.listaConcepto = FactoryGlosario.getGlosarioDadoTipoGlosario(2);
    	}
    }, false);
    
}//fin controller
	
	
})();	
/**
 * 
 */