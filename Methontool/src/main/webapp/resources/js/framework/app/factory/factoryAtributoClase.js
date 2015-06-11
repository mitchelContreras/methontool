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
	                                ,'$verAtributoClase'
	                           ];

	function FactoryAtributoClase (
			InformacionPrincipalApp
			,$listarAtributoClaseSinConceptoAsociado
			,$verAtributoClase
			){
		
		var funcion = {
//				busca elemento en servicio rest
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				},
				verElemento: function (idGlosarioAtributo){
					return verElemento(idGlosarioAtributo);
				}
			};
		
		function verElemento (idGlosarioAtributo){
			return $verAtributoClase.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioAtributo: idGlosarioAtributo
			},{}).$promise;
		}
		
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