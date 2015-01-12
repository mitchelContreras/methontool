<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html ng-app>
<head>

	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/pruebaCss.css" type="text/css" /> 
	<title>Hello World, AngularJS - ViralPatel.net</title>
	<script type="text/javascript"
		src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

</head>
<body>
	
	Write3 some text in textbox:
	<input type="text" ng-model="sometext" />

	<h1>Hello {{ sometext }}</h1>
	
</body>
</html>
