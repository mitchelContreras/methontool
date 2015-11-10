/**
 * En el controller encargado de la seccion axioma
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
	.controller('ControllerAxioma', ControllerAxioma);

ControllerAxioma.$inject = ['$rootScope', 
                       'InformacionPrincipalApp',
                       '$http'
                       ,'FactoryGlosario'
                       ,'FactoryAxioma'
                       ,'FactoryMensajeCarga'
                       ,'$scope'
                       ];	

function ControllerAxioma($rootScope,
		InformacionPrincipalApp,
		$http
		,FactoryGlosario
		,FactoryAxioma
		,FactoryMensajeCarga
		,$scope
		){
	
	console.log("Entro en ControllerAxioma");
	var cnAxioma = this;


	cnAxioma.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnAxioma.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnAxioma.modificar = false; //si se permite modificar los valores 
	cnAxioma.enBlanco = true;	    //mostrar seccion en blanco
	
	//-------------------Variables de edicion---------------------
	cnAxioma.variables = "";
	cnAxioma.expresion = "";
	cnAxioma.enGlosario = {};	
	
//-------------------Funciones----------------------------------	
	
	cnAxioma.modificarAxioma = modificarAxioma;
	cnAxioma.modifiqueAxioma = modifiqueAxioma;
	cnAxioma.cancelaAxioma = cancelaAxioma;
	cnAxioma.seleccioneGlosario = seleccioneGlosario;
	cnAxioma.eliminarDeLista = eliminarDeLista;
	cnAxioma.agregarALista = agregarALista;
	cnAxioma.agregueALista = agregueALista;
	
	function agregueALista(lista){
		console.log("agregar a lista "+lista);
		
//		variable
//		atributo
//		relacion
//		concepto

    	
		switch(lista){
		case 'variable':
			console.log("variable");
			console.log("valor "+cnAxioma.AuxAgregar);
			cnAxioma.varEdicion.variables.push(cnAxioma.AuxAgregar);
			$('#verAgregarVariableAxioma').modal('hide');
			break;
		case 'atributo':
			console.log("atributo");
			console.log("valor "+cnAxioma.AuxAgregar.originalObject.nombre);
			if(cnAxioma.AuxAgregar.originalObject.tipoGlosario.id == 3){
				console.log("lista instancia "+cnAxioma.varEdicion.atributoInstancia.length);
				cnAxioma.varEdicion.atributoInstancia.push(cnAxioma.AuxAgregar.originalObject);
				console.log("lista instancia "+cnAxioma.varEdicion.atributoInstancia.length);
			}else if(cnAxioma.AuxAgregar.originalObject.tipoGlosario.id == 4){
				console.log("lista clase "+cnAxioma.varEdicion.atributosClase.length);
				cnAxioma.varEdicion.atributosClase.push(cnAxioma.AuxAgregar.originalObject);
				console.log("lista clase "+cnAxioma.varEdicion.atributosClase.length);
			}
			cnAxioma.varEdicion.atributo.push(cnAxioma.AuxAgregar.originalObject);
			$('#verAgregarAtributoAxioma').modal('hide');
			break;
		case 'relacion':
			console.log("relacion");
			console.log("valor "+cnAxioma.AuxAgregar.originalObject.nombre);
			cnAxioma.varEdicion.relaciones.push(cnAxioma.AuxAgregar.originalObject);
			$('#verAgregarRelacionAxioma').modal('hide');
			break;
		case 'concepto':
			console.log("concepto");
			console.log("valor "+cnAxioma.AuxAgregar.originalObject.nombre);
			cnAxioma.varEdicion.conceptos.push(cnAxioma.AuxAgregar.originalObject);
			$('#verAgregarConceptoAxioma').modal('hide');
			break;	
		}
	}
	
	function agregarALista(lista){
		console.log("agregar a lista "+lista);
		
//		variable
//		atributo
//		relacion
//		concepto

		cnAxioma.ListaAgregar= [];
			  
		switch(lista){
		case 'variable':
			console.log("variable");
			cnAxioma.AuxAgregar = "";
			$('#verAgregarVariableAxioma').modal('show');
			break;
		case 'atributo':
			console.log("atributo");
			cnAxioma.AuxAgregar = {};
			var lista1 = [];
			var lista2 = [];
			cnAxioma.ListaAgregar = [];
			lista1 = FactoryGlosario.getGlosarioDadoTipoGlosario(3);
			lista2 = FactoryGlosario.getGlosarioDadoTipoGlosario(4);
			cnAxioma.ListaAgregar = unirListas(lista1, lista2);
			$scope.$broadcast('angucomplete-alt:clearInput', 'autoAgregarAtributoAxioma');
			$('#verAgregarAtributoAxioma').modal('show');
			break;
		case 'relacion':
			console.log("relacion");
			cnAxioma.AuxAgregar = {};
			cnAxioma.ListaAgregar = FactoryGlosario.getGlosarioDadoTipoGlosario(1);
			$scope.$broadcast('angucomplete-alt:clearInput', 'autoAgregarRelacionAxioma');
			$('#verAgregarRelacionAxioma').modal('show');
			break;
		case 'concepto':
			console.log("concepto");
			cnAxioma.AuxAgregar = {};
			cnAxioma.ListaAgregar = FactoryGlosario.getGlosarioDadoTipoGlosario(2);
			$scope.$broadcast('angucomplete-alt:clearInput', 'autoAgregarConceptoAxioma');
			$('#verAgregarConceptoAxioma').modal('show');
			break;	
		}
	}
	
	function eliminarDeLista(elemento, lista){
		console.log("eliminar de lista "+lista);
		
		
		switch(lista){
		case 'variable':
			console.log("variable");
			cnAxioma.varEdicion.variables.splice(elemento, 1);
			break;
		case 'atributo':
			console.log("atributo");
			if(cnAxioma.varEdicion.atributo[elemento].tipoGlosario.id == 3){
				//Atributo instancia
				for(var i=0; i<cnAxioma.varEdicion.atributoInstancia.length ;i++){
					if(cnAxioma.varEdicion.atributo[elemento].id == cnAxioma.varEdicion.atributoInstancia[i].id){
						cnAxioma.varEdicion.atributoInstancia.splice(i, 1);
					}
				}
			}else if(cnAxioma.varEdicion.atributo[elemento].tipoGlosario.id == 4){
				//atributo clase
				for(var i=0; i<cnAxioma.varEdicion.atributosClase.length ;i++){
					if(cnAxioma.varEdicion.atributo[elemento].id == cnAxioma.varEdicion.atributosClase[i].id){
						cnAxioma.varEdicion.atributosClase.splice(i, 1);
					}
				}	
			}
			cnAxioma.varEdicion.atributo.splice(elemento, 1);
			break;
		case 'relacion':
			console.log("relacion");
			cnAxioma.varEdicion.relaciones.splice(elemento, 1);
			break;
		case 'concepto':
			console.log("concepto");
			cnAxioma.varEdicion.conceptos.splice(elemento, 1);
			break;	
		}
		
	}
	
	function seleccioneGlosario(elemento, limpiar){
		cnAxioma.seleccionado = elemento.id;
		cnAxioma.enBlanco = false;
		cnAxioma.modificar = false;
		cnAxioma.disabled = true;
		
//		limpio variables
		cnAxioma.varEdicion = {};
		cnAxioma.varEdicion.glosarioAxiomaActual = {};
		cnAxioma.varEdicion.expresion = "";
		cnAxioma.varEdicion.variables = [];
		cnAxioma.varEdicion.conceptos = [];
		cnAxioma.varEdicion.relaciones = [];
		cnAxioma.varEdicion.atributosClase = [];
		cnAxioma.varEdicion.atributoInstancia = [];
		cnAxioma.varEdicion.atributo  = [];
		
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnAxioma.alertPositiva = false;
		}
		cnAxioma.alertNegativa = false;
		
		
//		asigno la relacion con la que estoy trabajando
		cnAxioma.varEdicion.glosarioAxiomaActual = elemento;
		console.log("cnAxioma.varEdicion.glosarioAxiomaActual "+cnAxioma.varEdicion.glosarioAxiomaActual.id+" "+cnAxioma.varEdicion.glosarioAxiomaActual.nombre);
	
		var salida;
		salida = FactoryAxioma.verElemento(cnAxioma.varEdicion.glosarioAxiomaActual.id);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("consultar constante es true");
	                	
	                	cnAxioma.varEdicion.expresion
	                		= aux.elemento.expresion;
	                	
	                	cnAxioma.varEdicion.variables
	                		= aux.elemento.variables;
	                	
	                	cnAxioma.varEdicion.conceptos
	                		= returnListaGLosario(aux.elemento.conceptos);
	                	
	                	cnAxioma.varEdicion.relaciones
	                		= returnListaGLosario(aux.elemento.relaciones);
	                	
	                	cnAxioma.varEdicion.atributosClase
	                		= returnListaGLosario(aux.elemento.atributosClase);
	                	
	                	cnAxioma.varEdicion.atributoInstancia
	                		=  returnListaGLosario(aux.elemento.atributoInstancia);
	                	
	                	cnAxioma.varEdicion.atributo = unirListas(cnAxioma.varEdicion.atributosClase, cnAxioma.varEdicion.atributoInstancia);
	                	
	                	console.log("cnAxioma.varEdicion.conceptos "+cnAxioma.varEdicion.conceptos.length);
	                	console.log("cnAxioma.varEdicion.relaciones "+cnAxioma.varEdicion.relaciones.length);
	                	console.log("cnAxioma.varEdicion.atributosClase "+cnAxioma.varEdicion.atributosClase.length);
	                	console.log("cnAxioma.varEdicion.atributoInstancia "+cnAxioma.varEdicion.atributoInstancia.length);
	                	console.log("cnAxioma.varEdicion.atributo "+cnAxioma.varEdicion.atributo.length);
	                	
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
	
	}
	
	function modificarAxioma (){
		cnAxioma.disabled = false;
		cnAxioma.modificar = true;
	}
	function modifiqueAxioma (){
		
//		http://localhost:8080/Methontool/api/proyecto/1/axioma/30?
//			atrbClase=18&
//			atrbInstancia=22&
//			concepto=6&
//			relacion=2%7C%7C%7C%7C11%7C%7C%7C%7C8&
//			variables=undefined
				
		console.log("cnAxioma.varEdicion.glosarioAxiomaActual.id "+cnAxioma.varEdicion.glosarioAxiomaActual.id);
		console.log("cnAxioma.varEdicion.expresion "+cnAxioma.varEdicion.expresion);
		console.log("cnAxioma.varEdicion.variables "+cnAxioma.varEdicion.variables.length);
		console.log("cnAxioma.varEdicion.atributosClase "+cnAxioma.varEdicion.atributosClase.length);
		console.log("cnAxioma.varEdicion.atributoInstancia "+cnAxioma.varEdicion.atributoInstancia.length);
		console.log("cnAxioma.varEdicion.conceptos "+cnAxioma.varEdicion.conceptos.length);
		console.log("cnAxioma.varEdicion.relaciones "+cnAxioma.varEdicion.relaciones.length);
		
		var salida;
		salida = FactoryAxioma.actualizarElemento (cnAxioma.varEdicion.glosarioAxiomaActual.id, 
				cnAxioma.varEdicion.expresion, 
				cnAxioma.varEdicion.variables, 
				cnAxioma.varEdicion.atributosClase,
				cnAxioma.varEdicion.atributoInstancia,
				cnAxioma.varEdicion.conceptos,
				cnAxioma.varEdicion.relaciones);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("actualizar axioma es true");
	                	cnAxioma.alertPositiva = true;
	                	cnAxioma.mensajeAlertPositiva = "El axioma ha sido actualizado";
	                	cnAxioma.seleccioneGlosario (cnAxioma.varEdicion.glosarioAxiomaActual, 'false');
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
	}
	function cancelaAxioma (){
		cnAxioma.disabled = true;
		cnAxioma.modificar = false;
		seleccioneGlosario(cnAxioma.varEdicion.glosarioAxiomaActual, 'true');
	}

	
//Funcion generica
	function returnListaGLosario(entrada){
		var salida = [];
		
		if(entrada.length > 0){
			for(var i = 0; i<entrada.length; i++){
				salida.push(FactoryGlosario.consultarElemento(entrada[i]));
			}
		}
		return salida;
	}
	
	function unirListas(listaUno, listaDos){
		var salida = [];
		
		var i;
		
		for(i=0; i<listaUno.length; i++){
			salida.push(listaUno[i]);
		}
		
		for(i=0; i<listaDos.length; i++){
			salida.push(listaDos[i]);
		}
		return salida;
	}

//Fin Funciones genericas	
    $rootScope.$on('menuAxiomaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Axioma");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnAxioma.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnAxioma.modificar = false; //si se permite modificar los valores 
    	cnAxioma.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.axioma', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.axioma a '"+newValue+"'");
            cnAxioma.soyActual = InformacionPrincipalApp.soyVistaActual('Axioma');	//Indico al controlador actual si se debe mostrar
    		FactoryGlosario.getListaElementos(
    				function (output){
    					cnAxioma.listaGlosario = output;
    				},function (){
    					console.log("error");
    				}
    			);
            
    	}
    }, false);
    
}//fin controller
	
	
})();	
/**
 * 
 */