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
                       ];	

function ControllerInstancia($rootScope,
		InformacionPrincipalApp
		,FactoryGlosario
		,FactoryMensajeCarga
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
	
//-------------------Funciones----------------------------------	
	
	cnInstancia.modificarInstancia = modificarInstancia;
	cnInstancia.modifiqueInstancia = modifiqueInstancia;
	cnInstancia.cancelaInstancia = cancelaInstancia;
	cnInstancia.verDescripcionGlosario = verDescripcionGlosario;
	cnInstancia.seleccioneGlosario = seleccioneGlosario;
	
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
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioInstanciaModal').modal('show');
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