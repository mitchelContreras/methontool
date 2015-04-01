<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<div ng-controller="ControllerEditar  as cnEditar">
	<div ng-show="cnEditar.soyActual">  	
<!--<div ng-show="true"> -->
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno ">
				<div class="inicioTexto">
		       		<ul>
			            <li><a href="#" ng-click="cnEditar.seleccion('dominio') ">Dominio</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('fecha') ">Fecha</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('desarrolladores') ">Desarrolladores</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('alcance') ">alcance</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('fuenteConocimiento') ">Fuentes de conocimiento</a></li>
		       		 	<li><a href="#" ng-click="cnEditar.seleccion('nivelFormalidad') ">Nivel de formalidad</a></li>
		       		 </ul>				
				</div>	

			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.vacio">
				<p>DOS Vacio</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.dominio"> 	
 <!--			<div class="col-md-8 cuerpoDos" ng-show="true">	 -->	
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label for="inputEmail" class="control-label col-xs-2">Dominio:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input type="text" class="form-control" placeholder="Dominio" ng-disabled="cnEditar.disabled">
						</div>
					</div>
					<div class="row centered" ng-show="!cnEditar.modificar">
						<div class="col-xs-offset-2 col-xs-10 divCentrado formulario">
							<button type="submit" class="btn btn-primary" ng-click="cnEditar.modificarAtributo()">Modificar</button>
						</div>
					</div>
					<div class="row centered" ng-show="cnEditar.modificar">
						<div class="col-xs-offset-2 col-xs-10 divCentrado formulario">
							<button type="submit" class="btn btn-primary ">Guardar</button>
							<button type="submit" class="btn btn" ng-click="cnEditar.cancelarModificarAtributo() ">Cancelar</button>
						</div>	
					</div>	
				</div> 
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.fecha">
				<div>
					<div>
						<span>Fecha</span>
					</div>
					<div>
						<input>
					</div>
					<div>
						<button>modificar</button>
						<button>Guardar</button>
						<button>Cancelar</button>
					</div>
				</div>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.desarrolladores">
				<p>DOS desarrolladores</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.nivelFormalidad">
				<p>DOS nivelFormalidad</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.alcance">
				<div>
					<div>
						<span>Alcance</span>
					</div>
					<div>
						<input>
					</div>
					<div>
						<button>modificar</button>
						<button>Guardar</button>
						<button>Cancelar</button>
					</div>
				</div>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.fuenteConocimiento">
				<p>DOS fuenteConocimiento</p>
			</div>										
		</div>
	</div>
</div>
