/**
 * En el controller encargado de la seccion atributo de instancia
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
 * @param $http la funcion de autocompletar da uso a esta variable
 */

(function(){
	"use strict"	

angular.module('methontool')
	.controller('ControllerAtributoInstancia', ControllerAtributoInstancia);

ControllerAtributoInstancia.$inject = ['$rootScope', 
                                       'InformacionPrincipalApp',
                                       '$http'
                                       ,'FactoryGlosario'
                                       ,'FactoryMensajeCarga'
                                       ,'FactoryAtributoInstancia'
                                       ,'FactoryTipoDato'
                                       ,'FactoryMedida'
                                       ];	

function ControllerAtributoInstancia($rootScope,
		InformacionPrincipalApp,
		$http
		,FactoryGlosario
		,FactoryMensajeCarga
		,FactoryAtributoInstancia
    	,FactoryTipoDato
    	,FactoryMedida		
		){
	
	console.log("Entro en ControllerAtributoInstancia");
	var cnAtributoInstancia = this;
	
	cnAtributoInstancia.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnAtributoInstancia.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnAtributoInstancia.modificar = false; //si se permite modificar los valores 
	cnAtributoInstancia.enBlanco = true;	    //mostrar seccion en blanco
	
//-------------------Variables de edicion---------------------
	cnAtributoInstancia.concepto = {};
	cnAtributoInstancia.cardinalidad = "";
	cnAtributoInstancia.tipoValor = "";
	cnAtributoInstancia.rangoValor = "";
	cnAtributoInstancia.varEdicion = {};
	cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual = {};
	cnAtributoInstancia.varEdicion.glosarioConcepto = {};
	cnAtributoInstancia.varEdicion.tipoDeDato = {};
	cnAtributoInstancia.varEdicion.medida = {};
	cnAtributoInstancia.varEdicion.precision = "";
	cnAtributoInstancia.varEdicion.rangoValores = "";
	cnAtributoInstancia.varEdicion.minCardinalidad = "";
	cnAtributoInstancia.varEdicion.maxCardinalidad = "";
	cnAtributoInstancia.varEdicion.valorDefecto = "";

//-------------------Variables----------------------------------
	cnAtributoInstancia.listaGlosario = {};
	cnAtributoInstancia.listaMedida = {};
	cnAtributoInstancia.listaTipoDeDato = {};
	cnAtributoInstancia.mensajeAlertPositiva = "";
	cnAtributoInstancia.mensajeAlertNegativa = "";
	cnAtributoInstancia.alertPositiva = false;
	cnAtributoInstancia.alertNegativa = false;
	
//-------------------Funciones----------------------------------	
	
	cnAtributoInstancia.modificarAtributoInstancia = modificarAtributoInstancia;
	cnAtributoInstancia.modifiqueAtributoInstancia = modifiqueAtributoInstancia;
	cnAtributoInstancia.cancelaAtributoInstancia = cancelaAtributoInstancia;
	cnAtributoInstancia.verDescripcionGlosario = verDescripcionGlosario;
	cnAtributoInstancia.verConcepto = verConcepto;
	cnAtributoInstancia.seleccioneGlosario = seleccioneGlosario;
	
	function seleccioneGlosario(elemento, limpiar){
		cnAtributoInstancia.seleccionado = elemento.id;
		cnAtributoInstancia.enBlanco = false;
		cnAtributoInstancia.modificar = false;
		cnAtributoInstancia.disabled = true;
		
//		limpio variables
		cnAtributoInstancia.varEdicion = {};
		cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual = {};
		cnAtributoInstancia.varEdicion.glosarioConcepto = {};
		cnAtributoInstancia.varEdicion.tipoDeDato = {};
		cnAtributoInstancia.varEdicion.medida = {};
		cnAtributoInstancia.varEdicion.precision = "";
		cnAtributoInstancia.varEdicion.rangoValores = "";
		cnAtributoInstancia.varEdicion.minCardinalidad = "";
		cnAtributoInstancia.varEdicion.maxCardinalidad = "";
		cnAtributoInstancia.varEdicion.valorDefecto = "";
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnAtributoInstancia.alertPositiva = false;
		}
		cnAtributoInstancia.alertNegativa = false;
		
		
//		asigno la relacion con la que estoy trabajando
		cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual = elemento;
		console.log("cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual "+cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual.id+" "+cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual.nombre);
		var salida;
		salida = FactoryAtributoInstancia.verElemento(elemento.id);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("consultar es true");
//	                	asigno concepto
	                	cnAtributoInstancia.varEdicion.glosarioConcepto
	                		= FactoryGlosario.consultarElemento(aux.elemento.idGlosarioConcepto);
	                	
	                	if(aux.elemento.idGlosarioConcepto == 0){
	                		console.log("es 0 glosario");
	                		cnAtributoInstancia.conceptoAsociado = false;
	                		cnAtributoInstancia.alertNegativa = true;
	                		cnAtributoInstancia.mensajeAlertNegativa = "Debe asociar un concepto a este atributo de instancia";
	                	}else{
	                		cnAtributoInstancia.conceptoAsociado = true;
	                	}
	                	
//	                	asigno tipo de dato
	                	cnAtributoInstancia.varEdicion.tipoDeDato
	                		=FactoryTipoDato.consultarElemento(aux.elemento.tipoDeDato.codigo);
//	                	asigno medida
	                	cnAtributoInstancia.varEdicion.medida
	                		=FactoryMedida.consultarElemento(aux.elemento.medida.codigo);
//	                	asigno precision
	                	cnAtributoInstancia.varEdicion.precision 
	                		= aux.elemento.precision;
	                	
//	                	asigno rango de valores
	                	cnAtributoInstancia.varEdicion.rangoValores
	                		= aux.elemento.rangoValores;
	                	
//	                	asigno minCardinalidad
	                	cnAtributoInstancia.varEdicion.minCardinalidad
	                		= aux.elemento.cardinalidadMin;
	                	
//	                	asigno maxCardinalidad
	                	cnAtributoInstancia.varEdicion.maxCardinalidad
	                		= aux.elemento.cardinalidadMax;
	                	
//	                	asgino Value
	                	cnAtributoInstancia.varEdicion.valorDefecto 
	                		= aux.elemento.value;
	                	console.log("cnAtributoInstancia.varEdicion.tipoDeDato "+cnAtributoInstancia.varEdicion.tipoDeDato);
	                	console.log("cnAtributoInstancia.varEdicion.medida "+cnAtributoInstancia.varEdicion.medida);
	                	console.log("cnAtributoInstancia.varEdicion.precision  "+cnAtributoInstancia.varEdicion.precision );
	                	console.log("cnAtributoInstancia.varEdicion.rangoValores "+cnAtributoInstancia.varEdicion.rangoValores);
	                	console.log("cnAtributoInstancia.varEdicion.minCardinalidad "+cnAtributoInstancia.varEdicion.minCardinalidad);
	                	console.log("cnAtributoInstancia.varEdicion.maxCardinalidad "+cnAtributoInstancia.varEdicion.maxCardinalidad);
	                	console.log("cnAtributoInstancia.varEdicion.valorDefecto "+cnAtributoInstancia.varEdicion.valorDefecto);
	                	
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
		
		
	}
	function modificarAtributoInstancia (){
		cnAtributoInstancia.disabled = false;
		cnAtributoInstancia.modificar = true;
	}
	function modifiqueAtributoInstancia (){
		console.log("entre en modifiqueAtributoInstancia");
		var salida;
		salida = FactoryAtributoInstancia.actualizarElemento(
				cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual.id
				,cnAtributoInstancia.varEdicion.maxCardinalidad
				,cnAtributoInstancia.varEdicion.minCardinalidad
				,cnAtributoInstancia.varEdicion.glosarioConcepto.id
				,cnAtributoInstancia.varEdicion.medida.codigo
				,cnAtributoInstancia.varEdicion.precision
				,cnAtributoInstancia.varEdicion.rangoValores
				,cnAtributoInstancia.varEdicion.tipoDeDato.codigo
				,cnAtributoInstancia.varEdicion.valorDefecto
				);
		salida.then(
            function(aux) {
                // success
                if(aux.succes){
                	console.log("actualizar es true");
                	cnAtributoInstancia.alertPositiva = true;
                	cnAtributoInstancia.mensajeAlertPositiva = "El Atributo de instancia ha sido actualizado";
                	cnAtributoInstancia.seleccioneGlosario (cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual, 'false');
                }
             }
		);	
	}
	function cancelaAtributoInstancia (){
		cnAtributoInstancia.disabled = true;
		cnAtributoInstancia.modificar = false;
		cnAtributoInstancia.seleccioneGlosario (cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual, 'true');
	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioAtributoInstanciaModal').modal('show');
	}
	function verConcepto(){
		$('#verConceptoAtributoInstanciaModal').modal('show');
	}
	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		FactoryGlosario.getListaElementos(
				function (output){
					cnAtributoInstancia.listaGlosario = output;
					FactoryMensajeCarga.cerrarMensaje();
				},function (){
					console.log("error");
				}
			);
	}
	

//-------------------Funciones extranjeras-------------------------------		
    $rootScope.$on('menuAtributoInstanciaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("AtributoInstancia");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnAtributoInstancia.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnAtributoInstancia.modificar = false; //si se permite modificar los valores 
    	cnAtributoInstancia.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.atributoInstancia', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.atributoInstancia a '"+newValue+"'");
            cnAtributoInstancia.soyActual = InformacionPrincipalApp.soyVistaActual('AtributoInstancia');	//Indico al controlador actual si se debe mostrar
            listarGlosario(); 
    		cnAtributoInstancia.listaMedida = FactoryMedida.getListaElemento();
    		cnAtributoInstancia.listaTipoDeDato = FactoryTipoDato.getListaElemento();
    	}
    }, false);	
	
}//fin controller
	
	
})();

