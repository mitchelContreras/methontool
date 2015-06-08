/**
 * Manejo de Atributo Instancia y todas las funciones
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryAtributoInstancia', FactoryAtributoInstancia);


	FactoryAtributoInstancia.$inject = ['InformacionPrincipalApp'
	                                ,'$listarAtributoInstanciaSinConceptoAsociado'
	                           ];

	function FactoryAtributoInstancia (
			InformacionPrincipalApp
			,$listarAtributoInstanciaSinConceptoAsociado
			){
		
		var funcion = {
//				busca elemento en servicio rest
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				}
			};
		
		function listarElementoSinConceptoAsociado(){
			return 	$listarAtributoInstanciaSinConceptoAsociado.get({
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