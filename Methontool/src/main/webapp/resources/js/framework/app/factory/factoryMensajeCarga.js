/**
 * Manejo del mensaje de carga 
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryMensajeCarga', FactoryMensajeCarga);


FactoryMensajeCarga.$inject = ['$rootScope'
	                           ];

	function FactoryMensajeCarga (
			$rootScope
			){
		
		var funcion = {
				abrirMensaje: function (mensaje){
		    		$rootScope.mensajeCargando = mensaje;
		    		$('#modalCargando').modal('show');
				},
				cerrarMensaje: function (){
					$('#modalCargando').modal('hide');
				}
			};
		return funcion;
	}; // fin de factory

})();