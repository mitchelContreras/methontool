/**
 * En el controller encargado de la seccion taxonomia
 * de la aplicación
 * 
 * @author Mitchell Contreras
 * @param $rootScope
 * @param InformacionPrincipalApp
 */

(function(){
	"use strict"	

angular.module('methontool')
	.controller('ControllerTaxonomia', ControllerTaxonomia);

ControllerTaxonomia.$inject = ['$rootScope'
                                       ,'InformacionPrincipalApp'
                                       ,FactoryGlosario
                                       ];	

function ControllerTaxonomia($rootScope
		,InformacionPrincipalApp
		,FactoryGlosario
		){
	
	console.log("Entro en ControllerTaxonomia");
	var cnTaxonomia = this;
	
	cnTaxonomia.soyActual = false; //debo cambiarlo a false al terminar el desarrollo
	cnTaxonomia.disabled = true;  //variable usada para bloquear los campos de edicion 
	cnTaxonomia.modificar = false; //si se permite modificar los valores 
	cnTaxonomia.enBlanco = true;	    //mostrar seccion en blanco

	
//-------------------Variables de edicion--------------------------------
	cnTaxonomia.varSubClase = [];
	cnTaxonomia.varDesDisjunta = [];
	cnTaxonomia.varDesExhaustiva = [];
	cnTaxonomia.varParticion = [];
	cnTaxonomia.varEnGlosario = {};
	cnTaxonomia.varTaxonomiaActual = {};
	
//-------------------Variables ------------------------------------------
	cnTaxonomia.listaGlosario = FactoryGlosario.getListaElemento();
	cnTaxonomia.seleccionado = -1;
	cnTaxonomia.varEdicion = {};
	cnTaxonomia.varAgregar = 0;
	cnTaxonomia.seleccionadoAgregar = 0;
	cnTaxonomia.mensajeAlertPositiva = "";
	cnTaxonomia.mensajeAlertNegativa = "";
	cnTaxonomia.alertPositiva = false;
	cnTaxonomia.alertNegativa = false;
	
//-------------------Funciones en scope----------------------------------	
	cnTaxonomia.seleccioneGlosario = seleccioneGlosario;
	cnTaxonomia.modificarTaxonomia = modificarTaxonomia;
	cnTaxonomia.modifiqueTaxonomia = modifiqueTaxonomia;
	cnTaxonomia.cancelarModificarTaxonomia = cancelarModificarTaxonomia;
	cnTaxonomia.agregarConceptoRelacion = agregarConceptoRelacion;
	cnTaxonomia.eliminarConceptoTaxonomia = eliminarConceptoTaxonomia;
	cnTaxonomia.agregueGlosarioRelacion = agregueGlosarioRelacion;
	
	function agregueGlosarioRelacion(elemento){
		//falta valdiar si esta vacio elemento
		console.log("agregue el elemento "+elemento.id);
		console.log("cnTaxonomia.varAgregar es "+cnTaxonomia.varAgregar);
		switch (cnTaxonomia.varAgregar){
		case '1':
			console.log("cnTaxonomia.varAgregar es 1");
			cnTaxonomia.varEdicion.listaSubClase.push(elemento);
			break;
		case '2':
			console.log("cnTaxonomia.varAgregar es 2");
			cnTaxonomia.varEdicion.listaDisjunta.push(elemento);
			break;
		case '3':
			console.log("cnTaxonomia.varAgregar es 3");
			cnTaxonomia.varEdicion.listaExhustiva.push(elemento);
			break;
		case '4':
			console.log("cnTaxonomia.varAgregar es 4");
			cnTaxonomia.varEdicion.listaParticion.push(elemento);
			break;
		default:
			console.log("cnTaxonomia.varAgregar tiene un error");
		}
	}
	
	/*
	 * eliminarConceptoTaxonomia: eliminar concepto de una lista de relacion
	 * @author Mitchell Contreras
	 * @param index: posicion del elemento que vamos a eliminar
	 * @param:codigo 1. SubClaseDe
	 * 				 2. DescomposicionDisjunta
	 * 				 3. DescomposicionExhaustiva
	 * 				 4. Particion
	 */
	function eliminarConceptoTaxonomia(index, codigo){
		console.log("index eliminar "+index);
		switch (codigo){
		case '1':
			console.log("eliminarConceptoTaxonomia es 1");
			cnTaxonomia.varEdicion.listaSubClase.splice(index, 1);
			break;
		case '2':
			console.log("cnTaxonomia.varAgregar es 2");
			cnTaxonomia.varEdicion.listaDisjunta.splice(index, 1);
			break;
		case '3':
			console.log("cnTaxonomia.varAgregar es 3");
			cnTaxonomia.varEdicion.listaExhustiva.splice(index, 1);
			break;
		case '4':
			console.log("cnTaxonomia.varAgregar es 4");
			cnTaxonomia.varEdicion.listaParticion.splice(index, 1);
			break;
		default:
			console.log("cnTaxonomia.varAgregar tiene un error");
		}
	}
	
	/*
	 * agregarConceptoRelacion: Funcion de levantar la modal de agregar un nuevo concepto
	 * @author:Mitchell Contreras
	 * @param:codigo 1. SubClaseDe
	 * 				 2. DescomposicionDisjunta
	 * 				 3. DescomposicionExhaustiva
	 * 				 4. Particion
	 */
	function agregarConceptoRelacion(codigo){
		cnTaxonomia.varAgregar = codigo;
		cnTaxonomia.seleccionadoAgregar = 0;
		$('#agregarConceptoTaxonomiaModal').modal('show');
	}
	
	function cancelarModificarTaxonomia(){
		cnTaxonomia.disabled = true;
		cnTaxonomia.modificar = false;
		
		seleccioneGlosario({'id':cnTaxonomia.varEdicion.id}, true);
	}
	
	function modifiqueTaxonomia(){
		
	}
	
	function modificarTaxonomia(){
		cnTaxonomia.disabled = false;
		cnTaxonomia.modificar = true;
	}
	
	/*
	 * seleccioneGlosario: seleccionar taxonomia desde la lista 
	 * @author Mitchell Contreras
	 * @param Elemento que se seleeciono
	 * @param limpiar: Si quiero limpiar el valor de la alerta positiva
	 * 				true, false
	 */
	function seleccioneGlosario(elemento, limpiar){
		console.log("Seleccione con id "+elemento.id+" codigo="+limpiar);
		var id;
		id = cnTaxonomia.listaGlosario.indexOf(elemento);
		cnTaxonomia.seleccionado = elemento.id;
		cnTaxonomia.enBlanco = false;
		cnTaxonomia.modificar = false;
		cnTaxonomia.disabled = true;
		
		if(limpiar){
			cnTaxonomia.alertPositiva = false;
		}
		cnTaxonomia.alertNegativa = false;
		
		//seteo los valores para desplegar en vista
			//ojo debo buscar nombre y descripcion de la lsita de glosario
		cnTaxonomia.varEdicion.id = cnTaxonomia.listaGlosario[id].id;
		cnTaxonomia.varEdicion.nombre = cnTaxonomia.listaGlosario[id].nombre;
		cnTaxonomia.varEdicion.descripcion = cnTaxonomia.listaGlosario[id].descripcion;
		console.log("Limpio las listas ");
		cnTaxonomia.varEdicion.listaSubClase = [];
		cnTaxonomia.varEdicion.listaParticion = [];
		cnTaxonomia.varEdicion.listaDisjunta = [];
		cnTaxonomia.varEdicion.listaExhustiva = [];
	}
	
//-------------------Funciones complementarias---------------------------
	function  listarGlosario(){
		console.log("en listarGlosario");
		cnTaxonomia.listaGlosario = FactoryGlosario.getListaElemento();
		console.log("lon "+cnTaxonomia.listaGlosario.length);
	}
	
	
//-------------------Funciones extranjeras-------------------------------	
		
    $rootScope.$on('menuTaxonomiaPrincipal', function(event, data){
    	InformacionPrincipalApp.voyAvista("Taxonomia");	//Indico a las otras secciones que esta es la actual
    	//Inicio los valores por si han sido modificados anteriormente
    	cnTaxonomia.disabled = true;  //variable usada para bloquear los campos de edicion 
    	cnTaxonomia.modificar = false; //si se permite modificar los valores 
    	cnTaxonomia.enBlanco = true;	    //mostrar seccion en blanco
    });
	
    $rootScope.$watch('actual.taxonomia', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor actual.taxonomia a '"+newValue+"'");
            listarGlosario();
            cnTaxonomia.soyActual = InformacionPrincipalApp.soyVistaActual('Taxonomia');	//Indico al controlador actual si se debe mostrar
    	}
    }, false);
	
}//fin controller
	
	
})();	
