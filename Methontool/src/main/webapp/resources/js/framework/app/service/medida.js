/**
 * Acceso a servicios rest de Medida
 */

(function(){
    "use strict"

    var proy = angular.module('modMedida',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarMedida',function($resource){ 
        var urlConsultar = urlProyecto+"/api/medida";
        return $resource(urlConsultar,{},{
            get: {method: 'GET', isArray:false}
            });
   }); 
})();