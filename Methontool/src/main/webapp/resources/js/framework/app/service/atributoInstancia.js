/**
 * Acceso a servicios rest de atributo Instancia
 */

(function(){
    "use strict"

    var proy = angular.module('modAtributoInstancia',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarAtributoInstanciaSinConceptoAsociado',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/atributoInstancia";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto'}, isArray:false}
            });
    });

})();