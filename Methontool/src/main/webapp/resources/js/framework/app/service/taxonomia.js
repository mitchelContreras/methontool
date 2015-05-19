/**
 * Acceso a servicios rest de taxonomia
 */

(function(){
    "use strict"

    var proy = angular.module('modTaxonomia',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$actualizarTaxonomia',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/taxonomia/:idGlosarioOrigen";
        return $resource(urlConsultar,{},{
           post: {method: 'POST', params: {idProyecto: '@idProyecto', idGlosarioOrigen: '@idGlosarioOrigen'}, isArray:false}
           });
   }); 

    proy.factory('$verTaxonomia',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/taxonomia/:idGlosarioOrigen";
        return $resource(urlConsultar,{},{
           get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosarioOrigen: '@idGlosarioOrigen'}, isArray:false}
           });
   }); 


})();