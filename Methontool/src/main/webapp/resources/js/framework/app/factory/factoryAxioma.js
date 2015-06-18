/**
 * Manejo de Atributo Instancia y todas las funciones
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryAxioma', FactoryAxioma);


	FactoryAxioma.$inject = ['InformacionPrincipalApp'
	                         ,'$verAxioma'
	                         ,'$crearActualizarAxioma'
	                           ];

	function FactoryAxioma (
			InformacionPrincipalApp
			,$verAxioma
			,$crearActualizarAxioma
			){
		
		var funcion = {
				verElemento: function (idGlosarioAxioma){
					return verElemento(idGlosarioAxioma);
				},
				actualizarElemento: function (idGlosarioAxioma, 
						expresion, 
						variables, 
						atrbClase,
						atrbInstancia,
						concepto,
						relacion){
					return actualizarElemento (idGlosarioAxioma, 
							expresion, 
							llevarListGlosarioAString(variables), 
							llevarListGlosarioAString(atrbClase),
							llevarListGlosarioAString(atrbInstancia),
							llevarListGlosarioAString(concepto),
							llevarListGlosarioAString(relacion));
				}
			};
		
		function actualizarElemento (idGlosarioAxioma, 
				expresion, 
				variables, 
				atrbClase,
				atrbInstancia,
				concepto,
				relacion){
			console.log("en actualizarElemento 1");
			return $crearActualizarAxioma.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioAxioma: idGlosarioAxioma
				,'expresion': expresion
				,'variables' : variables
				,'atrbClase' : atrbClase
				,'atrbInstancia': atrbInstancia
				,'concepto' : concepto
				,'relacion' : relacion				
			},{}).$promise;
			
//			@PathVariable("idProyecto") int idProyecto
//			,@PathVariable("idGlosarioAxioma") int idGlosarioAxioma
//	        ,@RequestParam(value = "expresion") String expresion
//	        ,@RequestParam(value = "variables") String variables
//	        ,@RequestParam(value = "atrbClase") String atrbClase
//	        ,@RequestParam(value = "atrbInstancia") String atrbInstancia
//	        ,@RequestParam(value = "concepto") String concepto
//	        ,@RequestParam(value = "relacion") String relacion
		}
 
		function verElemento (idGlosarioAxioma){
			return $verAxioma.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioAxioma: idGlosarioAxioma
			},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;
		
		function llevarListStringAString (lista){
			var salida= "";
			var i;
			for (i in lista) {
				salida = salida + lista[i]; 
				if(i != (lista.length-1) ){
					salida = salida  + '||||';
				}
			}
		}
		
		function llevarListGlosarioAString (lista){
			var salida= "";
			var i;
			for (i in lista) {
				salida = salida + lista[i].id; 
				if(i != (lista.length-1) ){
					salida = salida  + '||||';
				}
			}
		}
		
		return funcion;
	}; // fin de factory

})();