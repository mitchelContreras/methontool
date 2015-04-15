/**
 * Controlador encargado de manejar la vista editar y 
 * todas las actividades realizadas en la misma.
 * 
 * @author Mitchell Contreras
 * @param $scope
 * @param $rootScope
 * @param $actualizarProtecto from service/proyecto
 * @param $listarNivelFormalidad service/nivelFormalidad
 * @param InformacionPrincipalApp from factory/informacionPrincipalApp
 */
(function(){
    "use strict"
angular.module('methontool')

    .controller('ControllerEditar', ControllerEditar);

ControllerEditar.$inject = ['$scope',
                            '$rootScope',
                            'InformacionPrincipalApp',
                            '$actualizarProtecto',
                            '$listarNivelFormalidad'];

function ControllerEditar (
		$scope,
    	$rootScope,
    	InformacionPrincipalApp,
    	$actualizarProtecto,
    	$listarNivelFormalidad
){
	var cnEditar = this;
	
	cnEditar.soyActual = false;
	cnEditar.vacio = true;
	cnEditar.disabled = true;
	cnEditar.modificar = false;
//	cnEditar.listaDesarrolladores = ['Carlos Perez', 'José Contreras', 'Kenny Bustillo', 'Antonio hernandez'];
	cnEditar.nuevoDesarrollador = "";
//	cnEditar.listafuenteConocimiento = ['Todos los libros', 'internet', 'otros libros'];
	cnEditar.nuevoFuenteConocimiento = "";
//	cnEditar.listaPreguntasCompetencia = ['Pregunta uno de todas las preguntas', 'pregunta dos de todas las pregurntas', 'Pregunta 3 de muchas preguntas'];
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
	cnEditar.listaNivelFormalidad = {};
	
	
	cnEditar.modificarAtributo = modificarAtributo;
	cnEditar.modifiqueAtributo = modifiqueAtributo;
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
	cnEditar.setearValoresMostrarEditar = setearValoresMostrarEditar;
	cnEditar.buscarNivelFormalidad = buscarNivelFormalidad;
	
	
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
  	      console.log("InformacionPrincipalApp.getProyecto().desarrolladores "+InformacionPrincipalApp.getProyecto().desarrolladores.length);
	      cnEditar.listaDesarrolladores.splice(id, 1);
  	      console.log("InformacionPrincipalApp.getProyecto().desarrolladores "+InformacionPrincipalApp.getProyecto().desarrolladores.length);
  	      console.log(" cnEditar.listaDesarrolladores "+ cnEditar.listaDesarrolladores.length);

		}
	}
	
	function cancelarModificarAtributo(){
    	cnEditar.disabled = true;
    	cnEditar.modificar = false;
    	cnEditar.setearValoresMostrarEditar();
	}
	
	function modifiqueAtributo(){
		console.log("modifiqueAtributo");

//    	cnEditar.listaDesarrolladores = InformacionPrincipalApp.getProyecto().desarrolladores.slice();
//    	cnEditar.listafuenteConocimiento = InformacionPrincipalApp.getProyecto().fuenteConocimiento.slice();
//    	cnEditar.listaPreguntasCompetencia = InformacionPrincipalApp.getProyecto().preguntasCompetencia.slice();  
		var desarrolladores= "";
		var i;
		for (i in cnEditar.listaDesarrolladores) {
			desarrolladores = desarrolladores + cnEditar.listaDesarrolladores[i]; 
			if(i != (cnEditar.listaDesarrolladores.length-1) ){
				desarrolladores = desarrolladores  + '||||';
			}
		}
		
		var fuenteConocimiento= "";
		var i;
		for (i in cnEditar.listafuenteConocimiento) {
			fuenteConocimiento = fuenteConocimiento + cnEditar.listafuenteConocimiento[i]; 
			if(i != (cnEditar.listafuenteConocimiento.length-1) ){
				fuenteConocimiento = fuenteConocimiento  + '||||';
			}
		}    		

		var preguntasCompetencia= "";
		var i;
		for (i in cnEditar.listaPreguntasCompetencia) {
			preguntasCompetencia = preguntasCompetencia + cnEditar.listaPreguntasCompetencia[i]; 
			if(i != (cnEditar.listafuenteConocimiento.length-1) ){
				preguntasCompetencia = preguntasCompetencia  + '||||';
			}
		}    
		
		$actualizarProtecto.post({
            idUsuario: InformacionPrincipalApp.getUsuario().idUsuario,
            idProyecto:  InformacionPrincipalApp.getProyecto().idProyecto,
            'nombre': cnEditar.varNombre,
            'fuenteConocimiento' : fuenteConocimiento,
            'dominio' : cnEditar.varDominio,
            'proposito' : cnEditar.varProposito,
            'alcance' : cnEditar.varAlcance,
            'preguntasCompetencia' : preguntasCompetencia,
            'fecha' : cnEditar.fecha,
            'idNivelFormalidad' : cnEditar.varNivelFormalidad.idNivelFormalidad,
            'desarrolladores' : desarrolladores,
             },{}).$promise.then(
        function(todo) {
           // success
           console.log("en el promise");
           $scope.todos = todo;
           console.log("todo "+todo);
            console.log("sucess es "+$scope.todos.succes);
        }, 
        function(errResponse) {
           // fail
           console.log("EPIC FAIL");
           console.log("errResponse "+errResponse);
        }
        );
	}
	
	function modificarAtributo(){
    	cnEditar.disabled = false;
    	cnEditar.modificar = true;
	}
	
	function setearValoresMostrarEditar(){
    	cnEditar.varNombre = InformacionPrincipalApp.getProyecto().nombre;
    	cnEditar.varDominio = InformacionPrincipalApp.getProyecto().dominio;
    	cnEditar.varAlcance = InformacionPrincipalApp.getProyecto().alcance;
//	            	cnEditar.varFuenteConocimiento = InformacionPrincipalApp.getProyecto().fuenteConocimiento;
    	cnEditar.varNivelFormalidad = InformacionPrincipalApp.getProyecto().nivelFormalidad;
    	cnEditar.varProposito = InformacionPrincipalApp.getProyecto().proposito;
//	            	cnEditar.varDesarrolladores = InformacionPrincipalApp.getProyecto().desarrolladores;
//	            	cnEditar.varPreguntaCompetencia = InformacionPrincipalApp.getProyecto().desarrolladores;
    	cnEditar.fecha = InformacionPrincipalApp.getProyecto().fecha;
    	cnEditar.listaDesarrolladores = InformacionPrincipalApp.getProyecto().desarrolladores.slice();
    	cnEditar.listafuenteConocimiento = InformacionPrincipalApp.getProyecto().fuenteConocimiento.slice();
    	cnEditar.listaPreguntasCompetencia = InformacionPrincipalApp.getProyecto().preguntasCompetencia.slice();  
	}
		
    // validate data.
    $rootScope.$watch('actual.editar', function (newValue, oldValue) {
    	if (newValue !== oldValue) {
            console.log("cambio valor editar a '"+newValue+"'");
            cnEditar.soyActual = InformacionPrincipalApp.soyVistaActual('Editar');
//            if(cnEditar.soyActual == true){
//            	cambioSeleccion(true, false, false, false, false, false, false);
//            }else{
//            	cambioSeleccion(false, false, false, false, false, false, false);
//            }
    	}
    }, false);

	var idUsuario = InformacionPrincipalApp.getUsuario().idUsuario;
	
	function buscarNivelFormalidad(){
		console.log("Busco nivel de formalidad ");
		$listarNivelFormalidad.get(
             {},{}).$promise.then(
        function(todo) {
           // success
            console.log("sucess es "+todo.succes);
            cnEditar.listaNivelFormalidad = todo.elementos;
            console.log("elementos es "+cnEditar.listaNivelFormalidad.length);
        }, 
        function(errResponse) {
           // fail
           console.log("EPIC FAIL");
           console.log("errResponse "+errResponse);
        }
        );
		
		console.log("el succes es "+cnEditar.listaNivelFormalidad.succes);
	}
	
    $rootScope.$on('menuEditar', function(event, data){
    	InformacionPrincipalApp.voyAvista("Editar");
    	console.log("antes de safeApply en menuEditar");
    	cnEditar.setearValoresMostrarEditar();
    	cnEditar.buscarNivelFormalidad();
    });
	
}

})();
