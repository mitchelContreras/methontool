/**
 * Manejo del arreglo de glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryGlosario', FactoryGlosario);


	FactoryGlosario.$inject = [];

	function FactoryGlosario (){
		
		var funcion = {
				getListaGlosario : function (){
					return listaGlosario;
				},
				setListaGlosario: function (nuevaLista){
					listaGlosario = nuevaLista;
				}
			};
		
//		id : 0
//		,nombre : ''
//		,sinonimos :[]
//		,acronimos :[]
//		,descripcion : ''
//		,tipoGlosario : {
//				id : 0
//				,codigo : ''
//				,nombre :''	
//				,descripcion : ''
//			}
//		
		
		var listaGlosario = {};
		return funcion;
	}; // fin de factory

})();