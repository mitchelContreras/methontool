/**
 * 
 */
(function(){
    "use strict"

    var App = angular.module('methontool',[
        //dependencias a usar
        'modProyecto'
        ]);
    
    App.factory('InformacionPrincipalApp', InformacionPrincipalApp);
    App.controller('ControllerPrincipal', ControllerPrincipal);
    App.controller('ControllerCabecera', ControllerCabecera);
    App.controller('ControllerProyecto', ControllerProyecto);

    InformacionPrincipalApp.$inject = ['$rootScope'];
    ControllerPrincipal.$inject = ['InformacionPrincipalApp','$rootScope'];
    ControllerProyecto.$inject = ['$scope','$rootScope', '$listarProyectos', 'InformacionPrincipalApp'];
    ControllerCabecera.$inject = ['$rootScope', 'InformacionPrincipalApp'];
    

    function InformacionPrincipalApp ($rootScope){
    	var usuario = {
    			idUsuario : 2
    		};
    	$rootScope.actual ={
    		principal : true,	
    		usuario : false,
    		proyecto : false
    	};
    	$rootScope.proyecto ={
    			idProyecto : 0,
    			nombre : "",
    			fuenteConocimiento : "",
    			dominio : "",
    			proposito : "",
    			alcance : "",
    			preguntasCompetencia : [],
    			nivelFormalidad : {}
    	};
    	function cambioActual(principal, usuario, proyecto){
    		$rootScope.actual.principal = principal;
    		$rootScope.actual.usuario = usuario;
    		$rootScope.actual.proyecto = proyecto;
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
    		    default:
    		        return false;
    		    	break;
    			} 
    		},
    		voyAvista : function (Avista){
    			switch(Avista) {
    		    case 'Principal':
    		    	cambioActual(true, false, false);
    		        break;   
    		    case 'Usuario':
    		    	cambioActual(false, true, false);
    		        break;
    		    case 'Proyecto':
    		    	cambioActual(false, false, true);
    		        break; 
    		    default:
    		        return false;
    		    	break;
    			} 
    		}
    	};
    	
    	return funcion;
    }
     
    //Fin llamada a otros modulos
    
    function ControllerPrincipal (
    		InformacionPrincipalApp, 
    		$rootScope
    	){
    	var cnPrincipal = this;
        // validate data.
        $rootScope.$watch('actual.principal', function (newValue, oldValue) {
        	if (newValue !== oldValue) {
                console.log("cambio alguno de los valores de esta vaina2");
                cnPrincipal.soyActual = InformacionPrincipalApp.soyVistaActual('Principal');
        	}
        }, false);
    	
    	
    }
    
    function ControllerCabecera(
    	$rootScope,
    	InformacionPrincipalApp
    ){
    	var cnCabecera = this;
    	cnCabecera.especificacion = false;
    	cnCabecera.conceptualizacion = false;
    	cnCabecera.implementacion = false;
    	cnCabecera.menuInicial = true;
    	cnCabecera.mostrarNombreProyecto = false;
    	cnCabecera.nombreProyecto = "";
    	
    	cnCabecera.clickEspecificacion = clickEspecificacion;
    	cnCabecera.clickConceptualizacion = clickConceptualizacion;
    	cnCabecera.clickImplementacion = clickImplementacion;
    	cnCabecera.listarProyectos = listarProyectos;
    	
        function clickEspecificacion(){
		    cambiarMenu(true, false, false, false);
		}
		function clickConceptualizacion(){	
            cambiarMenu(false, true, false, false);
		}
		function clickImplementacion(){
            cambiarMenu(false, false, true, false);
		}
		function cambiarMenu(especificacion, conceptualizacion, implementacion, menuInicial){
            cnCabecera.especificacion = especificacion;
            cnCabecera.conceptualizacion = conceptualizacion;
            cnCabecera.implementacion = implementacion;
            cnCabecera.menuInicial = menuInicial;
		}
		
		function listarProyectos (){
			$rootScope.$broadcast('listarProyectos');
		}
		
		//Observa si cambia el nombre del proyecto
        $rootScope.$watch('proyecto.nombre', function (newValue, oldValue) {
        	if (newValue !== oldValue) {
                console.log("cambio el nombre de proyecto");
                cnCabecera.mostrarNombreProyecto = true;
                cnCabecera.nombreProyecto = $rootScope.proyecto.nombre;
        	}
        }, false);
        
    }
    
    function ControllerProyecto (
    	$scope,
    	$rootScope,
    	$listarProyectos,
    	InformacionPrincipalApp	
    ){
    	var cnProyecto = this;
    	cnProyecto.seleccioneProyecto = seleccioneProyecto;
//    	console.log("Es proyecto el actual "+InformacionPrincipalApp.soyVistaActual('Proyecto'));
//    	console.log("Es usuario el actual "+InformacionPrincipalApp.soyVistaActual('Usuario'));
//    	console.log("Es Principal el actual "+InformacionPrincipalApp.soyVistaActual('Principal'));
    	
        // validate data.
        $rootScope.$watch('actual.proyecto', function (newValue, oldValue) {
        	if (newValue !== oldValue) {
                console.log("cambio alguno de los valores de esta vaina1");
                cnProyecto.soyActual = InformacionPrincipalApp.soyVistaActual('Proyecto');
        	}
        }, false);

    	var idUsuario = InformacionPrincipalApp.getUsuario().idUsuario;
    	
    	function seleccioneProyecto( proyecto){
//    		console.log("el idProyecto es "+proyecto.idProyecto);
    		InformacionPrincipalApp.setProyecto(proyecto);
//    		console.log("el2 idProyecto es "+InformacionPrincipalApp.getProyecto().idProyecto);
    		InformacionPrincipalApp.voyAvista("Proyecto");
    		console.log("InformacionPrincipalApp.soyVistaActual('Proyecto'); "+InformacionPrincipalApp.soyVistaActual('Proyecto'));
    		console.log("InformacionPrincipalApp.soyVistaActual('Principal'); "+InformacionPrincipalApp.soyVistaActual('Principal'));
    		$('#myModal').modal('hide');
    	}
    	
        $rootScope.$on('listarProyectos', function(event, data){
        	$listarProyectos.get({id: idUsuario}).$promise.then(
                    function(salida) {
                       // success
                      console.log("sucess es "+salida.succes);
                      cnProyecto.proyectos = salida.proyectos;
                      console.log("cantidad de proyectos son "+cnProyecto.proyectos.length);
                      
                        if(salida.succes){
//                          console.log("listaProyecto es true");
//                          $scope.listaProyecto = salida.proyectos;
//                          console.log("arreglo es "+$scope.listaProyecto.length);
                        	$('#myModal').modal('show'); // OJO debo quitar esta linea y hacer la llamada correspondiente a eso
                        }else{
                            if(!salida.succes){
                                console.log("listaProyecto es false");
                            }else{
                                console.log("No entro");
                            }
                        }
                    }, 
                    function(errResponse) {
                       // fail
                    }
            );

        });
    }


})();
