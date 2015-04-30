/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryGlosario', FactoryGlosario);


	FactoryGlosario.$inject = ['$listarGlosario'
	                           ,'InformacionPrincipalApp'
	                           ,'$crearGlosario'
	                           ,'$actualizarGlosario'
	                           ,'FactoryMensajeCarga'
	                           ];

	function FactoryGlosario (
			$listarGlosario
			,InformacionPrincipalApp
			,$crearGlosario
			,$actualizarGlosario
			,FactoryMensajeCarga
			){
		
		var funcion = {
				getListaError: function (){
					return listaErrores;
				},
				existeError: function (){
					return existeError;
				},
				getListaElemento: function (){
					return getListaElemento();
				},
				crearElemento: function (nombre, tipoGlosario, descripcion, sinonimo, acronimo){
					return crearElemento(nombre, tipoGlosario, descripcion, sinonimo, acronimo);
				},
				actualizarElemento: function (idGlosario, nombre, tipoGlosario, descripcion, sinonimo, acronimo){
					return actualizarElemento(idGlosario, nombre, tipoGlosario, descripcion, sinonimo, acronimo);
				},
				consultarElemento: function (id){
					return consultarElemento (id);
				},
				agregarElemento: function (objeto){
					return agregarElemento (objeto);
				},
				eliminarElemento: function (id){
					return eliminarElemento (id);
				}
			};
		
		function actualizarElemento(idGlosario, nombre, tipoGlosario, descripcion, listaSinonimo, listaAcronimo){
			
			var sinonimos= "";
			var i;
			for (i in listaSinonimo) {
				sinonimos = sinonimos + listaSinonimo[i]; 
				if(i != (listaSinonimo.length-1) ){
					sinonimos = sinonimos  + '||||';
				}
			}
			
			var acronimos= "";
			var i;
			for (i in listaAcronimo) {
				acronimos = acronimos + listaAcronimo[i]; 
				if(i != (listaAcronimo.length-1) ){
					acronimos = acronimos  + '||||';
				}
			}
			
			console.log("dentro de actualizar elemento");
					console.log(idGlosario);
					console.log(nombre);
					console.log(tipoGlosario);
					console.log(descripcion);
					console.log(sinonimos);
					console.log(acronimos);
					
			var semaforo = false;
			$actualizarGlosario.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosario: idGlosario
				,'nombre' : nombre
				,'tipoGlosario' : tipoGlosario.id
				,'descripcion' : descripcion
				,'sinonimo' : sinonimos
				,'acronimo' : acronimos
				},{}).$promise.then(
	                function(salida) {
	                   // success
	                	console.log("salida es "+salida.succes);
	                	return salida;
	                }, 
	                function(errResponse) {
	                   console.log("error es "+errResponse);
	                }
	        );	
			
		}
		
		function getListaElemento(){
			console.log("en getListaElemento Glosario");
			if (yaConsulte){
				console.log("Ya tengo el valor de Glosario");
				return listaObjeto;
			}else{
				console.log("antes del rest");
				$listarGlosario.get({id: InformacionPrincipalApp.getProyecto().idProyecto}).$promise.then(
		                function(salida) {
		                   // success
		                	
		                    if(salida.succes){
		                    	console.log("succes es true en getListaElemento Glosario");
		                    	listaObjeto = salida.elementos;
		                        console.log("cantidad de glosario son "+listaObjeto.length);
		                        yaConsulte = true;
		                    }else{
		                        if(!salida.succes){
		                        	console.log("succes es false en getListaElemento Glosario");
		                        }else{
		                            console.log("No en getListaElemento Glosario");
		                        }
		                    }
		                }, 
		                function(errResponse) {
		                   console.log("error es "+errResponse);
		                }
		        );
			}
			return listaObjeto;
		}
		function eliminarElemento (id){
			return true;
		}
		function agregarElemento (objeto){
			return true;
		}
		function consultarElemento (id){
			return true;
		}
		function crearElemento(nombre, tipoGlosario, descripcion, listaSinonimo, listaAcronimo){
			var sinonimos= "";
			var i;
			for (i in listaSinonimo) {
				sinonimos = sinonimos + listaSinonimo[i]; 
				if(i != (listaSinonimo.length-1) ){
					sinonimos = sinonimos  + '||||';
				}
			}
			
			var acronimos= "";
			var i;
			for (i in listaAcronimo) {
				acronimos = acronimos + listaAcronimo[i]; 
				if(i != (listaAcronimo.length-1) ){
					acronimos = acronimos  + '||||';
				}
			}

			console.log(nombre);
			console.log(tipoGlosario);
			console.log(descripcion);
			console.log(sinonimos);
			console.log(acronimos);
			FactoryMensajeCarga.abrirMensaje("Guardando nuevo glosario");
			
			$crearGlosario.post({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,'nombre' : nombre
				,'tipoGlosario' : tipoGlosario.id
				,'descripcion' : descripcion
				,'sinonimo' : sinonimos
				,'acronimo' : acronimos
				},{}).$promise.then(
	                function(salida) {
	                    FactoryMensajeCarga.cerrarMensaje();
	                    console.log("la salida en factoryGlosario es "+salida.succes);
	                    return salida;
	                }, 
	                function(errResponse) {
	                   console.log("error es "+errResponse);
	                   FactoryMensajeCarga.cerrarMensaje();
	                }
	        );		
			
			
			return true;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;
		
		return funcion;
	}; // fin de factory

})();