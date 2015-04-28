/**
 * Manejo del arreglo de tipoGlosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryTipoGlosario', FactoryTipoGlosario);


	FactoryTipoGlosario.$inject = ['$listarTipoGlosario'];

	function FactoryTipoGlosario (
			$listarTipoGlosario
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
			console.log("llegue hasta alla :D");
			if (yaConsulte){
				return listaObjeto;
			}else{
				$listarTipoGlosario.get().$promise.then(
		                function(salida) {
		                   // success
		                    if(salida.succes){
		                    	console.log("listarTipoGlosario succes es true");
		                    	yaConsulte = true;
		                    	listaObjeto = salida.elementos;
		                    	console.log(listaObjeto.length);
		                    }else{
		                        if(!salida.succes){
		                            console.log("listarTipoGlosario succes es false");
		                        }else{
		                            console.log("No entro");
		                        }
		                    }
		                }, 
		                function(errResponse) {
		                   // fail
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