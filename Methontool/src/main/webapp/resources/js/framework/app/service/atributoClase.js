/**
 * Acceso a servicios rest de atributo Clase
 */

(function(){
    "use strict"

    var proy = angular.module('modAtributoClase',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarAtributoClaseSinConceptoAsociado',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/atributoClase";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto'}, isArray:false}
            });
    });
    
    proy.factory('$verAtributoClase',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/atributoClase/:idGlosarioAtributo";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosarioAtributo:'@idGlosarioAtributo'}, isArray:false}
            });
    });

    proy.factory('$actualizarAtributoClase',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/atributoClase/:idGlosarioAtributo";
         return $resource(urlConsultar,{},{
            put: {method: 'put', params: {idProyecto: '@idProyecto', idGlosarioAtributo:'@idGlosarioAtributo'}, isArray:false}
            });
    });
})();