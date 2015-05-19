<div ng-controller="ControllerTaxonomia  as cnTaxonomia">
 <div ng-show="cnTaxonomia.soyActual"> 
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroTaxonomia.buscarPor='seleccione'">
								<select ng-model="filtroTaxonomia.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroTaxonomia.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroTaxonomia.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroTaxonomia.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroTaxonomia.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroTaxonomia.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroTaxonomia.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroTaxonomia.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroTaxonomia.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnTaxonomia.seleccionado == glosario.id}"
										ng-click="cnTaxonomia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroTaxonomia.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroTaxonomia.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnTaxonomia.seleccionado == glosario.id}"
										ng-click="cnTaxonomia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroTaxonomia.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroTaxonomia.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnTaxonomia.seleccionado == glosario.id}"
										ng-click="cnTaxonomia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroTaxonomia.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 2">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnTaxonomia.seleccionado == glosario.id}"
										ng-click="cnTaxonomia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>	
			
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnTaxonomia.enBlanco">
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnTaxonomia.enBlanco">
				<div class="inicioTexto">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnTaxonomia.alertPositiva">
				   		 {{cnTaxonomia.mensajeAlertPositiva}}
					</div>
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnTaxonomia.alertNegativa">
				   		 <strong>Error!</strong> {{cnTaxonomia.mensajeAlertNegativa}}
					</div>					
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnTaxonomia.varEdicion.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<span ng-show="cnGlosario.modificar">*&nbsp;</span><label>Descripción:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="true" ng-model="cnTaxonomia.varEdicion.descripcion"></textarea>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Sub-Clase de:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnTaxonomia.varEdicion.listaSubClase track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" ng-click="cnTaxonomia.eliminarConceptoTaxonomia({{$index}}, '1')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnTaxonomia.agregarConceptoRelacion('1')" class="btn btn-link " ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Descomposición Disjunta:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnTaxonomia.varEdicion.listaDisjunta track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" ng-click="cnTaxonomia.eliminarConceptoTaxonomia({{$index}}, '2')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnTaxonomia.agregarConceptoRelacion('2')" class="btn btn-link " ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Descomposición Exhaustiva:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnTaxonomia.varEdicion.listaExhustiva track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" ng-click="cnTaxonomia.eliminarConceptoTaxonomia({{$index}}, '3')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnTaxonomia.agregarConceptoRelacion('3')" class="btn btn-link " ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Partición:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnTaxonomia.varEdicion.listaParticion track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" ng-click="cnTaxonomia.eliminarConceptoTaxonomia({{$index}}, '4')" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>										
								</div>	
								<div>
									<button ng-click="cnTaxonomia.agregarConceptoRelacion('4')" class="btn btn-link " ng-class="{'disabled': cnTaxonomia.disabled == true}" ng-show="cnTaxonomia.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>						
						<div class="form-group" ng-show="!cnTaxonomia.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnTaxonomia.modificarTaxonomia()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnTaxonomia.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnTaxonomia.modifiqueTaxonomia()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnTaxonomia.cancelarModificarTaxonomia() ">Cancelar</button>
							</div>	
						</div>																																																							
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Modal Concepto-->
	<div class="modal fade" id="agregarConceptoTaxonomiaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar Concepto</h4>
				</div>
				<div class="inicioTexto">
					<div class="form-group formulario" style="margin-left:155px;">
						<div class="row">
							<div class="col-xs-3 btn-group ">
								<span><strong>Buscar por:</strong></span>
							</div>
							<div class="col-xs-5" ">
								<select ng-model="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>						
						</div>
						<div class="row" style="margin-top : 3px;">
							<div class="col-xs-8 ">
								<input type="text" ng-model="filtroTaxonomiaAgregar.nombre" class="form-control" placeholder="Buscar" ng-disabled="false" ng-if="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor == 'nombre'">
								<input type="text" ng-model="filtroTaxonomiaAgregar.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false" ng-if="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor == 'sinonimo'">
								<input type="text" ng-model="filtroTaxonomiaAgregar.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false" ng-if="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor == 'acronimo'">
							</div>
						</div>
						<div class="row buscarEnModal">
							<div  class= "col-xs-11">
								<div ng-if="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor == 'nombre'">
									<div class="list-group">
										<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroTaxonomiaAgregar.nombre}">
											<div ng-if="glosario.tipoGlosario.id == 2 && glosario.id !=cnTaxonomia.varEdicion.id && !cnTaxonomia.estaEnLista(glosario)">
												<a href="#" class="list-group-item" 
												ng-class="{active: cnTaxonomia.seleccionadoAgregar.id == glosario.id}"
												ng-click="cnTaxonomia.seleccionadoAgregar = glosario"> {{glosario.nombre}}</a>									
											</div>
										</div>
									</div>	
								</div>
								<div ng-if="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor == 'sinonimo'">
									<div class="list-group ">
										<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroTaxonomiaAgregar.sinonimo}">
											<div ng-if="glosario.tipoGlosario.id == 2 && glosario.id !=cnTaxonomia.varEdicion.id && !cnTaxonomia.estaEnLista(glosario)">
												<a href="#" class="list-group-item" 
												ng-class="{active: cnTaxonomia.seleccionadoAgregar.id == glosario.id}"
												ng-click="cnTaxonomia.seleccionadoAgregar = glosario"> {{glosario.nombre}}</a>									
											</div>
										</div>
									</div>
								</div>
								<div ng-if="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor == 'acronimo'">
									<div class="list-group">
										<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroTaxonomiaAgregar.acronimo}">
											<div ng-if="glosario.tipoGlosario.id == 2 && glosario.id !=cnTaxonomia.varEdicion.id && !cnTaxonomia.estaEnLista(glosario)">
												<a href="#" class="list-group-item" 
												ng-class="{active: cnTaxonomia.seleccionadoAgregar.id == glosario.id}"
												ng-click="cnTaxonomia.seleccionadoAgregar = glosario"> {{glosario.nombre}}</a>									
											</div>
										</div>
									</div>
								</div>
								<div ng-if="cnTaxonomia.filtroTaxonomiaAgregar.buscarPor == 'seleccione'">
									<div class="list-group">
										<div ng-repeat="glosario in cnTaxonomia.listaGlosario | orderBy: 'nombre' ">
											<div ng-if="glosario.tipoGlosario.id == 2 && glosario.id !=cnTaxonomia.varEdicion.id && !cnTaxonomia.estaEnLista(glosario)">
												<a href="#" class="list-group-item" 
												ng-class="{active: cnTaxonomia.seleccionadoAgregar.id == glosario.id}"
												ng-click="cnTaxonomia.seleccionadoAgregar = glosario"> {{glosario.nombre}}</a>									
											</div>
										</div>
									</div>					
								</div>
							</div>
						</div>		
					</div>	
				</div>				
				<div class="modal-footer">
					<button ng-click ="cnTaxonomia.agregueGlosarioRelacion(cnTaxonomia.seleccionadoAgregar)" type="button" class="btn btn-default btn-primary" data-dismiss="modal">Agregar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>		
	
	
	
</div>