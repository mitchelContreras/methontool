<div ng-controller="ControllerAxioma  as cnAxioma">
 <div ng-show="cnAxioma.soyActual"> 	
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroAxioma.buscarPor='seleccione'">
								<select ng-model="filtroAxioma.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroAxioma.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAxioma.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroAxioma.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAxioma.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroAxioma.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAxioma.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroAxioma.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAxioma.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroAxioma.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 6">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAxioma.seleccionado == glosario.id}"
										ng-click="cnAxioma.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroAxioma.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnAxioma.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroAxioma.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 6">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAxioma.seleccionado == glosario.id}"
										ng-click="cnAxioma.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroAxioma.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAxioma.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroAxioma.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 6">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAxioma.seleccionado == glosario.id}"
										ng-click="cnAxioma.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroAxioma.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAxioma.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 6">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAxioma.seleccionado == glosario.id}"
										ng-click="cnAxioma.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>			
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnAxioma.enBlanco">
				<p> DOS Axioma </p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnAxioma.enBlanco">
				<div class="inicioTexto">
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnAxioma.varEdicion.glosarioAxiomaActual.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Descripción:</label>
							</div>
							<div class="col-xs-5 ">
								<textarea class="form-control" rows="3" ng-disabled="true" ng-model="cnAxioma.varEdicion.glosarioAxiomaActual.descripcion" ></textarea>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Expresión:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="cnAxioma.disabled" ng-model="cnAxioma.varEdicion.expresion" ></textarea>
							</div>
						</div>						
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Concepto:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnAxioma.varEdicion.conceptos track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" ng-click="cnAxioma.eliminarDeLista($index,'concepto')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>																	
								</div>	
								<div>
									<button ng-click="cnAxioma.agregarALista('concepto')" class="btn btn-link " ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" aria-label="Center Align" type="button">
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
								<div class="row" ng-repeat="relacion in cnAxioma.varEdicion.relaciones track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="relacion.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" ng-click="cnAxioma.eliminarDeLista($index,'relacion')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnAxioma.agregarALista('relacion')" class="btn btn-link " ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" aria-label="Center Align" type="button">
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
								<div class="row" ng-repeat="variable in cnAxioma.varEdicion.variables track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="variable" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" ng-click="cnAxioma.eliminarDeLista($index,'variable')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnAxioma.agregarALista('variable')" class="btn btn-link " ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" aria-label="Center Align" type="button">
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
								<div class="row" ng-repeat="atributo in cnAxioma.varEdicion.atributo track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="atributo.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" ng-click="cnAxioma.eliminarDeLista($index,'atributo')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnAxioma.agregarALista('atributo')" class="btn btn-link " ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>																				
						<div class="form-group" ng-show="!cnAxioma.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnAxioma.modificarAxioma()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnAxioma.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnAxioma.modifiqueAxioma()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnAxioma.cancelaAxioma() ">Cancelar</button>
							</div>	
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal agregar Atributo-->
	<div class="modal fade" id="verAgregarAtributoAxioma" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
								 id="autoAgregarAtributoAxioma" placeholder="Atributo"
								  maxlength="50"
								  pause="100"
								  selected-object="cnAxioma.AuxAgregar" 
								  local-data="cnAxioma.ListaAgregar" 
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
					<button class="btn btn-primary" type="button" ng-click="cnAxioma.agregueALista('atributo')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>		
	
	<!-- Modal agregar Concepto-->
	<div class="modal fade" id="verAgregarConceptoAxioma" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
								 id="autoAgregarConceptoAxioma" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnAxioma.AuxAgregar"
								  local-data="cnAxioma.ListaAgregar"
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
					<button class="btn btn-primary" type="button" ng-click="cnAxioma.agregueALista('concepto')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>	
	
	<!-- Modal agregar Relacion-->
	<div class="modal fade" id="verAgregarRelacionAxioma" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
								 id="autoAgregarRelacionAxioma" placeholder="Relación"
								  maxlength="50"
								  pause="100"
								  selected-object="cnAxioma.AuxAgregar"
								  local-data="cnAxioma.ListaAgregar"
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
					<button class="btn btn-primary" type="button" ng-click="cnAxioma.agregueALista('relacion')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>		
	
	<!-- Modal agregar Variable-->
	<div class="modal fade" id="verAgregarVariableAxioma" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
							<input type="text" class="form-control" placeholder="Variable" ng-model="cnAxioma.AuxAgregar">
						</div>
					</div>						
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnAxioma.agregueALista('variable')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>		
	
</div>