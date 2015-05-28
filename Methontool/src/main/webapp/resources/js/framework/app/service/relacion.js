/**
 * Acceso a servicios rest de taxonomia
 */

(function(){
    "use strict"

    var proy = angular.module('modRelacion',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarRelaciones',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/relacion/:idGlosarioRelacionOrigen";
        return $resource(urlConsultar,{},{
           get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosarioRelacionOrigen: '@idGlosarioRelacionOrigen'}, isArray:false}
           });
   }); 
    
    proy.factory('$actualizarRelacion',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/relacion/:idRelacion";
        return $resource(urlConsultar,{},{
           put: {method: 'PUT', params: {idProyecto: '@idProyecto', idRelacion: '@idRelacion'}, isArray:false}
           });
   }); 
    
    proy.factory('$agregarRelacion',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/relacion/:idGlosarioRelacionOrigen";
        return $resource(urlConsultar,{},{
           post: {method: 'POST', params: {idProyecto: '@idProyecto', idGlosarioRelacionOrigen: '@idGlosarioRelacionOrigen'}, isArray:false}
           });
   }); 

    proy.factory('$eliminarRelacion',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/relacion/:idRelacion";
        return $resource(urlConsultar,{},{
           dlt: {method: 'DELETE', params: {idProyecto: '@idProyecto', idRelacion: '@idRelacion'}, isArray:false}
           });
   }); 


})();