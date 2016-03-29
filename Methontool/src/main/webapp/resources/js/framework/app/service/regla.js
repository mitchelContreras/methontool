/**
 * Acceso a servicios rest de concepto
 */

(function(){
    "use strict"

    var proy = angular.module('modRegla',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$verRegla',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/regla/:idGlosarioRegla";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosarioRegla: '@idGlosarioRegla'}, isArray:false}
            });
    });

    proy.factory('$crearActualizarRegla',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/regla/:idGlosarioRegla";
        return $resource(urlConsultar,{},{
           put: {method: 'PUT', params: {idProyecto: '@idProyecto', idGlosarioRegla: '@idGlosarioRegla'}, isArray:false}
           });
   }); 

})();