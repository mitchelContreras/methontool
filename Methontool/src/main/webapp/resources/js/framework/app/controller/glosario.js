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

ControllerGlosario.$inject = ['$rootScope'
                              ,'InformacionPrincipalApp'
                              ,'$listarGlosario'
                              ,'FactoryGlosario'
                              ];	

function ControllerGlosario(
    	$rootScope
    	,InformacionPrincipalApp
    	,$listarGlosario
    	,FactoryGlosario
    ){
	console.log("Entro en ControllerGlosario");
	var cnGlosario = this;
	
	
	cnGlosario.soyActual = false; //debo cambiarlo a false al terminar el desarrollo 
	cnGlosario.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnGlosario.modificar = false; //si se permite modificar los valores 
	cnGlosario.enBlanco = true;	    //mostrar seccion en blanco
	cnGlosario.seleccionado = -1;
	cnGlosario.enCrear = false;


//-------------------Variables de edicion---------------------
	cnGlosario.varNombre =	"";
	cnGlosario.varTipo = "";
	cnGlosario.descripcion = "";
	cnGlosario.listaSinonimo = [];
	cnGlosario.listaAcronimo = [];
	cnGlosario.idGlosario = "";
	
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
	cnGlosario.seleccioneGlosario = seleccioneGlosario;
	cnGlosario.crearGlosario = crearGlosario;
	
	function crearGlosario(){
		cnGlosario.enCrear = true;
		cnGlosario.enBlanco = false;
		cnGlosario.seleccionado = -1;
		cnGlosario.disabled = false; 
		
		//limpio los valores de la vista
		cnGlosario.varNombre =	"";
		cnGlosario.varTipo = "";
		cnGlosario.descripcion = "";
		cnGlosario.listaSinonimo = [];
		cnGlosario.listaAcronimo = [];
		cnGlosario.idGlosario = "";
		
	}
	function seleccioneGlosario(id){
		cnGlosario.seleccionado = id;
		cnGlosario.enCrear = false;
		cnGlosario.enBlanco = false;
		
		//lleno los valores de la vista
		cnGlosario.varNombre =	cnGlosario.listaGlosario[id].nombre;
		cnGlosario.varTipo = cnGlosario.listaGlosario[id].tipoGlosario.id;
		cnGlosario.descripcion = cnGlosario.listaGlosario[id].descripcion;
		cnGlosario.listaSinonimo =  cnGlosario.listaGlosario[id].sinonimos.slice();
		cnGlosario.listaAcronimo =  cnGlosario.listaGlosario[id].acronimos.slice();
		cnGlosario.idGlosario = cnGlosario.listaGlosario[id].id;
	}
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
	
//Funciones ajenas al $scope
	function listarGlosario(){
		$listarGlosario.get({id: InformacionPrincipalApp.getProyecto().idProyecto}).$promise.then(
                function(salida) {
                   // success
                    if(salida.succes){
                    	console.log("succes es true");
                    	FactoryGlosario.setListaGlosario (salida.elementos);
                        cnGlosario.listaGlosario = FactoryGlosario.getListaGlosario();
                        console.log("cantidad de glosario son "+cnGlosario.listaGlosario.length);
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
	}
	
    $rootScope.$on('menuGlosarioPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Glosario");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnGlosario.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnGlosario.modificar = false; //si se permite modificar los valores 
    	cnGlosario.enBlanco = true;	    //mostrar seccion en blanco
    	cnGlosario.seleccionado = -1;
    });
	
    $rootScope.$watch('actual.glosario', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.glosario a '"+newValue+"'");
            cnGlosario.soyActual = InformacionPrincipalApp.soyVistaActual('Glosario');	//Indico al controlador actual si se debe mostrar
            listarGlosario();//llamo a funcion para traer la lista de glosario
    	}
    }, false);
}
	
})();