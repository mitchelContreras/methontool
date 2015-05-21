/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryRelacion', FactoryRelacion);


	FactoryRelacion.$inject = ['InformacionPrincipalApp'
	                           ,'$listarRelaciones'
	                           ];

	function FactoryRelacion (
			InformacionPrincipalApp
			,$listarRelaciones
			){
		
		var funcion = {
//				busca elemento en servicio rest
				consultarElemento: function (idGlosarioOrigen){
					return consultarElemento (idGlosarioOrigen);
				}
			};
		

		function consultarElemento (idGlosarioOrigen){
			console.log("idGlosarioOrigen es "+idGlosarioOrigen);
			return 	$listarRelaciones.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioRelacionOrigen: idGlosarioOrigen
				},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;

		return funcion;
	}; // fin de factory

})();