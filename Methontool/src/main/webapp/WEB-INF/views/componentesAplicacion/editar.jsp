<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<div ng-controller="ControllerEditar  as cnEditar">
	<div ng-show="cnEditar.soyActual">
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">	
	       		<ul>
		            <li><a href="#" ng-click="cnEditar.seleccion('dominio') ">Dominio</a></li>
		            <li><a href="#" ng-click="cnEditar.seleccion('fecha') ">Fecha</a></li>
		            <li><a href="#" ng-click="cnEditar.seleccion('desarrolladores') ">Desarrolladores</a></li>
		            <li><a href="#" ng-click="cnEditar.seleccion('alcance') ">alcance</a></li>
		            <li><a href="#" ng-click="cnEditar.seleccion('fuenteConocimiento') ">Fuentes de conocimiento</a></li>
	       		 	<li><a href="#" ng-click="cnEditar.seleccion('nivelFormalidad') ">Nivel de formalidad</a></li>
	       		 
	       		 </ul>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.vacio">
				<p>DOS Vacio</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.dominio">
				<p>DOS Dominio</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.fecha">
				<p>DOS Fecha</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.desarrolladores">
				<p>DOS desarrolladores</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.nivelFormalidad">
				<p>DOS nivelFormalidad</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.alcance">
				<p>DOS alcance</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.fuenteConocimiento">
				<p>DOS fuenteConocimiento</p>
			</div>										
		</div>
	</div>
</div>
