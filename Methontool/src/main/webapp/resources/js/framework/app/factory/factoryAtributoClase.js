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
	                                ,'$actualizarAtributoClase'
	                           ];

	function FactoryAtributoClase (
			InformacionPrincipalApp
			,$listarAtributoClaseSinConceptoAsociado
			,$verAtributoClase
			,$actualizarAtributoClase
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
						cod_tipoDato, 
						precision, 
						rangoValores, 
						valueDefecto){
					return actualizarElemento (idGlosarioAtributo, 
							cardinalidadMax, 
							cardinalidadMin, 
							idGlosarioConcepto, 
							cod_tipoDato, 
							precision, 
							rangoValores, 
							valueDefecto);
				}
			};
		
		function actualizarElemento(idGlosarioAtributo, 
				cardinalidadMax, 
				cardinalidadMin, 
				idGlosarioConcepto, 
				cod_tipoDato, 
				precision, 
				rangoValores, 
				valueDefecto){
			console.log("idGlosarioAtributo "+idGlosarioAtributo);
			console.log("cardinalidadMax "+cardinalidadMax);
			console.log("cardinalidadMin "+cardinalidadMin);
			console.log("idGlosarioConcepto "+idGlosarioConcepto);
			console.log("cod_tipoDato "+cod_tipoDato);
			console.log("precision "+precision);
			console.log("rangoValores "+rangoValores);
			console.log("valueDefecto "+valueDefecto);
			return $actualizarAtributoClase.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioAtributo: idGlosarioAtributo
				,'cardinalidadMax' : cardinalidadMax
				,'cardinalidadMin' : cardinalidadMin
				,'idGlosarioConcepto' : idGlosarioConcepto
				,'precision' : precision
				,'rangoValores' : rangoValores
				,'cod_tipoDato' : cod_tipoDato
				,'value' : valueDefecto
			},{}).$promise;
		}
	
		
        
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