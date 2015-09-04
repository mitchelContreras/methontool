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
	                                ,'$verInstancia'
	                           ];

	function FactoryInstancia (
			InformacionPrincipalApp
			,$listarInstanciaSinConceptoAsociado
			,$verInstancia
			){
		
		var funcion = {
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				},
				verElemento: function (idInstancia){
					return verElemento(idInstancia);
				}
			};
		
		function listarElementoSinConceptoAsociado(){
			return 	$listarInstanciaSinConceptoAsociado.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				},{}).$promise;
		}
		
		function verElemento(idInstancia){
			console.log("entre en verElemento con "+idInstancia);
			return 	$verInstancia.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto,
				idInstancia: idInstancia
				},{}).$promise;
		}
		
		return funcion;
	}; // fin de factory

})();