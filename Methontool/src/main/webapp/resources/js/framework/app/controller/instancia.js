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
	cnInstancia.crearErrorMensaje = "Debe llenar todos los campos obligatorios (*) ";
	cnInstancia.alertPositiva = false;
	cnInstancia.alertNegativa = false;
	cnInstancia.crearErrorBoolean = false;
	
		
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
	cnInstancia.agregarInstanciaModal = agregarInstanciaModal;
	cnInstancia.guardarNuevaInstancia = guardarNuevaInstancia;
	
	function guardarNuevaInstancia(){
		if( cnInstancia.nuevaInstancia.conceptoAsociado == "" || cnInstancia.nuevaInstancia.nombre ==""){
			cnInstancia.crearErrorBoolean = true;
		}else{
			var salida;
			salida = FactoryInstancia.crearElemento(cnInstancia.nuevaInstancia.nombre, cnInstancia.nuevaInstancia.conceptoAsociado.originalObject.id);
			FactoryMensajeCarga.abrirMensaje("Cargando");
			salida.then(
	            function(aux) {
	            	console.log("entro en salida");
	            	console.log("aux es "+JSON.stringify(aux));
	                if(aux.succes){
	                	var elementoNuevo = {"id":aux.elemento.idGlosario};
	                	var glosario = FactoryGlosario.actualizarLista();
	                	console.log("salida de getListaElemento "+glosario.length);
	    	    		glosario.then(
	    		                function(salida) {
	    			            	console.log("entro en salida 2");
	    			            	console.log("aux es "+JSON.stringify(aux));	    		                	
	    		                    if(salida.succes){
	    		                    	FactoryGlosario.setListaElemento (salida.elementos);
	    		                    	FactoryGlosario.setYaConsulte (true);
	    		                    	cnInstancia.listaInstancia = FactoryGlosario.getGlosarioDadoTipoGlosario(8);
	    		                    	cnInstancia.alertPositiva = true;
	    		                    	cnInstancia.mensajeAlertPositiva = "La Instancia ha sido creada";
	    		                    	cnInstancia.seleccioneGlosario (elementoNuevo, 'false');	    		                    	
	    		                    	
	    		                    	FactoryMensajeCarga.cerrarMensaje();
	    		                    }
	    		                }
	    		        );	                	
	                	
	                	
	                }
	            }
	        );			
			
			$('#verModalAgregarInstanciaenInstancia').modal('hide');
		}
	}
	
	function agregarInstanciaModal(){
		cnInstancia.listaConcepto = [];
		cnInstancia.nuevaInstancia = {};
		cnInstancia.nuevaInstancia.conceptoAsociado = "";
		cnInstancia.nuevaInstancia.nombre = "";
		cnInstancia.crearErrorBoolean = false;
		$scope.$broadcast('angucomplete-alt:asignar-defoult', 'autoAgregarConceptoAsociadoInstancia', "");
		cnInstancia.listaConcepto = FactoryGlosario.getGlosarioDadoTipoGlosario(2).slice(0);
		
		$('#verModalAgregarInstanciaenInstancia').modal('show');
		
	}
	
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
		cnInstancia.alertNegativa = false;
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
	                	cnInstancia.varEdicion.conceptoAsociado = FactoryGlosario.consultarElemento(cnInstancia.varEdicion.idGlosarioConceptoRelacion);
	                	cnInstancia.varEdicion.glosarioInstancia = FactoryGlosario.consultarElemento(cnInstancia.varEdicion.idGlosario);
	                	console.log("Mitchell cnInstancia.varEdicion.definicion "+JSON.stringify(cnInstancia.varEdicion.definicion));
//	                	cnInstancia.varEdicion.definicion = JSON.parse(cnInstancia.varEdicion.definicion);
//	                	cnInstancia.varAuxiliarDefinicion = cnInstancia.varEdicion.definicion.atributoInstancia.slice();
	                	copyArrayOfObject(cnInstancia.varEdicion.definicion, cnInstancia.varAuxiliarDefinicion);
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
	                	cnInstancia.varEdicion.glosarioInstancia = FactoryGlosario.consultarElemento(elemento.id);
	                	cnInstancia.mensajeAlertNegativa = "La instancia no ha sido asociada a algún concepto";
	                	cnInstancia.alertNegativa = true;
	                	FactoryMensajeCarga.cerrarMensaje();
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

//		idInstancia ,idConcepto ,definicion
		salida = FactoryInstancia.actualizarElemento(
				cnInstancia.varEdicion.idGlosario
				,cnInstancia.varEdicion.idGlosarioConceptoRelacion
				,JSON.stringify(cnInstancia.varAuxiliarDefinicion)
				);
		salida.then(
            function(aux) {
                // success
            	console.log("aux es "+JSON.stringify(aux));
                if(aux.succes){
                	console.log("actualizar es true");
                	cnInstancia.alertPositiva = true;
                	cnInstancia.mensajeAlertPositiva = "La Instancia ha sido actualizado";
                	cnInstancia.seleccioneGlosario (cnInstancia.varEdicion, 'false');
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