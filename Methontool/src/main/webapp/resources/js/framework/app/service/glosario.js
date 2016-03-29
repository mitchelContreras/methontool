/**
 * Acceso a servicios rest de glosario
 */

(function(){
    "use strict"

    var proy = angular.module('modGlosario',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarGlosario',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:id/glosario";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', isArray:false}
            });
    });
    
    proy.factory('$listarGlosarioDadoIdTipoGlosario',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/glosario/tipoGlsoario/:idTipoGlsoario";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idTipoGlsoario: 'idTipoGlsoario'}, isArray:false}
            });
    });
 
    proy.factory('$crearGlosario',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/glosario";
        return $resource(urlConsultar,{},{
           post: {method: 'POST', params: {idProyecto: '@idProyecto'}, isArray:false}
           });
   }); 

    proy.factory('$actualizarGlosario',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/glosario/:idGlosario";
        return $resource(urlConsultar,{},{
           put: {method: 'PUT', params: {idProyecto: '@idProyecto', idGlosario: 'idGlosario'}, isArray:false}
           });
   }); 
    
    proy.factory('$verGlosario',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/glosario/:idGlosario";
        return $resource(urlConsultar,{},{
           get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosario: 'idGlosario'}, isArray:false}
           });
   }); 

})();