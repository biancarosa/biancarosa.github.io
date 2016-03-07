'use strict';

/* App Module */
var app = angular.module('app', [
	'ngRoute',
	'controllers',
	'services'
]);

app.config(function($routeProvider) {
      $routeProvider.when('/', { templateUrl: 'partials/main.html', controller: 'HomeController' });
      $routeProvider.when('/graph', { templateUrl: 'partials/graph.html', controller: 'GraphController' });
      $routeProvider.when('/sierpinski', { templateUrl: 'partials/sierpinski.html', controller: 'SierpinskiController' });
      $routeProvider.otherwise({ redirectTo: '/' });
 });