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
                       ,'FactoryConcepto'
                       ,'FactoryInstancia'
                       ,'$http'
                       ,'fileUpload'
                       ,'FileUploader'
                       ,'$scope'
                       ];	

function ControllerInstanciaDos($rootScope,
		InformacionPrincipalApp
		,FactoryGlosario
		,FactoryMensajeCarga
		,FactoryConcepto
		,FactoryInstancia
		,$http
		,fileUpload
		,FileUploader
		,$scope
		){
	
    var uploader = $scope.uploader = new FileUploader({
        url: 'http://localhost:8080/Methontool/upload'
    });
    
    uploader.onAfterAddingAll = function(addedFileItems) {
        cnInstanciaDos.cambioArchivo = true;
        cnInstanciaDos.archivoASubir = addedFileItems[0].file;
        console.log("cnInstanciaDos.archivoASubir.size "+cnInstanciaDos.archivoASubir.size);
        var aux = cnInstanciaDos.archivoASubir.size/1024;
        cnInstanciaDos.archivoASubir.tamano = aux.toFixed(2)+" KB";
    }
    
    
    
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
	cnInstanciaDos.cambioArchivo = false;
	
	
//-------------------Funciones----------------------------------	
	
	cnInstanciaDos.modificarInstanciaDos = modificarInstanciaDos;
	cnInstanciaDos.modifiqueInstanciaDos = modifiqueInstanciaDos;
	cnInstanciaDos.cancelaInstanciaDos = cancelaInstanciaDos;
	cnInstanciaDos.verDescripcionGlosario = verDescripcionGlosario;
	cnInstanciaDos.seleccioneGlosario = seleccioneGlosario;
	cnInstanciaDos.obtenerGlosarioDadoIdGlosaro = obtenerGlosarioDadoIdGlosaro;
	cnInstanciaDos.uploadFile = uploadFile;
	cnInstanciaDos.eliminarArchivo = eliminarArchivo;
	cnInstanciaDos.cargarArchivo = cargarArchivo;
	
	function cargarArchivo(){
		if(uploader.queue.length > 0){
			console.log("cargar");
			uploader.queue[0].upload();
		}		
	}
	
	function eliminarArchivo(){
		if(uploader.queue.length > 0){
			uploader.queue[0].remove();
			cnInstanciaDos.cambioArchivo = false;
			 cnInstanciaDos.archivoASubir = {};
		}
	}
	
	function uploadFile(){
		console.log("entre a subir archivo");
        var file = cnInstanciaDos.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "http://localhost:8080/Methontool/upload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
	}
	
	function obtenerGlosarioDadoIdGlosaro (elementoId){
		return FactoryGlosario.consultarElemento(elementoId);
	}
	
	function seleccioneGlosario(elemento, limpiar){
		cnInstanciaDos.seleccionado = elemento.id;
		cnInstanciaDos.enBlanco = false;
		cnInstanciaDos.modificar = false;
		cnInstanciaDos.disabled = true;
	
		cnInstanciaDos.rutaDonwload = FactoryInstancia.getRutaDescargarArchivo(cnInstanciaDos.seleccionado, 10);
		console.log("cnInstanciaDos.rutaDonwload "+cnInstanciaDos.rutaDonwload);
//		limpio variables
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnInstanciaDos.alertPositiva = false;
		}
		cnInstanciaDos.varEdicion = {};
		cnInstanciaDos.varEdicion.glosarioConceptoActual = {};
		cnInstanciaDos.mensajeAlertNegativa = "";
		
//		asigno la relacion con la que estoy trabajando
		cnInstanciaDos.varEdicion.glosarioConceptoActual = elemento;
		
		console.log("Elemento que voy a consultar es ");
		console.log(JSON.stringify(elemento, null, '\t'));
		
//		Consulto el concepto seleccionado
		var salida;
//		salida = FactoryConcepto.consultarElemento(elemento.id);
//		FactoryMensajeCarga.abrirMensaje("Cargando");
//		salida.then(
//	            function(aux) {
//	        		console.log("***Salid de consulta");
//	        		console.log(JSON.stringify(aux, null, '\t'));
//	        		
//	                if(aux.succes){
//	                	console.log("consultar Conecpto es true");
//	                	
////	                	Consulto glosario de oncepto actual
//	                	cnInstanciaDos.varEdicion.glosarioConceptoActual = 
//	                		FactoryGlosario.consultarElemento(aux.elemento.idGlosario);
//	                	
////	                	Traigo las listas de atributo
//	                	cnInstanciaDos.varEdicion.atributosClase =
//	                		aux.elemento.atributosClase;
//	                	cnInstanciaDos.varEdicion.atributosInstancia =
//	                		aux.elemento.atributosInstancia;
//	                	
////	            		cnInstancia.varEdicion.tipoDeDato 
////	            			= FactoryTipoDato.consultarElemento(aux.elemento.tipoDeDato.codigo);
////	            		
////	            		cnInstancia.varEdicion.valor
////	            			= aux.elemento.valor;
////	            		
////	            		cnInstancia.varEdicion.medida
////	                		= FactoryMedida.consultarElemento(aux.elemento.medida.codigo);
//	                	
//	                	FactoryMensajeCarga.cerrarMensaje();
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
	
    $rootScope.$watch('uploader.queue', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio uploader '");
    	}
    }, false);

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