<div ng-controller="ControllerAtributoInstancia  as cnAtributoInstancia">
 <div ng-show="cnAtributoInstancia.soyActual"> 
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroAtributoInstancia.buscarPor='seleccione'">
								<select ng-model="filtroAtributoInstancia.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroAtributoInstancia.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAtributoInstancia.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroAtributoInstancia.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAtributoInstancia.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroAtributoInstancia.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAtributoInstancia.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroAtributoInstancia.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAtributoInstancia.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroAtributoInstancia.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 3">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAtributoInstancia.seleccionado == glosario.id}"
										ng-click="cnAtributoInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroAtributoInstancia.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnAtributoInstancia.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroAtributoInstancia.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 3">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAtributoInstancia.seleccionado == glosario.id}"
										ng-click="cnAtributoInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroAtributoInstancia.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAtributoInstancia.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroAtributoInstancia.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 3">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAtributoInstancia.seleccionado == glosario.id}"
										ng-click="cnAtributoInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroAtributoInstancia.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAtributoInstancia.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 3">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAtributoInstancia.seleccionado == glosario.id}"
										ng-click="cnAtributoInstancia.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnAtributoInstancia.enBlanco">
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnAtributoInstancia.enBlanco">
				<div class="inicioTexto">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnAtributoInstancia.alertPositiva">
				   		 {{cnAtributoInstancia.mensajeAlertPositiva}}
					</div>
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnAtributoInstancia.alertNegativa">
				   		 <strong>Error!</strong> {{cnAtributoInstancia.mensajeAlertNegativa}}
					</div>			
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnAtributoInstancia.varEdicion.glosarioAtributoInstanciaActual.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Concepto:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnAtributoInstancia.varEdicion.glosarioConcepto.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Tipo valor:</label>
							</div>
							<div class="col-xs-5">
									<select class="form-control" ng-disabled="cnAtributoInstancia.disabled" ng-model="cnAtributoInstancia.varEdicion.tipoDeDato"
 									ng-options="tipoDeDato.nombre for tipoDeDato in  cnAtributoInstancia.listaTipoDeDato track by tipoDeDato.codigo" >
								        <option value="">[SELECCIONE]</option>    
								    </select>
							</div>	
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Medida:</label>
							</div>
							<div class="col-xs-5">
									<select class="form-control" ng-disabled="cnAtributoInstancia.disabled" ng-model="cnAtributoInstancia.varEdicion.medida"
 									ng-options="medida.nombre for medida in  cnAtributoInstancia.listaMedida track by medida.codigo" >
								        <option value="">[SELECCIONE]</option>    
								    </select>
							</div>	
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Precisión:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Rango" ng-disabled="cnAtributoInstancia.disabled" ng-model="cnAtributoInstancia.varEdicion.precision">
							</div>
						</div>									
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Rango de valores:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Rango" ng-disabled="cnAtributoInstancia.disabled" ng-model="cnAtributoInstancia.varEdicion.rangoValores">
							</div>
						</div>												
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Cardinalidad:</label>
							</div>
							<div class="col-xs-5 ">
								<div class="col-xs-5">
									<input type="text" ng-disabled="cnAtributoInstancia.disabled" class="form-control" placeholder="Minimo" ng-model="cnAtributoInstancia.varEdicion.minCardinalidad">	
								</div>
								<div class="col-xs-1">
								</div>
								<div class="col-xs-5">
									<input type="text" ng-disabled="cnAtributoInstancia.disabled" class="form-control" placeholder="Maximo" ng-model="cnAtributoInstancia.varEdicion.maxCardinalidad">										
								</div>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Valor por defecto:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Valor" ng-disabled="cnAtributoInstancia.disabled" ng-model="cnAtributoInstancia.varEdicion.valorDefecto">
							</div>
						</div>								
						<div class="form-group" ng-show="!cnAtributoInstancia.modificar && cnAtributoInstancia.conceptoAsociado">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnAtributoInstancia.modificarAtributoInstancia()">Modificar</button>
							</div>
						</div>
						<div class="form-group" ng-show="cnAtributoInstancia.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnAtributoInstancia.modifiqueAtributoInstancia()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnAtributoInstancia.cancelaAtributoInstancia() ">Cancelar</button>
							</div>	
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
	
</div>