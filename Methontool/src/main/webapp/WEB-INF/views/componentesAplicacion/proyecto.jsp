<div ng-controller="ControllerProyecto  as cnProyecto">
<!-- <div ng-show="cnProyecto.soyActual"> -->	
	<div ng-show="false">
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">	
				<p> UNO Proyecto </p>
			</div>
			<div class="col-md-8 cuerpoDos">
				<p>DOS Proyecto</p>
			</div>
		</div>
	</div>
	
	<!-- Crear Proyecto Modal-->
	<div class="modal fade" id="crearProyectoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Crear proyecto</h4>
				</div>
				<div class="modal-body">
					<div>
						Nombre <input ng-model="cnProyecto.nombreProyecto">
					</div>  
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary" type="button" ng-click="cnProyecto.creeProyecto(cnProyecto.nombreProyecto)">Crear</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
			</div>
		</div>
	</div>	
	
	<!-- Lista de proyectos Modal-->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title" id="myModalLabel">Lista de proyectos</h4>
					<h6>Seleccione el proyecto con el que desea trabajar</h6>
				</div>
				<div class="modal-body">
					<div>
						<ul>
							<li ng-repeat="proyecto in cnProyecto.proyectos" >
								<div style = "width: 50px;"> 
									<span>{{proyecto.nombre}}</span>
								</div>
									<a class="btn"ng-click="cnProyecto.seleccioneProyecto(proyecto)" ><i class="glyphicon glyphicon-ok"></i></a>
	 <!-- 							<a class="btn" href="#"><i class="glyphicon glyphicon-remove"></i></a>  -->  
							</li>
						</ul>
					</div>  
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
				</div>
			</div>
		</div>
	</div>
</div>