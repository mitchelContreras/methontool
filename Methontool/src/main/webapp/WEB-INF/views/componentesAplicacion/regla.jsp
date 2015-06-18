<div ng-controller="ControllerRegla  as cnRegla">
 <div ng-show="cnRegla.soyActual"> 	
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroRegla.buscarPor='seleccione'">
								<select ng-model="filtroRegla.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroRegla.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroRegla.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroRegla.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroRegla.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroRegla.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroRegla.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroRegla.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnRegla.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroRegla.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 7">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRegla.seleccionado == glosario.id}"
										ng-click="cnRegla.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroRegla.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnRegla.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroRegla.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 7">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRegla.seleccionado == glosario.id}"
										ng-click="cnRegla.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroRegla.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnRegla.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroRegla.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 7">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRegla.seleccionado == glosario.id}"
										ng-click="cnRegla.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroRegla.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnRegla.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 7">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRegla.seleccionado == glosario.id}"
										ng-click="cnRegla.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnRegla.enBlanco">
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnRegla.enBlanco">
				<div class="inicioTexto">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnRegla.alertPositiva">
				   		 {{cnRegla.mensajeAlertPositiva}}
					</div> 
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnRegla.alertNegativa">
				   		 <strong>Error!</strong> {{cnRegla.mensajeAlertNegativa}}
					</div>	
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnRegla.varEdicion.glosarioReglaActual.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Descripción:</label>
							</div>
							<div class="col-xs-5 ">
								<textarea class="form-control" rows="3" ng-disabled="true" ng-model="cnRegla.varEdicion.glosarioReglaActual.descripcion" ></textarea>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Expresión:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="cnRegla.disabled" ng-model="cnRegla.varEdicion.expresion" ></textarea>
							</div>
						</div>						
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Concepto:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnRegla.varEdicion.conceptos track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" ng-click="cnRegla.eliminarDeLista($index,'concepto')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>																	
								</div>	
								<div>
									<button ng-click="cnRegla.agregarALista('concepto')" class="btn btn-link " ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" aria-label="Center Align" type="button">
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
								<div class="row" ng-repeat="relacion in cnRegla.varEdicion.relaciones track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="relacion.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" ng-click="cnRegla.eliminarDeLista($index,'relacion')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnRegla.agregarALista('relacion')" class="btn btn-link " ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" aria-label="Center Align" type="button">
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
								<div class="row" ng-repeat="variable in cnRegla.varEdicion.variables track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="variable" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" ng-click="cnRegla.eliminarDeLista($index,'variable')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnRegla.agregarALista('variable')" class="btn btn-link " ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Atributos:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="atributo in cnRegla.varEdicion.atributo track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="atributo.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" ng-click="cnRegla.eliminarDeLista($index,'atributo')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnRegla.agregarALista('atributo')" class="btn btn-link " ng-class="{'disabled': cnRegla.disabled == true}" ng-show="cnRegla.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
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
	
	<!-- Modal agregar Atributo-->
	<div class="modal fade" id="verAgregarAtributoRegla" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar atributo </h4>
				</div>
				<div class="inicioTexto" >				
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Atributo:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="autoAgregarAtributoRegla" placeholder="Atributo"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRegla.AuxAgregar" 
								  local-data="cnRegla.ListaAgregar" 
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight">
       						</div>
        				</div>
					</div>						
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnRegla.agregueALista('atributo')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>		
	
	<!-- Modal agregar Concepto-->
	<div class="modal fade" id="verAgregarConceptoRegla" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar concepto</h4>
				</div>
				<div class="inicioTexto" >				
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Concepto:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="autoAgregarConceptoRegla" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRegla.AuxAgregar"
								  local-data="cnRegla.ListaAgregar"
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight">
       						</div>
        				</div>
					</div>						
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnRegla.agregueALista('concepto')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>	
	
	<!-- Modal agregar Relacion-->
	<div class="modal fade" id="verAgregarRelacionRegla" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar relación</h4>
				</div>
				<div class="inicioTexto" >				
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Relación:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="autoAgregarRelacionRegla" placeholder="Relación"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRegla.AuxAgregar"
								  local-data="cnRegla.ListaAgregar"
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight">
       						</div>
        				</div>
					</div>						
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnRegla.agregueALista('relacion')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>		
	
	<!-- Modal agregar Variable-->
	<div class="modal fade" id="verAgregarVariableRegla" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar variable</h4>
				</div>
				<div class="inicioTexto" >				
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Variable:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input type="text" class="form-control" placeholder="Variable" ng-model="cnRegla.AuxAgregar">
						</div>
					</div>						
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnRegla.agregueALista('variable')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>		
	
</div>