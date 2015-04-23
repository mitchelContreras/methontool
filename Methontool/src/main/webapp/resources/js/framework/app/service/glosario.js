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
    


})();