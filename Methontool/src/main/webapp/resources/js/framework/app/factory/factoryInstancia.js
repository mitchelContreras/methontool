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
	                                ,'$actualizarInstancia'
	                           ];

	function FactoryInstancia (
			InformacionPrincipalApp
			,$listarInstanciaSinConceptoAsociado
			,$verInstancia
			,$actualizarInstancia
			){
		
		var funcion = {
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				},
				verElemento: function (idInstancia){
					return verElemento(idInstancia);
				},
				actualizarElemento: function (idInstancia ,idConcepto ,idInstanciado ,definicion){
					return actualizarElemento(idInstancia ,idConcepto ,idInstanciado ,definicion);
				}
			};
		
		function actualizarElemento(idInstancia ,idConcepto ,idInstanciado ,definicion){
			return actualizarElemento(idInstancia ,idConcepto ,definicion);
		}
		
		function actualizarElemento(idInstancia ,idConcepto, definicion){
			return $actualizarInstancia.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioInstancia: idInstancia
				,'idConcepto' : idConcepto
				,'definicion' : definicion
				},{}).$promise;
		}
		function listarElementoSinConceptoAsociado(){
			return 	$listarInstanciaSinConceptoAsociado.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				},{}).$promise;
		}
		
		function verElemento(idInstancia){
			console.log("entre en verElemento con "+idInstancia);
			return 	$verInstancia.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto,
				idGlosarioInstancia: idInstancia
				},{}).$promise;
		}
		
		return funcion;
	}; // fin de factory

})();