/**
 * 
 */
(function(){
    "use strict"

    var App = angular.module('methontool',[
        //dependencias a usar
        ])

    App.controller('CabeceraController', function($scope) {
        //Variables globales
        console.log("Entro en CabeceraController");
        $scope.especificacion = false;
        $scope.conceptualizacion = false;
        $scope.implementacion = false;
        $scope.menuInicial = true;

        $scope.clickEspecificacion = function () {
            console.log("clickEspecificacion");
            $scope.especificacion = true;
            $scope.conceptualizacion = false;
            $scope.implementacion = false;
            $scope.menuInicial = false;

        }
        $scope.clickConceptualizacion= function () {
            console.log("clickConceptualizacion");
            $scope.especificacion = false;
            $scope.conceptualizacion = true;
            $scope.implementacion = false;
            $scope.menuInicial = false;
        }
        $scope.clickImplementacion= function () {
            console.log("clickImplementacion");
            $scope.especificacion = false;
            $scope.conceptualizacion = false;
            $scope.implementacion = true;
            $scope.menuInicial = false;
        }

    });

    App.controller('CuerpoController', function($scope) {
        console.log("Entro en CuerpoController");
    });

})();
