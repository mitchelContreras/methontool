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
	                           ,'$agregarRelacion'
	                           ,'$eliminarRelacion'
	                           ,'$actualizarRelacion'
	                           ];

	function FactoryRelacion (
			InformacionPrincipalApp
			,$listarRelaciones
			,$agregarRelacion
			,$eliminarRelacion
			,$actualizarRelacion
			){
		
		var funcion = {
//				busca elemento en servicio rest
				consultarElemento: function (idGlosarioOrigen){
					return consultarElemento (idGlosarioOrigen);
				},
				crearElemento: function (idGlosarioRelacionOrigen, idGlosarioOrigen, idGlosarioDestino){
					return crearElemento (idGlosarioRelacionOrigen, idGlosarioOrigen, idGlosarioDestino);
				},
				eliminarElemento: function (idRelacion){
					return eliminarElemento (idRelacion);
				},
				actualizarElemento: function (idRelacion, idGlosarioRelacionInversa, cardinalidad){
					return actualizarElemento (idRelacion, idGlosarioRelacionInversa, cardinalidad);
				}
				
			};
		function actualizarElemento (idRelacion, idGlosarioRelacionInversa, cardinalidad){
			return $actualizarRelacion.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idRelacion: idRelacion
				,'cardinalidad': cardinalidad
				,'idGlosarioRelacionInversa': idGlosarioRelacionInversa
			},{}).$promise;
		}
		
		function eliminarElemento (idRelacion){
			return $eliminarRelacion.dlt({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idRelacion: idRelacion
			},{}).$promise;
		}
		function crearElemento (idGlosarioRelacionOrigen, idGlosarioOrigen, idGlosarioDestino){
			return 	$agregarRelacion.post({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioRelacionOrigen: idGlosarioRelacionOrigen
				,'idGlosarioOrigen': idGlosarioOrigen
				,'idGlosarioDestino': idGlosarioDestino
				},{}).$promise;
		}

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