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
    App.controller('ControllerEditar', ControllerEditar);

    InformacionPrincipalApp.$inject = ['$rootScope'];
    ControllerPrincipal.$inject = ['InformacionPrincipalApp','$rootScope'];
    ControllerCabecera.$inject = ['$rootScope', 'InformacionPrincipalApp'];
    ControllerProyecto.$inject = ['$scope',
                                  '$rootScope', 
                                  '$listarProyectos', 
                                  '$crearProyecto', 
                                  'InformacionPrincipalApp'];
    ControllerEditar.$inject = ['$rootScope',
                                'InformacionPrincipalApp'];
    

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
    	
 //Funciones relacionadas con el controllerProyecto   	
    	cnCabecera.menuListarProyectos = menuListarProyectos;
    	cnCabecera.menuCrearProyecto = menuCrearProyecto;
    	cnCabecera.menuEditar = menuEditar;
//Fin funciones relacionadas con el controllerProyecto
    	
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
		
		function menuListarProyectos (){
			$rootScope.$broadcast('menuListarProyectos');
		}
		
		function menuCrearProyecto(){
			$rootScope.$broadcast('menuCrearProyecto');
		}
		
		function menuEditar(){
			$rootScope.$broadcast('menuEditar');
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
    	$crearProyecto,
    	InformacionPrincipalApp
    ){
    	var cnProyecto = this;
    	cnProyecto.seleccioneProyecto = seleccioneProyecto;
    	cnProyecto.creeProyecto = creeProyecto;
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
    	
    	function seleccioneProyecto(proyecto){
//    		console.log("el idProyecto es "+proyecto.idProyecto);
    		InformacionPrincipalApp.setProyecto(proyecto);
//    		console.log("el2 idProyecto es "+InformacionPrincipalApp.getProyecto().idProyecto);
    		InformacionPrincipalApp.voyAvista("Proyecto");
    		
    		console.log("InformacionPrincipalApp.soyVistaActual('Proyecto'); "+InformacionPrincipalApp.soyVistaActual('Proyecto'));
    		console.log("InformacionPrincipalApp.soyVistaActual('Principal'); "+InformacionPrincipalApp.soyVistaActual('Principal'));
    		$('#myModal').modal('hide');
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
//                    console.log("en el promise");
//                    console.log("el id es "+salida.proyecto.idProyecto);
//                    console.log("el nombre es "+salida.proyecto.nombre);
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
        
        $rootScope.$on('menuCrearProyecto', function(event, data){
        	cnProyecto.nombreProyecto = "";
        	$('#crearProyectoModal').modal('show');
        });
        
    }

    function ControllerEditar (
        	$rootScope,
        	InformacionPrincipalApp
    ){
    	var cnEditar = this;
    	
    	cnEditar.soyActual = false;
    	cnEditar.vacio = true;
    	cnEditar.dominio = false;
    	cnEditar.fecha = false;
    	cnEditar.desarrolladores = false;
    	cnEditar.nivelFormalidad = false;
    	cnEditar.alcance = false;
    	cnEditar.fuenteConocimiento = false;
    	cnEditar.disabled = true;
    	cnEditar.modificar = false;
//    	cnEditar.listaDesarrolladores = ['Carlos Perez', 'José Contreras', 'Kenny Bustillo', 'Antonio hernandez'];
    	cnEditar.nuevoDesarrollador = "";
//    	cnEditar.listafuenteConocimiento = ['Todos los libros', 'internet', 'otros libros'];
    	cnEditar.nuevoFuenteConocimiento = "";
//    	cnEditar.listaPreguntasCompetencia = ['Pregunta uno de todas las preguntas', 'pregunta dos de todas las pregurntas', 'Pregunta 3 de muchas preguntas'];
    	cnEditar.nuevoPreguntaCompetencia = "";
//----------------Variables usadas para capturar los datos--------------
    	cnEditar.varNombre = "";
    	cnEditar.varDominio = "";
    	cnEditar.varAlcance = "";
    	cnEditar.varProposito = "";
    	cnEditar.fecha = "";
    	cnEditar.varFuenteConocimiento = [];
    	cnEditar.varDesarrolladores = [];
    	cnEditar.varPreguntaCompetencia = [];
    	cnEditar.varNivelFormalidad = {};
    	
    	cnEditar.seleccion = seleccion;
    	cnEditar.modificarAtributo = modificarAtributo;
    	cnEditar.cancelarModificarAtributo = cancelarModificarAtributo;
    	cnEditar.eliminarDesarrollador = eliminarDesarrollador;
    	cnEditar.agregarDesarrollador = agregarDesarrollador;
    	cnEditar.agregueDesarrollador = agregueDesarrollador;
    	cnEditar.modificarDesarrollador = modificarDesarrollador;
    	cnEditar.modificarFuenteConocimiento = modificarFuenteConocimiento;
    	cnEditar.eliminarFuenteConocimiento = eliminarFuenteConocimiento;
    	cnEditar.agregarFuenteConocimiento = agregarFuenteConocimiento;
    	cnEditar.agregueFuenteConocimiento = agregueFuenteConocimiento;
    	cnEditar.eliminarPreguntaCompetencia = eliminarPreguntaCompetencia;
    	cnEditar.agregarPreguntaCompetencia = agregarPreguntaCompetencia;
    	cnEditar.agreguePreguntaCompetencia = agreguePreguntaCompetencia;
    	
    	function agreguePreguntaCompetencia(nuevoPreguntaCompetencia){
    		console.log("agreguePreguntaCompetencia "+nuevoPreguntaCompetencia);
    		cnEditar.listaPreguntasCompetencia.push(nuevoPreguntaCompetencia);
    		$('#agregarPreguntaCompetenciaModal').modal('hide');   		
    	}
    	
    	function agregarPreguntaCompetencia (){
    		console.log("Agregar uno nuevo");
    		cnEditar.nuevoPreguntaCompetencia = "";
    		$('#agregarPreguntaCompetenciaModal').modal('show');
    	}
    	
    	function eliminarPreguntaCompetencia(id){
    		if(cnEditar.disabled == false){
          	  console.log("el id es "+id);
          	cnEditar.listaPreguntasCompetencia.splice(id, 1);
        	}
    	}
    	
    	function agregueFuenteConocimiento(agregueFuenteConocimiento){
    		console.log("agregueFuenteConocimiento "+agregueFuenteConocimiento);
    		cnEditar.listafuenteConocimiento.push(agregueFuenteConocimiento);
    		$('#agregarFuenteConocimientoModal').modal('hide');
    	}
    	
    	function agregarFuenteConocimiento (){
    		console.log("Agregar uno nuevo");
    		cnEditar.nuevoFuenteConocimiento = "";
    		$('#agregarFuenteConocimientoModal').modal('show');
    	}
    	
    	function eliminarFuenteConocimiento(id){
    		if(cnEditar.disabled == false){
        	  console.log("el id es "+id);
        	  cnEditar.listafuenteConocimiento.splice(id, 1);
      		}
    	}
    	
    	function modificarFuenteConocimiento(id){
    		if(cnEditar.disabled == false){
    			console.log("modificar a "+id);
    		}
    	}
    	
    	function modificarDesarrollador(id){
    		if(cnEditar.disabled == false){
    			console.log("modificar a "+id);
    		}
    	}
    	
    	function agregueDesarrollador (nuevoDesarrollador){
    		console.log("agregueDesarrollador "+nuevoDesarrollador);
    		cnEditar.listaDesarrolladores.push(nuevoDesarrollador);
    		$('#agregarDesarrolladorModal').modal('hide');
    	}
    	
    	function agregarDesarrollador(){
    		console.log("Agregar uno nuevo");
    		cnEditar.nuevoDesarrollador = "";
    		$('#agregarDesarrolladorModal').modal('show');
    	}
    	
    	function eliminarDesarrollador(id){
    		if(cnEditar.disabled == false){
      	      console.log("el id es "+id);
    	      cnEditar.listaDesarrolladores.splice(id, 1);
    		}
    	}
    	
    	function cancelarModificarAtributo(){
        	cnEditar.disabled = true;
        	cnEditar.modificar = false;
    	}
    	
    	function modificarAtributo(){
        	cnEditar.disabled = false;
        	cnEditar.modificar = true;
    	}
    	
    	function seleccion (variable){
    		console.log("seleccione a '"+variable+"'");
    		switch(variable) {
    	    case 'dominio':
    	    	cambioSeleccion(false, true, false, false, false, false, false);
    	        break;
    	    case 'fecha':
    	    	cambioSeleccion(false, false, true, false, false, false, false);
    	        break;
    	    case 'desarrolladores':
    	    	cambioSeleccion(false, false, false, true, false, false, false);
    	        break;
    	    case 'nivelFormalidad':
    	    	cambioSeleccion(false, false, false, false, true, false, false);
    	        break;
    	    case 'fuenteConocimiento':
    	    	cambioSeleccion(false, false, false, false, false, true, false);
    	        break;  	
    	    case 'alcance':
    	    	cambioSeleccion(false, false, false, false, false, false, true);
    	        break;    	        
    	    default:
    	    	cambioSeleccion(false, false, false, false, false, false, false);
    	    	break;
    		} 
    	}
    	
    	function cambioSeleccion(vacio, dominio, fecha, desarrolladores, nivelFormalidad, fuenteConocimiento, alcance){
        	cnEditar.vacio = vacio;
        	cnEditar.dominio = dominio;
        	cnEditar.fecha = fecha;
        	cnEditar.desarrolladores = desarrolladores;
        	cnEditar.nivelFormalidad = nivelFormalidad;
        	cnEditar.alcance = alcance;
        	cnEditar.fuenteConocimiento = fuenteConocimiento;
    	}
    	
        // validate data.
        $rootScope.$watch('actual.editar', function (newValue, oldValue) {
        	if (newValue !== oldValue) {
                console.log("cambio valor editar a '"+newValue+"'");
                cnEditar.soyActual = InformacionPrincipalApp.soyVistaActual('Editar');
                if(cnEditar.soyActual == true){
                	cambioSeleccion(true, false, false, false, false, false, false);
                }else{
                	cambioSeleccion(false, false, false, false, false, false, false);
                }
        	}
        }, false);

    	var idUsuario = InformacionPrincipalApp.getUsuario().idUsuario;
    	
    	
        $rootScope.$on('menuEditar', function(event, data){
        	InformacionPrincipalApp.voyAvista("Editar");
        	cnEditar.varNombre = InformacionPrincipalApp.getProyecto().nombre;
        	cnEditar.varDominio = InformacionPrincipalApp.getProyecto().dominio;
        	cnEditar.varAlcance = InformacionPrincipalApp.getProyecto().alcance;
//        	cnEditar.varFuenteConocimiento = InformacionPrincipalApp.getProyecto().fuenteConocimiento;
        	cnEditar.varNivelFormalidad = InformacionPrincipalApp.getProyecto().nivelFormalidad;
        	cnEditar.varProposito = InformacionPrincipalApp.getProyecto().proposito;
//        	cnEditar.varDesarrolladores = InformacionPrincipalApp.getProyecto().desarrolladores;
//        	cnEditar.varPreguntaCompetencia = InformacionPrincipalApp.getProyecto().desarrolladores;
        	cnEditar.fecha = InformacionPrincipalApp.getProyecto().fecha;
        	cnEditar.listaDesarrolladores = InformacionPrincipalApp.getProyecto().desarrolladores;
        	cnEditar.listafuenteConocimiento = InformacionPrincipalApp.getProyecto().fuenteConocimiento;
        	cnEditar.listaPreguntasCompetencia = InformacionPrincipalApp.getProyecto().desarrolladores;
        });
    	
    }
    
    
    
    
    
})();
