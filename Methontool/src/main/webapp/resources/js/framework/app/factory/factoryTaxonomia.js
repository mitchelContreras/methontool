/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryTaxonomia', FactoryTaxonomia);


	FactoryTaxonomia.$inject = ['InformacionPrincipalApp'
	                           ,'$actualizarTaxonomia'
	                           ];

	function FactoryTaxonomia (
			InformacionPrincipalApp
			,$actualizarTaxonomia
			){
		
		var funcion = {
				getListaElemento: function (){
					return getListaElemento();
				},
				setListaElemento: function (entrada){
					listaObjeto = entrada;
				},
				actualizarElemento: function (idGlosarioOrigen, listaSubClase, listaParticion, listaDisjunta, listaExhustiva){
					return actualizarElemento(idGlosarioOrigen, listaSubClase, listaParticion, listaDisjunta, listaExhustiva);
				},
				consultarElemento: function (idProyecto, idGlosarioOrigen){
					return consultarElemento (idProyecto, idGlosarioOrigen);
				},
				agregarElemento: function (objeto){
					return agregarElemento (objeto);
				}
			};
		
		
		function actualizarElemento(idGlosarioOrigen, listaSubClase, listaParticion, listaDisjunta, listaExhustiva){
			return 	$actualizarTaxonomia.post({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioOrigen: idGlosarioOrigen
				,'desDisjunta' : arregloGLosarioToString(listaDisjunta)
				,'desExhaustiva' : arregloGLosarioToString(listaExhustiva)
				,'particion' : arregloGLosarioToString(listaParticion)
				,'subClase' : arregloGLosarioToString(listaSubClase)
				},{}).$promise;
		}
		
		function getListaElemento(){
			console.log("en getListaElemento Glosario");
			if (yaConsulte){
				console.log("Ya tengo el valor de Glosario");
				return listaObjeto;
			}else{
				console.log("antes del rest");
				return $listarGlosario.get
				({id: InformacionPrincipalApp.getProyecto().idProyecto})
				.$promise;
			} 
		}
		function agregarElemento (objeto){
			listaObjeto.push(objeto);
		}
		function consultarElemento (id){
			return true;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;
		
		
		function arregloGLosarioToString(arr){
			var salida = "";
			var len = arr.length;
			var i;
			for(i=0;i<len;i++){
				salida = salida + arr[i].id;
				if(i < len-1){
					salida = salida +"||||";
				}
			}
			return salida; 
		}
		
		return funcion;
	}; // fin de factory

})();