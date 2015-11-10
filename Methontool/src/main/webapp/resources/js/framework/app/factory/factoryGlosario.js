/**
 * Manejo del arreglo de Glosario y todas las funciones referente a esta lista
 * 
 */

(function(){
    "use strict"
angular.module('methontool')

	.factory('FactoryGlosario', FactoryGlosario);


	FactoryGlosario.$inject = ['$listarGlosario'
	                           ,'InformacionPrincipalApp'
	                           ,'$crearGlosario'
	                           ,'$actualizarGlosario'
	                           ,'FactoryMensajeCarga'
	                           ,'$listarGlosarioDadoIdTipoGlosario'
	                           ,'$verGlosario'
	                           ];

	function FactoryGlosario (
			$listarGlosario
			,InformacionPrincipalApp
			,$crearGlosario
			,$actualizarGlosario
			,FactoryMensajeCarga
			,$listarGlosarioDadoIdTipoGlosario
			,$verGlosario
			){
		
		var funcion = {
				setListaElemento: function (entrada){
					listaObjeto = entrada;
				},
				crearElemento: function (nombre, tipoGlosario, descripcion, sinonimo, acronimo){
					return crearElemento(nombre, tipoGlosario, descripcion, sinonimo, acronimo);
				},
				actualizarElemento: function (idGlosario, nombre, tipoGlosario, descripcion, sinonimo, acronimo){
					return actualizarElemento(idGlosario, nombre, tipoGlosario, descripcion, sinonimo, acronimo);
				},
				consultarElemento: function (id){
					return consultarElemento (id);
				},
				agregarElemento: function (objeto){
					return agregarElemento (objeto);
				},
				eliminarElemento: function (id){
					return eliminarElemento (id);
				}, 
				getYaConsulte: function (){
					return yaConsulte;
				},
				setYaConsulte: function (entrada){
					yaConsulte = entrada;
				},
				modificarElemento: function (glosario){
					modificarElemento (glosario);
				},
				getGlosarioDadoTipoGlosario : function (idTipoGlosario){
					return getGlosarioDadoTipoGlosario (idTipoGlosario);
				},
				actualizarLista: function (){
					console.log("dentro de actualizar");
					return $listarGlosario.get
					({id: InformacionPrincipalApp.getProyecto().idProyecto})
					.$promise;
				},
				getListaElementos: function (succes, fail){
					return getListaElementos (succes, fail);
				},
				getElementoDadoId: function(id, succes, fail){
					return getElementoDadoId(id, succes, fail);
				}
			};
		function getElementoDadoId (id, succes, fail){
			var i;
			for(i=0;i<listaObjeto.length;i++){
				if(listaObjeto[i].id == id ){
					succes (listaObjeto[i]);
				}
			}
			$verGlosario.get(
					{idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
					,idGlosario: id})
			.$promise.then(
					function(salida) {
						console.log("En $verGlosario");
						if(salida.succes){
							console.log("llamando a succes");
							succes (salida.elemento);
						}else{
							fail();
						}
			})
		}
		function getListaElementos (succes, fail){
			console.log("entre en la funcion");
			$listarGlosario.get
			({id: InformacionPrincipalApp.getProyecto().idProyecto})
			.$promise.then(
					function(salida) {
						console.log("En funcion");
						if(salida.succes){
							console.log("llamando a succes");
							listaObjeto = salida.elementos;
							succes (salida.elementos);
						}else{
							fail();
						}
			})			
		}

		function getGlosarioDadoTipoGlosario (idTipoGlosario){
			var salida = [];
			var i;
			for (i = 0; i<listaObjeto.length;i++){
				if(listaObjeto[i].tipoGlosario.id == idTipoGlosario){
					salida.push(listaObjeto[i]);
				}
			}
			return salida;
		}
		function modificarElemento (glosario){
			var i = 0;
			for (i = 0; i<listaObjeto.length;i++){
				console.log("el objeto es "+listaObjeto[i].id);
				if(glosario.id == listaObjeto[i].id){
					console.log("elimine");
					listaObjeto.splice(i, 1);
				}
			}
			listaObjeto.push(glosario);
		}
		
		function actualizarElemento(idGlosario, nombre, tipoGlosario, descripcion, listaSinonimo, listaAcronimo){
			
			var sinonimos= "";
			var i;
			for (i in listaSinonimo) {
				sinonimos = sinonimos + listaSinonimo[i]; 
				if(i != (listaSinonimo.length-1) ){
					sinonimos = sinonimos  + '||||';
				}
			}
			
			var acronimos= "";
			var i;
			for (i in listaAcronimo) {
				acronimos = acronimos + listaAcronimo[i]; 
				if(i != (listaAcronimo.length-1) ){
					acronimos = acronimos  + '||||';
				}
			}
			
			console.log("dentro de actualizar elemento");
			return 	$actualizarGlosario.put({
				idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
				,idGlosario: idGlosario
				,'nombre' : nombre
				,'tipoGlosario' : tipoGlosario.id
				,'descripcion' : descripcion
				,'sinonimo' : sinonimos
				,'acronimo' : acronimos
				},{}).$promise;
		}
		function eliminarElemento (id){
			return true;
		}
		function agregarElemento (objeto){
			listaObjeto.push(objeto);
		}
		function crearElemento(nombre, tipoGlosario, descripcion, listaSinonimo, listaAcronimo){
			var sinonimos= "";
			var i;
			for (i in listaSinonimo) {
				sinonimos = sinonimos + listaSinonimo[i]; 
				if(i != (listaSinonimo.length-1) ){
					sinonimos = sinonimos  + '||||';
				}
			}
			
			var acronimos= "";
			var i;
			for (i in listaAcronimo) {
				acronimos = acronimos + listaAcronimo[i]; 
				if(i != (listaAcronimo.length-1) ){
					acronimos = acronimos  + '||||';
				}
			}

			console.log(nombre);
			console.log(tipoGlosario);
			console.log(descripcion);
			console.log(sinonimos);
			console.log(acronimos);
			return $crearGlosario.post({
			idProyecto: InformacionPrincipalApp.getProyecto().idProyecto
			,'nombre' : nombre
			,'tipoGlosario' : tipoGlosario.id
			,'descripcion' : descripcion
			,'sinonimo' : sinonimos
			,'acronimo' : acronimos
			},{}).$promise;
		}
		
		var listaObjeto = [];
		var listaErrores = [];
		var existeError = false;
		var yaConsulte = false;
		
		return funcion;
	}; // fin de factory

})();