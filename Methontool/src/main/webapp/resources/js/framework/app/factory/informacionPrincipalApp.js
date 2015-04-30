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
			editar :false,
			version : false,
			glosario : false,
			taxonomia : false,
			relacion : false,
			concepto : false,
			atributoInstancia : false,
			atributoClase : false,
			constante :false,
			axioma : false,
			regla : false,
			instancia : false,
			revisarOntologia : false,
			exportar : false
		};
		$rootScope.proyecto ={
				idProyecto : 1,
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

		function cambioActual(principal, usuario, proyecto, version, editar,
				glosario, taxonomia, relacion, concepto, atributoInstancia, 
				atributoClase, constante, axioma, regla, instancia, 
				revisarOntologia, exportar){
			
			$rootScope.actual.principal = principal;
			$rootScope.actual.usuario = usuario;
			$rootScope.actual.proyecto = proyecto;
			$rootScope.actual.version = version;
			$rootScope.actual.editar = editar;
			$rootScope.actual.glosario = glosario;
			$rootScope.actual.taxonomia = taxonomia;
			$rootScope.actual.relacion = relacion;
			$rootScope.actual.concepto = concepto;
			$rootScope.actual.atributoInstancia = atributoInstancia;
			$rootScope.actual.atributoClase = atributoClase;
			$rootScope.actual.constante = constante;
			$rootScope.actual.axioma = axioma;
			$rootScope.actual.regla = regla;
			$rootScope.actual.instancia = instancia;
			$rootScope.actual.revisarOntologia = revisarOntologia;
			$rootScope.actual.exportar = exportar;
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
			    case 'Version':
			    	return $rootScope.actual.version;
			        break;			        
			    case 'Editar':
			        return $rootScope.actual.editar;
			        break;  
			    case 'Glosario':
			    	return $rootScope.actual.glosario;
			        break;   
			    case 'Taxonomia':
			    	return $rootScope.actual.taxonomia;
			        break;
			    case 'Relacion':
			    	return $rootScope.actual.relacion;
			        break; 
			    case 'Concepto':
			    	return $rootScope.actual.concepto;
			        break; 			        
			    case 'AtributoInstancia':
			    	return $rootScope.actual.atributoInstancia;
			        break;
			    case 'AtributoClase':
			    	return $rootScope.actual.atributoClase;
			        break;   
			    case 'Constante':
			    	return $rootScope.actual.constante;
			        break;
			    case 'Axioma':
			    	return $rootScope.actual.axioma;
			        break; 
			    case 'Regla':
			    	return $rootScope.actual.regla;
			        break; 			        
			    case 'Instancia':
			    	return $rootScope.actual.instancia;
			        break;	
			    case 'RevisarOntologia':
			    	return $rootScope.actual.revisarOntologia;
			        break; 			        
			    case 'Exportar':
			    	return $rootScope.actual.exportar;
			        break;				        
			    default:
			        return false;
			    	break;
				} 
			},
			voyAvista : function (Avista){
				switch(Avista) {
			    case 'Principal':
			    	cambioActual(true, false, false, false, false,
			    			false, false, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break;   
			    case 'Usuario':
			    	cambioActual(false, true, false, false, false,
			    			false, false, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break;
			    case 'Proyecto':
			    	cambioActual(false, false, true, false, false,
			    			false, false, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break; 
			    case 'Version':
			    	cambioActual(false, false, false, true, false,
			    			false, false, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break; 			        
			    case 'Editar':
			    	cambioActual(false, false, false, false, true,
			    			false, false, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break;   
			    case 'Glosario':
			    	cambioActual(false, false, false, false, false,
			    			true, false, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break;   
			    case 'Taxonomia':
			    	cambioActual(false, false, false, false, false,
			    			false, true, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break;
			    case 'Relacion':
			    	cambioActual(false, false, false, false, false,
			    			false, false, true, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break; 
			    case 'Concepto':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, true, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break; 			        
			    case 'AtributoInstancia':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, true, 
			    			false, false, false, false, false, 
			    			false, false);
			        break;
			    case 'AtributoClase':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, false, 
			    			true, false, false, false, false, 
			    			false, false);
			        break;   
			    case 'Constante':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, false, 
			    			false, true, false, false, false, 
			    			false, false);
			        break;
			    case 'Axioma':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, false, 
			    			false, false, true, false, false, 
			    			false, false);
			        break; 
			    case 'Regla':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, false, 
			    			false, false, false, true, false, 
			    			false, false);
			        break; 			        
			    case 'Instancia':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, false, 
			    			false, false, false, false, true, 
			    			false, false);
			        break;	
			    case 'RevisarOntologia':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, false, 
			    			false, false, false, false, false, 
			    			false, false);
			        break; 			        
			    case 'Exportar':
			    	cambioActual(false, false, false, false, false,
			    			false, false, false, false, false, 
			    			false, false, false, false, false, 
			    			true, true);
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