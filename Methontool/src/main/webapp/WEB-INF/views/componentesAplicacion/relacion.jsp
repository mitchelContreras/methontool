<div ng-controller="ControllerRelacion  as cnRelacion">
 <div ng-show="cnRelacion.soyActual"> 
<!--	<div ng-show="false"> -->	
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">	
				<p> UNO Relacion </p>
			</div>
			<div class="col-md-8 cuerpoDos">
				<div class="inicioTexto">
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnRelacion.enGlosario.nombre">
							</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnRelacion.verDescripcionGlosario()" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Concepto origen:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Concepto origen" ng-disabled="cnRelacion.disabled" ng-model="cnRelacion.conceptoOrigen.nombre">
							</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnRelacion.verConceptoOrigen()" ><i class="glyphicon glyphicon-zoom-in"></i></a>														
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Cardinalidad:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Cardinalidad" ng-disabled="cnRelacion.disabled" ng-model="cnRelacion.Cardinalidad">
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Concepto destino:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Concepto destino" ng-disabled="cnRelacion.disabled" ng-model="cnRelacion.verConceptoDestino.nombre">
							</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnRelacion.verConceptoDestino()" ><i class="glyphicon glyphicon-zoom-in"></i></a>														
							</div>
						</div>		
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Relación inversa:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Relación inversa" ng-disabled="cnRelacion.disabled" ng-model="cnRelacion.relacionInversa.nombre">
							</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnRelacion.verRelacionInversa()" ><i class="glyphicon glyphicon-zoom-in"></i></a>																												
							</div>
						</div>		
						<div class="form-group" ng-show="!cnRelacion.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnRelacion.modificarRelacion()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnRelacion.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnRelacion.modifiqueRelacion()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnRelacion.cancelarModificarRelacion() ">Cancelar</button>
							</div>	
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- Modal Glosario -->
	<div class="modal fade" id="verDescripcionGlosarioModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
	
	<!-- Modal Relacion inversa -->
	<div class="modal fade" id="verRelacionInversaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Relación inversa</h4>
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
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
	
	<!-- Modal Concepto Origen -->
	<div class="modal fade" id="verConceptoOrigenModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Concepto origen</h4>
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
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>
	
	<!-- Modal Concepto Destino -->
	<div class="modal fade" id="verConceptoDestinoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Concepto destino</h4>
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
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>		
	
	
	
</div>