<div ng-controller="ControllerConstante  as cnConstante">
 <div ng-show="cnConstante.soyActual"> 
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroConstante.buscarPor='seleccione'">
								<select ng-model="filtroConstante.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroConstante.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroConstante.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroConstante.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroConstante.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroConstante.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroConstante.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroConstante.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnConstante.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroConstante.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 5">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConstante.seleccionado == glosario.id}"
										ng-click="cnConstante.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroConstante.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnConstante.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroConstante.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 5">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConstante.seleccionado == glosario.id}"
										ng-click="cnConstante.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroConstante.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnConstante.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroConstante.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 5">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConstante.seleccionado == glosario.id}"
										ng-click="cnConstante.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroConstante.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnConstante.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 5">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConstante.seleccionado == glosario.id}"
										ng-click="cnConstante.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>			
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnConstante.enBlanco">
				<p> DOS Constante </p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnConstante.enBlanco">
				<div class="inicioTexto">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnConstante.alertPositiva">
				   		 {{cnConstante.mensajeAlertPositiva}}
					</div>
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnConstante.alertNegativa">
				   		 <strong>Error!</strong> {{cnConstante.mensajeAlertNegativa}}
					</div>	
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnConstante.varEdicion.glosarioConstanteActual.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Tipo valor:</label>
							</div>
							<div class="col-xs-5">
									<select class="form-control" ng-disabled="cnConstante.disabled" ng-model="cnConstante.varEdicion.tipoDeDato"
 									ng-options="tipoDeDato.nombre for tipoDeDato in cnConstante.listaTipoDeDato track by tipoDeDato.codigo" >
								        <option value="">[SELECCIONE]</option>    
								    </select>
							</div>	
						</div>										
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Valor:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="valor" ng-disabled="cnConstante.disabled" ng-model="cnConstante.varEdicion.valor">
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Medida:</label>
							</div>
							<div class="col-xs-5">
									<select class="form-control" ng-disabled="cnConstante.disabled" ng-model="cnConstante.varEdicion.medida"
 									ng-options="medida.nombre for medida in  cnConstante.listaMedida track by medida.codigo" >
								        <option value="">[SELECCIONE]</option>    
								    </select>
							</div>	
						</div>								
						<div class="form-group" ng-show="!cnConstante.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnConstante.modificarConstante()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnConstante.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnConstante.modifiqueConstante()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnConstante.cancelaConstante() ">Cancelar</button>
							</div>	
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- Modal Glosario -->
	<div class="modal fade" id="verDescripcionGlosarioConstanteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Descripción glosario</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Nombre:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input type="text" class="form-control" placeholder="Nombre" ng-model="cnGlosario.nuevoSinonimo">
						</div>
					</div>
				</div>				
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>
	
	
	
	
</div>