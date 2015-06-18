/**
 * Manejo de Atributo Instancia y todas las funciones
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryRegla', FactoryRegla);


	FactoryRegla.$inject = ['InformacionPrincipalApp'
	                        ,'$verRegla'
	                        ,'$crearActualizarRegla'
	                           ];

	function FactoryRegla (
			InformacionPrincipalApp
			,$verRegla
			,$crearActualizarRegla
			){
		
		var funcion = {
				verElemento: function (idGlosarioRegla){
					return verElemento(idGlosarioRegla);
				},
				actualizarElemento: function (idGlosarioRegla, 
						expresion, 
						variables, 
						atrbClase,
						atrbInstancia,
						concepto,
						relacion
						){
					return actualizarElemento (idGlosarioRegla, 
							expresion, 
							variables, 
							atrbClase,
							atrbInstancia,
							concepto,
							relacion
							);
				}
			};
		
		function actualizarElemento (idGlosarioRegla, 
				expresion, 
				variables, 
				atrbClase,
				atrbInstancia,
				concepto,
				relacion
				){
			return $crearActualizarRegla.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioRegla: idGlosarioRegla
				,'expresion': expresion
				,'variables' : variables
				,'atrbClase' : atrbClase
				,'atrbInstancia': atrbInstancia
				,'concepto' : concepto
				,'relacion' : relacion				
			},{}).$promise;
//			@PathVariable("idProyecto") int idProyecto
//			,@PathVariable("idGlosarioRegla") int idGlosarioRegla
//	        ,@RequestParam(value = "expresion") String expresion
//	        ,@RequestParam(value = "variables") String variables
//	        ,@RequestParam(value = "atrbClase") String atrbClase
//	        ,@RequestParam(value = "atrbInstancia") String atrbInstancia
//	        ,@RequestParam(value = "concepto") String concepto
//	        ,@RequestParam(value = "relacion") String relacion
		}
 
		function verElemento (idGlosarioRegla){
			return $verRegla.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioRegla: idGlosarioRegla
			},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;

		return funcion;
	}; // fin de factory

})();