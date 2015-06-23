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
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnInstancia.varEdicion.glosarioInstanciaActual.nombre">
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
</div>