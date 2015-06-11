/**
 * Manejo del arreglo de Medida y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryTipoDato', FactoryTipoDato);


	FactoryTipoDato.$inject = ['$listarTipoDeDato'];

	function FactoryTipoDato (
			$listarTipoDeDato
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
			if (yaConsulte){
				return listaObjeto;
			}else{
				$listarTipoDeDato.get().$promise.then(
		                function(salida) {
		                   // success
		                    if(salida.succes){
		                    	console.log("$listarTipoDeDato succes es true");
		                    	yaConsulte = true;
		                    	listaObjeto = salida.elementos;
		                    	console.log(listaObjeto.length);
		                    }else{
		                        if(!salida.succes){
		                        }else{
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
		function consultarElemento (codigo){
			var i;
			for(i=0;i<listaObjeto.length;i++){
				if(listaObjeto[i].codigo == codigo ){
					return listaObjeto[i];
				}
			}
			return {
	            "id": 0,
	            "codigo": "",
	            "nombre": null,
	            "descripcion": null
	        }
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