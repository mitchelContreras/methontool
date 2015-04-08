<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<div ng-controller="ControllerEditar  as cnEditar">
<!--	<div ng-show="cnEditar.soyActual"> -->  	
<div ng-show="true"> 
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno ">
				<div class="inicioTexto">
		       		<ul>
			            <li><a href="#" ng-click="cnEditar.seleccion('dominio') ">Dominio</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('fecha') ">Fecha</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('desarrolladores') ">Desarrolladores</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('alcance') ">Alcance</a></li>
			            <li><a href="#" ng-click="cnEditar.seleccion('fuenteConocimiento') ">Fuentes de conocimiento</a></li>
		       		 	<li><a href="#" ng-click="cnEditar.seleccion('nivelFormalidad') ">Nivel de formalidad</a></li>
		       		 </ul>				
				</div>	

			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.vacio">

<!-- 
<fieldset>


<legend>Form Name</legend>


<div class="row centered control-group">
	<div class="">
		<label class="control-label" for="Dominio">Dominio1</label>
	</div>
	<div class="">
		<input id="Dominio" name="Dominio" type="text" placeholder="Dominio" class="input-xlarge">
	</div>
</div>

</fieldset>
-->

<div class="inicioTexto">
	<form class=" form-horizontal">
		<div class="form-group">
			<div class="col-xs-4 control-label" >
				<label >Dominio:</label>
			</div>
			<div class="col-xs-5 ">
				<input type="text" class="form-control" placeholder="Dominio" ng-disabled="cnEditar.disabled">
			</div>
		</div>	
		<div class="form-group">
			<div class="col-xs-4 control-label" >
				<label>Fecha:</label>
			</div>
			<div class="col-xs-5">
				<input id = "inputFecha" ng-disabled="cnEditar.disabled" type="text" data-date="" class="form-control form_datetime" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
				<input type="hidden" id="dtp_input2" value="" />
			</div>
		</div>	
		<div class="form-group">
			<div class="col-xs-4 control-label" >
				<label>Desarrollador(es):</label>
			</div>
			<div class="col-xs-5">
				<div class="row" ng-repeat="desarrollador in cnEditar.listaDesarrolladores track by $index" id="{{$index}}">
					<div class="col-xs-9 ">
						<input class="form-control" ng-model="desarrollador" ng-disabled="cnEditar.disabled">
					</div>
					<div class="col-xs-3">
						<div class="btn-group">
<!--							<button ng-click="cnEditar.modificarDesarrollador($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Left Align" type="button">
							    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							</button>  -->
							<button ng-click="cnEditar.eliminarDesarrollador($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
							    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
							</button>
						</div>									
					</div>
				</div>	
				<div>
					<button ng-click="cnEditar.agregarDesarrollador()" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
					    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					</button>							
				</div>
			</div>
		</div>
		<div class="form-group">
			<div class="col-xs-4 control-label" >
				<label>Alcance:</label>
			</div>
			<div class="col-xs-5">
				<textarea class="form-control" rows="3" ng-disabled="cnEditar.disabled"></textarea>
			</div>
		</div>		
		<div class="form-group">
			<div class="col-xs-4 control-label" >
				<label>Fuentes de conocimientos:</label>
			</div>
			<div class="col-xs-5">
				<div class="row" ng-repeat="fuenteConocimiento in cnEditar.listafuenteConocimiento track by $index" id="{{$index}}">
					<div class="col-xs-9">
						<input class="form-control" ng-model="fuenteConocimiento" ng-disabled="cnEditar.disabled">
					</div>
					<div class="col-xs-3">
						<div class="btn-group">
<!--							<button ng-click="cnEditar.modificarFuenteConocimiento($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Left Align" type="button">
							    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							</button>  -->
							<button ng-click="cnEditar.eliminarFuenteConocimiento($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
							    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
							</button>
						</div>									
					</div>
				</div>
				<div>
					<button ng-click="cnEditar.agregarFuenteConocimiento()" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
					    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					</button>							
				</div>
			</div>
		</div>		
		<div class="form-group">
			<div class="col-xs-4 control-label" >
				<label>Nivel de Formalidad:</label>
			</div>
			<div class="col-xs-5">
				    <select class="form-control" ng-disabled="cnEditar.disabled">
				        <option>[SELECCIONE]</option>
				        <option>Opcion 1</option>
				        <option>Opcion 2</option>
				        <option>Opcion 3</option>
				        <option>Opcion 3</option>				        
				    </select>
			</div>
		</div>			
		<div class="form-group" ng-show="!cnEditar.modificar">
			<div class="col-xs-offset-4 col-xs-5">
				<button type="submit" class="btn btn-primary" ng-click="cnEditar.modificarAtributo()">Modificar</button>
			</div>
		</div>
		<div class="form-group" ng-show="cnEditar.modificar">
			<div class="col-xs-offset-4 col-xs-5">
				<button type="submit" class="btn btn-primary ">Guardar</button>
				<button type="submit" class="btn btn-defaul" ng-click="cnEditar.cancelarModificarAtributo() ">Cancelar</button>
			</div>	
		</div>	    
	    
	</form>
