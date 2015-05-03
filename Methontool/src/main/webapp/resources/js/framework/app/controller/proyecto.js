/**
 * Controlador encargado de manejar todo lo relacionado a
 * proyectos en la aplicación
 * 
 * @author Mitchell Contreras
 * @param $scope
 * @param $rootScope
 * @param $listarProyectos from service/proyecto
 * @param $crearProyecto from service/proyecto
 * @param InformacionPrincipalApp from factory/informacionPrincipalApp
 */
(function(){
    "use strict"
angular.module('methontool')

	.controller('ControllerProyecto', ControllerProyecto);
	
   ControllerProyecto.$inject = ['$scope',
                              '$rootScope', 
                              '$listarProyectos', 
                              '$crearProyecto', 
                              'InformacionPrincipalApp'
                              ,'FactoryTipoGlosario'
                              ,'FactoryGlosario'
                              ,'FactoryMensajeCarga'
                              ];
   
   function ControllerProyecto (
	    	$scope,
	    	$rootScope,
	    	$listarProyectos,
	    	$crearProyecto,
	    	InformacionPrincipalApp
	    	,FactoryTipoGlosario
	    	,FactoryGlosario
	    	,FactoryMensajeCarga
	    ){
	    	var cnProyecto = this;
	    	cnProyecto.seleccioneProyecto = seleccioneProyecto;
	    	cnProyecto.creeProyecto = creeProyecto;
//	    	console.log("Es proyecto el actual "+InformacionPrincipalApp.soyVistaActual('Proyecto'));
//	    	console.log("Es usuario el actual "+InformacionPrincipalApp.soyVistaActual('Usuario'));
//	    	console.log("Es Principal el actual "+InformacionPrincipalApp.soyVistaActual('Principal'));
	    	
	        // validate data.
	        $rootScope.$watch('actual.proyecto', function (newValue, oldValue) {
	        	if (newValue !== oldValue) {
	                console.log("cambio alguno de actual.proyecto a "+newValue);
	                cnProyecto.soyActual = InformacionPrincipalApp.soyVistaActual('Proyecto');
	        	}
	        }, false);

	    	var idUsuario = InformacionPrincipalApp.getUsuario().idUsuario;
	    	
	    	function seleccioneProyecto(proyecto){
//	    		console.log("el idProyecto es "+proyecto.idProyecto);
	    		InformacionPrincipalApp.setProyecto(proyecto);
//	    		console.log("el2 idProyecto es "+InformacionPrincipalApp.getProyecto().idProyecto);
	    		InformacionPrincipalApp.voyAvista("Proyecto");
	    		
	    		console.log("InformacionPrincipalApp.soyVistaActual('Proyecto'); "+InformacionPrincipalApp.soyVistaActual('Proyecto'));
	    		console.log("InformacionPrincipalApp.soyVistaActual('Principal'); "+InformacionPrincipalApp.soyVistaActual('Principal'));
	    		
	    		
	    		//busco los valores de las listas a este nivel
	    		$('#myModal').modal('hide');
	    		FactoryMensajeCarga.abrirMensaje("Cargando");
	    		var glosario;
	    		
	    		//Siempre sera la primera vez que traigo las listas
	    		glosario = FactoryGlosario.getListaElemento();
	    		console.log("salida de getListaElemento "+glosario);
	    		glosario.then(
		                function(salida) {
		                    if(salida.succes){
		                    	FactoryGlosario.setListaElemento (salida.elementos);
		                    	FactoryGlosario.setYaConsulte (true);
		                    	FactoryMensajeCarga.cerrarMensaje();
		                    }else{
		                        if(!salida.succes){
		                        	console.log("succes es false en getListaElemento Glosario");
		                        	FactoryMensajeCarga.cerrarMensaje();
		                        }else{
		                            console.log("No en getListaElemento Glosario");
		                            FactoryMensajeCarga.cerrarMensaje();
		                        }
		                    }
		                }
		        );
	    		
	    		FactoryTipoGlosario.getListaElemento();

	    		FactoryMensajeCarga.cerrarMensaje();
	    	}
	    	
	    	function creeProyecto(nombreProyecto){
	    		console.log("nombreProyecto "+nombreProyecto);  
	            $crearProyecto.post({
	                id: idUsuario,
	                'nombre': nombreProyecto,
	                 },{}).$promise.then(
	            function(salida) {
	               // success
	                if(salida.succes){
//	                    console.log("en el promise");
//	                    console.log("el id es "+salida.proyecto.idProyecto);
//	                    console.log("el nombre es "+salida.proyecto.nombre);
	                	InformacionPrincipalApp.setProyecto(salida.proyecto);
	                	$('#crearProyectoModal').modal('hide');
	                }else{
	                    
	                }

	                
	            }, 
	            function(errResponse) {
	               // fail
	               console.log("EPIC FAIL");
	               console.log("errResponse "+errResponse);
	            }
	            );
	    		//validar longitud antes de crear sino mostrar msj debajo del texto
	    		
	    	}
	    	
	        $rootScope.$on('menuListarProyectos', function(event, data){
	        	$listarProyectos.get({id: idUsuario}).$promise.then(
	                    function(salida) {
	                       // success
	                      console.log("sucess es "+salida.succes);
	                      cnProyecto.proyectos = salida.proyectos;
	                      console.log("cantidad de proyectos son "+cnProyecto.proyectos.length);
	                      
	                        if(salida.succes){
//	                          console.log("listaProyecto es true");
//	                          $scope.listaProyecto = salida.proyectos;
//	                          console.log("arreglo es "+$scope.listaProyecto.length);
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
	        
	        $rootScope.$on('menuCrearProyecto', function(event, data){
	        	cnProyecto.nombreProyecto = "";
	        	$('#crearProyectoModal').modal('show');
	        });
	        
	    }
   
   
})();
