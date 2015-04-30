<div ng-controller="ControllerGlosario  as cnGlosario">
 <div ng-show="cnGlosario.soyActual"> 
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">
				<div class="inicioTexto">
					<div class="form-group row">
						<div class="col-xs-9">
							<input type="text" ng-model="test" class="form-control" placeholder="Buscar" ng-disabled="false">
						</div>
						<div class="col-xs-1">
							<div class="btn-group">
								<button ng-click="cnGlosario.crearGlosario()" class="btn btn-link "  aria-label="Center Align" type="button">
								    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
								</button>
							</div>									
						</div>
					</div>	
					<div class="list-group">
						<div ng-repeat="glosario in cnGlosario.listaGlosario | filter:test">
							<a href="#" class="list-group-item" 
							ng-class="{active: cnGlosario.seleccionado ==  $index}" 
							ng-click="cnGlosario.seleccioneGlosario ($index)"> {{glosario.nombre}}</a>
						</div>
					</div>	

<!-- 
cnGlosario.seleccionado = $index
ng-class="{'active':}" 
active
					<ul>
					  <li ng-repeat="glosario in cnGlosario.listaGlosario | filter:test">
					    {{glosario.nombre}}
					  </li>
					</ul>
 -->					
				</div>	
			
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnGlosario.enBlanco">
			
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnGlosario.enBlanco">
				<div class="inicioTexto">
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="cnGlosario.disabled" ng-model="cnGlosario.varNombre">
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Tipo de elemento:</label>
							</div>
							<div class="col-xs-5">
									<select class="form-control" ng-disabled="cnGlosario.disabled" ng-model="cnGlosario.varTipo"
 									ng-options="tipoGlosario.nombre for tipoGlosario in  cnGlosario.listaTipoGlosario track by tipoGlosario.id" >
								        <option value="">[SELECCIONE]</option>    
								    </select>
							</div>						
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Descripción:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="cnGlosario.disabled" ng-model="cnGlosario.descripcion"></textarea>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Sinónimo:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="sinonimo in cnGlosario.listaSinonimo track by $index" id="{{$index}}">
									<div class="col-xs-9">
										<input class="form-control" ng-model="sinonimo" ng-disabled="cnGlosario.disabled"></input>
									</div>
									<div class="col-xs-3">
										<div class="btn-group">
											<button ng-click="cnGlosario.eliminarSinonimo($index)" class="btn btn-link " ng-class="{'disabled': cnGlosario.disabled == true}" ng-show="cnGlosario.modificar" aria-label="Center Align" type="button">
											    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
											</button>
										</div>									
									</div>
								</div>
								<div>
									<button ng-click="cnGlosario.agregarSinonimo()" class="btn btn-link " ng-class="{'disabled': cnGlosario.disabled == true}" ng-show="cnGlosario.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Acrónimo</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="acronimo in cnGlosario.listaAcronimo track by $index" id="{{$index}}">
									<div class="col-xs-9">
										<input class="form-control" ng-model="acronimo" ng-disabled="cnGlosario.disabled"></input>
									</div>
									<div class="col-xs-3">
										<div class="btn-group">
											<button ng-click="cnGlosario.eliminarAcronimo($index)" class="btn btn-link " ng-class="{'disabled': cnGlosario.disabled == true}" ng-show="cnGlosario.modificar" aria-label="Center Align" type="button">
											    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
											</button>
										</div>									
									</div>
								</div>
								<div>
									<button ng-click="cnGlosario.agregarAcronimo()" class="btn btn-link " ng-class="{'disabled': cnGlosario.disabled == true}" ng-show="cnGlosario.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<!-- en crear -->					
						<div ng-show="cnGlosario.enCrear">
							<div class="form-group">
								<div class="col-xs-offset-4 col-xs-5">
									<button type="submit" class="btn btn-primary" ng-click="cnGlosario.creeGlosario()">Crear</button>
								</div>
							</div>
						</div>							
						<!-- en modificar -->					
						<div ng-show="!cnGlosario.enCrear">
							<div class="form-group" ng-show="!cnGlosario.modificar">
								<div class="col-xs-offset-4 col-xs-5">
									<button type="submit" class="btn btn-primary" ng-click="cnGlosario.modificarGlosario()">Modificar</button>
								</div>
							</div>
							<div class="form-group" ng-show="cnGlosario.modificar">
								<div class="col-xs-offset-4 col-xs-5">
									<button type="submit" class="btn btn-primary" ng-click="cnGlosario.modifiqueGlosario()" >Guardar</button>
									<button type="submit" class="btn btn-defaul" ng-click="cnGlosario.cancelarModificarGlosario() ">Cancelar</button>
								</div>	
							</div>
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- Modal Sinonimo -->
	<div class="modal fade" id="agregarSinonimoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar sinonimo</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Sinonimo:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input type="text" class="form-control" placeholder="Nombre" ng-model="cnGlosario.nuevoSinonimo">
						</div>
					</div>
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnGlosario.agregueSinonimo(cnGlosario.nuevoSinonimo)">Crear</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>
	
	<!-- Modal Acronimo -->
	<div class="modal fade" id="agregarAcronimoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar acrónimo</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Acrónimo:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input type="text" class="form-control" placeholder="Nombre" ng-model="cnGlosario.nuevoAcronimo">
						</div>
					</div>
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnGlosario.agregueAcronimo(cnGlosario.nuevoAcronimo)">Crear</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
	
	
	
</div>