/**
 * En el controller encargado de la seccion taxonomia
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
 */

(function(){
	"use strict"	

angular.module('methontool')
	.controller('ControllerTaxonomia', ControllerTaxonomia);

ControllerTaxonomia.$inject = ['$rootScope'
                                       ,'InformacionPrincipalApp'
                                       ,'FactoryGlosario'
                                       ,'FactoryTaxonomia'
                                       ,'FactoryMensajeCarga'
                                       ];	

function ControllerTaxonomia($rootScope
		,InformacionPrincipalApp
		,FactoryGlosario
		,FactoryTaxonomia
		,FactoryMensajeCarga
		){
	
	console.log("Entro en ControllerTaxonomia");
	var cnTaxonomia = this;
	
	cnTaxonomia.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnTaxonomia.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnTaxonomia.modificar = false; //si se permite modificar los valores 
	cnTaxonomia.enBlanco = true;	    //mostrar seccion en blanco

	
//-------------------Variables de edicion--------------------------------
	cnTaxonomia.varSubClase = [];
	cnTaxonomia.varDesDisjunta = [];
	cnTaxonomia.varDesExhaustiva = [];
	cnTaxonomia.varParticion = [];
	cnTaxonomia.varEnGlosario = {};
	cnTaxonomia.varTaxonomiaActual = {};
	
//-------------------Variables ------------------------------------------
	cnTaxonomia.listaGlosario = [];
	cnTaxonomia.seleccionado = -1;
	cnTaxonomia.varEdicion = {};
	cnTaxonomia.varAgregar = 0;
	cnTaxonomia.seleccionadoAgregar = 0;
	cnTaxonomia.mensajeAlertPositiva = "";
	cnTaxonomia.mensajeAlertNegativa = "";
	cnTaxonomia.alertPositiva = false;
	cnTaxonomia.alertNegativa = false;
	cnTaxonomia.filtroTaxonomiaAgregar ={};
	cnTaxonomia.filtroTaxonomiaAgregar.buscarPor='seleccione';
	
//-------------------Funciones en scope----------------------------------	
	cnTaxonomia.seleccioneGlosario = seleccioneGlosario;
	cnTaxonomia.modificarTaxonomia = modificarTaxonomia;
	cnTaxonomia.modifiqueTaxonomia = modifiqueTaxonomia;
	cnTaxonomia.cancelarModificarTaxonomia = cancelarModificarTaxonomia;
	cnTaxonomia.agregarConceptoRelacion = agregarConceptoRelacion;
	cnTaxonomia.eliminarConceptoTaxonomia = eliminarConceptoTaxonomia;
	cnTaxonomia.agregueGlosarioRelacion = agregueGlosarioRelacion;
	 cnTaxonomia.estaEnLista = estaEnLista;
	   
	    function estaEnLista (elemento){
	        var salida;
	        switch (cnTaxonomia.varAgregar){
	        case '1':
	            salida = buscarGlosarioEnLista(elemento, cnTaxonomia.varEdicion.listaSubClase);
	            return salida;
	            break;
	        case '2':
	        	salida = buscarGlosarioEnLista(elemento, cnTaxonomia.varEdicion.listaDisjunta);
	            return salida;
	            break;
	        case '3':
	        	salida = buscarGlosarioEnLista(elemento, cnTaxonomia.varEdicion.listaExhustiva);
	            return salida;
	            break;
	        case '4':
	        	salida = buscarGlosarioEnLista(elemento, cnTaxonomia.varEdicion.listaParticion);
	            return salida;
	            break;
	        default:
	            console.log("cnTaxonomia.varAgregar tiene un error");
	        }
	        return false;
	    }
	
	function agregueGlosarioRelacion(elemento){
		//falta valdiar si esta vacio elemento
		console.log("agregue el elemento "+elemento.id);
		console.log("cnTaxonomia.varAgregar es "+cnTaxonomia.varAgregar);
		switch (cnTaxonomia.varAgregar){
		case '1':
			console.log("cnTaxonomia.varAgregar es 1");
			cnTaxonomia.varEdicion.listaSubClase.push(elemento);
			break;
		case '2':
			console.log("cnTaxonomia.varAgregar es 2");
			cnTaxonomia.varEdicion.listaDisjunta.push(elemento);
			break;
		case '3':
			console.log("cnTaxonomia.varAgregar es 3");
			cnTaxonomia.varEdicion.listaExhustiva.push(elemento);
			break;
		case '4':
			console.log("cnTaxonomia.varAgregar es 4");
			cnTaxonomia.varEdicion.listaParticion.push(elemento);
			break;
		default:
			console.log("cnTaxonomia.varAgregar tiene un error");
		}
	}
	
	/*
	 * eliminarConceptoTaxonomia: eliminar concepto de una lista de relacion
	 * @author Mitchell Contreras
	 * @param index: posicion del elemento que vamos a eliminar
	 * @param:codigo 1. SubClaseDe
	 * 				 2. DescomposicionDisjunta
	 * 				 3. DescomposicionExhaustiva
	 * 				 4. Particion
	 */
	function eliminarConceptoTaxonomia(index, codigo){
		console.log("index eliminar "+index);
		switch (codigo){
		case '1':
			console.log("eliminarConceptoTaxonomia es 1");
			cnTaxonomia.varEdicion.listaSubClase.splice(index, 1);
			break;
		case '2':
			console.log("cnTaxonomia.varAgregar es 2");
			cnTaxonomia.varEdicion.listaDisjunta.splice(index, 1);
			break;
		case '3':
			console.log("cnTaxonomia.varAgregar es 3");
			cnTaxonomia.varEdicion.listaExhustiva.splice(index, 1);
			break;
		case '4':
			console.log("cnTaxonomia.varAgregar es 4");
			cnTaxonomia.varEdicion.listaParticion.splice(index, 1);
			break;
		default:
			console.log("cnTaxonomia.varAgregar tiene un error");
		}
	}
	
	/*
	 * agregarConceptoRelacion: Funcion de levantar la modal de agregar un nuevo concepto
	 * @author:Mitchell Contreras
	 * @param:codigo 1. SubClaseDe
	 * 				 2. DescomposicionDisjunta
	 * 				 3. DescomposicionExhaustiva
	 * 				 4. Particion
	 */
	function agregarConceptoRelacion(codigo){
		cnTaxonomia.varAgregar = codigo;
		cnTaxonomia.seleccionadoAgregar = 0;
		cnTaxonomia.filtroTaxonomiaAgregar.buscarPor='seleccione';
		$('#agregarConceptoTaxonomiaModal').modal('show');
	}
	
	function cancelarModificarTaxonomia(){
		cnTaxonomia.disabled = true;
		cnTaxonomia.modificar = false;
		console.log("Cancelar modficiar con "+cnTaxonomia.varEdicion.id);
		seleccioneGlosario({'id':cnTaxonomia.varEdicion.id}, true);
	}
	
	function modifiqueTaxonomia(){
		var salida;
		salida = FactoryTaxonomia.actualizarElemento(cnTaxonomia.varEdicion.id, 
				cnTaxonomia.varEdicion.listaSubClase, 
				cnTaxonomia.varEdicion.listaParticion,
				cnTaxonomia.varEdicion.listaDisjunta,
				cnTaxonomia.varEdicion.listaExhustiva);
		FactoryMensajeCarga.abrirMensaje("Guardando");
		salida.then(
            function(aux) {
                if(aux.succes){
                	console.log("actualizar es true");
                	var elemento = {'conceptoOrigen':{'id':'','nombre':'','descripcion':''},
                					'relaciones':[],
                					'conDestinoSubClase':[],
                					'conDestinoParticion':[],
                					'conDestinoDesDisjunta':[],
                					'conDestinoDesExhaustiva':[]};
                	
                	elemento.conceptoOrigen.id = cnTaxonomia.varEdicion.id;
                	elemento.conceptoOrigen.nombre = cnTaxonomia.varEdicion.nombre;
                	elemento.conceptoOrigen.descripcion = cnTaxonomia.varEdicion.descripcion;
                	elemento.relaciones = cnTaxonomia.elementoActual.relaciones.slice();
                	elemento.conDestinoSubClase = cnTaxonomia.varEdicion.listaSubClase.slice();
                	elemento.conDestinoParticion = cnTaxonomia.varEdicion.listaParticion.slice();
                	elemento.conDestinoDesDisjunta = cnTaxonomia.varEdicion.listaDisjunta.slice();
                	elemento.conDestinoDesExhaustiva = cnTaxonomia.varEdicion.listaExhustiva.slice();
                	console.log(elemento.conceptoOrigen.id);
                	console.log(elemento.conceptoOrigen.nombre);
                	console.log(elemento.conceptoOrigen.descripcion);
                	console.log("conDestinoSubClase "+elemento.conDestinoSubClase.length);
                	console.log("conDestinoParticion "+elemento.conDestinoParticion.length);
                	console.log("conDestinoDesDisjunta "+elemento.conDestinoDesDisjunta.length);
                	console.log("conDestinoDesExhaustiva "+elemento.conDestinoDesExhaustiva.length);
                	FactoryTaxonomia.agregarElemento(elemento);
                	cnTaxonomia.alertPositiva = true;
                	cnTaxonomia.mensajeAlertPositiva = "La taxonomia ha sido modificado";
                	seleccioneGlosario(elemento.conceptoOrigen,false);
                	FactoryMensajeCarga.cerrarMensaje();
                }else{
                	
                }
            }
        );
	}
	
	function modificarTaxonomia(){
		cnTaxonomia.disabled = false;
		cnTaxonomia.modificar = true;
	}
	
	/*
	 * seleccioneGlosario: seleccionar taxonomia desde la lista 
	 * @author Mitchell Contreras
	 * @param Elemento que se seleeciono
	 * @param limpiar: Si quiero limpiar el valor de la alerta positiva
	 * 				true, false
	 */
	function seleccioneGlosario(elemento, limpiar){
		console.log("Seleccione con id "+elemento.id+" codigo="+limpiar);
		var elementoOrigen = {};
		FactoryGlosario.getElementoDadoId(elemento.id,
				function(ouput){
			    	elementoOrigen = ouput;
				},
				function(){
					console.log("error en seleccioneGlosario");
				});
//		id = cnTaxonomia.listaGlosario.indexOf(elemento);
		cnTaxonomia.seleccionado = elemento.id;
		cnTaxonomia.enBlanco = false;
		cnTaxonomia.modificar = false;
		cnTaxonomia.disabled = true;
		
		if(limpiar){
			cnTaxonomia.alertPositiva = false;
		}
		cnTaxonomia.alertNegativa = false;FactoryGlosario
		
		
//		Limpio las listas
		cnTaxonomia.varEdicion.listaSubClase = [];
		cnTaxonomia.varEdicion.listaParticion = [];
		cnTaxonomia.varEdicion.listaDisjunta = [];
		cnTaxonomia.varEdicion.listaExhustiva = [];
		
		
		var salida;
		
//		salida = FactoryTaxonomia.verElemento(elemento.id);
//		console.log("salida es "+salida.conceptoOrigen);
//		
//		if(salida.conceptoOrigen == 0){
			FactoryMensajeCarga.abrirMensaje("Cargando");
			salida = FactoryTaxonomia.consultarElemento(elemento.id);
			salida.then(
	            function(aux) {
	                if(aux.succes){
	                	console.log("fue satisfactorio");
	                	console.log(" "+aux.elemento.conceptosDestino[0].length);
	                	console.log(" "+aux.elemento.conceptosDestino[1].length);
	                	console.log(" "+aux.elemento.conceptosDestino[2].length);
	                	console.log(" "+aux.elemento.conceptosDestino[3].length);
	                	console.log("aux.elemento.conceptoOrigen "+aux.elemento.conceptoOrigen);
	                	cnTaxonomia.elementoActual = {};
	                	cnTaxonomia.elementoActual.conceptoOrigen = {};
	                	FactoryGlosario.getElementoDadoId(aux.elemento.conceptoOrigen,
	            				function(ouput){
	                				cnTaxonomia.elementoActual.conceptoOrigen = ouput;
	            				},
	            				function(){
	            					console.log("error en cnTaxonomia.elementoActual.conceptoOrigen");
	            				});
	                	console.log("elemento origen traido de FactoryGlosario.consultarElemento "+cnTaxonomia.elementoActual.conceptoOrigen.id+" "+cnTaxonomia.elementoActual.conceptoOrigen.nombre);
	                	cnTaxonomia.elementoActual.relaciones = aux.elemento.relaciones.slice();
	                	cnTaxonomia.elementoActual.conDestinoDesDisjunta = [];
	                	cnTaxonomia.elementoActual.conDestinoDesExhaustiva = [];
	                	cnTaxonomia.elementoActual.conDestinoParticion = [];
	                	cnTaxonomia.elementoActual.conDestinoSubClase = [];
	                	var i;
	                	
	                	for(i=0;i<cnTaxonomia.elementoActual.relaciones.length;i++){
	                		console.log("la relacion es "+cnTaxonomia.elementoActual.relaciones[i]);
	                		switch(cnTaxonomia.elementoActual.relaciones[i]){
	                			case "desDisjunta":
	                					var len = aux.elemento.conceptosDestino[i].length;
	                					var j;
	                					for(j=0;j<len;j++){
	                						console.log("*****elemento a agregar es "+aux.elemento.conceptosDestino[i][j]);
	                						cnTaxonomia.elementoActual.conDestinoDesDisjunta[j] = {};
	                	                	FactoryGlosario.getElementoDadoId(aux.elemento.conceptosDestino[i][j],
            	            				function(ouput){
	                	                		cnTaxonomia.elementoActual.conDestinoDesDisjunta[j] = ouput;
            	            				},
            	            				function(){
            	            					console.log("error en cnTaxonomia.elementoActual.conceptoOrigen");
            	            				});
	                					}
	                				break;
	                			case "desExhaustiva":
		                				var len = aux.elemento.conceptosDestino[i].length;
		            					var j;
		            					for(j=0;j<len;j++){
		            						cnTaxonomia.elementoActual.conDestinoDesExhaustiva[j] = {};
		            						FactoryGlosario.getElementoDadoId(aux.elemento.conceptosDestino[i][j],
            	            				function(ouput){
		            							cnTaxonomia.elementoActual.conDestinoDesExhaustiva[j] = ouput;
            	            				},
            	            				function(){
            	            					console.log("error en cnTaxonomia.elementoActual.conDestinoDesExhaustiva");
            	            				});
		            					}
	                				break;
	                			case "particion":
		                				var len = aux.elemento.conceptosDestino[i].length;
		            					var j;
		            					for(j=0;j<len;j++){
		            						cnTaxonomia.elementoActual.conDestinoParticion[j] = {};
		            						FactoryGlosario.getElementoDadoId(aux.elemento.conceptosDestino[i][j],
            	            				function(ouput){
		            							cnTaxonomia.elementoActual.conDestinoParticion[j] = ouput;
            	            				},
            	            				function(){
            	            					console.log("error en cnTaxonomia.elementoActual.conDestinoParticion");
            	            				});
		            					}
	                				break;
	                			case "subClase":
		                				var len = aux.elemento.conceptosDestino[i].length;
		            					var j;
		            					for(j=0;j<len;j++){
		            						cnTaxonomia.elementoActual.conDestinoSubClase[j] = {};
		            						FactoryGlosario.getElementoDadoId(aux.elemento.conceptosDestino[i][j],
            	            				function(ouput){
		            							cnTaxonomia.elementoActual.conDestinoSubClase[j] = ouput;
            	            				},
            	            				function(){
            	            					console.log("error en cnTaxonomia.elementoActual.conDestinoParticion");
            	            				});
		            					}
	                				break;
	                			default:
	                				console.log("relacion no es valida");
	                				break;
	                		}
	                	}
	                	
	            		cnTaxonomia.varEdicion.id = elementoOrigen.id;
	            		cnTaxonomia.varEdicion.nombre = elementoOrigen.nombre;
	            		cnTaxonomia.varEdicion.descripcion = elementoOrigen.descripcion;
	            		cnTaxonomia.varEdicion.listaSubClase = cnTaxonomia.elementoActual.conDestinoSubClase.slice();
	            		cnTaxonomia.varEdicion.listaParticion = cnTaxonomia.elementoActual.conDestinoParticion.slice();
	            		cnTaxonomia.varEdicion.listaDisjunta = cnTaxonomia.elementoActual.conDestinoDesDisjunta.slice();
	            		cnTaxonomia.varEdicion.listaExhustiva = cnTaxonomia.elementoActual.conDestinoDesExhaustiva.slice();
	                	console.log("cnTaxonomia.elementoActual.conDestinoDesDisjunta.length "+cnTaxonomia.elementoActual.conDestinoDesDisjunta.length);
	                	console.log("cnTaxonomia.elementoActual.conDestinoDesExhaustiva.length "+cnTaxonomia.elementoActual.conDestinoDesExhaustiva.length);
	                	console.log("cnTaxonomia.elementoActual.conDestinoParticion.length "+cnTaxonomia.elementoActual.conDestinoParticion.length);
	                	console.log("cnTaxonomia.elementoActual.conDestinoSubClase.length "+cnTaxonomia.elementoActual.conDestinoSubClase.length);
	                	console.log("cnTaxonomia.elementoActual.relaciones "+cnTaxonomia.elementoActual.relaciones.length);
	                	FactoryTaxonomia.agregarElemento(cnTaxonomia.elementoActual);
	                	FactoryMensajeCarga.cerrarMensaje();
	                }else{
	                	
	                }
	            }
	        );	
	}
	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		FactoryGlosario.getListaElementos(
				function (output){
					cnTaxonomia.listaGlosario = output;
				},function (){
					console.log("error");
				}
			); 
	}
	
	function buscarGlosarioEnLista(glosario, lista){
		var salida = false;
		var i = 0;
		for(i=0;i<lista.length;i++){
			if(glosario.id == lista[i].id){
				return true;
			}
		}
		return salida;
	}
	
	
//-------------------Funciones extranjeras-------------------------------	
		
    $rootScope.$on('menuTaxonomiaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Taxonomia");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnTaxonomia.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnTaxonomia.modificar = false; //si se permite modificar los valores 
    	cnTaxonomia.enBlanco = true;	    //mostrar seccion en blanco
    	cnTaxonomia.seleccionado = -1; //Para que no aparezca seleccionado algun glosario
    	cnTaxonomia.alertPositiva = false;
    	cnTaxonomia.alertNegativa = false;
    });
	
    $rootScope.$watch('actual.taxonomia', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.taxonomia a '"+newValue+"'");
            listarGlosario();
            cnTaxonomia.soyActual = InformacionPrincipalApp.soyVistaActual('Taxonomia');	//Indico al controlador actual si se debe mostrar
    	}
    }, false);
	
}//fin controller
	
	
})();	
