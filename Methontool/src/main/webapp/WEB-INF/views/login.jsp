<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Methontool</title>
	
	 <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">

	<!-- Optional theme -->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.min.css">

	<!--Libreria de jquery-->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-2.1.3.min.js"></script>
	
	<!-- Latest compiled and minified JavaScript -Antes debe ir la libreria de jQuery- -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>

	<!-- css de login-->
	<link href="${pageContext.request.contextPath}/resources/css/login.css" rel="stylesheet">
	
	<!-- AngularJS -->
<!--	 	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>  --> 
  	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angular.min.js"></script> 

	<!-- AngularJS Resource -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angular-resource.min.js"></script>
	
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/login/login.js"></script>
	
</head>
<body ng-app="methontool" ng-controller="LoginController">

	<div class="container">
		<div align="center" class="alert alert-danger" ng-if="validarCorreo">
	   		<!--<a href="#" class="close" data-dismiss="alert">&times;</a>-->
	   		 <strong>Error!</strong> El correo tiene un formato incorrecto
		</div>
		<div align="center" class="alert alert-danger" ng-if="validarPass">
	   		<!--<a href="#" class="close" data-dismiss="alert">&times;</a>-->
	   		 <strong>Error!</strong> La longitud de Contrase&#241a debe ser mayor a 4
		</div>
		<div align="center" class="alert alert-danger" ng-if="usuarioInValido">
	   		<!--<a href="#" class="close" data-dismiss="alert">&times;</a>-->
	   		 <strong>Error!</strong> {{mensajeInvalido}}
		</div>
		<div align="center" class="alert alert-success" ng-if="envieCorreoRecuperar">
		    <strong>Success!</strong> Informaci&#243n enviada a su correo
		</div>
	

		<form class="form-signin" id="usuarioForm" name="usuarioForm">
			<div align="center">
				<h2 class="form-signin-heading">Ingrese sus datos</h2>
			</div>
			<div ng-class="{'has-error': campoCorreo()}">
				<input type="text" id="correo" name="correo" placeholder="Correo" class="form-control" ng-model="usuario.correo" ng-class="{'has-error': campoCorreo()}" MaxLength="120">
			</div>
			<div ng-class="{'has-error': campoPass()}">
				<input type="password" id="pass" name="pass" placeholder="Contrase&#241a" class="form-control" ng-model="usuario.pass" MaxLength="10">
			</div>

			<div class="link">
				<a href="#" ng-click="showWindow()">Olvid&#233 mi contrase&#241a</a>
			</div>
			<button class="btn btn-lg btn-primary btn-block" ng-click="validarDatos()">Entrar</button>
		</form>
	</div>	
 
     <div class="modal fade" id="olvidoContrasenaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title" id="myModalLabel">Recuperar contrase&#241a</h4>
            </div>
            <div class="modal-body">
              	<div align="center" class="alert alert-danger" ng-if="validarCorreoOlvidado">
			   		<!-- <a href="#" class="close" data-dismiss="alert">&times;</a>  -->
			   		 <strong>Error!</strong> El correo tiene un formato incorrecto
				</div>
              <form name="olvideCorreoForm" id="olvideCorreoForm">
                <p>Podemos ayudarte a restablecer tu  contrase&#241a y la informaci&#243n de seguridad. Primero necesitamos que indique su correo. </p>

                <div class="form-group" ng-class="{'has-error':bookmarkForm.url.$invalid && bookmarkForm.url.$touched}">
                <!-- <label for="url">Correo</label>  -->
                  <div class="input-group">
                    <div class="input-group-addon">
                    </div>
                    <input ng-model="correoRecuperar" required  maxlength="120" name="correoRecuperar" id="correoRecuperar" class="form-control" type="text" placeholder="Correo">
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button ng-click="enviarCorreoRecuperar()" type="button" class="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>

</body>
</html>