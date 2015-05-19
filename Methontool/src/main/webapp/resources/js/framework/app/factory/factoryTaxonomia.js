/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryTaxonomia', FactoryTaxonomia);


	FactoryTaxonomia.$inject = ['InformacionPrincipalApp'
	                           ,'$actualizarTaxonomia'
	                           ,'$verTaxonomia'
	                           ];

	function FactoryTaxonomia (
			InformacionPrincipalApp
			,$actualizarTaxonomia
			,$verTaxonomia
			){
		
		var funcion = {
				getListaElemento: function (){
					return getListaElemento();
				},
				setListaElemento: function (entrada){
					listaObjeto = entrada;
				},
				actualizarElemento: function (idGlosarioOrigen, listaSubClase, listaParticion, listaDisjunta, listaExhustiva){
					return actualizarElemento(idGlosarioOrigen, listaSubClase, listaParticion, listaDisjunta, listaExhustiva);
				},
//				busca elemento en servicio rest
				consultarElemento: function (idGlosarioOrigen){
					return consultarElemento (idGlosarioOrigen);
				},
				agregarElemento: function (objeto){
					return agregarElemento (objeto);
				},
//				busca elemento en la listaElemento sino lo consigue retorna elemento con idGlosarioOrigen = 0
				verElemento: function (idGlosarioOrigen){
					return verElemento (idGlosarioOrigen);
				}
			};
		
		function verElemento (idGlosarioOrigen){
			console.log("verElemento en factoryTaxonomia "+idGlosarioOrigen);
			var len = listaObjeto.length;
			var i;
			for(i=0;i<len;i++){
				if(listaObjeto[i].conceptoOrigen.id == idGlosarioOrigen){
					console.log("Encontre en verElemento Taxonomia "+listaObjeto[i].conceptoOrigen+" posicion="+i);
					console.log("conDestinoDesDisjunta "+listaObjeto[i].conDestinoDesDisjunta.length);
					console.log("conDestinoDesExhaustiva "+listaObjeto[i].conDestinoDesExhaustiva.length);
					console.log("conDestinoParticion "+listaObjeto[i].conDestinoParticion.length);
					console.log("conDestinoSubClase "+listaObjeto[i].conDestinoSubClase.length);
					console.log("relaciones "+listaObjeto[i].relaciones.length);
					return listaObjeto[i];
				}
			}
			console.log("No encontro");
			return {'conceptoOrigen':0};
		}
		
		function actualizarElemento(idGlosarioOrigen, listaSubClase, listaParticion, listaDisjunta, listaExhustiva){
			return 	$actualizarTaxonomia.post({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioOrigen: idGlosarioOrigen
				,'desDisjunta' : arregloGLosarioToString(listaDisjunta)
				,'desExhaustiva' : arregloGLosarioToString(listaExhustiva)
				,'particion' : arregloGLosarioToString(listaParticion)
				,'subClase' : arregloGLosarioToString(listaSubClase)
				},{}).$promise;
		}
		
		function getListaElemento(){
			console.log("en getListaElemento Glosario");
			if (yaConsulte){
				console.log("Ya tengo el valor de Glosario");
				return listaObjeto;
			}else{
				console.log("antes del rest");
				return $listarGlosario.get
				({id: InformacionPrincipalApp.getProyecto().idProyecto})
				.$promise;
			} 
		}
		function agregarElemento (objeto){
			console.log("longitud de listaObjeto es Taxonomia "+listaObjeto.length);
			console.log("Quiero agregar con "+objeto.conceptoOrigen.id);
			var i;
			for(i=0;i<listaObjeto.length;i++){
				if(listaObjeto[i].conceptoOrigen.id == objeto.conceptoOrigen.id){
					console.log("existe en listaObjeto Taxonomia con "+listaObjeto[i].conceptoOrigen.id);
					listaObjeto.splice(objeto, 1);
//					listaObjeto.splice(listaObjeto[i], 1);
					console.log("elimine y ahora longitud es "+listaObjeto.length);
				}
			}
			listaObjeto.push(objeto);
			console.log("longitud de listaObjeto es Taxonomia "+listaObjeto.length);
			
		}
		function consultarElemento (idGlosarioOrigen){
			console.log("idGlosarioOrigen es "+idGlosarioOrigen);
			return 	$verTaxonomia.get({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosarioOrigen: idGlosarioOrigen
				},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;
		
		
		function arregloGLosarioToString(arr){
			var salida = "";
			var len = arr.length;
			var i;
			for(i=0;i<len;i++){
				salida = salida + arr[i].id;
				if(i < len-1){
					salida = salida +"||||";
				}
			}
			return salida; 
		}
		
		return funcion;
	}; // fin de factory

})();