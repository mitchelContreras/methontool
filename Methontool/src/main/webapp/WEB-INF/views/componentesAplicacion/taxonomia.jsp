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
							<div class="col-xs-2">
								<div class="btn-group">
									<button ng-click="cnGlosario.crearGlosario()" class="btn btn-link "  
									aria-label="Center Align" type="button" 
									data-toggle="tooltip" data-placement="top" title="Agregar Glosario">
									    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>
								</div>									
							</div>							
						</div>
						<div class="row">
							<div class="btn-group col-xs-6" ng-init="filtroGlosario.buscarPor='seleccione'">
								<select ng-model="filtroGlosario.buscarPor" class="form-control" style="padding-right: -15px"
								ng-change=" filtroGlosario.nombre = '', filtroGlosario.sinonimo='', filtroGlosario.acronimo= '' ">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroGlosario.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroGlosario.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroGlosario.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroGlosario.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroGlosario.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroGlosario.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroGlosario.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnGlosario.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroGlosario.nombre}">
									<a href="#" class="list-group-item" 
									ng-class="{active: cnGlosario.seleccionado == glosario.id}"
									ng-click="cnGlosario.seleccioneGlosario (glosario, 1)"> {{glosario.nombre}}</a>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroGlosario.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnGlosario.listaGlosario | orderBy: 'nombre' | filter:{sinonimos:filtroGlosario.sinonimo}">
									<a href="#" class="list-group-item" 
									ng-class="{active: cnGlosario.seleccionado == glosario.id}"
									ng-click="cnGlosario.seleccioneGlosario (glosario, 1)"> {{glosario.nombre}}</a>
								</div>
							</div>
						</div>
						<div ng-if="filtroGlosario.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnGlosario.listaGlosario | orderBy: 'nombre' | filter:{acronimos:filtroGlosario.acronimo}">
									<a href="#" class="list-group-item" 
									ng-class="{active: cnGlosario.seleccionado == glosario.id}"
									ng-click="cnGlosario.seleccioneGlosario (glosario, 1)"> {{glosario.nombre}}</a>
								</div>
							</div>
						</div>
						<div ng-if="filtroGlosario.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnGlosario.listaGlosario | orderBy: 'nombre'">
									<a href="#" class="list-group-item" 
									ng-class="{active: cnGlosario.seleccionado == glosario.id}"
									ng-click="cnGlosario.seleccioneGlosario (glosario, 1)"> {{glosario.nombre}}</a>
								</div>
							</div>					
						</div>		
					</div>							
				</div>	
			
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnGlosario.enBlanco">
			
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnTaxonomia.enBlanco">
				<p> DOS Taxonomia</p>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnTaxonomia.enBlanco">
				<div class="inicioTexto">
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnAtributoClase.enGlosario.nombre">
							</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnAtributoClase.verDescripcionGlosario()" ><i class="glyphicon glyphicon-zoom-in"></i></a>							
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Concepto:</label>
							</div>
							<div class="col-xs-5 ">
								<div angucomplete-alt
								 id="cnSelectedConceptoClase" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnAtributoClase.selectedConcepto" 
								  local-data="cnAtributoClase.concepto1" 
								  search-fields="nombre" 
								  title-field="nombre" 
								  minlength="1" 
								  input-class="form-control" 
								  match-class="highlight" 
  								  initial-value="{{cnAtributoClase.selectedConcepto.nombre}}"
								  disable-input="cnAtributoClase.disabled">
        						</div>
        					</div>
							<div class="col-xs-1">
								<a class="btn"ng-click="cnAtributoClase.verConcepto()" ><i class="glyphicon glyphicon-zoom-in"></i></a>														
							</div>
						</div>																										
					</form>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- Modal Glosario -->
	<div class="modal fade" id="verDescripcionGlosarioAtributoClaseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
	
	<!-- Modal Concepto-->
	<div class="modal fade" id="verConceptoAtributoClaseModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Concepto</h4>
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