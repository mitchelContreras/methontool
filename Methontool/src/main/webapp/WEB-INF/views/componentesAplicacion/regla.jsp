<div ng-controller="ControllerRegla  as cnRegla">
 <div ng-show="cnRegla.soyActual"> 	
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">	
				<p> UNO Regla </p>
				<button type="submit" class="btn btn-primary" ng-click="cnRegla.enBlanco = !cnRegla.enBlanco" >enBlanco</button>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnRegla.enBlanco">
				<p> DOS Regla </p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnRegla.enBlanco">
				<div class="inicioTexto">
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnRegla.enGlosario.nombre">
							</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnRegla.verDescripcionGlosario()" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Descripción:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Descripción" ng-disabled="true" ng-model="cnRegla.enGlosario.descripcion">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Expresión:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="cnRegla.disabled" ng-model="cnRegla.expresion" ></textarea>
							</div>
						</div>						
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Concepto:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnRegla.listaConceptos track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-click="cnRegla.verConceptoRegla({{$index}})" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" ng-click="eliminarConceptoRegla({{$index}})" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnRegla.agregarConceptoRegla()" class="btn btn-link " ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Atributo:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="atributo in cnRegla.listaAtributo track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="atributo.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"ng-click="cnRegla.verAtributoRegla({{$index}})" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" ng-click="eliminarAtributoRegla({{$index}})" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnRegla.agregarAtributoRegla()" class="btn btn-link " ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Relación:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="relacion in cnRegla.listaRelaciones track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="relacion.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"ng-click="cnRegla.verRelacionRegla({{$index}})" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" ng-click="eliminarRelacionRegla({{$index}})" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnRegla.agregarRelacionRegla()" class="btn btn-link " ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>					
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Variables:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="cnRegla.disabled" ng-model="cnAxioma.variables" ></textarea>
							</div>
						</div>													
						<div class="form-group" ng-show="!cnRegla.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnRegla.modificarRegla()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnRegla.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnRegla.modifiqueRegla()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnRegla.cancelaRegla() ">Cancelar</button>
							</div>	
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- Modal Glosario -->
	<div class="modal fade" id="verDescripcionGlosarioReglaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
	<!-- Agregar concepto -->
	<div class="modal fade" id="verAgregarConceptoReglaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar Concepto</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Nombre:</label>
						</div>
							<div class="col-xs-6 divCentrado formulario">
								<div angucomplete-alt
								 id="cnSelectedConcepto" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnAtributoInstancia.selectedConcepto" 
								  local-data="cnRegla.concepto1" 
								  search-fields="nombre" 
								  title-field="nombre" 
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight" 
  								  initial-value="{{cnAtributoInstancia.selectedConcepto.nombre}}"
								  disable-input="cnAtributoInstancia.disabled">
        						</div>
        					</div>
					</div>
				</div>								
				<div class="modal-footer">
					<button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
	<!-- Ver concepto -->
	<div class="modal fade" id="verConceptoReglaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Concepto</h4>
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
	<!-- Agregar relacion -->
	<div class="modal fade" id="verAgregarRelacionReglaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar Relación</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Nombre:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
								<div angucomplete-alt
								 id="cnSelectedConcepto" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnAtributoInstancia.selectedConcepto" 
								  local-data="cnRegla.relaciones" 
								  search-fields="nombre" 
								  title-field="nombre" 
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight" 
  								  initial-value="{{cnAtributoInstancia.selectedConcepto.nombre}}"
								  disable-input="cnAtributoInstancia.disabled">
        						</div>
        					</div>
					</div>
				</div>						
				<div class="modal-footer">
					<button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
	<!-- Ver relación -->
	<div class="modal fade" id="verRelacionReglaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Relación</h4>
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
	<!-- Agregar atributo -->
	<div class="modal fade" id="verAtributoReglaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar Atributo</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Nombre:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
								<div angucomplete-alt
								 id="cnSelectedConcepto" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnAtributoInstancia.selectedConcepto" 
								  local-data="cnRegla.atributos" 
								  search-fields="nombre" 
								  title-field="nombre" 
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight" 
  								  initial-value="{{cnAtributoInstancia.selectedConcepto.nombre}}"
								  disable-input="cnAtributoInstancia.disabled">
        						</div>
        					</div>
					</div>
				</div>						
				<div class="modal-footer">
					<button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
	<!-- Ver atributo -->
	<div class="modal fade" id="verAtributoReglaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Atributo</h4>
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