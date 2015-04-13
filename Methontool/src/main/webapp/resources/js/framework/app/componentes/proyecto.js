/**
 * Módulo de la sección de proyecto de la aplicación
 * 
 */

(function(){
    "use strict"

    var proy = angular.module('modProyecto',[
        //dependencias a usar
        'ngResource'
        ]);
    var urlProyecto = "http://localhost:8080/Methontool";
        
    proy.factory("$saludoExterno", function()
	{
	    return {
	        saludo: function()
	        {
	            return "Hola desde otro modulo";
	        }
	    }
	});
    
    
   
    proy.factory('$listarProyectos',function($resource){ 
    	var urlConsultar = urlProyecto+"/api/usuario/:id/proyecto";
         return $resource(urlConsultar,{},{
            get: {method: 'GET', isArray:false}
            });
    });
    
    proy.factory('$crearProyecto',function($resource){ 
        var urlConsultar = urlProyecto+"/api/usuario/:id/proyecto";
        return $resource(urlConsultar,{},{
           post: {method: 'POST', params: {id: '@id'}, isArray:false}
           });
   });
 
    proy.factory('$actualizarProtecto',function($resource){ 
    	var urlConsultar = urlProyecto+"/api/usuario/:idUsuario/proyecto/:idProyecto";
    	console.log("$actualizarProtecto "+urlConsultar);
        return $resource(urlConsultar,{},{
           post: {method: 'POST', params: {idUsuario: '@idUsuario', idProyecto: '@idProyecto'}, isArray:false}
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