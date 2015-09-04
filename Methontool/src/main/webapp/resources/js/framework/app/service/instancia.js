/**
 * Acceso a servicios rest de instancia
 */

(function(){
    "use strict"

    var proy = angular.module('modInstancia',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$listarInstanciaSinConceptoAsociado',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/instancia";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto'}, isArray:false}
            });
    });
    
    proy.factory('$verInstancia',function ($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/instanciado/:idInstancia";
        return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idInstancia:'@idInstancia' }, isArray:false}
            });
    });

})();