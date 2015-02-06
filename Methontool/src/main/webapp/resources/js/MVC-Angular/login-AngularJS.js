(function(){
	"use strict"

	var App = angular.module('methontool',[
		//dependencias a usar
		])

	.service('Category',function($http){

	    this.getAll = function(success,failure){
	        $http.get('http://localhost:8080/jdbc/customer?id=3') //Step 1
	            .success(success) //Step 2
	            .error(failure);  
	    }
	})

	App.controller('LoginController', function($scope, Category) {
     
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

     	if(pass == "1234"){
     		$scope.usuarioInValido = true;
     	}else{
     		u$scope.usuarioInValido = false;
     	}
	    Category.getAll(function(data){         
	    	console.log("data es "+data.name);
	    });
     }
    });
	
})();
