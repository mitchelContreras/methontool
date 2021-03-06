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
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angucomplete-alt.js"></script>
		
		
		<!-- JS -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/aplicacion.js"></script>
	
		<!-- Upload file -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angular-file-upload.min.js"></script>

		<!-- Script comunes -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/scriptComunes.js"></script>
		
		<!-- Controller -->
		<!-- Cabecera -->	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/cabecera.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/principal.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/proyecto.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/editar.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/glosario.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/relacion.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/atributoInstancia.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/atributoClase.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/constante.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/axioma.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/regla.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/taxonomia.js"></script>	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/concepto.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/instancia.js"></script>	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/controller/instanciaDos.js"></script>					
		
		<!-- factory -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/informacionPrincipalApp.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryGlosario.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryTipoGlosario.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryMensajeCarga.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryTaxonomia.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryRelacion.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryConcepto.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryAtributoClase.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryAtributoInstancia.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryInstancia.js"></script>						
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryMedida.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryTipoDeDato.js"></script>	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryConstante.js"></script>	
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryAxioma.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/factory/factoryRegla.js"></script>				
		
		<!-- Modulos de AngularJS -->
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/proyecto.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/nivelFormalidad.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/glosario.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/tipoGlosario.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/taxonomia.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/relacion.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/concepto.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/atributoClase.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/atributoInstancia.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/instancia.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/medida.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/tipoDeDato.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/constante.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/axioma.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/framework/app/service/regla.js"></script>		
											
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
			<jsp:include page="componentesAplicacion/atributoClase.jsp" />		
			<jsp:include page="componentesAplicacion/constante.jsp" />				
			<jsp:include page="componentesAplicacion/axioma.jsp" />			
			<jsp:include page="componentesAplicacion/regla.jsp" />		
			<jsp:include page="componentesAplicacion/taxonomia.jsp" />
			<jsp:include page="componentesAplicacion/concepto.jsp" />	
			<jsp:include page="componentesAplicacion/instancia.jsp" />	
			<jsp:include page="componentesAplicacion/instanciaDos.jsp" />									
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
		
	<!-- Modal de cargando-->
	<div class="modal fade" id="modalCargando" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="myModalLabel">{{mensajeCargando}}</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-10 divCentrado formulario" >
							<div class="progress progress-striped active">
							  <div class="progress-bar" role="progressbar"
								   aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
								   style="width: 100%">
							  </div>
							</div>
						</div>
					</div>
				</div>		
			</div>
		</div>
	</div>				
	</body>
</html>