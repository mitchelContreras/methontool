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
	                                ,'$verAtributoInstancia'
	                                ,'$actualizarAtributoInstancia'
	                           ];

	function FactoryAtributoInstancia (
			InformacionPrincipalApp
			,$listarAtributoInstanciaSinConceptoAsociado
			,$verAtributoInstancia
			,$actualizarAtributoInstancia
			){
		
		var funcion = {
//				busca elemento en servicio rest
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				},
				verElemento: function (idGlosarioAtributo){
					return verElemento(idGlosarioAtributo);
				},
				actualizarElemento: function (idGlosarioAtributo, 
						cardinalidadMax, 
						cardinalidadMin, 
						idGlosarioConcepto, 
						cod_medida, 
						precision, 
						rangoValores, 
						cod_tipoDato, 
						valueDefecto){
					return actualizarElemento (idGlosarioAtributo, 
							cardinalidadMax, 
							cardinalidadMin, 
							idGlosarioConcepto, 
							cod_medida, 
							precision, 
							rangoValores, 
							cod_tipoDato, 
							valueDefecto);
				}
			};
		
		function actualizarElemento (idGlosarioAtributo, 
				cardinalidadMax, 
				cardinalidadMin, 
				idGlosarioConcepto, 
				cod_medida, 
				precision, 
				rangoValores, 
				cod_tipoDato, 
				valueDefecto){
			return $actualizarAtributoInstancia.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioAtributo: idGlosarioAtributo
				,'cardinalidadMax' : cardinalidadMax
				,'cardinalidadMin' : cardinalidadMin
				,'idGlosarioConcepto' : idGlosarioConcepto
				,'cod_medida' : cod_medida
				,'precision' : precision
				,'rangoValores' : rangoValores
				,'cod_tipoDato' : cod_tipoDato
				,'valueDefecto' : valueDefecto
			},{}).$promise;
		}
 
		function verElemento (idGlosarioAtributo){
			return $verAtributoInstancia.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioAtributo: idGlosarioAtributo
			},{}).$promise;
		}
		
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