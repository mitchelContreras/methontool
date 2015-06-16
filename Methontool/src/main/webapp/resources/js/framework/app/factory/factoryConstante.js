/**
 * Manejo de Atributo Instancia y todas las funciones
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryConstante', FactoryConstante);


	FactoryConstante.$inject = ['InformacionPrincipalApp'
	                            ,'$verConstante'
	                            ,'$crearActualizarConstante'
	                           ];

	function FactoryConstante (
			InformacionPrincipalApp
			,$verConstante
			,$crearActualizarConstante
			){
		
		var funcion = {
//				busca elemento en servicio rest
				listarElementoSinConceptoAsociado: function (){
					return listarElementoSinConceptoAsociado();
				},
				verElemento: function (idGosarioConstante){
					return verElemento(idGosarioConstante);
				}
				,
				actualizarElemento: function (idGosarioConstante, 
						codMedida, 
						codDato, 
						valor){
					return actualizarElemento (idGosarioConstante, 
							codMedida, 
							codDato, 
							valor);
				}
			};
		
		function actualizarElemento (idGosarioConstante, 
				codMedida, 
				codDato, 
				valor){
			console.log("en actualizarElemento 1");
			return $crearActualizarConstante.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGosarioConstante: idGosarioConstante
				,'codMedida': codMedida
				,'codDato' : codDato
				,'valor' : valor
			},{}).$promise;
		}
 
		function verElemento (idGosarioConstante){
			return $verConstante.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGosarioConstante: idGosarioConstante
			},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;

		return funcion;
	}; // fin de factory

})();