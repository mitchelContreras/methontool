/**
 * En el controller encargado de la seccion atributo de Clase
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
	.controller('ControllerAtributoClase', ControllerAtributoClase);

ControllerAtributoClase.$inject = ['$rootScope', 
                                       'InformacionPrincipalApp',
                                       '$http'
                                       ,'FactoryGlosario'
                                       ,'FactoryTipoDato'
                                       ,'FactoryAtributoClase'
                                       ,'FactoryMensajeCarga'
                                       ];	

function ControllerAtributoClase($rootScope,
		InformacionPrincipalApp,
		$http
		,FactoryGlosario
		,FactoryTipoDato
		,FactoryAtributoClase
		,FactoryMensajeCarga
		){
	
	console.log("Entro en ControllerAtributoClase");
	var cnAtributoClase = this;
	
	cnAtributoClase.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnAtributoClase.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnAtributoClase.modificar = false; //si se permite modificar los valores 
	cnAtributoClase.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnAtributoClase.varEdicion = {};
	cnAtributoClase.varEdicion.glosarioAtributoClaseActual = {};
	cnAtributoClase.varEdicion.glosarioConcepto = {};
	cnAtributoClase.varEdicion.tipoDeDato = {};
	cnAtributoClase.varEdicion.valor = "";		
	cnAtributoClase.varEdicion.precision = "";
	cnAtributoClase.varEdicion.rangoValores = "";
	cnAtributoClase.varEdicion.minCardinalidad = "";
	cnAtributoClase.varEdicion.maxCardinalidad = "";
	
//-------------------Variables----------------------------------
	cnAtributoClase.listaGlosario = {};
	cnAtributoClase.listaTipoDeDato = {};
	cnAtributoClase.mensajeAlertPositiva = "";
	cnAtributoClase.mensajeAlertNegativa = "";
	cnAtributoClase.alertPositiva = false;
	cnAtributoClase.alertNegativa = false;
	
//-------------------Funciones----------------------------------	
	
	cnAtributoClase.modificarAtributoClase = modificarAtributoClase;
	cnAtributoClase.modifiqueAtributoClase = modifiqueAtributoClase;
	cnAtributoClase.cancelaAtributoClase = cancelaAtributoClase;
	cnAtributoClase.verDescripcionGlosario = verDescripcionGlosario;
	cnAtributoClase.verConcepto = verConcepto;
	cnAtributoClase.seleccioneGlosario = seleccioneGlosario;
	
	function seleccioneGlosario(elemento, limpiar){
		cnAtributoClase.seleccionado = elemento.id;
		cnAtributoClase.enBlanco = false;
		cnAtributoClase.modificar = false;
		cnAtributoClase.disabled = true;
		
//		limpio variables
		cnAtributoClase.varEdicion = {};
		cnAtributoClase.varEdicion.glosarioAtributoClaseActual = {};
		cnAtributoClase.varEdicion.glosarioConcepto = {};
		cnAtributoClase.varEdicion.tipoDeDato = {};
		cnAtributoClase.varEdicion.valor = "";		
		cnAtributoClase.varEdicion.precision = "";
		cnAtributoClase.varEdicion.rangoValores = "";
		cnAtributoClase.varEdicion.minCardinalidad = "";
		cnAtributoClase.varEdicion.maxCardinalidad = "";
		
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnAtributoClase.alertPositiva = false;
		}
		cnAtributoClase.alertNegativa = false;
		
		
//		asigno la relacion con la que estoy trabajando
		cnAtributoClase.varEdicion.glosarioAtributoClaseActual = elemento;
		console.log("cnAtributoClase.varEdicion.glosarioAtributoClaseActual "+cnAtributoClase.varEdicion.glosarioAtributoClaseActual.id+" "+cnAtributoClase.varEdicion.glosarioAtributoClaseActual.nombre);
		var salida;
		salida = FactoryAtributoClase.verElemento(elemento.id);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("consultar es true");
//	                	asigno concepto
	                	console.log("aux.elemento.idGlosarioConcepto "+aux.elemento.idGlosarioConcepto);
	                	cnAtributoClase.varEdicion.glosarioConcepto
	                		= buscarEnlistaGlosario(aux.elemento.idGlosarioConcepto);
	                	
	                	if(aux.elemento.idGlosarioConcepto == 0){
	                		console.log("es 0 glosario");
	                		cnAtributoClase.conceptoAsociado = false;
	                		cnAtributoClase.alertNegativa = true;
	                		cnAtributoClase.mensajeAlertNegativa = "Debe asociar un concepto a este atributo de clase";
	                	}else{
	                		cnAtributoClase.conceptoAsociado = true;
	                	}
	                	
//	                	asigno tipo de dato
	                	cnAtributoClase.varEdicion.tipoDeDato
	                		=FactoryTipoDato.consultarElemento(aux.elemento.tipoDeDato.codigo);
	                	
//	                	asigno precision
	                	cnAtributoClase.varEdicion.precision 
	                		= aux.elemento.precision;
	                	
//	                	asigno rango de valores
	                	cnAtributoClase.varEdicion.rangoValores
	                		= aux.elemento.rangoValores;
	                	
//	                	asigno minCardinalidad
	                	cnAtributoClase.varEdicion.minCardinalidad
	                		= aux.elemento.cardinalidadMin;
	                	
//	                	asigno maxCardinalidad
	                	cnAtributoClase.varEdicion.maxCardinalidad
	                		= aux.elemento.cardinalidadMax;
	                	
//	                	asgino Value
	                	cnAtributoClase.varEdicion.valorDefecto 
	                		= aux.elemento.value;
	                	console.log("cnAtributoClase.varEdicion.tipoDeDato "+cnAtributoClase.varEdicion.tipoDeDato);
	                	console.log("cnAtributoClase.varEdicion.precision  "+cnAtributoClase.varEdicion.precision );
	                	console.log("cnAtributoClase.varEdicion.rangoValores "+cnAtributoClase.varEdicion.rangoValores);
	                	console.log("cnAtributoClase.varEdicion.minCardinalidad "+cnAtributoClase.varEdicion.minCardinalidad);
	                	console.log("cnAtributoClase.varEdicion.maxCardinalidad "+cnAtributoClase.varEdicion.maxCardinalidad);
	                	console.log("cnAtributoClase.varEdicion.valorDefecto "+cnAtributoClase.varEdicion.valorDefecto);
	                	
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
		
	}
	function buscarEnlistaGlosario(id){
		console.log("buscar id:"+id+" cnAtributoClase.listaGlosario.length:"+cnAtributoClase.listaGlosario.length);
		for (var i=0;i<cnAtributoClase.listaGlosario.length;i++){
			if (cnAtributoClase.listaGlosario[i].id == id){
				console.log("encontro");
				return cnAtributoClase.listaGlosario[i];
			}
		}
	}	
	function modificarAtributoClase (){
		cnAtributoClase.disabled = false;
		cnAtributoClase.modificar = true;
	}
	function modifiqueAtributoClase (){
		var salida;
		salida = FactoryAtributoClase.actualizarElemento(
				cnAtributoClase.varEdicion.glosarioAtributoClaseActual.id
				,cnAtributoClase.varEdicion.maxCardinalidad
				,cnAtributoClase.varEdicion.minCardinalidad
				,cnAtributoClase.varEdicion.glosarioConcepto.id
				,cnAtributoClase.varEdicion.tipoDeDato.codigo
				,cnAtributoClase.varEdicion.precision
				,cnAtributoClase.varEdicion.rangoValores
				,cnAtributoClase.varEdicion.valorDefecto
				);
		salida.then(
            function(aux) {
                // success
                if(aux.succes){
                	console.log("actualizar es true");
                	cnAtributoClase.alertPositiva = true;
                	cnAtributoClase.mensajeAlertPositiva = "El Atributo de clase ha sido actualizado";
                	cnAtributoClase.seleccioneGlosario (cnAtributoClase.varEdicion.glosarioAtributoClaseActual, false);
                }
             }
		);	
	}
	function cancelaAtributoClase (){
		cnAtributoClase.disabled = true;
		cnAtributoClase.modificar = false;
		cnAtributoClase.seleccioneGlosario (cnAtributoClase.varEdicion.glosarioAtributoClaseActual, true);

	}
	function verDescripcionGlosario(){
		$('#verDescripcionGlosarioAtributoClaseModal').modal('show');
	}
	function verConcepto(){
		$('#verConceptoAtributoClaseModal').modal('show');
	}
	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		FactoryGlosario.getListaElementos(
				function (output){
					cnAtributoClase.listaGlosario = output;
				},function (){
					console.log("error");
				}
		);
	}	
//-------------------Funciones extranjeras-------------------------------			
    $rootScope.$on('menuAtributoClasePrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("AtributoClase");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnAtributoClase.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnAtributoClase.modificar = false; //si se permite modificar los valores 
    	cnAtributoClase.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.atributoClase', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.atributoClase a '"+newValue+"'");
            cnAtributoClase.soyActual = InformacionPrincipalApp.soyVistaActual('AtributoClase');	//Indico al controlador actual si se debe mostrar
            listarGlosario(); 
            cnAtributoClase.listaTipoDeDato = FactoryTipoDato.getListaElemento();
    	}
    }, false);
	
}//fin controller
	
	
})();	
