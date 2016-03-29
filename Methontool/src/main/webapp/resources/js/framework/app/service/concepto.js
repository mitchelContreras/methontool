/**
 * Acceso a servicios rest de concepto
 */

(function(){
    "use strict"

    var proy = angular.module('modConcepto',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$verConcepto',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/concepto/:idGlosarioConcepto";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosarioConcepto: '@idGlosarioConcepto'}, isArray:false}
            });
    });

    proy.factory('$actualizarConcepto',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/concepto/:idGlosarioConcepto";
        return $resource(urlConsultar,{},{
           post: {method: 'POST', params: {idProyecto: '@idProyecto', idGlosarioConcepto: '@idGlosarioConcepto'}, isArray:false}
           });
   }); 

})();