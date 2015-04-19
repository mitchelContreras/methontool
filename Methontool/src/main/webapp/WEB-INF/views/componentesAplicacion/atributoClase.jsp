<div ng-controller="ControllerAtributoClase  as cnAtributoClase">
 <div ng-show="cnAtributoClase.soyActual"> 
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">	
				<p> UNO Atributo de Clase </p>
			</div>
			<div class="col-md-8 cuerpoDos">
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
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Tipo valor:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Tipo valor" ng-disabled="cnAtributoClase.disabled" ng-model="cnAtributoClase.tipoValor">
							</div>
						</div>											
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Cardinalidad:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Cardinalidad" ng-disabled="cnAtributoClase.disabled" ng-model="cnAtributoClase.cardinalidad">
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Valores:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Rango" ng-disabled="cnAtributoClase.disabled" ng-model="cnAtributoClase.valores">
							</div>
						</div>								
						<div class="form-group" ng-show="!cnAtributoClase.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnAtributoClase.modificarAtributoClase()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnAtributoClase.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnAtributoClase.modifiqueAtributoClase()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnAtributoClase.cancelaAtributoClase() ">Cancelar</button>
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