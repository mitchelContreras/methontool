<div ng-controller="ControllerInstancia  as cnInstancia">
 <div ng-show="cnInstancia.soyActual"> 
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroInstancia.buscarPor='seleccione'">
								<select ng-model="filtroInstancia.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroInstancia.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroInstancia.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroInstancia.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroInstancia.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroInstancia.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroInstancia.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroInstancia.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnInstancia.listaInstancia | orderBy: 'nombre' | filter:{nombre: filtroInstancia.nombre}">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstancia.seleccionado == glosario.id}"
										ng-click="cnInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>		
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroInstancia.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnInstancia.listaInstancia | orderBy: 'nombre' | filter:{sinonimos: filtroInstancia.sinonimo}">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstancia.seleccionado == glosario.id}"
										ng-click="cnInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>	
								</div>
							</div>
						</div>
						<div ng-if="filtroInstancia.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnInstancia.listaInstancia | orderBy: 'nombre' | filter:{acronimos: filtroInstancia.acronimo}">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstancia.seleccionado == glosario.id}"
										ng-click="cnInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
								</div>
							</div>
						</div>
						<div ng-if="filtroInstancia.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnInstancia.listaInstancia | orderBy: 'nombre' ">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstancia.seleccionado == glosario.id}"
										ng-click="cnInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>	
								</div>
							</div>					
						</div>		
					</div>							
				</div>			
			</div>
			<div class="col-md-8 cuerpoDos" >
				<div class="inicioTexto" ng-show="!cnInstancia.enBlanco">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnInstancia.alertPositiva">
				   		 {{cnInstancia.mensajeAlertPositiva}}
					</div>
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnInstancia.alertNegativa">
				   		 <strong>Error!</strong> {{cnInstancia.mensajeAlertNegativa}}
					</div>	
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnInstancia.varEdicion.glosarioInstancia.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
							<div class="btn-group">
								<button ng-click="cnInstancia.verConceptoAsociado()" 
								class="btn btn-link " 
								aria-label="Center Align" type="button"
								data-toggle="tooltip" data-placement="top" title="Ver concepto asociado">
								    <span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>
								</button>
							</div>							
								<label >Concepto:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnInstancia.varEdicion.conceptoAsociado.nombre">
							</div>
						</div>		
									
			<div ng-repeat="atributo in cnInstancia.varAuxiliarDefinicion">
			
				<div class="form-group">
					<div class="col-xs-4 control-label" >
						<div class="btn-group">
							<button ng-click="cnInstancia.verAtributoLista(atributo)" 
							class="btn btn-link " 
							aria-label="Center Align" type="button"
							data-toggle="tooltip" data-placement="top" title="Ver descripción atirbuto">
							    <span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>
							</button>
						</div>
						<label>{{atributo.nombre}}:</label>
					</div>
					<div class="col-xs-5">
						<div class="row" ng-repeat="valores in atributo.valores track by $index" id="{{$index}}">
							<div class="col-xs-9">
								<input class="form-control" ng-model="valores" ng-disabled="cnInstancia.disabled"></input>
							</div>
							<div class="col-xs-3">
								<div class="btn-group">
									<button ng-click="cnInstancia.eliminarAtributoLista($index, atributo)" 
									class="btn btn-link " 
									ng-class="{'disabled': cnInstancia.disabled == true}" 
									ng-show="cnInstancia.modificar" aria-label="Center Align" type="button"
									data-toggle="tooltip" data-placement="top" title="Eliminar valor">
									    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
									</button>
								</div>									
							</div>
						</div>
						<div>
							<button ng-click="cnInstancia.agregarAtributoLista(atributo)" class="btn btn-link " 
							ng-class="{'disabled': cnInstancia.disabled == true}" 
							ng-show="cnInstancia.modificar" aria-label="Center Align" type="button"
							data-toggle="tooltip" data-placement="top" title="Agregar Valor">
							    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
							</button>							
						</div>
					</div>
				</div>
			</div>							
							
						
												
						<div class="form-group" ng-show="!cnInstancia.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnInstancia.modificarInstancia()">Modificar</button>
							</div>
						</div>						
						<div class="form-group" ng-show="cnInstancia.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnInstancia.modifiqueInstancia()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnInstancia.cancelaInstancia() ">Cancelar</button>
							</div>	
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<!--Modal conpceto asociado -->
	<div class="modal fade" id="verModalverConceptoAsociado" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Información Concepto Asociado</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Nombre:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<input ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.varEdicion.conceptoAsociado.nombre">
						</div>
					</div>
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Descripción:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<textarea ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.varEdicion.conceptoAsociado.descripcion"></textarea>
						</div>
					</div>
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Sinonimo:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<div  class="row" ng-repeat="sinonimo in cnInstancia.varEdicion.conceptoAsociado.sinonimos">
								<div class="col-xs-12">
										<input ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="sinonimo">
								</div>
							</div>	
						</div>
					</div>						
				</div>			
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
		
		<!-- Modal actualizar Concepto-->
	<div class="modal fade" id="verModalactualizarConceptoInstancia1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Actualizar Concepto</h4>
				</div>
				<div class="inicioTexto" >					
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Concepto:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
       						<div angucomplete-alt
								 id="completeListaConceptoInstancia1" placeholder="Concepto"
								  maxlength="50"
								  pause="100"
								  selected-object="cnInstancia.varEdicion.conceptoSelected" 
								  local-data="cnInstancia.listaConcepto" 
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
					<button class="btn btn-primary" type="button" ng-click="cnInstancia.cambieConcepto()">Guardar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
	
	<!-- Modal ver descripcion atributo-->
	<div class="modal fade" id="verModaldescripcionAtributoInstancia1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Información Atributo</h4>
				</div>
				<div class="inicioTexto">
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Nombre:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<input ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.auxAtributo.nombre">
						</div>
					</div>
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Descripción:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<textarea ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.auxAtributo.descripcion"></textarea>
						</div>
					</div>
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Cardinalidad Min:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<input ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.auxAtributo.cardinalidadMinima">
						</div>
					</div>
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Cardinalidad MAx:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<input ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.auxAtributo.cardinaliadMaxima">
						</div>
					</div>					
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Precisión:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<input ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.auxAtributo.precision">
						</div>
					</div>
					<div class="row centered">
						<div class="col-xs-4 divCentrado formulario" >
							<label class="control-label col-xs-12">Rango de valores:</label>
						</div>
						<div class="col-xs-5 divCentrado formulario">
							<input ng-disabled="true" type="text" class="form-control" placeholder="" ng-model="cnInstancia.auxAtributo.rangoValores">
						</div>
					</div>					
				</div>			
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
	
	<!-- Modal alerta de nuevo valor-->
	<div class="modal fade" id="verModalagregarNuevoValorListaInstancia1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Agregar valor</h4>
				</div>
				<div class="inicioTexto" >					
					<div class="row centered">
						<div class="col-xs-2 divCentrado formulario" >
							<label class="control-label col-xs-2">Valor:</label>
						</div>
						<div class="col-xs-6 divCentrado formulario">
							<input type="text" class="form-control" placeholder="Nombre" ng-model="cnGlosario.nuevoAcronimo">
						</div>
					</div>					
				</div>				
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnInstancia.cambieConcepto()">Guardar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>
		
	<!-- Modal agregar nuevo valor-->
	<div class="modal fade" id="verModalAlertaAgregarNuevoValorListaInstancia1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Alerta</h4>
				</div>
				<div class="inicioTexto" >					
					<div class="row centered">
						<div class="col-xs-10 divCentrado formulario" >
							El atributo <b>{{cnInstancia.atributoAuxiliar.nombre}}</b> posee una cardinalidad
							 <b>[{{cnInstancia.atributoAuxiliar.cardinalidadMinima}}:{{cnInstancia.atributoAuxiliar.cardinaliadMaxima}}]</b>, el agregar un nuevo
							 registro puede romper la regla. 
						</div>
					</div>
					<div class="row centered">
						<div class="col-xs-10 divCentrado formulario" >
							¿Seguro que desea continuar?
						</div>
					</div>												
				</div>				
				<div class="modal-footer">
					
					<button class="btn btn-primary" type="button" ng-click="cnInstancia.confirmoAgregarAtributoLista()">Aceptar</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
				
			</div>
		</div>
	</div>	
</div>