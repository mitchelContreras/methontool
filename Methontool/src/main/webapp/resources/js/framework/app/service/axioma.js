/**
 * Acceso a servicios rest de concepto
 */

(function(){
    "use strict"

    var proy = angular.module('modAxioma',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$verAxioma',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/axioma/:idGlosarioAxioma";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosarioAxioma: '@idGlosarioAxioma'}, isArray:false}
            });
    });

    proy.factory('$crearActualizarAxioma',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/axioma/:idGlosarioAxioma";
        return $resource(urlConsultar,{},{
           put: {method: 'PUT', params: {idProyecto: '@idProyecto', idGlosarioAxioma: '@idGlosarioAxioma'}, isArray:false}
           });
   }); 

})();