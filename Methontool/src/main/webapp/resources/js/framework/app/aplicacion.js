/**
 * Es el js principal de la aplicación. Se declara 
 * el module al cual estan enlazado todos los componentes
 * de AngularJS.
 * @author Mitchell Contreras
 * @param modProyecto
 * @param modNivelFormalidad
 */

(function(){
    "use strict"

    angular.module('methontool',[
        //dependencias a usar
        'modProyecto',
        'modNivelFormalidad',
        'modGlosario',
        'ngTouch',
        'angucomplete-alt'
        ,'modTipoGlosario'
        ,'modTaxonomia'
        ,'modRelacion'
        ,'modConcepto'
        ,'modInstancia'
        ,'modAtributoClase'
        ,'modAtributoInstancia'
        ,'modMedida'
        ,'modTipoDeDato'
        ,'modConstante'
        ,'modAxioma'
        ,'modRegla'
        ])

        .directive('fileModel', ['$parse', function ($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;
                    
                    element.bind('change', function(){
                        scope.$apply(function(){
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
        }])
    
	    .service('fileUpload', ['$http', function ($http) {
	        this.uploadFileToUrl = function(file, uploadUrl){
	            var fd = new FormData();
	            fd.append('file', file);
	            $http.post(uploadUrl, fd, {
	                transformRequest: angular.identity,
	                headers: {'Content-Type': 'multipart/form-data'}
	            })
	            .success(function(){
	            })
	            .error(function(){
	            });
	        }
	    }]) 
})();
