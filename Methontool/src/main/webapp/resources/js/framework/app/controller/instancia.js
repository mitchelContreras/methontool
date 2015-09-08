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
                       ,'FactoryInstancia'
                       ];	

function ControllerInstancia($rootScope,
		InformacionPrincipalApp
		,FactoryGlosario
		,FactoryMensajeCarga
		,$scope
		,FactoryInstancia
		){
	
	console.log("Entro en ControllerInstancia");
	var cnInstancia = this;
	
	cnInstancia.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnInstancia.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnInstancia.modificar = false; //si se permite modificar los valores 
	cnInstancia.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnInstancia.varEdicion = {};
	cnInstancia.varAuxiliarDefinicion = [];
	
	
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
	cnInstancia.verConceptoAsociado = verConceptoAsociado;
	cnInstancia.guardarNuevoValor = guardarNuevoValor;
	
	function guardarNuevoValor(){
		$('#verModalagregarNuevoValorListaInstancia1').modal('hide');
		cnInstancia.atributoAuxiliarLista.valores.push(cnInstancia.nuevoValor);		
		cnInstancia.nuevoValor = "";
	}
	
	function verConceptoAsociado(){
		$('#verModalverConceptoAsociado').modal('show');
	}
	
	function confirmoAgregarAtributoLista(){
		console.log("confirmoAgregarAtributoLista");
		$('#verModalAlertaAgregarNuevoValorListaInstancia1').modal('hide');
		$('#verModalagregarNuevoValorListaInstancia1').modal('show');
	}
	function agregarAtributoLista (atributo){
		console.log("agregarAtributoLista");
		cnInstancia.atributoAuxiliarLista = atributo;
		$('#verModalAlertaAgregarNuevoValorListaInstancia1').modal('show');
	}
	function eliminarAtributoLista(posicion, atributo){
		atributo.valores.splice(posicion, 1);
	}
	function verAtributoLista(atributo){
		console.log("verAtributoLista");
		cnInstancia.auxAtributo = atributo; 
		$('#verModaldescripcionAtributoInstancia1').modal('show');
	}
	function cambieConcepto(){
		console.log("cambie concepto");
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
		cnInstancia.varAuxiliarDefinicion = [];
		
		var salida;
		salida = FactoryInstancia.verElemento(elemento.id);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	            	console.log("entro en salida");
	            	console.log("aux es "+JSON.stringify(aux));
	                if(aux.succes){
	                	cnInstancia.varEdicion = aux.elemento;
	                	cnInstancia.varEdicion.conceptoAsociado = FactoryGlosario.consultarElemento(cnInstancia.varEdicion.instancia.idGlosarioConceptoRelacion);
	                	cnInstancia.varEdicion.glosarioInstancia = FactoryGlosario.consultarElemento(cnInstancia.varEdicion.instancia.id);
	                	cnInstancia.varEdicion.definicion = JSON.parse(cnInstancia.varEdicion.definicion);
//	                	cnInstancia.varAuxiliarDefinicion = cnInstancia.varEdicion.definicion.atributoInstancia.slice();
	                	copyArrayOfObject(cnInstancia.varEdicion.definicion.atributoInstancia, cnInstancia.varAuxiliarDefinicion);
	                	//console.log("jsonDef.length "+jsonDef.atributoInstancia.length);
//	            		cnInstancia.varEdicion.tipoDeDato 
//	            			= FactoryTipoDato.consultarElemento(aux.elemento.tipoDeDato.codigo);
//	            		
//	            		cnInstancia.varEdicion.valor
//	            			= aux.elemento.valor;
//	            		
//	            		cnInstancia.varEdicion.medida
//	                		= FactoryMedida.consultarElemento(aux.elemento.medida.codigo);
	                	
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
	}
	function copyArrayOfObject(arrayIn, arrayOut){
		var i;
		for (i=0;i<arrayIn.length;i++){
			var arrayObject = JSON.stringify(arrayIn[i]);
			arrayObject = JSON.parse(arrayObject);
			arrayOut.push(arrayObject);
		}
	}
	
	function modificarInstancia (){
		cnInstancia.disabled = false;
		cnInstancia.modificar = true;
	}
	function modifiqueInstancia (){
		var salida;
		var auxDefinicion = {};

		console.log("cnInstancia.varEdicion.instancia.id=idInstancia "+cnInstancia.varEdicion.instancia.id);
		console.log("cnInstancia.varEdicion.instancia.idGlosarioConceptoRelacion=idConcepto "+cnInstancia.varEdicion.instancia.idGlosarioConceptoRelacion);
		console.log("cnInstancia.varEdicion.id=idInstanciado "+cnInstancia.varEdicion.id);
		auxDefinicion.atributoInstancia = cnInstancia.varAuxiliarDefinicion;
		console.log("auxDefinicion.atributoInstancia "+JSON.stringify(auxDefinicion));
//		idInstancia ,idConcepto ,idInstanciado ,definicion
		salida = FactoryInstancia.actualizarElemento(
				cnInstancia.varEdicion.instancia.id
				,cnInstancia.varEdicion.instancia.idGlosarioConceptoRelacion
				,cnInstancia.varEdicion.id
				,JSON.stringify(auxDefinicion)
				);
		salida.then(
            function(aux) {
                // success
                if(aux.succes){
                	console.log("actualizar es true");
                	cnInstancia.alertPositiva = true;
                	cnInstancia.mensajeAlertPositiva = "La Instancia ha sido actualizado";
                	cnInstancia.seleccioneGlosario (cnInstancia.varEdicion.instancia, 'false');
                }
             }
		);	
	}
	function cancelaInstancia (){
		seleccioneGlosario(cnInstancia.varEdicion.instancia, 'true');
		cnInstancia.disabled = true;
		cnInstancia.modificar = false;
	}
	
	

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