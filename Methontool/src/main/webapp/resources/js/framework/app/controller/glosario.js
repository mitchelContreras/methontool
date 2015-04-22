/**
 * En el controller encargado de la seccion glosario
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param
 */

(function(){
    "use strict"
	
angular.module('methontool')
	.controller('ControllerGlosario', ControllerGlosario);

ControllerGlosario.$inject = ['$rootScope', 'InformacionPrincipalApp'];	

function ControllerGlosario(
    	$rootScope,
    	InformacionPrincipalApp
    ){
	console.log("Entro en ControllerGlosario");
	var cnGlosario = this;
	
	
	cnGlosario.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnGlosario.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnGlosario.modificar = false; //si se permite modificar los valores 
	cnGlosario.enBlanco = true;	    //mostrar seccion en blanco


//-------------------Variables de edicion---------------------
	cnGlosario.varNombre =	"";
	cnGlosario.varTipo = "";
	cnGlosario.descripcion = "";
	cnGlosario.listaSinonimo = [];
	cnGlosario.listaAcronimo = [];
	
	cnGlosario.nuevoSinonimo = "";
	cnGlosario.nuevoAcronimo = "";
	
	
//-------------------Funciones----------------------------------	
	
	cnGlosario.eliminarSinonimo = eliminarSinonimo;
	cnGlosario.agregarSinonimo = agregarSinonimo;
	cnGlosario.agregueSinonimo = agregueSinonimo;
	cnGlosario.eliminarAcronimo = eliminarAcronimo;
	cnGlosario.agregarAcronimo = agregarAcronimo;
	cnGlosario.agregueAcronimo = agregueAcronimo;
	cnGlosario.modificarGlosario = modificarGlosario;
	cnGlosario.modifiqueGlosario = modifiqueGlosario;
	cnGlosario.cancelarModificarGlosario = cancelarModificarGlosario;
	
	function cancelarModificarGlosario(){
		cnGlosario.disabled = true;
		cnGlosario.modificar = false;
	}
	function modifiqueGlosario(){
		
	}
	function modificarGlosario(){
		cnGlosario.disabled = false;
		cnGlosario.modificar = true;
	}
	function  agregueAcronimo(nuevo){
		console.log("nuevo "+nuevo);
		$('#agregarAcronimoModal').modal('hide');
	}
	function agregarAcronimo(){
		$('#agregarAcronimoModal').modal('show');
	}
	function eliminarAcronimo(id){
		
	}
	function agregueSinonimo(nuevo){
		console.log("nuevo "+nuevo);
		$('#agregarSinonimoModal').modal('hide');
	}
	function agregarSinonimo(){
		$('#agregarSinonimoModal').modal('show');
	}
	function eliminarSinonimo(id){
		
	}
	
    $rootScope.$on('menuGlosarioPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Glosario");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnGlosario.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnGlosario.modificar = false; //si se permite modificar los valores 
    	cnGlosario.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.glosario', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.glosario a '"+newValue+"'");
            cnGlosario.soyActual = InformacionPrincipalApp.soyVistaActual('Glosario');	//Indico al controlador actual si se debe mostrar
    	}
    }, false);
}
	
})();