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
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/instancia/:idGlosarioInstancia";
        return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idGlosarioInstancia:'@idGlosarioInstancia' }, isArray:false}
            });
    });
    
    proy.factory('$actualizarInstancia',function ($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/instancia/:idGlosarioInstancia";
        return $resource(urlConsultar,{},{
            put: {method: 'PUT', params: {idProyecto: '@idProyecto', idGlosarioInstancia:'@idGlosarioInstancia' }, isArray:false}
            });
    });
    
    proy.factory('$crearInstancia',function ($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/instancia";
        return $resource(urlConsultar,{},{
            post: {method: 'POST', params: {idProyecto: '@idProyecto'}, isArray:false}
            });
    }); 

    proy.factory('$rutaDescargaArchivo', function (){
    	return urlProyecto;
    });

})();