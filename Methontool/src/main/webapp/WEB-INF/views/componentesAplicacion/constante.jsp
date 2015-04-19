<div ng-controller="ControllerConstante  as cnConstante">
 <div ng-show="cnConstante.soyActual"> 
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">	
				<p> UNO Constante </p>
			</div>
			<div class="col-md-8 cuerpoDos">
				<div class="inicioTexto">
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnConstante.enGlosario.nombre">
							</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnConstante.verDescripcionGlosario()" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Tipo valor:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Tipo valor" ng-disabled="cnConstante.disabled" ng-model="cnConstante.tipoValor">
							</div>
						</div>											
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Valor:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="valor" ng-disabled="cnConstante.disabled" ng-model="cnConstante.valor">
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Unidad:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Unidad" ng-disabled="cnConstante.disabled" ng-model="cnConstante.unidad">
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