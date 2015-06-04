/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryConcepto', FactoryConcepto);


	FactoryConcepto.$inject = ['InformacionPrincipalApp'
	                           ,'$verConcepto'
	                           ];

	function FactoryConcepto (
			InformacionPrincipalApp
			,$verConcepto
			){
		
		var funcion = {
//				busca elemento en servicio rest
				consultarElemento: function (idGlosarioConcepto){
					return consultarElemento (idGlosarioConcepto);
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
		function consultarElemento (idGlosarioConcepto){
			console.log("idGlosarioConcepto es "+idGlosarioConcepto);
			return 	$verConcepto.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioConcepto: idGlosarioConcepto
				},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;

		return funcion;
	}; // fin de factory

})();