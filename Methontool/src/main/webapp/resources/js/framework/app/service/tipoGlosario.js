/**
 * Acceso a servicios rest de tipoGlosario
 */

(function(){
    "use strict"

    var proy = angular.module('modTipoGlosario',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarTipoGlosario',function($resource){
    	var urlConsultar = urlProyecto+"/api/tipoGlosario";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', isArray:false}
            });
    });
    


})();