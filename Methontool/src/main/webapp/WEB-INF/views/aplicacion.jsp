<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Methontool</title>
		<title>Methontool</title>
	 <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap-theme.css">

	<!--Libreria de jquery-->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-2.1.3.min.js"></script>
	
	<!-- Latest compiled and minified JavaScript -Antes debe ir la libreria de jQuery- -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>

	<!-- css de aplicacion-->
	<link href="${pageContext.request.contextPath}/resources/css/aplicacion.css" rel="stylesheet">
	
	<!-- AngularJS 
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
-->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/angular.min.js"></script>
	
	<!-- JS -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/MVC-Angular/login-AngularJS.js"></script>
	
</head>
<body>
	<div class="container">
		<div class="row cabecera">
			<div class="col-md-12">
				<div class="col-md-10 cabeceraTitulo" >
					<a href="" class="cabeceraTextoEspecificacion">Especificaci&#243n</a>
					<a href="" class="cabeceraTexto">&#62</a>
					<a href="" class="cabeceraTextoConceptualizacion">Conceptualizaci&#243n</a>
					<a href="" class="cabeceraTexto">&#62</a>
					<a href="" class="cabeceraTextoImplementacion">Implementaci&#243n</a>
				</div>
				<div class="col-md-2 sesionCabecera">
					<label> Mitchell Contreras</label>
					<a href="">Cerrar sesion</a>
				</div>
			</div>
		</div>
		<div class="row navegar">
			<div class="col-md-12 navegarDefoult nopadding" >
				<nav class="navbar navbar-default" role="navigation">
				  	<div class="container-fluid">
					    <!-- Collect the nav links, forms, and other content for toggling -->
					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      	<ul class="nav navbar-nav">
					      		<li class="dropdown">
					          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
					        		<ul class="dropdown-menu" role="menu">
							            <li><a href="#">Crear proyecto</a></li>
							            <li><a href="#">Seleccionar proyecto</a></li>
							            <li><a href="#">Eliminar proyecto</a></li>
							            <li><a href="#">Crear version</a></li>
							            <li><a href="#">Seleccionar version</a></li>
					        		 </ul>
					        	</li>		        
					      	</ul>
						    <ul class="nav navbar-nav navbar-right">
						       <li><a href="#">Usuario</a></li>
						    </ul>
					    </div><!-- /.navbar-collapse -->
					</div><!-- /.container-fluid -->
				</nav>	
			</div>
			<div class="col-md-12 navegarEspecificacion nopadding" style="display:none;" >
				<nav class="navbar navbar-default" role="navigation">
				  	<div class="container-fluid">
					    <!-- Collect the nav links, forms, and other content for toggling -->
					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      	<ul class="nav navbar-nav">
					      		<li class="dropdown">
					          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
					        		<ul class="dropdown-menu" role="menu">
							            <li><a href="#">Crear proyecto</a></li>
							            <li><a href="#">Seleccionar proyecto</a></li>
							            <li><a href="#">Eliminar proyecto</a></li>
							            <li><a href="#">Crear version</a></li>
							            <li><a href="#">Seleccionar version</a></li>
					        		 </ul>
					        	</li>
					        	<li><a href="#">Editar</a></li>			        
					      	</ul>
						    <ul class="nav navbar-nav navbar-right">
						       <li><a href="#">Usuario</a></li>
						    </ul>
					    </div><!-- /.navbar-collapse -->
					</div><!-- /.container-fluid -->
				</nav>	
			</div>
			<div class="col-md-12 navegarConceptualizacion nopadding" style="display:none;" >
				<nav class="navbar navbar-default" role="navigation">
				  	<div class="container-fluid">
					    <!-- Collect the nav links, forms, and other content for toggling -->
					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      	<ul class="nav navbar-nav">
					      		<li class="dropdown">
					          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
					        		<ul class="dropdown-menu" role="menu">
							            <li><a href="#">Crear proyecto</a></li>
							            <li><a href="#">Seleccionar proyecto</a></li>
							            <li><a href="#">Eliminar proyecto</a></li>
							            <li><a href="#">Crear version</a></li>
							            <li><a href="#">Seleccionar version</a></li>
					        		 </ul>
					        	</li>
					      		<li class="dropdown">
					         		 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Visualizar <span class="caret"></span></a>
					         		 <ul class="dropdown-menu" role="menu">
					           			<li><a href="#">Glosario</a></li>
					            		<li><a href="#">Atributo de clase</a></li>
					            		<li><a href="#">Atributo de instancia</a></li>
					            		<li><a href="#">Reglas</a></li>
							            <li><a href="#">Axioma</a></li>
							            <li><a href="#">Relaciones</a></li>
							            <li><a href="#">Taxonomia</a></li>
							            <li><a href="#">Concepto</a></li>
							            <li><a href="#">Instancia</a></li>
							            <li><a href="#">Constante</a></li>			            
					         		 </ul>
					        	</li>
					        	<li class="dropdown">
					          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Tareas <span class="caret"></span></a>
					          		<ul class="dropdown-menu" role="menu">
							            <li><a href="#">Tarea 1</a></li>
							            <li><a href="#">Tarea 2</a></li>
							            <li><a href="#">Tarea 3</a></li>
							            <li><a href="#">Tarea 4</a></li>
							            <li><a href="#">Tarea 5</a></li>
							            <li><a href="#">Tarea 6</a></li>
							            <li><a href="#">Tarea 7</a></li>
							            <li><a href="#">Tarea 8</a></li>
							            <li><a href="#">Tarea 9</a></li>
							            <li><a href="#">Tarea 10</a></li>
							            <li><a href="#">Tarea 11</a></li>			            
					          		</ul>
					        	</li>							        				        
					      	</ul>
						    <ul class="nav navbar-nav navbar-right">
						       <li><a href="#">Usuario</a></li>
						    </ul>
					    </div><!-- /.navbar-collapse -->
					</div><!-- /.container-fluid -->
				</nav>						
			</div>
			<div class="col-md-12 navegarImplementacion nopadding" style="display:none;" >
				<nav class="navbar navbar-default" role="navigation">
				  	<div class="container-fluid">
					    <!-- Collect the nav links, forms, and other content for toggling -->
					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      	<ul class="nav navbar-nav">
					      		<li class="dropdown">
					          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
					        		<ul class="dropdown-menu" role="menu">
							            <li><a href="#">Crear proyecto</a></li>
							            <li><a href="#">Seleccionar proyecto</a></li>
							            <li><a href="#">Eliminar proyecto</a></li>
							            <li><a href="#">Crear version</a></li>
							            <li><a href="#">Seleccionar version</a></li>
					        		 </ul>
					        	</li>
					      		<li class="dropdown">
					         		 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Exportar <span class="caret"></span></a>
					         		 <ul class="dropdown-menu" role="menu">
					           			<li><a href="#">Revisar ontologia</a></li>
					            		<li><a href="#">Exportar OWL</a></li>
					            		<li><a href="#">Exportar RDF</a></li>		            
					         		 </ul>
					        	</li>			        
					      	</ul>
						    <ul class="nav navbar-nav navbar-right">
						       <li><a href="#">Usuario</a></li>
						    </ul>
					    </div><!-- /.navbar-collapse -->
					</div><!-- /.container-fluid -->
				</nav>	
			</div>
		</div>
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">
				<aside>
					<span>hola</span>
				</aside>
			</div>
			<div class="col-md-8 cuerpoDos">
				<p>Esto</p>
			</div>
		</div>
	</div>
</body>
</html>