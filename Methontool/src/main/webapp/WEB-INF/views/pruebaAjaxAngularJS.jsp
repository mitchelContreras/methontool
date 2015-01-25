<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>Probando Ajax en AngularJS</title>
    <style>
        body{ font-family: sans-serif;}
        li{
            font-size: 0.8em;
        }
        li span{
            font-weight: bold;
        }
    </style>
</head>
<body>
<div ng-app="apiApp" ng-controller="apiAppCtrl as vm">
  <h1>Pruebo Ajax</h1>
  <p>
      Selecciona:
      <select ng-model="vm.url" ng-change="vm.buscaEnRegion()">
       <option value="http://restcountries.eu/rest/v1/region/africa">Africa</option>
        <option value="http://restcountries.eu/rest/v1/region/europe">Europa</option>
        <option value="http://restcountries.eu/rest/v1/region/americas">America</option>
      </select>
  </p>
  <ul>
      <li ng-repeat="pais in vm.paises">Pa�s: <span>{{pais.name}}</span>, capital: {{pais.capital}}</li>
  </ul>

</div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular.min.js"></script>
    <script>
    angular
        .module('apiApp', [])
        .controller('apiAppCtrl', ['$http', controladorPrincipal]);

    function controladorPrincipal($http){
        var vm=this;
        
        vm.buscaEnRegion = function(){
            $http.get(vm.url).success(function(respuesta){
                //console.log("res:", respuesta);
                vm.paises = respuesta;
            });
        }
    }

    </script>
</body>
</html>
