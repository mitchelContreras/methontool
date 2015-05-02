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
                              ,'FactoryTipoGlosario'
                              ,'FactoryGlosario'
                              ,'$scope'
                              ];	

function ControllerGlosario(
    	$rootScope
    	,InformacionPrincipalApp
    	,$listarGlosario
    	,FactoryTipoGlosario
    	,FactoryGlosario
    	,$scope
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

//------------------Variables globales---------------------------
	cnGlosario.listaGlosario = [];
	cnGlosario.listaTipoGlosario = [];
	
	
	//toca borrar
//	var glosario;
//	glosario = FactoryGlosario.getListaElemento();
//	glosario.then(
//            function(salida) {
//                if(salida.succes){
//                	FactoryGlosario.setListaElemento (salida.elementos);
//                	FactoryGlosario.setYaConsulte (true);
//                	cnGlosario.listaGlosario = FactoryGlosario.getListaElemento();
//                }else{
//                    if(!salida.succes){
//                    	console.log("succes es false en getListaElemento Glosario");
//                    }else{
//                        console.log("No en getListaElemento Glosario");
//                    }
//                }
//            }
//    );
//	cnGlosario.listaTipoGlosario = FactoryTipoGlosario.getListaElemento();
	
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
	cnGlosario.creeGlosario = creeGlosario;
	
	function creeGlosario(){
		console.log(cnGlosario.varNombre);
		console.log(cnGlosario.varTipo);
		console.log(cnGlosario.descripcion);
		console.log(cnGlosario.listaSinonimo);
		console.log(cnGlosario.listaAcronimo);
		
		var salida;
		salida = FactoryGlosario.crearElemento(cnGlosario.varNombre, cnGlosario.varTipo, cnGlosario.descripcion, cnGlosario.listaSinonimo, cnGlosario.listaAcronimo);
		console.log("salida es "+salida);
		salida.then(
            function(aux) {
                if(aux.succes){
                	FactoryGlosario.agregarElemento(aux.elemento);
                	cnGlosario.listaGlosario = FactoryGlosario.getListaElemento();
                	seleccioneGlosario(cnGlosario.listaGlosario.indexOf(aux.elemento));
                }else{
                	
                }
            }
        );

		
	}
	
	function crearGlosario(){
		cnGlosario.enCrear = true;
		cnGlosario.enBlanco = false;
		cnGlosario.seleccionado = -1;
		cnGlosario.disabled = false; 
		cnGlosario.modificar = true;
		
		//limpio los valores de la vista
		cnGlosario.varNombre =	"";
		cnGlosario.varTipo = {};
		cnGlosario.descripcion = "";
		cnGlosario.listaSinonimo = [];
		cnGlosario.listaAcronimo = [];
		cnGlosario.idGlosario = "";
		
	}
	function seleccioneGlosario(id){
		cnGlosario.seleccionado = id;
		cnGlosario.enCrear = false;
		cnGlosario.enBlanco = false;
		cnGlosario.modificar = false;
		cnGlosario.disabled = true;
		
		//lleno los valores de la vista
		cnGlosario.varNombre =	cnGlosario.listaGlosario[id].nombre;
		cnGlosario.varTipo = cnGlosario.listaGlosario[id].tipoGlosario;
		cnGlosario.descripcion = cnGlosario.listaGlosario[id].descripcion;
		cnGlosario.listaSinonimo =  cnGlosario.listaGlosario[id].sinonimos.slice();
		cnGlosario.listaAcronimo =  cnGlosario.listaGlosario[id].acronimos.slice();
		cnGlosario.idGlosario = cnGlosario.listaGlosario[id].id;
	}
	function cancelarModificarGlosario(){
		cnGlosario.disabled = true;
		cnGlosario.modificar = false;
		seleccioneGlosario(cnGlosario.seleccionado); //Llamo con el id del seleccionado porque es su posicion en el arreglo lo que necesito y no su id en bd
	}
	function modifiqueGlosario(){
		console.log(cnGlosario.idGlosario);
		console.log(cnGlosario.varNombre);
		console.log(cnGlosario.varTipo);
		console.log(cnGlosario.descripcion);
		console.log(cnGlosario.listaSinonimo);
		console.log(cnGlosario.listaAcronimo);
		
		var salida;
		salida = FactoryGlosario.actualizarElemento(cnGlosario.idGlosario
				, cnGlosario.varNombre
				,cnGlosario.varTipo
				,cnGlosario.descripcion
				,cnGlosario.listaSinonimo
				,cnGlosario.listaAcronimo);
		salida.then(
            function(aux) {
                // success
                if(aux.succes){
                	console.log("actualizar es true");
                	FactoryGlosario.modificarElemento(aux.elemento);
                	cnGlosario.listaGlosario = FactoryGlosario.getListaElemento();
                	seleccioneGlosario(cnGlosario.listaGlosario.indexOf(aux.elemento));
                }
             }
		);	
		
	}
	
	function modificarGlosario(){
		cnGlosario.disabled = false;
		cnGlosario.modificar = true;
	}
	function  agregueAcronimo(nuevo){
		console.log("nuevo "+nuevo);
		cnGlosario.listaAcronimo.push(nuevo);
		$('#agregarAcronimoModal').modal('hide');
	}
	function agregarAcronimo(){
		cnGlosario.nuevoAcronimo = "";
		$('#agregarAcronimoModal').modal('show');
	}
	function eliminarAcronimo(id){
		if(cnGlosario.disabled == false){
	      	console.log("el id es "+id);
	      	cnGlosario.listaAcronimo.splice(id, 1);
	    }
	}
	function agregueSinonimo(nuevo){
		console.log("nuevo "+nuevo);
		cnGlosario.listaSinonimo.push(nuevo);
		$('#agregarSinonimoModal').modal('hide');
	}
	function agregarSinonimo(){
		cnGlosario.nuevoSinonimo = "";
		$('#agregarSinonimoModal').modal('show');
	}
	function eliminarSinonimo(id){
		if(cnGlosario.disabled == false){
	      	console.log("el id es "+id);
	      	cnGlosario.listaSinonimo.splice(id, 1);
	    }
	}
	
//Funciones ajenas al $scope
	function listarGlosario(){
		console.log("en listarGlosario");
		cnGlosario.listaGlosario = FactoryGlosario.getListaElemento();
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
            console.log("entre listar glosario y ipo");
            cnGlosario.listaTipoGlosario = FactoryTipoGlosario.getListaElemento();
            console.log("despes de listarTIpoGlosario");
            
    	}
    }, false);
}
	
})();