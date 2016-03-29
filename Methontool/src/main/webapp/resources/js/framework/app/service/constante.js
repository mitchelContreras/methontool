/**
 * Acceso a servicios rest de concepto
 */

(function(){
    "use strict"

    var proy = angular.module('modConstante',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory('$verConstante',function($resource){
    	var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/constante/:idGosarioConstante";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', params: {idProyecto: '@idProyecto', idGosarioConstante: '@idGosarioConstante'}, isArray:false}
            });
    });

    proy.factory('$crearActualizarConstante',function($resource){ 
        var urlConsultar = urlProyecto+"/api/proyecto/:idProyecto/constante/:idGosarioConstante";
        return $resource(urlConsultar,{},{
           put: {method: 'PUT', params: {idProyecto: '@idProyecto', idGosarioConstante: '@idGosarioConstante'}, isArray:false}
           });
   }); 

})();