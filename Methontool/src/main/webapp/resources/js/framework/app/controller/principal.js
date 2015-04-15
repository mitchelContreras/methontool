/**
 * Controlador encargado de la sección cargada al inicio 
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp from factory/informacionPrincipalApp
 * 
 */
(function(){
    "use strict"
angular.module('methontool')

	.controller('ControllerPrincipal', ControllerPrincipal);

	ControllerPrincipal.$inject = ['InformacionPrincipalApp','$rootScope'];
	
    function ControllerPrincipal (
    		InformacionPrincipalApp, 
    		$rootScope
    	){
    	var cnPrincipal = this;
        // validate data.
        $rootScope.$watch('actual.principal', function (newValue, oldValue) {
        	if (newValue !== oldValue) {
                console.log("cambio el valor de actual.principal a "+newValue);
                cnPrincipal.soyActual = InformacionPrincipalApp.soyVistaActual('Principal');
        	}
        }, false);
    	
    	
    }
    
})();
    