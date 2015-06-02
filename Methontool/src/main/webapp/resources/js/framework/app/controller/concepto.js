/**
 * En el controller encargado de la seccion concepto
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
 * @param $http este se incluye porque la directiva de autocompletar la requiere
 */
(function(){
    "use strict"
	
angular.module('methontool')
	.controller('ControllerConcepto', ControllerConcepto);

ControllerConcepto.$inject = [
                              '$rootScope' 
                              ,'InformacionPrincipalApp'
                              ,'FactoryGlosario'
                              ];	


function ControllerConcepto(
    	$rootScope
    	,InformacionPrincipalApp
    	,FactoryGlosario
    ){
	
	console.log("Entro en ControllerConcepto");
	var cnConcepto = this;

	cnConcepto.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnConcepto.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnConcepto.modificar = false; //si se permite modificar los valores 
	cnConcepto.enBlanco = true;	    //mostrar seccion en blanco
	cnConcepto.enCrear = false;		//en true entra en paso 3 y false entra en paso 5
	
//-------------------Variables de edicion---------------------


//-------------------Variables----------------------------------
	cnConcepto.seleccionado = -1;
	cnConcepto.seleccionadoAgregar = 0;
	cnConcepto.mensajeAlertPositiva = "";
	cnConcepto.mensajeAlertNegativa = "";
	cnConcepto.alertPositiva = false;
	cnConcepto.alertNegativa = false;
	
	
	
//-------------------Funciones----------------------------------	
	cnConcepto.seleccioneGlosario = seleccioneGlosario;
	cnConcepto.modificarConcepto = modificarConcepto;
	cnConcepto.modifiqueConcepto = modifiqueConcepto;
	cnConcepto.cancelarModificarConcepto = cancelarModificarConcepto;
	
	function cancelarModificarConcepto(){
		cnConcepto.disabled = true;
		cnConcepto.modificar = false;
		seleccioneGlosario({'id':cnGlosario.idGlosario},1); //Llamo con el id del seleccionado porque es su posicion en el arreglo lo que necesito y no su id en bd
	}
	function modifiqueConcepto(){
		
	}
	function modificarConcepto(){
		cnConcepto.disabled = false;
		cnConcepto.modificar = true;
	}
	function seleccioneGlosario(elemento, limpiar){
		console.log("Seleccione con id "+elemento.id+" codigo="+limpiar);
		
		cnConcepto.seleccionado = elemento.id;
		cnConcepto.enBlanco = false;
		cnConcepto.modificar = false;
		cnConcepto.disabled = true;
		
//		asigno la relacion con la que estoy trabajando
		cnConcepto.ConceptoActual = FactoryGlosario.consultarElemento(elemento.id);
		
		if(limpiar){
			cnConcepto.alertPositiva = false;
		}
		cnConcepto.alertNegativa = false;
		
	}



	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		cnConcepto.listaGlosario = FactoryGlosario.getListaElemento();
	}



//---------------------Watch variables de controller---------------------	
//	$scope.$watch('cnRelacion.varEdicion.glosarioOrigenSelected', function (newValue, oldValue) {
//		if (newValue !== oldValue) {
//			cnRelacion.varEdicion.glosarioOrigen = cnRelacion.varEdicion.glosarioOrigenSelected.originalObject;
//			llenarListaGlosarioConceptoDestino ();
//    	}
//	}, false);
	
//-------------------Funciones extranjeras-------------------------------		
    $rootScope.$on('menuConceptoPrincipal', function(event, data){
    	console.log("menuConceptoPrincipal");
    	InformacionPrincipalApp.voyAvista("Concepto");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnConcepto.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnConcepto.modificar = false; //si se permite modificar los valores 
    	cnConcepto.enBlanco = true;	    //mostrar seccion en blanco
    	cnConcepto.seleccionado = -1; //Para que no aparezca seleccionado algun glosario
    	cnConcepto.alertPositiva = false;																												
    	cnConcepto.alertNegativa = false;
    });

    $rootScope.$watch('actual.concepto', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.concepto a '"+newValue+"'");
            cnConcepto.soyActual = InformacionPrincipalApp.soyVistaActual('Concepto');	//Indico al controlador actual si se debe mostrar
            listarGlosario(); 
    	}
    }, false);
    
	
	
}// fin controller
	
})();