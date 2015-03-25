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

    ControllerPrincipal.$inject = ['InformacionPrincipalApp'];
    ControllerProyecto.$inject = ['$rootScope', '$listarProyectos', 'InformacionPrincipalApp'];
    ControllerCabecera.$inject = ['$rootScope', 'InformacionPrincipalApp'];
    

    function InformacionPrincipalApp (){
    	var usuario = {
    			idUsuario : 2
    		};
    	var actual ={
    		principal : true,	
    		usuario : false,
    		proyecto : false
    	}
    	function cambioActual(principal, usuario, proyecto){
    		actual.principal = principal;
    		actual.usuario = usuario;
    		actual.proyecto = proyecto;
    	}
    	var funcion = {
    		getUsuario : function (){
    			return usuario;
    		},
    		setUsuario : function (usuarioEntrada){
    			usuario = usuarioEntrada;
    		},
    		soyVistaActual : function (soyVista){
    			switch(soyVista) {
    		    case 'Principal':
    		    	return actual.principal;
    		        break;   
    		    case 'Usuario':
    		        return actual.usuario;
    		        break;
    		    case 'Proyecto':
    		        return actual.proyecto;
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
    		InformacionPrincipalApp
    	){
    	var cnPrincipal = this;
    	cnPrincipal.soyActual = InformacionPrincipalApp.soyVistaActual('Principal');
    	
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
		
    }
    
    function ControllerProyecto (
    	$rootScope,
    	$listarProyectos,
    	InformacionPrincipalApp	
    ){
    	var cnProyecto = this;
//    	console.log("Es proyecto el actual "+InformacionPrincipalApp.soyVistaActual('Proyecto'));
//    	console.log("Es usuario el actual "+InformacionPrincipalApp.soyVistaActual('Usuario'));
//    	console.log("Es Principal el actual "+InformacionPrincipalApp.soyVistaActual('Principal'));
    	cnProyecto.soyActual = InformacionPrincipalApp.soyVistaActual('Proyecto');
    	
    	var idUsuario = InformacionPrincipalApp.getUsuario().idUsuario;
    	console.log("El idUsuario es "+idUsuario);
    	
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
