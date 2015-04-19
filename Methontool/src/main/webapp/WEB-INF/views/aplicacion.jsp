<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="methontool">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Methontool &nbsp;{{proyecto.nombre}}</title>
		
		 <!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css">

		 <!-- Css para calendar bootstrap -->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap-datetimepicker.min.css">
	
		<!-- Optional theme -->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.min.css">

		<!-- Librerias para autocomplete alt -->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/angucomplete-alt.css"/>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/fonts/bariol/bariol.css"/>		
	
		<!--Libreria de jquery-->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-2.1.3.min.js"></script>
		
		<!-- Latest compiled and minified JavaScript -Antes debe ir la libreria de jQuery- -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>

		<!-- Manejo de calendar en bootstrap -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap-datetimepicker.min.js"></script>

		<!-- Manejo de calendar en bootstrap -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/locales/bootstrap-datetimepicker.es.js"></script>
				
		<!-- css de aplicacion-->
		<link href="${pageContext.request.contextPath}/resources/css/aplicacion.css" rel="stylesheet">
		
		<!-- AngularJS 
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
	-->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angular.min.js"></script>
		
		<!-- AngularJS resource -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angular-resource.min.js"></script>

		<!--  AngularJS touch -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angular-touch.min.js"></script>
			
		<!-- Angucomple-alt -->	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angucomplete-alt.min.js"></script>
		
		<!-- JS -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/aplicacion.js"></script>
	
		<!-- Controller -->
		<!-- Cabecera -->	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/cabecera.js"></script>
		<!-- Principal -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/principal.js"></script>
		<!-- Proyecto -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/proyecto.js"></script>
		<!-- Editar -->	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/editar.js"></script>
		<!-- Glosario -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/glosario.js"></script>
		<!-- Relacion -->	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/relacion.js"></script>
		<!-- Atributo de instancia -->	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/atributoInstancia.js"></script>
		
	
		<!-- factory -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/informacionPrincipalApp.js"></script>
		
		
		<!-- Modulos de AngularJS -->
		<!-- Proyecto -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/proyecto.js"></script>

		<!-- Nivel de formalidad -->	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/nivelFormalidad.js"></script>
	</head>
	<body >
		<div class="container" ng-controller="ControllerPrincipal as cnPrincipal">
			<jsp:include page="componentesAplicacion/cabecera.jsp" />
			<!-- Vista principal limpia -->
			<div ng-show="cnPrincipal.soyActual">
				<div class="row CampoTrabajo">
					<div class="col-md-4 cuerpoUno">	
						<p> UNO Limpia </p>
					</div>
					<div class="col-md-8 cuerpoDos">
						<p>DOS Limpia</p>
					</div>
				</div>
			</div>
			<jsp:include page="componentesAplicacion/proyecto.jsp" />
			<jsp:include page="componentesAplicacion/editar.jsp" />	
			<jsp:include page="componentesAplicacion/glosario.jsp" />	
			<jsp:include page="componentesAplicacion/relacion.jsp" />
			<jsp:include page="componentesAplicacion/atributoInstancia.jsp" />		
<!-- 
		idProyecto:{{proyecto.idProyecto}}<br>
		nombre:{{proyecto.nombre}}<br>
		fuenteConocimiento:{{proyecto.fuenteConocimiento}}<br>
		dominio:{{proyecto.dominio}}<br>
		proposito:{{proyecto.proposito}}<br>
		alcance:{{proyecto.alcance}}<br>
		preguntasCompetencia:{{proyecto.preguntasCompetencia}}<br>
		nivelFormalidad:{{proyecto.nivelFormalidad}}<br>
		fecha:{{proyecto.fecha}}	<br>
		desarrolladores:{{proyecto.desarrolladores}}
 -->		
		</div>			
	</body>
</html>