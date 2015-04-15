/**
 * Factory donde se encuentra toda la información
 * compartida a lo largo de la aplicación
 * 
 * @author Mitchell Contreras
 * param $rootScope
 */
(function(){
    "use strict"
angular.module('methontool')

	.factory('InformacionPrincipalApp', InformacionPrincipalApp);

InformacionPrincipalApp.$inject = ['$rootScope'];

	function InformacionPrincipalApp ($rootScope){
		var usuario = {
				idUsuario : 2
			};
		$rootScope.actual ={
			principal : true,	
			usuario : false,
			proyecto : false,
			editar :false
		};
		$rootScope.proyecto ={
				idProyecto : 0,
				nombre : "",
				fuenteConocimiento : [],
				dominio : "",
				proposito : "",
				alcance : "",
				preguntasCompetencia : [],
				nivelFormalidad : {},
				desarrolladores: [],
				fecha : ""
		};
		function cambioActual(principal, usuario, proyecto, editar){
			$rootScope.actual.principal = principal;
			$rootScope.actual.usuario = usuario;
			$rootScope.actual.proyecto = proyecto;
			$rootScope.actual.editar = editar;
		};
		
		var funcion = {
			getUsuario : function (){
				return usuario;
			},
			setUsuario : function (usuarioEntrada){
				usuario = usuarioEntrada;
			},
			getProyecto : function (){
				return $rootScope.proyecto;
			},
			setProyecto :function (proyectoEntrada){
				$rootScope.proyecto = proyectoEntrada;
			},
			soyVistaActual : function (soyVista){
				switch(soyVista) {
			    case 'Principal':
			    	return $rootScope.actual.principal;
			        break;   
			    case 'Usuario':
			        return $rootScope.actual.usuario;
			        break;
			    case 'Proyecto':
			        return $rootScope.actual.proyecto;
			        break;
			    case 'Editar':
			        return $rootScope.actual.editar;
			        break;    		        
			    default:
			        return false;
			    	break;
				} 
			},
			voyAvista : function (Avista){
				switch(Avista) {
			    case 'Principal':
			    	cambioActual(true, false, false, false);
			        break;   
			    case 'Usuario':
			    	cambioActual(false, true, false, false);
			        break;
			    case 'Proyecto':
			    	cambioActual(false, false, true, false);
			        break; 
			    case 'Editar':
			    	cambioActual(false, false, false, true);
			        break;     		        
			    default:
			        return false;
			    	break;
				} 
			}
		};
		
		return funcion;
	}

})();