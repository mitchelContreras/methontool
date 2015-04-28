/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryGlosario', FactoryGlosario);


	FactoryGlosario.$inject = ['$listarGlosario'
	                           ,'InformacionPrincipalApp'];

	function FactoryGlosario (
			$listarGlosario
			,InformacionPrincipalApp
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
				crearElemento: function (nuevo){
					return crearElemento(nuevo);
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
		function crearElemento(nuevo){
		
			return true;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;
		
		return funcion;
	}; // fin de factory

})();