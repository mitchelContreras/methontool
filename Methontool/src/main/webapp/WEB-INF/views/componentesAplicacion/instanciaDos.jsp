<div ng-controller="ControllerInstanciaDos  as cnInstanciaDos">
 <div ng-show="cnInstanciaDos.soyActual"> 
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
							<div class="btn-group col-xs-6 form-group" ng-init="filtroInstanciaDos.buscarPor='seleccione'">
								<select ng-model="filtroInstanciaDos.buscarPor" class="form-control" style="padding-right: -15px">
									<option value="seleccione">[SELECCIONE]</option>
									<option value="nombre">Nombre</option>
									<option value="sinonimo">Sinónimo</option>
									<option value="acronimo">Acrónimo</option>
								</select> 
							</div>
							<div ng-if="filtroInstanciaDos.buscarPor == 'nombre'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroInstanciaDos.nombre" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroInstanciaDos.buscarPor == 'sinonimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroInstanciaDos.sinonimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
							<div ng-if="filtroInstanciaDos.buscarPor == 'acronimo'">
								<div class="col-xs-6 form-group" style="padding-left: -15px">
									<input type="text" ng-model="filtroInstanciaDos.acronimo" class="form-control" placeholder="Buscar" ng-disabled="false">
								</div>
							</div>
						</div>
						<div ng-if="filtroInstanciaDos.buscarPor == 'nombre'">
							<div class="list-group">
								<div ng-repeat="glosario in cnInstanciaDos.listaConcepto | orderBy: 'nombre' | filter:{nombre: filtroInstanciaDos.nombre}">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstanciaDos.seleccionado == glosario.id}"
										ng-click="cnInstanciaDos.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>		
								</div>
							</div>	
						
						</div>
						<div ng-if="filtroInstanciaDos.buscarPor == 'sinonimo'">
							<div class="list-group ">
								<div ng-repeat="glosario in cnInstanciaDos.listaConcepto | orderBy: 'nombre' | filter:{sinonimos: filtroInstanciaDos.sinonimo}">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstanciaDos.seleccionado == glosario.id}"
										ng-click="cnInstanciaDos.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>	
								</div>
							</div>
						</div>
						<div ng-if="filtroInstanciaDos.buscarPor == 'acronimo'">
							<div class="list-group">
								<div ng-repeat="glosario in cnInstanciaDos.listaConcepto | orderBy: 'nombre' | filter:{acronimos: filtroInstanciaDos.acronimo}">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstanciaDos.seleccionado == glosario.id}"
										ng-click="cnInstanciaDos.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>									
								</div>
							</div>
						</div>
						<div ng-if="filtroInstanciaDos.buscarPor == 'seleccione'">
							<div class="list-group">
								<div ng-repeat="glosario in cnInstanciaDos.listaConcepto | orderBy: 'nombre' ">
										<a href="#" class="list-group-item" 
										ng-class="{active: cnInstanciaDos.seleccionado == glosario.id}"
										ng-click="cnInstanciaDos.seleccioneGlosario (glosario, 'true')"> {{glosario.nombre}}</a>	
								</div>
							</div>					
						</div>		
					</div>							
				</div>			
			</div>
			<div class="col-md-8 cuerpoDos" >
				<div class="inicioTexto" ng-show="!cnInstanciaDos.enBlanco">
					<div align="center" class="alert alert-success alert-dismissible" ng-if="cnInstanciaDos.alertPositiva">
				   		 {{cnInstanciaDos.mensajeAlertPositiva}}
					</div>
					<div align="center" class="alert alert-danger alert-dismissible" ng-if="cnInstanciaDos.alertNegativa">
				   		 <strong>Error!</strong> {{cnInstanciaDos.mensajeAlertNegativa}}
					</div>	
					<form class=" form-horizontal">
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Nombre:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnInstanciaDos.varEdicion.glosarioConceptoActual.nombre">
							</div>
						</div>
						<div class="form-group" ng-show="!cnInstanciaDos.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnInstanciaDos.modificarInstanciaDos()">Modificar</button>
							</div>
						</div>						
						<div class="form-group" ng-show="cnInstanciaDos.modificar">
							<div class="col-xs-offset-4 col-xs-5">
								<button type="submit" class="btn btn-primary" ng-click="cnInstanciaDos.modifiqueInstanciaDos()" >Guardar</button>
								<button type="submit" class="btn btn-defaul" ng-click="cnInstanciaDos.cancelaInstanciaDos() ">Cancelar</button>
							</div>	
						</div>																											
					</form>
				</div>
			</div>
		</div>
	</div>
</div>