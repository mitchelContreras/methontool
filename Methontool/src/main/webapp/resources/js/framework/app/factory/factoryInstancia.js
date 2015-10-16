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
	                                ,'$crearInstancia'
	                                ,'$rutaDescargaArchivo'
	                           ];

	function FactoryInstancia (
			InformacionPrincipalApp
			,$listarInstanciaSinConceptoAsociado
			,$verInstancia
			,$actualizarInstancia
			,$crearInstancia
			,$rutaDescargaArchivo
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
				},
				crearElemento: function (nombreInstancia, idConcepto){
					return crearElemento(nombreInstancia, idConcepto);
				},
				getRutaDescargarArchivo: function (idGlosarioConcepto, cantidadInstancia){
					return getRutaDescargarArchivo (idGlosarioConcepto, cantidadInstancia);
				}
			};
		function getRutaDescargarArchivo(idGlosarioConcepto, cantidadInstancia){
	    	var urlConsultar = $rutaDescargaArchivo+"/api/proyecto/"+InformacionPrincipalApp.getProyecto().idProyecto+"/concepto/"+idGlosarioConcepto+"/donwloadFileInstancias/"+cantidadInstancia;
	    	return urlConsultar;
		}
		
		function crearElemento(nombreInstancia, idConcepto){
			return $crearInstancia.post({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,'idConcepto' : idConcepto
				,'nombreInstancia' : nombreInstancia
				},{}).$promise;
		}
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