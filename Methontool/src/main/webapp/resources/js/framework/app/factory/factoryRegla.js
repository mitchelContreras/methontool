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
							llevarListStringAString(variables), 
							llevarListGlosarioAString(atrbClase),
							llevarListGlosarioAString(atrbInstancia),
							llevarListGlosarioAString(concepto),
							llevarListGlosarioAString(relacion));
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

		function llevarListStringAString (lista){
			var salida= "";
			var i;
			for (i in lista) {
				salida = salida + lista[i]; 
				if(i != (lista.length-1) ){
					salida = salida  + '||||';
				}
			}
//			console.log("salida "+salida);
			return salida;
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
//			console.log("salida "+salida);
			return salida;
		}
		
		return funcion;
	}; // fin de factory

})();