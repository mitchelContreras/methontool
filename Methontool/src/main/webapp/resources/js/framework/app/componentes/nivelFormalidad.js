/**
 * Consumir servicios REST de nivel de formalidad
 */

(function(){
    "use strict"

    var proy = angular.module('modNivelFormalidad',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlNivelFormalidad = "http://localhost:8080/Methontool";
        
   
    proy.factory('$listarNivelFormalidad',function($resource){ 
    	var urlConsultar = urlNivelFormalidad+"/api/nivelFormalidad";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', isArray:false}
            });
    });
    
    /*  
    proy.factory('$verProyecto',function($resource){ 
    	var urlConsultar = urlProyecto+"/api/usuario/:id1/proyecto/:id2";
    	console.log("$verProyecto "+urlConsultar);
        return $resource(urlConsultar,{},{
           query: {method: 'GET', isArray:false}
           });
   });
    
    proy.factory('$actualizarProtecto',function($resource){ 
    	var urlConsultar = urlProyecto+"/api/proyecto/:id";
    	console.log("$actualizarProtecto "+urlConsultar);
        return $resource(urlConsultar,{},{
           query: {method: 'PUT', isArray:false}
           });
   });
    
   proy.factory('$eliminarProyecto',function($resource){ 
	   	var urlConsultar = urlProyecto+"/api/proyecto/:id";
		console.log("$eliminarProyecto "+urlConsultar);
	    return $resource(urlConsultar,{},{
           query: {method: 'DELETE', isArray:false}
           });
   });*/

})();