</div>	    







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
<!--			<div class="col-md-8 cuerpoDos" ng-show="true"> -->
			
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label for="inputEmail" class="control-label col-xs-2">Fecha:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input id = "inputFecha" ng-disabled="cnEditar.disabled" type="text" data-date="" class="form-control form_datetime" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
							<input type="hidden" id="dtp_input2" value="" />
						</div>
					</div>					
					<div class="row centered" ng-show="!cnEditar.modificar">
						<div class="col-xs-offset-2 col-xs-10 divCentrado formulario">
							<button type="submit" class="btn btn-primary" ng-click="cnEditar.modificarAtributo()">Modificar</button>
						</div>
					</div>
					<div class="row centered" ng-show="cnEditar.modificar">
						<div class="col-xs-offset-2 col-xs-10 divCentrado formulario">
							<button type="submit"  class="btn btn-primary ">Guardar</button>
							<button type="submit" class="btn btn" ng-click="cnEditar.cancelarModificarAtributo() ">Cancelar</button>
						</div>	
					</div>	
				</div> 	
				<script type="text/javascript">
				    $(".form_datetime").datetimepicker({
				    	language:  'es',
				    	format: 'dd/mm/yyyy',
				    	todayBtn:  1,
				    	startView: 2,
				    	minView: 2,
				    	autoclose: 1
				    	});
<!--				    $('.form_datetime').datepicker('hide'); -->
				</script>   						
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.desarrolladores">
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Desarrollador(es):</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<div class="row" ng-repeat="desarrollador in cnEditar.listaDesarrolladores track by $index" id="{{$index}}">
								<div class="col-xs-8 ">
									<input ng-model="desarrollador" ng-disabled="cnEditar.disabled">
								</div>
								<div class="col-xs-4">
									<div class="btn-group">
										<button ng-click="cnEditar.modificarDesarrollador($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Left Align" type="button">
										    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
										</button>
										<button ng-click="cnEditar.eliminarDesarrollador($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
										    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
										</button>
									</div>									
								</div>
							</div>
							
							<div>
								<button ng-click="cnEditar.agregarDesarrollador()" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
								    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
								</button>							
							</div>
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
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.alcance"> 
<!--			<div class="col-md-8 cuerpoDos" ng-show="true"> -->		
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Alcance:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<textarea class="form-control" rows="3" ng-disabled="cnEditar.disabled"></textarea>
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
			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.fuenteConocimiento">		
<!--			<div class="col-md-8 cuerpoDos" ng-show="true"> -->			
				<p>DOS fuenteConocimiento</p>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Fuentes de conocimientos:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<div class="row" ng-repeat="fuenteConocimiento in cnEditar.listafuenteConocimiento track by $index" id="{{$index}}">
								<div class="col-xs-8 ">
									<input ng-model="fuenteConocimiento" ng-disabled="cnEditar.disabled">
								</div>
								<div class="col-xs-4">
									<div class="btn-group">
										<button ng-click="cnEditar.modificarFuenteConocimiento($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Left Align" type="button">
										    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
										</button>
										<button ng-click="cnEditar.eliminarFuenteConocimiento($index)" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
										    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
										</button>
									</div>									
								</div>
							</div>
							<div>
								<button ng-click="cnEditar.agregarFuenteConocimiento()" class="btn btn-link " ng-class="{'disabled': cnEditar.disabled == true}" ng-show="cnEditar.modificar" aria-label="Center Align" type="button">
								    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
								</button>							
							</div>
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
 			<div class="col-md-8 cuerpoDos" ng-show="cnEditar.nivelFormalidad"> 			
<!--			<div class="col-md-8 cuerpoDos" ng-show="true"> -->
			
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label for="inputEmail" class="control-label col-xs-2">Nivel de Formalidad:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							    <select class="btn">
							        <option>Mustard</option>
							        <option>Ketchup</option>
							        <option>Relish</option>
							    </select>
						</div>
					</div>					
					<div class="row centered" ng-show="!cnEditar.modificar">
						<div class="col-xs-offset-2 col-xs-10 divCentrado formulario">
							<button type="submit" class="btn btn-primary" ng-click="cnEditar.modificarAtributo()">Modificar</button>
						</div>
					</div>
					<div class="row centered" ng-show="cnEditar.modificar">
						<div class="col-xs-offset-2 col-xs-10 divCentrado formulario">
							<button type="submit"  class="btn btn-primary ">Guardar</button>
							<button type="submit" class="btn " ng-click="cnEditar.cancelarModificarAtributo() ">Cancelar</button>
						</div>	
					</div>	
				</div> 	
				<script type="text/javascript">
				    $(".form_datetime").datetimepicker({
				    	language:  'es',
				    	format: 'dd/mm/yyyy',
				    	todayBtn:  1,
				    	startView: 2,
				    	minView: 2,
				    	autoclose: 1
				    	});
<!--				    $('.form_datetime').datepicker('hide'); -->
				</script>   						
			</div>
		</div>
	</div>
	
	<!-- Crear Proyecto Modal-->
	<div class="modal fade" id="agregarFuenteConocimientoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar Fuente de Conocimiento</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label for="inputNombreProyecto" class="control-label col-xs-2">Fuente:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input id="inputNombreProyecto" type="text" class="form-control" placeholder="Fuente de conocimiento" ng-model="cnEditar.nuevoFuenteConocimiento">
						</div>
					</div>
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnEditar.agregueFuenteConocimiento(cnEditar.nuevoFuenteConocimiento)">Crear</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>		
	
</div>
