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
	                           ];

	function FactoryGlosario (
			$listarGlosario
			,InformacionPrincipalApp
			,$crearGlosario
			,$actualizarGlosario
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
					actualizarElemento(idGlosario, nombre, tipoGlosario, descripcion, sinonimo, acronimo);
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
		
		function actualizarElemento(idGlosario, nombre, tipoGlosario, descripcion, sinonimo, acronimo){
			console.log("entre en el actualizarElemento");
			var semaforo = false;
			$actualizarGlosario.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosario: idGlosario
				,'nombre' : nombre
				,'tipoGlosario' : tipoGlosario
				,'descripcion' : descripcion
				,'sinonimo' : sinonimo
				,'acronimo' : acronimo
				},{}).$promise.then(
	                function(salida) {
	                   // success
	                	console.log("Llegue al servidor");
	                    if(salida.succes){
	                    	console.log("succes es true en $crearGlosario");
	                    	
	                    }else{
	                        if(!salida.succes){
	                        	console.log("succes es false en $crearGlosario");
	                        	semaforo = true;
	                        }else{
	                            console.log("ni si ni no $crearGlosario");
	                            semaforo = true;
	                        }
	                    }
	                }, 
	                function(errResponse) {
	                   console.log("error es "+errResponse);
	                   semaforo = true;
	                }
	        );	
//			while (!semaforo) {
//				  // We're just waiting.
//			}
			console.log("semafooooorooO");
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
		function crearElemento(nombre, tipoGlosario, descripcion, sinonimo, acronimo){
			$crearGlosario.post({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,'nombre' : nombre
				,'tipoGlosario' : tipoGlosario
				,'descripcion' : descripcion
				,'sinonimo' : sinonimo
				,'acronimo' : acronimo
				},{}).$promise.then(
	                function(salida) {
	                   // success
	                	console.log("Llegue al servidor");
	                    if(salida.succes){
	                    	console.log("succes es true en $crearGlosario");
	                    	
	                    }else{
	                        if(!salida.succes){
	                        	console.log("succes es false en $crearGlosario");
	                        }else{
	                            console.log("ni si ni no $crearGlosario");
	                        }
	                    }
	                }, 
	                function(errResponse) {
	                   console.log("error es "+errResponse);
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