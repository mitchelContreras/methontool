/**
 * Acceso a servicios rest de tipo de dato
 */

(function(){
    "use strict"

    var proy = angular.module('modTipoDeDato',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarTipoDeDato',function($resource){ 
        var urlConsultar = urlProyecto+"/api/tipoDeDato";
        return $resource(urlConsultar,{},{
            get: {method: 'GET', isArray:false}
            });
   }); 
})();