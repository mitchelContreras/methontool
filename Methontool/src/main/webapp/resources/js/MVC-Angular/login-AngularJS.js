(function(){
	"use strict"

	var App = angular.module('methontool',[
		//dependencias a usar
		'ngResource'
		])

	.service('Category',function($http){

	    this.getAll = function(success,failure){
	    	
//			console.log("$scope.usuario.correo "+$scope.usuario.correo);
//			console.log("$scope.usuario.pass "+$scope.usuario.pass);
			
	        $http.get('http://localhost:8080/Methontool/api/usuario/validarUsuario?correo=mitchellcontreras@gmail.com&pass=123456789') //Step 1
	            .success(success) //Step 2
	            .error(failure);  
	    }
	})

	.factory('Usuario',function($resource){ //Step 2
        //Step 3
 //       return $resource('http://localhost:8080/jdbc/valCustomer');
         return $resource('http://localhost:8080/Methontool/api/usuario/validarUsuario',{},{
            query: {method: 'GET', isArray:false}
            });
    })
    
    
	App.controller('LoginController', function($scope, Category, Usuario) {
     
	$scope.validarCorreo = false;
	$scope.validarPass = false;
	$scope.usuarioInValido = false;
	$scope.envieCorreoRecuperar = false;

	 $scope.campoCorreo = function () {
     	if($scope.validarCorreo || $scope.usuarioInValido){
     		return true;
     	}else{
     		return false;
     	}
     }

    $scope.campoPass = function () {
    	//console.log("campoPass con $scope.validarPass "+$scope.validarPass);
     	if($scope.validarPass || $scope.usuarioInValido){
     		return true;
     	}else{
     		return false;
     	}
     }

    $scope.showWindow = function(){
    	$scope.correoRecuperar = "";
        $('#olvidoContrasenaModal').modal('show');
    };

     $scope.enviarCorreoRecuperar = function(){
     	$scope.validarCorreoOlvidado = false;
     	var correo = $scope.correoRecuperar;
     	if(!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(correo)){
     		$scope.validarCorreoOlvidado = true;
     		return false;
     	}
     	
     	console.log("enviarCorreo");
     	 $('#olvidoContrasenaModal').modal('hide');
     	 $scope.envieCorreoRecuperar = true;
     }

     $scope.validarDatos = function (){
		$scope.validarCorreo = false;
		$scope.validarPass = false;
		$scope.usuarioInValido = false;
		$scope.envieCorreoRecuperar = false;
     	//console.log("inicio");
     	//console.log("$scope.validarCorreo "+$scope.validarCorreo);
     	//console.log("$scope.validarPass "+$scope.validarPass);
     	//console.log("$scope.usuarioForm.correo.$dirty es "+$scope.usuarioForm.correo.$dirty);
     	//console.log("$scope.usuarioForm.correo.$dirty es "+$scope.usuarioForm.pass.$dirty);
     	//console.log("usuarioForm.correo.value "+document.usuarioForm.correo.value);
     	//console.log("usuarioForm.pass.value "+document.usuarioForm.pass.value);

     	var correo = document.usuarioForm.correo.value;
     	var pass = document.usuarioForm.pass.value

     	if(!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(correo)){
     		$scope.validarCorreo = true;
     		return false;
     	}else{
     		$scope.validarCorreo = false;
     	}

     	if(pass.length < 4 || pass.length >8){
     		$scope.validarPass = true;
     		return false;
     	}else{
     		$scope.validarPass = false;
     	}
     	
//	    Category.getAll(function(data){         
//	    	console.log("data es "+data.succes);
//	    });
//	    console.log("antes");
	    $scope.salida = Usuario.query({'correo': correo, 'pass':pass},{});
//	    console.log("bla "+ JSON.stringify($scope.datos));
//	    console.log(Pinta el json como string"+JSON.stringify($scope.datos));
//	    console.log("despues "+JSON.stringify($scope.datos.succes));
	    $scope.salida.$promise.then(function(data){
	    	console.log("sucess es "+$scope.salida.succes);
	    	if($scope.salida.succes == true){
//	    		$scope.mensajeInvalido = scope.salida.listaError.length
	    		console.log("El id del usuario es "+$scope.salida.usuario.idUsuario);
	    		console.log("El usuario es "+$scope.salida.usuario.nombre+" "+$scope.salida.usuario.apellido);
	    		location.href = 'http://localhost:8080/Methontool/aplicacion';
	    	}else{
	    		console.log("Longitud de lista de errores es"+$scope.salida.listaError.length);
	    		console.log("El mensaje es "+$scope.salida.listaError[0].mensaje);
	    		$scope.usuarioInValido = true;
	    		$scope.mensajeInvalido = $scope.salida.listaError[0].mensaje;
	    	}
	    });

	    
//	    console.log("mensaje es1 "+datos);
//		console.log("aaa "+datos.succes);
//	    $scope.datos = datos;
	    //     	if(pass == "1234"){
//     		$scope.usuarioInValido = true;
//     	}else{
//     		u$scope.usuarioInValido = false;
//     	}
	    return false;
     }
    });
	
})();
