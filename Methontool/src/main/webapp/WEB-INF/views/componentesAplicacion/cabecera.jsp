<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<div class="nopadding" ng-controller="ControllerCabecera as cnCabecera">
	<div class="row cabecera titulo">
		<div class="col-md-12">
			<div class="col-md-10 cabeceraTitulo" >
				<a href="#" ng-click="cnCabecera.clickEspecificacion()" 
				ng-class="{'classTituloNoSeleccionado':!cnCabecera.especificacion, 'classTituloSeleccionado':cnCabecera.especificacion}">Especificaci&#243n</a>
				<a href="#" class="classTituloNoSeleccionado" >&#62</a>
				<a href="#" ng-click="cnCabecera.clickConceptualizacion()"
				ng-class="{'classTituloNoSeleccionado':!cnCabecera.conceptualizacion, 'classTituloSeleccionado':cnCabecera.conceptualizacion}">Conceptualizaci&#243n</a>
				<a href="#" class="classTituloNoSeleccionado" >&#62</a>
				<a href="#" ng-click="cnCabecera.clickImplementacion()"
				ng-class="{'classTituloNoSeleccionado':!cnCabecera.implementacion, 'classTituloSeleccionado':cnCabecera.implementacion}">Implementaci&#243n</a>
			</div>
			<div class="col-md-2 sesionCabecera">
				<label> Mitchell Contreras</label>
				<a href="">Cerrar sesion</a>
			</div>
		</div>
	</div>
	<div class="row navegar">
<div class="col-md-12 nopadding" ng-show="cnCabecera.menuInicial">
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">
				    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul class="nav navbar-nav">
		      		<li class="dropdown">
		          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
		        		<ul class="dropdown-menu" role="menu">
				            <li><a href="#">Crear proyecto</a></li>
				            <li><a href="#" ng-click="cnCabecera.listarProyectos()" >Ver proyectos</a></li>
				            <li><a href="#">Crear version</a></li>
				            <li><a href="#">Ver versiones</a></li>
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
<div class="col-md-12 nopadding" ng-show="cnCabecera.especificacion" >
	<nav class="navbar navbar-default" role="navigation">
	  	<div class="container-fluid">
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul class="nav navbar-nav">
		      		<li class="dropdown">
		          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
		        		<ul class="dropdown-menu" role="menu">
				            <li><a href="#">Abrir proyecto</a></li>
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
<div class="col-md-12 nopadding" ng-show="cnCabecera.conceptualizacion" >
	<nav class="navbar navbar-default" role="navigation">
	  	<div class="container-fluid">
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul class="nav navbar-nav">
		      		<li class="dropdown">
		          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
		        		<ul class="dropdown-menu" role="menu">
				            <li><a href="#">Abrir proyecto</a></li>
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
<div class="col-md-12 nopadding" ng-show="cnCabecera.implementacion" >
	<nav class="navbar navbar-default" role="navigation">
	  	<div class="container-fluid">
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul class="nav navbar-nav">
		      		<li class="dropdown">
		          		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Documento <span class="caret"></span></a>
		        		<ul class="dropdown-menu" role="menu">
				            <li><a href="#">Abrir proyecto</a></li>
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
</div>