/**
 * Manejo de Instancia y todas las funciones
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryInstancia', FactoryInstancia);


	FactoryInstancia.$inject = ['InformacionPrincipalApp'
	                                ,'$listarInstanciaSinConceptoAsociado'
	                           ];

	function FactoryInstancia (
			InformacionPrincipalApp
			,$listarInstanciaSinConceptoAsociado
			){
		
		var funcion = {
//				busca elemento en servicio rest
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				}
			};
		
		function listarElementoSinConceptoAsociado(){
			return 	$listarInstanciaSinConceptoAsociado.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				},{}).$promise;
		}

		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;

		return funcion;
	}; // fin de factory

})();