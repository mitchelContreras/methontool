/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryConcepto', FactoryConcepto);


	FactoryConcepto.$inject = ['InformacionPrincipalApp'
	                           ,'$verConcepto'
	                           ,'$actualizarConcepto'
	                           ];

	function FactoryConcepto (
			InformacionPrincipalApp
			,$verConcepto
			,$actualizarConcepto
			){
		
		var funcion = {
//				busca elemento en servicio rest
				consultarElemento: function (idGlosarioConcepto){
					return consultarElemento (idGlosarioConcepto);
				},
				actualizarElemento: function (idConcepto, listaInstancia, listaAtributoClase, listaAtributoInstancia){
					return actualizarElemento(idConcepto, listaInstancia, listaAtributoClase, listaAtributoInstancia);
				}
				
			};
		function actualizarElemento(idConcepto, listaInstancia, listaAtributoClase, listaAtributoInstancia){
			console.log("listaInstancia.length "+listaInstancia.length );
			console.log("listaAtributoClase.length "+listaAtributoClase.length );
			console.log("listaAtributoInstancia.length "+listaAtributoInstancia.length );
			
			var instancias= "";
			var i;
			for (i=0;i<listaInstancia.length;i++) {
				instancias = instancias + listaInstancia[i].id; 
				if(i != (listaInstancia.length-1) ){
					instancias = instancias  + '||||';
				}
			}
			console.log("instancia es "+instancias);
			
			var atributoClase= "";
			for (i=0;i<listaAtributoClase.length;i++) {
				atributoClase = atributoClase + listaAtributoClase[i].id; 
				if(i != (listaAtributoClase.length-1) ){
					atributoClase = atributoClase  + '||||';
				}
			}
			console.log("atributoClase es "+atributoClase);
			
			var atributoInstancia= "";
			for (i=0;i<listaAtributoInstancia.length;i++) {
				atributoInstancia = atributoInstancia + listaAtributoInstancia[i].id; 
				if(i != (listaAtributoInstancia.length-1) ){
					atributoInstancia = atributoInstancia  + '||||';
				}
			}
			console.log("atributoInstancia es "+atributoInstancia);
			
			return $actualizarConcepto.post({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioConcepto: idConcepto
				,'listInstancia': instancias
				,'listAtrbClase': atributoClase
				,'listAtrbInstancia': atributoInstancia
			},{}).$promise;
		}
		function consultarElemento (idGlosarioConcepto){
			console.log("idGlosarioConcepto es "+idGlosarioConcepto);
			return 	$verConcepto.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioConcepto: idGlosarioConcepto
				},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;

		return funcion;
	}; // fin de factory

})();