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
        ])
    
})();
