/**
 * En el controller encargado de la seccion regla
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
	.controller('ControllerRegla', ControllerRegla);

ControllerRegla.$inject = ['$rootScope', 
                       'InformacionPrincipalApp',
                       '$http'
                       ,'FactoryGlosario'
                       ,'FactoryRegla'
                       ,'FactoryMensajeCarga'
                       ,'$scope'                       
                       ];	

function ControllerRegla($rootScope,
		InformacionPrincipalApp,
		$http
		,FactoryGlosario
		,FactoryRegla
		,FactoryMensajeCarga
		,$scope		
		){
	
	console.log("Entro en ControllerRegla");
	var cnRegla = this;

	cnRegla.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnRegla.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnRegla.modificar = false; //si se permite modificar los valores 
	
	//-------------------Variables de edicion---------------------
	cnRegla.varEdicion = {};
	cnRegla.varEdicion.glosarioReglaActual = {};
	
//-------------------Funciones----------------------------------	
	
	cnRegla.modificarRegla = modificarRegla;
	cnRegla.modifiqueRegla = modifiqueRegla;
	cnRegla.cancelaRegla = cancelaRegla;
	cnRegla.seleccioneGlosario = seleccioneGlosario;
	cnRegla.eliminarDeLista = eliminarDeLista;
	cnRegla.agregarALista = agregarALista;
	cnRegla.agregueALista = agregueALista;

	function agregueALista(lista){
		console.log("agregar a lista "+lista);
		
//		variable
//		atributo
//		relacion
//		concepto

    	
		switch(lista){
		case 'variable':
			console.log("variable");
			console.log("valor "+cnRegla.AuxAgregar);
			cnRegla.varEdicion.variables.push(cnRegla.AuxAgregar);
			$('#verAgregarVariableRegla').modal('hide');
			break;
		case 'atributo':
			console.log("atributo");
			console.log("valor "+cnRegla.AuxAgregar.originalObject.nombre);
			if(cnRegla.AuxAgregar.originalObject.tipoGlosario.id == 3){
				console.log("lista instancia "+cnRegla.varEdicion.atributoInstancia.length);
				cnRegla.varEdicion.atributoInstancia.push(cnRegla.AuxAgregar.originalObject);
				console.log("lista instancia "+cnRegla.varEdicion.atributoInstancia.length);
			}else if(cnRegla.AuxAgregar.originalObject.tipoGlosario.id == 4){
				console.log("lista clase "+cnRegla.varEdicion.atributosClase.length);
				cnRegla.varEdicion.atributosClase.push(cnRegla.AuxAgregar.originalObject);
				console.log("lista clase "+cnRegla.varEdicion.atributosClase.length);
			}
			cnRegla.varEdicion.atributo.push(cnRegla.AuxAgregar.originalObject);
			$('#verAgregarAtributoRegla').modal('hide');
			break;
		case 'relacion':
			console.log("relacion");
			console.log("valor "+cnRegla.AuxAgregar.originalObject.nombre);
			cnRegla.varEdicion.relaciones.push(cnRegla.AuxAgregar.originalObject);
			$('#verAgregarRelacionRegla').modal('hide');
			break;
		case 'concepto':
			console.log("concepto");
			console.log("valor "+cnRegla.AuxAgregar.originalObject.nombre);
			cnRegla.varEdicion.conceptos.push(cnRegla.AuxAgregar.originalObject);
			$('#verAgregarConceptoRegla').modal('hide');
			break;	
		}
	}
	
	function agregarALista(lista){
		console.log("agregar a lista "+lista);
		
//		variable
//		atributo
//		relacion
//		concepto

		cnRegla.ListaAgregar= [];
			  
		switch(lista){
		case 'variable':
			console.log("variable");
			cnRegla.AuxAgregar = "";
			$('#verAgregarVariableRegla').modal('show');
			break;
		case 'atributo':
			console.log("atributo");
			cnRegla.AuxAgregar = {};
			var lista1 = [];
			var lista2 = [];
			cnRegla.ListaAgregar = [];
			lista1 = FactoryGlosario.getGlosarioDadoTipoGlosario(3);
			lista2 = FactoryGlosario.getGlosarioDadoTipoGlosario(4);
			cnRegla.ListaAgregar = unirListas(lista1, lista2);
			$scope.$broadcast('angucomplete-alt:clearInput', 'autoAgregarAtributoRegla');
			$('#verAgregarAtributoRegla').modal('show');
			break;
		case 'relacion':
			console.log("relacion");
			cnRegla.AuxAgregar = {};
			cnRegla.ListaAgregar = FactoryGlosario.getGlosarioDadoTipoGlosario(1);
			$scope.$broadcast('angucomplete-alt:clearInput', 'autoAgregarRelacionRegla');
			$('#verAgregarRelacionRegla').modal('show');
			break;
		case 'concepto':
			console.log("concepto");
			cnRegla.AuxAgregar = {};
			cnRegla.ListaAgregar = FactoryGlosario.getGlosarioDadoTipoGlosario(2);
			$scope.$broadcast('angucomplete-alt:clearInput', 'autoAgregarConceptoRegla');
			$('#verAgregarConceptoRegla').modal('show');
			break;	
		}
	}
	
	function eliminarDeLista(elemento, lista){
		console.log("eliminar de lista "+lista);
		
		
		switch(lista){
		case 'variable':
			console.log("variable");
			cnRegla.varEdicion.variables.splice(elemento, 1);
			break;
		case 'atributo':
			console.log("atributo");
			if(cnRegla.varEdicion.atributo[elemento].tipoGlosario.id == 3){
				//Atributo instancia
				for(var i=0; i<cnRegla.varEdicion.atributoInstancia.length ;i++){
					if(cnRegla.varEdicion.atributo[elemento].id == cnRegla.varEdicion.atributoInstancia[i].id){
						cnRegla.varEdicion.atributoInstancia.splice(i, 1);
					}
				}
			}else if(cnRegla.varEdicion.atributo[elemento].tipoGlosario.id == 4){
				//atributo clase
				for(var i=0; i<cnRegla.varEdicion.atributosClase.length ;i++){
					if(cnRegla.varEdicion.atributo[elemento].id == cnRegla.varEdicion.atributosClase[i].id){
						cnRegla.varEdicion.atributosClase.splice(i, 1);
					}
				}	
			}
			cnRegla.varEdicion.atributo.splice(elemento, 1);
			break;
		case 'relacion':
			console.log("relacion");
			cnRegla.varEdicion.relaciones.splice(elemento, 1);
			break;
		case 'concepto':
			console.log("concepto");
			cnRegla.varEdicion.conceptos.splice(elemento, 1);
			break;	
		}
		
	}
	
	function seleccioneGlosario(elemento, limpiar){
		cnRegla.seleccionado = elemento.id;
		cnRegla.enBlanco = false;
		cnRegla.modificar = false;
		cnRegla.disabled = true;
		
//		limpio variables
		cnRegla.varEdicion = {};
		cnRegla.varEdicion.glosarioReglaActual = {};
		cnRegla.varEdicion.expresion = "";
		cnRegla.varEdicion.variables = [];
		cnRegla.varEdicion.conceptos = [];
		cnRegla.varEdicion.relaciones = [];
		cnRegla.varEdicion.atributosClase = [];
		cnRegla.varEdicion.atributoInstancia = [];
		cnRegla.varEdicion.atributo  = [];
		
		if(limpiar == 'true'){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			console.log("limpiar en select");
			cnRegla.alertPositiva = false;
		}
		cnRegla.alertNegativa = false;
		
		
//		asigno la relacion con la que estoy trabajando
		cnRegla.varEdicion.glosarioReglaActual = elemento;
		console.log("cnRegla.varEdicion.glosarioReglaActual "+cnRegla.varEdicion.glosarioReglaActual.id+" "+cnRegla.varEdicion.glosarioReglaActual.nombre);
	
		var salida;
		salida = FactoryRegla.verElemento(cnRegla.varEdicion.glosarioReglaActual.id);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("consultar constante es true");
	                	
	                	cnRegla.varEdicion.expresion
	                		= aux.elemento.expresion;
	                	
	                	cnRegla.varEdicion.variables
	                		= aux.elemento.variables;
	                	
	                	cnRegla.varEdicion.conceptos
	                		= returnListaGLosario(aux.elemento.conceptos);
	                	
	                	cnRegla.varEdicion.relaciones
	                		= returnListaGLosario(aux.elemento.relaciones);
	                	
	                	cnRegla.varEdicion.atributosClase
	                		= returnListaGLosario(aux.elemento.atributosClase);
	                	
	                	cnRegla.varEdicion.atributoInstancia
	                		=  returnListaGLosario(aux.elemento.atributoInstancia);
	                	
	                	cnRegla.varEdicion.atributo = unirListas(cnRegla.varEdicion.atributosClase, cnRegla.varEdicion.atributoInstancia);
	                	
	                	console.log("cnRegla.varEdicion.conceptos "+cnRegla.varEdicion.conceptos.length);
	                	console.log("cnRegla.varEdicion.relaciones "+cnRegla.varEdicion.relaciones.length);
	                	console.log("cnRegla.varEdicion.atributosClase "+cnRegla.varEdicion.atributosClase.length);
	                	console.log("cnRegla.varEdicion.atributoInstancia "+cnRegla.varEdicion.atributoInstancia.length);
	                	console.log("cnRegla.varEdicion.atributo "+cnRegla.varEdicion.atributo.length);
	                	
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
	
	}
	
	function modificarRegla (){
		cnRegla.disabled = false;
		cnRegla.modificar = true;
	}
	function modifiqueRegla (){
		
//		http://localhost:8080/Methontool/api/proyecto/1/axioma/30?
//			atrbClase=18&
//			atrbInstancia=22&
//			concepto=6&
//			relacion=2%7C%7C%7C%7C11%7C%7C%7C%7C8&
//			variables=undefined
				
		console.log("cnRegla.varEdicion.glosarioReglaActual.id "+cnRegla.varEdicion.glosarioReglaActual.id);
		console.log("cnRegla.varEdicion.expresion "+cnRegla.varEdicion.expresion);
		console.log("cnRegla.varEdicion.variables "+cnRegla.varEdicion.variables.length);
		console.log("cnRegla.varEdicion.atributosClase "+cnRegla.varEdicion.atributosClase.length);
		console.log("cnRegla.varEdicion.atributoInstancia "+cnRegla.varEdicion.atributoInstancia.length);
		console.log("cnRegla.varEdicion.conceptos "+cnRegla.varEdicion.conceptos.length);
		console.log("cnRegla.varEdicion.relaciones "+cnRegla.varEdicion.relaciones.length);
		
		var salida;
		salida = FactoryRegla.actualizarElemento (cnRegla.varEdicion.glosarioReglaActual.id, 
				cnRegla.varEdicion.expresion, 
				cnRegla.varEdicion.variables, 
				cnRegla.varEdicion.atributosClase,
				cnRegla.varEdicion.atributoInstancia,
				cnRegla.varEdicion.conceptos,
				cnRegla.varEdicion.relaciones);
		FactoryMensajeCarga.abrirMensaje("Cargando");
		salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("actualizar Regla es true");
	                	cnRegla.alertPositiva = true;
	                	cnRegla.mensajeAlertPositiva = "La Regla ha sido actualizada";
	                	cnRegla.seleccioneGlosario (cnRegla.varEdicion.glosarioReglaActual, 'false');
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );
	}
	function cancelaRegla (){
		cnRegla.disabled = true;
		cnRegla.modificar = false;
		seleccioneGlosario(cnRegla.varEdicion.glosarioReglaActual, 'true');
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

	
    $rootScope.$on('menuReglaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Regla");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnRegla.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnRegla.modificar = false; //si se permite modificar los valores 
    	cnRegla.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.regla', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
    		console.log("cambio valor actual.regla a '"+newValue+"'");
    		cnRegla.soyActual = InformacionPrincipalApp.soyVistaActual('Regla');	//Indico al controlador actual si se debe mostrar
    		cnRegla.listaGlosario = FactoryGlosario.getListaElemento();
    	}
    }, false);
	
}//fin controller
	
	
})();	