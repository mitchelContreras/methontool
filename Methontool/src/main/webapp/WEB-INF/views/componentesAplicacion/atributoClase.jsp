<div ng-controller="ControllerAtributoClase  as cnAtributoClase">
 <div ng-show="cnAtributoClase.soyActual"> 
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroAtributoClase.buscarPor='seleccione'">
								<select ng-model="filtroAtributoClase.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroAtributoClase.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAtributoClase.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroAtributoClase.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAtributoClase.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroAtributoClase.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroAtributoClase.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroAtributoClase.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAtributoClase.listaGlosario | orderBy: 'nombre' | filter:{nombre: filtroAtributoClase.nombre}">
									<div ng-if="glosario.tipoGlosario.id == 4">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnRelacion.seleccionado == glosario.id}"
										ng-click="cnAtributoClase.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroAtributoClase.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnAtributoClase.listaGlosario | orderBy: 'nombre' | filter:{sinonimos: filtroAtributoClase.sinonimo}">
									<div ng-if="glosario.tipoGlosario.id == 4">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAtributoClase.seleccionado == glosario.id}"
										ng-click="cnAtributoClase.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroAtributoClase.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAtributoClase.listaGlosario | orderBy: 'nombre' | filter:{acronimos: filtroAtributoClase.acronimo}">
									<div ng-if="glosario.tipoGlosario.id == 4">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAtributoClase.seleccionado == glosario.id}"
										ng-click="cnAtributoClase.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>
						</div>
						<div ng-if="filtroAtributoClase.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnAtributoClase.listaGlosario | orderBy: 'nombre' ">
									<div ng-if="glosario.tipoGlosario.id == 4">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnAtributoClase.seleccionado == glosario.id}"
										ng-click="cnAtributoClase.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
									</div>
								</div>
							</div>					
						</div>		
					</div>							
				</div>
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="cnAtributoClase.enBlanco">
			</div>
			<div class="col-md-8 cuerpoDos" ng-show="!cnAtributoClase.enBlanco">
				<div class="inicioTexto">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnAtributoClase.alertPositiva">
				   		 {{cnAtributoClase.mensajeAlertPositiva}}
					</div> 
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnAtributoClase.alertNegativa">
				   		 <strong>Error!</strong> {{cnAtributoClase.mensajeAlertNegativa}}
					</div>				
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnAtributoClase.varEdicion.glosarioAtributoClaseActual.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Concepto:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnAtributoClase.varEdicion.glosarioConcepto.nombre">
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Tipo valor:</label>
							</div>
							<div class="col-xs-5">
									<select class="form-control" ng-disabled="cnAtributoClase.disabled" ng-model="cnAtributoClase.varEdicion.tipoDeDato"
 									ng-options="tipoDeDato.nombre for tipoDeDato in cnAtributoClase.listaTipoDeDato track by tipoDeDato.codigo" >
								        <option value="">[SELECCIONE]</option>    
								    </select>
							</div>	
						</div>
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Precisión:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Rango" ng-disabled="cnAtributoClase.disabled" ng-model="cnAtributoClase.varEdicion.precision">
							</div>
						</div>									
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Rango de valores:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Rango" ng-disabled="cnAtributoClase.disabled" ng-model="cnAtributoClase.varEdicion.rangoValores">
							</div>
						</div>												
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Cardinalidad:</label>
							</div>
							<div class="col-xs-5 ">
								<div class="col-xs-5">
									<input type="text" ng-disabled="cnAtributoClase.disabled" class="form-control" placeholder="Minimo" ng-model="cnAtributoClase.varEdicion.minCardinalidad">	
								</div>
								<div class="col-xs-1">
								</div>
								<div class="col-xs-5">
									<input type="text" ng-disabled="cnAtributoClase.disabled" class="form-control" placeholder="Maximo" ng-model="cnAtributoClase.varEdicion.maxCardinalidad">										
								</div>
							</div>
						</div>	
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Valor:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Valor" ng-disabled="cnAtributoClase.disabled" ng-model="cnAtributoClase.varEdicion.valorDefecto">
							</div>
						</div>									
						<div class="form-group" ng-show="!cnAtributoClase.modificar && cnAtributoClase.conceptoAsociado">
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
	
</div>