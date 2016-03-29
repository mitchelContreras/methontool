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
	.controller('ControllerInstanciaDos', ControllerInstanciaDos);

ControllerInstanciaDos.$inject = ['$rootScope', 
                       'InformacionPrincipalApp'
                       ,'FactoryGlosario'
                       ,'FactoryMensajeCarga'
                       ];	

function ControllerInstanciaDos($rootScope,
		InformacionPrincipalApp
		,FactoryGlosario
		,FactoryMensajeCarga
		){
	
	console.log("Entro en ControllerInstanciaDos");
	var cnInstanciaDos = this;
	
	cnInstanciaDos.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnInstanciaDos.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnInstanciaDos.modificar = false; //si se permite modificar los valores 
	cnInstanciaDos.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnInstanciaDos.varEdicion = {};
	cnInstanciaDos.varEdicion.glosarioConceptoActual = {};
	

//-------------------Variables----------------------------------
	cnInstanciaDos.listaInstancia = {};
	cnInstanciaDos.listaConcepto = {};
	cnInstanciaDos.mensajeAlertPositiva = "";
	cnInstanciaDos.mensajeAlertNegativa = "";
	cnInstanciaDos.alertPositiva = false;
	cnInstanciaDos.alertNegativa = false;
	
	
//	nombre:
//	tipoValor:
//	precision:
//	rangoValores:
//	cardinalidadOrigen:
//	cardinalidadDestino:
//	valor: 		
	
	cnInstanciaDos.varEdicion.atributosClase =
		[
			{
			  "nombre": "nombreUno"
			  ,"cardinalidadOrigen": "origen"
			  ,"cardinalidadDestino":"destino"
			  ,"tipoValor":"tipo valor 1"
			  ,"precision":"precionando"
			  ,"rangoValores":"rango valorcito"
			  ,"valor":"valororores"	  
			}
			,{
					"nombre": "nombreDos"
					  ,"cardinalidadOrigen": "origen3"
					  ,"cardinalidadDestino":"destino3"
					  ,"tipoValor":"tipo valor 123"
					  ,"precision":"precionando"
					  ,"rangoValores":"rango valorcito"
					  ,"valor":"valororores"	  
			},{
				  "nombre": "nombreTres"
					  ,"cardinalidadOrigen": "origen2"
					  ,"cardinalidadDestino":"destino2"
					  ,"tipoValor":"tipo valor 431"
					  ,"precision":"precionando"
					  ,"rangoValores":"rango valorcito"
					  ,"valor":"valororores"	  
			}
		];


	cnInstanciaDos.varEdicion.atributosInstancia =
		[
			{
			  "nombre": "nombreUno"
			  ,"cardinalidadOrigen": "origen"
			  ,"cardinalidadDestino":"destino"
			  ,"tipoValor":"tipo valor 1"
			  ,"precision":"precionando"
			  ,"rangoValores":"rango valorcito"
			  ,"valorDefecto":"valororores"	  
			  ,"medida":"medias"
			}
			,{
					"nombre": "nombreDos"
					  ,"cardinalidadOrigen": "origen3"
					  ,"cardinalidadDestino":"destino3"
					  ,"tipoValor":"tipo valor 123"
					  ,"precision":"precionando"
					  ,"rangoValores":"rango valorcito"
					  ,"valorDefecto":"valororores"	  
					  ,"medida":"medias"	  
			},{
				  "nombre": "nombreTres"
					  ,"cardinalidadOrigen": "origen2"
					  ,"cardinalidadDestino":"destino2"
					  ,"tipoValor":"tipo valor 431"
					  ,"precision":"precionando"
					  ,"rangoValores":"rango valorcito"
					  ,"valorDefecto":"valororores"	  
					  ,"medida":"medias"  
			}
		];
	
	
//-------------------Funciones----------------------------------	
	
	cnInstanciaDos.modificarInstanciaDos = modificarInstanciaDos;
	cnInstanciaDos.modifiqueInstanciaDos = modifiqueInstanciaDos;
	cnInstanciaDos.cancelaInstanciaDos = cancelaInstanciaDos;
	cnInstanciaDos.verDescripcionGlosario = verDescripcionGlosario;
	cnInstanciaDos.seleccioneGlosario = seleccioneGlosario;
	
	function seleccioneGlosario(elemento, limpiar){
		cnInstanciaDos.seleccionado = elemento.id;
		cnInstanciaDos.enBlanco = false;
		cnInstanciaDos.modificar = false;
		cnInstanciaDos.disabled = true;
		
		
//		limpio variables
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnInstanciaDos.alertPositiva = false;
		}
//		cnInstanciaDos.varEdicion = {};
		cnInstanciaDos.varEdicion.glosarioConceptoActual = {};
		
//		asigno la relacion con la que estoy trabajando
		cnInstanciaDos.varEdicion.glosarioConceptoActual = elemento;
		
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
	}
	function modificarInstanciaDos (){
		cnInstanciaDos.disabled = false;
		cnInstanciaDos.modificar = true;
	}
	function modifiqueInstanciaDos (){
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
	function cancelaInstanciaDos (){
		cnInstanciaDos.disabled = true;
		cnInstanciaDos.modificar = false;
	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioInstanciaDosModal').modal('show');
	}
	
	

//-------------------Funciones extranjeras-------------------------------		
    $rootScope.$on('menuInstanciaDosPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("InstanciaDos");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnInstanciaDos.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnInstanciaDos.modificar = false; //si se permite modificar los valores 
    	cnInstanciaDos.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.instanciaDos', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.InstanciaDos a '"+newValue+"'");
            cnInstanciaDos.soyActual = InformacionPrincipalApp.soyVistaActual('InstanciaDos');	//Indico al controlador actual si se debe mostrar
            cnInstanciaDos.listaInstancia = FactoryGlosario.getGlosarioDadoTipoGlosario(8);
            cnInstanciaDos.listaConcepto = FactoryGlosario.getGlosarioDadoTipoGlosario(2);
    	}
    }, false);
    
}//fin controller
	
	
})();	
/**
 * 
 */