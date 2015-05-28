<div ng-controller="ControllerRelacion  as cnRelacion">
 <div ng-show="cnRelacion.soyActual"> 
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">
				<div class="inicioTexto">
					<div class="form-group">
						<div class="row">
							<div class="btn-group col-xs-10">
								<span><strong>Buscar por:</strong></span>
							</div>						
						</div>
						<div class="row">
							<div class="btn-group col-xs-6 form-group" ng-init="filtroRelacion.buscarPor='seleccione'">
								<select ng-model="filtroRelacion.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroRelacion.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroRelacion.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroRelacion.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroRelacion.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroRelacion.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroRelacion.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroRelacion.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnRelacion.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroRelacion.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 1">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRelacion.seleccionado == glosario.id}"
										ng-click="cnRelacion.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroRelacion.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnRelacion.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroRelacion.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 1">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRelacion.seleccionado == glosario.id}"
										ng-click="cnRelacion.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroRelacion.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnRelacion.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroRelacion.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 1">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRelacion.seleccionado == glosario.id}"
										ng-click="cnRelacion.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroRelacion.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnRelacion.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 1">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRelacion.seleccionado == glosario.id}"
										ng-click="cnRelacion.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>	
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnRelacion.enBlanco">	
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnRelacion.enBlanco">
				<div class="inicioTexto">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnRelacion.alertPositiva">
				   		 {{cnRelacion.mensajeAlertPositiva}}
					</div>
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnRelacion.alertNegativa">
				   		 <strong>Error!</strong> {{cnRelacion.mensajeAlertNegativa}}
					</div>					
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnRelacion.glosarioRelacionActual.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<span class="obligatorio" ng-show="cnGlosario.modificar">*&nbsp;</span><label>Descripción:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="true" ng-model="cnRelacion.glosarioRelacionActual.descripcion"></textarea>
							</div>
						</div>	
					<button ng-show="cnRelacion.enCrear" ng-click="cnRelacion.crearRelacion()" class="btn btn-link "  
					aria-label="Center Align" type="button" 
					data-toggle="tooltip" data-placement="top" title="Agregar Relación">
					    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					</button>						
					<table class="table table-hover">
					    <thead>
					      <tr>
					        <th>Origen</th>
					        <th>Destino</th>
					        <th ng-show="!cnRelacion.enCrear">Cardinalidad</th>
					        <th ng-show="!cnRelacion.enCrear">Relación inversa</th>
					        <th ng-show="cnRelacion.enCrear">Acción</th>
					        <th ng-show="!cnRelacion.enCrear">Acciones</th>
					      </tr>
					    </thead>
    					<tbody>
    						<tr ng-repeat="row in cnRelacion.listaRelacion">
    							<td>{{row.glosarioOrigen.nombre}}</td>
					        	<td>{{row.glosarioDestino.nombre}}</td>
					       		<td ng-show="!cnRelacion.enCrear">{{row.cardinalidad}}</td> 
					        	<td ng-show="!cnRelacion.enCrear">{{row.glosarioRelacionInversa.nombre}}</td>
					        	<td>
						        	<div class="btn-group">
												<button ng-show="!cnRelacion.enCrear" ng-click="cnRelacion.modificarRelacion(row.idRelacion)" 
												class="btn btn-link " aria-label="Center Align" type="button"
												data-toggle="tooltip" data-placement="top" title="Modificar">
												    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
												</button>
												<button ng-click="cnRelacion.eliminarRelacion(row.idRelacion)" 
												class="btn btn-link " aria-label="Center Align" type="button"
												data-toggle="tooltip" data-placement="top" title="Eliminar">
												    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
												</button>
									</div>	
					        	</td>
    						</tr>
    					</tbody>
    				</table>																						
					</form>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- Modal crear Relacion-->
	<div class="modal fade" id="verModalRelacion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Crear Relación</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Concepto origen:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="completeListaGlosarioOrigenRelacion" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRelacion.varEdicion.glosarioOrigenSelected" 
								  local-data="cnRelacion.listaGlosarioConceptoOrigen" 
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight" 
	 							  >
       						</div>
        				</div>
					</div>
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Concepto destino:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="completeListaGlosarioDestinoRelacion" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRelacion.varEdicion.glosarioDestinoSelected" 
								  local-data="cnRelacion.listaGlosarioConceptoDestino" 
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control"
								  match-class="highlight">
       						</div>
        				</div>
					</div>
					<div class="row centered" ng-show="false">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Cardinalidad:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
								<div class="col-xs-5">
									<input type="text" class="form-control" placeholder="Origen" ng-model="cnGlosario.nuevoAcronimo">	
								</div>
								<div class="col-xs-1">
								</div>
								<div class="col-xs-5">
									<input type="text" class="form-control" placeholder="Destino" ng-model="cnGlosario.nuevoAcronimo">										
								</div>
						</div>
					</div>					
					<div class="row centered" ng-show="false">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Relación inversa:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="completeListaRelacionInversa" placeholder="Relación inversa"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRelacion.varEdicion.relacionInversaSelected" 
								  local-data="cnRelacion.listaRelacionInversa" 
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight" 
	 							  initial-value="{{cnRelacion.varEdicion.relacionInversa.nombre}}">
       						</div>
        				</div>
					</div>						
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnRelacion.creadaRelacion()">Crear</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	

	<!-- Modal actualizar Relacion-->
	<div class="modal fade" id="verModalactualizarRelacion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Actualizar Relación</h4>
				</div>
				<div class="inicioTexto" >
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Cardinalidad:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
								<div class="col-xs-5">
									<input type="text" class="form-control" placeholder="Origen" ng-model="cnRelacion.varEdicion.origenCardinalidad">	
								</div>
								<div class="col-xs-1">
								</div>
								<div class="col-xs-5">
									<input type="text" class="form-control" placeholder="Destino" ng-model="cnRelacion.varEdicion.destinoCardinalidad">										
								</div>
						</div>
					</div>					
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Relación inversa:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="completeListaRelacionInversa" placeholder="Relación inversa"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRelacion.varEdicion.relacionInversaSelected" 
								  local-data="cnRelacion.listaRelacionInversa" 
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight"
	 							  initial-value="{{cnRelacion.varEdicion.relacionInversa.nombre}}">
       						</div>
        				</div>
					</div>						
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnRelacion.modifiqueRelacion()">Guardar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>			
	
	
	
</div>