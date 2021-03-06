/**
 * Es el controller encargado del funcionamiento 
 * de la cabecera de la aplicación.
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp from factory/informacionPrincipalApp
 */

(function(){
    "use strict"
	
angular.module('methontool')
	.controller('ControllerCabecera', ControllerCabecera);

ControllerCabecera.$inject = ['$rootScope', 'InformacionPrincipalApp'];

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
    	
//FUnciones de visualisar ó tarea no se define cual sera
    	cnCabecera.menuGlosarioPrincipal = menuGlosarioPrincipal;
    	cnCabecera.menuAtributoClasePrincipal = menuAtributoClasePrincipal;
    	cnCabecera.menuAtributoInstanciaPrincipal = menuAtributoInstanciaPrincipal;
    	cnCabecera.menuReglaPrincipal = menuReglaPrincipal;
    	cnCabecera.menuAxiomaPrincipal = menuAxiomaPrincipal;
    	cnCabecera.menuRelacionPrincipal = menuRelacionPrincipal;
    	cnCabecera.menuRelacionDosPrincipal = menuRelacionDosPrincipal;
    	cnCabecera.menuTaxonomiaPrincipal = menuTaxonomiaPrincipal;
    	cnCabecera.menuConceptoPrincipal = menuConceptoPrincipal;
    	cnCabecera.menuInstanciaPrincipal = menuInstanciaPrincipal;
    	cnCabecera.menuConstantePrincipal = menuConstantePrincipal;
    	cnCabecera.menuInstanciaDosPrincipal = menuInstanciaDosPrincipal;
//fin funciones relacionadas con  visualisar ó tarea
    	function menuInstanciaDosPrincipal(){
    		$rootScope.$broadcast('menuInstanciaDosPrincipal');
    	}
    	function menuRelacionDosPrincipal(){
    		$rootScope.$broadcast('menuRelacionDosPrincipal');
    	}
    	function menuConstantePrincipal(){
    		$rootScope.$broadcast('menuConstantePrincipal');
    	}
    	function menuInstanciaPrincipal(){
    		$rootScope.$broadcast('menuInstanciaPrincipal');
//    		console.log("instancia no se ha implementado");
    	}
    	function menuConceptoPrincipal(){
    		$rootScope.$broadcast('menuConceptoPrincipal');
    	}
    	function menuTaxonomiaPrincipal(){
    		$rootScope.$broadcast('menuTaxonomiaPrincipal');
    	}
    	function menuRelacionPrincipal(){
    		$rootScope.$broadcast('menuRelacionPrincipal');
    	}
    	function menuAxiomaPrincipal(){
    		$rootScope.$broadcast('menuAxiomaPrincipal');
    	}
    	function menuReglaPrincipal(){
    		$rootScope.$broadcast('menuReglaPrincipal');
    	}
    	function menuAtributoInstanciaPrincipal(){
    		$rootScope.$broadcast('menuAtributoInstanciaPrincipal');
    	}
    	function menuAtributoClasePrincipal(){
    		$rootScope.$broadcast('menuAtributoClasePrincipal');
    	}
    	function menuGlosarioPrincipal (){
    		$rootScope.$broadcast('menuGlosarioPrincipal');
    	}
    	
        function clickEspecificacion(){
		    cambiarMenu(true, false, false, false);
		}
		function clickConceptualizacion(){	
			if(cnCabecera.nombreProyecto != ""){
				cambiarMenu(false, true, false, false);
			}
		}
		function clickImplementacion(){
			if(cnCabecera.nombreProyecto != ""){
				cambiarMenu(false, false, true, false);
			}
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

})();
