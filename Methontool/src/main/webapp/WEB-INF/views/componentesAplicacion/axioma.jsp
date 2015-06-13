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
									<option value="sinonimo">Sin�nimo</option>
									<option value="acronimo">Acr�nimo</option>
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
								<label >Descripci�n:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Descripci�n" ng-disabled="true" ng-model="cnAxioma.varEdicion.glosarioAxiomaActual.descripcion">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Expresi�n:</label>
							</div>
							<div class="col-xs-5">
								<textarea class="form-control" rows="3" ng-disabled="cnAxioma.disabled" ng-model="cnAxioma.expresion" ></textarea>
							</div>
						</div>						
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Concepto:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="concepto in cnAxioma.listaConceptos track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="concepto.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-click="cnAxioma.verConceptoAxioma({{$index}})" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
									</div>								
								</div>	
								<div>
									<button ng-click="cnAxioma.agregarConceptoAxioma()" class="btn btn-link " ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" aria-label="Center Align" type="button">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>							
								</div>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label>Relaci�n:</label>
							</div>
							<div class="col-xs-5">
								<div class="row" ng-repeat="relacion in cnAxioma.listaRelaciones track by $index" id="{{$index}}">
									<div class="col-xs-9 ">
										<input class="form-control" ng-model="relacion.nombre" ng-disabled="true">
									</div>
									<div class="col-xs-1">
										<a class="btn"ng-click="cnAxioma.verRelacionAxioma({{$index}})" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
									</div>
									<div class="col-xs-1">
										<a class="btn"  ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" ng-click="eliminarRelacionAxioma({{$index}})" ><i class="glyphicon glyphicon-trash"></i></a>							
									</div>	
								</div>	
								<div>
									<button ng-click="cnAxioma.agregarRelacionAxioma()" class="btn btn-link " ng-class="{'disabled': cnAxioma.disabled == true}" ng-show="cnAxioma.modificar" aria-label="Center Align" type="button">
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
								<textarea class="form-control" rows="3" ng-disabled="cnAxioma.disabled" ng-model="cnAxioma.variables" ></textarea>
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
	
	
	<!-- Modal Glosario -->
	<div class="modal fade" id="verDescripcionGlosarioAxiomaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Descripci�n glosario</h4>
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
	<div class="modal fade" id="verAgregarConceptoAxiomaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
								  local-data="cnAxioma.concepto1" 
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
	<div class="modal fade" id="verConceptoAxiomaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
	<div class="modal fade" id="verAgregarRelacionAxiomaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar Relaci�n</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Nombre:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="completeListaGlosarioOrigenRelacion" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnRelacion.varEdicion.glosarioOrigen" 
								  local-data="cnRelacion.listaGlosarioConceptoOrigen" 
								  search-fields="nombre" 
								  title-field="nombre"
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight" 
	 							  initial-value="{{cnRelacion.varEdicion.glosarioOrigen.nombre}}">
       						</div>
       						concepto: {{cnRelacion.varEdicion.glosarioOrigen}}
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
	<!-- Ver relaci�n -->
	<div class="modal fade" id="verRelacionAxiomaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Relaci�n</h4>
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