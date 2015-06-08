/**
 * Manejo de Atributo Clase y todas las funciones
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryAtributoClase', FactoryAtributoClase);


	FactoryAtributoClase.$inject = ['InformacionPrincipalApp'
	                                ,'$listarAtributoClaseSinConceptoAsociado'
	                           ];

	function FactoryAtributoClase (
			InformacionPrincipalApp
			,$listarAtributoClaseSinConceptoAsociado
			){
		
		var funcion = {
//				busca elemento en servicio rest
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				}
			};
		
		function listarElementoSinConceptoAsociado(){
			return 	$listarAtributoClaseSinConceptoAsociado.get({
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