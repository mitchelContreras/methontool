<div ng-controller="ControllerConcepto as cnConcepto">
 <div ng-show="cnConcepto.soyActual"> 
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroConcepto.buscarPor='seleccione'">
								<select ng-model="filtroConcepto.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroConcepto.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroConcepto.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroConcepto.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroConcepto.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroConcepto.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroConcepto.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroConcepto.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnConcepto.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroConcepto.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConcepto.seleccionado == glosario.id}"
										ng-click="cnConcepto.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroConcepto.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnConcepto.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroConcepto.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConcepto.seleccionado == glosario.id}"
										ng-click="cnConcepto.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroConcepto.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnConcepto.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroConcepto.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConcepto.seleccionado == glosario.id}"
										ng-click="cnConcepto.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroConcepto.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnConcepto.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnConcepto.seleccionado == glosario.id}"
										ng-click="cnConcepto.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>	
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnConcepto.enBlanco">
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnConcepto.enBlanco">
				<div class="inicioTexto">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnConcepto.alertPositiva">
				   		 {{cnConcepto.mensajeAlertPositiva}}
					</div>
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnConcepto.alertNegativa">
				   		 <strong>Error!</strong> {{cnConcepto.mensajeAlertNegativa}}
					</div>					
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnConcepto.ConceptoActual.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<span ng-show="cnGlosario.modificar">*&nbsp;</span><label>Descripción:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="true" ng-model="cnConcepto.ConceptoActual.descripcion"></textarea>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Relaciones:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnConcepto.ConceptoActual.relaciones track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="false" ng-click="cnConcepto.eliminarConcepto({{$index}}, 'relacion')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnConcepto.agregarConcepto('relacion')" class="btn btn-link " ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="false" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Instancias:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnConcepto.ConceptoActual.instancias track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="cnConcepto.modificar" ng-click="cnConcepto.eliminarConcepto({{$index}}, 'instancia')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnConcepto.agregarConcepto('instancia')" class="btn btn-link " ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="cnConcepto.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Atributos de clase:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnConcepto.ConceptoActual.atributosClase track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="cnConcepto.modificar" ng-click="cnConcepto.eliminarConcepto({{$index}}, 'atributoClase')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnConcepto.agregarConcepto('atributoClase')" class="btn btn-link " ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="cnConcepto.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Atributos de instancia:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnConcepto.ConceptoActual.atributosInstancia track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="cnConcepto.modificar" ng-click="cnConcepto.eliminarConcepto({{$index}}, 'atributoInstancia')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnConcepto.agregarConcepto('atributoInstancia')" class="btn btn-link " ng-class="{'disabled': cnConcepto.disabled == true}" ng-show="cnConcepto.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>						
						<div class="form-group" ng-show="!cnConcepto.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnConcepto.modificarConcepto()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnConcepto.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnConcepto.modifiqueConcepto()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnConcepto.cancelarModificarConcepto() ">Cancelar</button>
							</div>	
						</div>																																																							
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal agregar instancia-->
	<div class="modal fade" id="verAgregarInstanciaConcepto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar instancia</h4>
				</div>
				<div class="inicioTexto" >				
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Instancia:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="autoAgregarInstanciaConcepto" placeholder="Instancia"
								  maxlength="50"
								  pause="100"
								  selected-object="cnConcepto.AuxAgregar" 
								  local-data="cnConcepto.ConceptoActual.agregarInstancia" 
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
					<button class="btn btn-primary" type="button" ng-click="cnConcepto.agregueConcepto('instancia')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>	
	
	<!-- Modal agregar atributo clase-->
	<div class="modal fade" id="verAgregarAtributoClaseConcepto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar atributo de clase</h4>
				</div>
				<div class="inicioTexto" >				
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Atributo de clase:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="autoAgregarAtributoClaseConcepto" placeholder="Relación inversa"
								  maxlength="50"
								  pause="100"
								  selected-object="cnConcepto.AuxAgregar" 
								  local-data="cnConcepto.ConceptoActual.agregarAtributosClase" 
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
					<button class="btn btn-primary" type="button" ng-click="cnConcepto.agregueConcepto('atributoClase')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>	
			
	<!-- Modal agregar atributo instancia-->
	<div class="modal fade" id="verAgregarAtributoInstanciaConcepto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar atributo de instancia</h4>
				</div>
				<div class="inicioTexto" >				
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Atributo de instancia:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="autoAgregarAtributoInstanciaConcepto" placeholder="Instancia"
								  maxlength="50"
								  pause="100"
								  selected-object="cnConcepto.AuxAgregar" 
								  local-data="cnConcepto.ConceptoActual.agregarAtributosInstancia" 
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
					<button class="btn btn-primary" type="button" ng-click="cnConcepto.agregueConcepto('atributoInstancia')">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>			
</div>