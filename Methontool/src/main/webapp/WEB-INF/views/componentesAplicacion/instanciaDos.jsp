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
						<!-- 
						<h3>Atributo de Clase</h3>		
						<table class="table table-hover">
						    <thead>
						      <tr>
						        <th>Nombre</th>
						        <th>Tipo valor</th>
						        <th>Precisión</th>
						        <th>Rango valores</th>
						        <th>Cardinalidad</th>
						        <th>Valor</th>
						      </tr>
						    </thead>
	    					<tbody>
	    						<tr ng-repeat="row in cnInstanciaDos.varEdicion.atributosClase">
	    							<td>{{cnInstanciaDos.obtenerGlosarioDadoIdGlosaro(row.idGlosario).nombre}}</td>
						        	<td>{{row.tipoDeDato.nombre}}</td>
						       		<td>{{row.precision}}</td> 
	    							<td>{{row.rangoValores}}</td>
						        	<td>[{{row.cardinalidadMin}}:{{row.cardinalidadMax}}]</td>
						       		<td>{{row.value}}</td>
	    						</tr>
	    					</tbody>
	    				</table>
	    				 	
						<h3>Atributo de Instancia</h3>			
						<table class="table table-hover">
						    <thead>
						      <tr>
						        <th>Nombre</th>
						        <th>Tipo valor</th>
						        <th>Precisión</th>
						        <th>Medida</th>
						        <th>Rango valores</th>
						        <th>Cardinalidad</th>
						        <th>Valor por defecto</th>
						      </tr>
						    </thead>
	    					<tbody>
	    						<tr ng-repeat="row in cnInstanciaDos.varEdicion.atributosInstancia">
	    							<td>{{cnInstanciaDos.obtenerGlosarioDadoIdGlosaro(row.idGlosario).nombre}}</td>
						        	<td>{{row.tipoDeDato.nombre}}</td>
						       		<td>{{row.precision}}</td> 
						       		<td>{{row.medida.nombre}}</td> 
	    							<td>{{row.rangoValores}}</td>
						        	<td>[{{row.cardinalidadMin}}:{{row.cardinalidadMax}}]</td>
						       		<td>{{row.value}}</td>
	    						</tr>
	    					</tbody>
	    				</table>																										
						-->
						<div class="separadorCuerpo2">
							<h3>Descargar Archivo</h3>
						</div>					
						<div class="form-group">
							<div class="col-xs-6 control-label" >
								</span><label >Indique la cantidad de instancias:</label>
							</div>
							<div class="col-xs-2">
								<input type="text" class="form-control" ng-model="cnInstanciaDos.cantidadInstancias" onkeypress="return isNumberKey(this)">
							</div>
						</div>
						<div class="form-group" ng-show="cnInstanciaDos.cantidadInstancias > 0">
							<div class="col-xs-offset-4 col-xs-5">
								<a href="{{cnInstanciaDos.rutaDonwload}}" download>Descargar achivo</a>
							</div>	
						</div>							

						<div class="separadorCuerpo2" style="">
							<h3>Subir Archivo</h3>
						</div>
						<div class="form-group" >
							<div class="col-xs-offset-4 col-xs-5">
								<button  class="btn btn-defaul" onclick="$('#idInputFile').click()">Buscar Archivo</button>
								<input id="idInputFile" type="file" nv-file-select="" uploader="uploader" style="display: none"/>
							</div>	
						</div>								
						<div ng-show="cnInstanciaDos.cambioArchivo">
							<div class="form-group">
								<div class="col-xs-4 control-label" >
									<label >Nombre:</label>
								</div>
								<div class="col-xs-5 ">
									<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnInstanciaDos.archivoASubir.name">
								</div>
							</div>
							<div class="form-group">
								<div class="col-xs-4 control-label" >
									<label >Tamaño:</label>
								</div>
								<div class="col-xs-5 ">
									<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="cnInstanciaDos.archivoASubir.tamano">
								</div>	
							</div>						
							<div class="form-group" ng-show="false">
								<div class="col-xs-4 control-label" >
									<label >Status:</label>
								</div>
								<div class="col-xs-5 ">
									<div class="progress" style="margin-bottom: 0;">
		                            	<div class="progress-bar" role="progressbar" ng-style="{ 'width': item.progress + '%' }"></div>
		                            </div>
								</div>
							</div>							
							<div class="form-group">
								<div class="col-xs-4 control-label" >
									<label >Acciones:</label>
								</div>
								<div class="col-xs-5 ">
								<!-- <button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess"> -->	
                                    <button type="button" class="btn btn-success btn-xs" ng-click="cnInstanciaDos.cargarArchivo()">
                                        <span class="glyphicon glyphicon-upload"></span> Cargar
                                    </button>
                                    <button type="button" class="btn btn-danger btn-xs" ng-click="cnInstanciaDos.eliminarArchivo()">
                                        <span class="glyphicon glyphicon-trash"></span> Eliminar
                                    </button>									
								</div>
							</div>									
						</div>
						<!-- 
						<div class="form-group">
							<div class="col-xs-4 control-label" >
								<label >Tamaño:</label>
							</div>
							<div class="col-xs-5 ">
								<input type="text" class="form-control" placeholder="Nombre" ng-disabled="true" ng-model="uploader.queue[0].size/1024/1024|number:2">
							</div>
						</div>	 -->
															
										
						<!-- 					
						<div class="form-group" style="border-top: 2px solid rgb(222, 222, 222)">
							
							<div class="col-xs-offset-4 col-xs-5">
								<a href="{{cnInstanciaDos.rutaDonwload}}" download>Descargar achivo</a>
							</div>
						</div>
						<div class="form-group" style="border-top: 2px solid rgb(222, 222, 222)">
							<h4>Subir Archivo</h3>
							<div class="col-xs-offset-4 col-xs-5">
								<button  class="btn btn-defaul" onclick="$('#idInputFile').click()">Buscar Archivo</button>
								<input id="idInputFile" type="file" nv-file-select="" uploader="uploader" style="display: none"/>
							</div>
							
							<div>
								<span>Nombre Archivo</span>: {{ uploader.queue[0].name }}
								</br>
								<span>Tamaño</span>: {{ uploader.queue[0].size/1024/1024|number:2 }} MB
								</br>
								<span>Status</span>:
									<div class="progress" style="margin-bottom: 0;">
	                                       <div class="progress-bar" role="progressbar" ng-style="{ 'width': item.progress + '%' }"></div>
	                                </div>							
								</br>
								<span>Acciones</span>:
							</div>
						</div>
						-->
					</form>	
				
				</div>			
				</div>
			</div>
		</div>
	</div>
</div>