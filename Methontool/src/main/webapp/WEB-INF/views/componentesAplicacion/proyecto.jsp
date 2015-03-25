<div ng-controller="ControllerProyecto  as cnProyecto">
	<div ng-show="cnProyecto.soyActual">
		<div class="row CampoTrabajo">
			<div class="col-md-4 cuerpoUno">	
				<p> UNO Proyecto </p>
			</div>
			<div class="col-md-8 cuerpoDos">
				<p>DOS Proyecto</p>
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
				</div>
				<div class="modal-body">
					<div>
						<ul>
							<li ng-repeat="proyecto in cnProyecto.proyectos" >
							id={{proyecto.idProyecto}} con nombre={{proyecto.nombre}}
							</li>
						</ul>
					</div>  
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</div>