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
                              ,'FactoryTipoDato'
                              ,'FactoryMedida'
                              ];	

function ControllerGlosario(
    	$rootScope
    	,InformacionPrincipalApp
    	,$listarGlosario
    	,FactoryTipoGlosario
    	,FactoryGlosario
       	,$scope
    	,FactoryTipoDato
    	,FactoryMedida
 
    ){
	console.log("Entro en ControllerGlosario");
	
	FactoryTipoGlosario.getListaElemento();
	FactoryMedida.getListaElemento();
	FactoryTipoDato.getListaElemento();
	
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
	
	function validarCampos(nombre, varTipo, descripcion){
		if(jQuery.isEmptyObject(varTipo) 
				|| nombre.length == 0
				|| descripcion.length == 0){
			cnGlosario.alertNegativa = true;
			cnGlosario.mensajeAlertNegativa = "Debe llenar todos los campos obligatorios (*)";
			return false;
		}
		if(nombre.length > 50){
			cnGlosario.alertNegativa = true;
			cnGlosario.mensajeAlertNegativa = "La longitud del Nombre no puede exceder de 50 caracteres";
			return false;
		}
		if(descripcion.length > 500){
			cnGlosario.alertNegativa = true;
			cnGlosario.mensajeAlertNegativa = "La longitud de la Descripción no puede exceder de 500 caracteres";
			return false;
		}
		return true;
	}
	
	function creeGlosario(){
		console.log(cnGlosario.varNombre);
		console.log(cnGlosario.varTipo);
		console.log(cnGlosario.descripcion);
		console.log(cnGlosario.listaSinonimo);
		console.log(cnGlosario.listaAcronimo);
		
		if(!validarCampos(cnGlosario.varNombre, cnGlosario.varTipo, cnGlosario.descripcion)){
			return false;
		}
		
		var salida;
		salida = FactoryGlosario.crearElemento(cnGlosario.varNombre, cnGlosario.varTipo, cnGlosario.descripcion, cnGlosario.listaSinonimo, cnGlosario.listaAcronimo);
		console.log("salida es "+salida);
		salida.then(
            function(aux) {
                if(aux.succes){
                	FactoryGlosario.agregarElemento(aux.elemento);
                	cnGlosario.listaGlosario = FactoryGlosario.getListaElemento();
                	cnGlosario.alertPositiva = true;
                	cnGlosario.mensajeAlertPositiva = "El Glosario ha sido creado";
                	seleccioneGlosario(aux.elemento,2);
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
	
	/*
	 * SeleccioneGlosario
	 * elemento: es el glosario que se seleccionado
	 * codigo: 1 Quiero limpiar mensaje positivo y negativo
	 * 		   2 Quiero dejar mensaje positvo
	 * 		La diferencia es que cuando llamo con (2) no quiero limpiar el mensaje que dice que fue modificado
	 */
	function seleccioneGlosario(elemento, codigo){
		var id;
		id = cnGlosario.listaGlosario.indexOf(elemento);
		cnGlosario.seleccionado = elemento.id;
		cnGlosario.enCrear = false;
		cnGlosario.enBlanco = false;
		cnGlosario.modificar = false;
		cnGlosario.disabled = true;
		
		if(codigo == 1){
			//Si selecciono desde la lista quiero quitar el mensaje positivo
			cnGlosario.alertPositiva = false;
		}
		cnGlosario.alertNegativa = false;
		
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
		seleccioneGlosario({'id':cnGlosario.idGlosario},1); //Llamo con el id del seleccionado porque es su posicion en el arreglo lo que necesito y no su id en bd
	}
	function modifiqueGlosario(){
		console.log(cnGlosario.idGlosario);
		console.log(cnGlosario.varNombre);
		console.log(cnGlosario.varTipo);
		console.log(cnGlosario.descripcion);
		console.log(cnGlosario.listaSinonimo);
		console.log(cnGlosario.listaAcronimo);
		
		if(!validarCampos(cnGlosario.varNombre, cnGlosario.varTipo, cnGlosario.descripcion)){
			return false;
		}
		
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
                	cnGlosario.alertPositiva = true;
                	cnGlosario.mensajeAlertPositiva = "El Glosario ha sido actualizado";
                	seleccioneGlosario(aux.elemento,2);
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
		cnGlosario.listaGlosario = FactoryGlosario.getListaElemento();
		console.log("la lista de glosario es "+cnGlosario.listaGlosario.length);
	}
	
    $rootScope.$on('menuGlosarioPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Glosario");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnGlosario.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnGlosario.modificar = false; //si se permite modificar los valores 
    	cnGlosario.enBlanco = true;	    //mostrar seccion en blanco
    	cnGlosario.seleccionado = -1;
    	cnGlosario.alertPositiva = false;
    	cnGlosario.alertNegativa = false;
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