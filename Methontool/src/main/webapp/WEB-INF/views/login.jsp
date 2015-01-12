<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app>
<head>
	<title>Methontool</title>
	 <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.css">

	<!--Libreria de jquery-->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-2.1.3.min.js"></script>
	
	<!-- Latest compiled and minified JavaScript -Antes debe ir la libreria de jQuery- -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>

	<!-- css de login-->
	<link href="${pageContext.request.contextPath}/resources/css/login.css" rel="stylesheet">
</head>
<body>

	<div class="container">
		<form class="form-signin">
			<h2 class="form-signin-heading">Ingrese sus datos</h2>
			<label for="inputEmail" class="sr-only" >Correo</label>
			<input type="email" id="inputEmail" placeholder="Correo" class="form-control">
			<label for="inputPassword" class="sr-only">Contrase&#241a</label>
			<input type="password" id="inputPassword" placeholder="Contrase&#241a" class="form-control">
			<div class="link">
				<a href="#">Olvid&#233 mi contrase&#241a</a>
			</div>
			<button class="btn btn-lg btn-primary btn-block">Entrar</button>
		</form>
	</div>
	
<!-- 
	Write some text in textbox bla bla:
	<input type="text" ng-model="sometext" />

	<h1>Hello {{ sometext }}, estas en login</h1>
 -->		
</body>
</html>