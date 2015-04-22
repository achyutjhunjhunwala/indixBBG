'use strict';

define([
	'angular',
	'angularRoute',
	'home/homeView',
	'search/searchView',
	'service/searchService'
], function(angular, angularRoute, view1, view2, searchService) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'myApp.home',
		'myApp.search',
		'myApp.service'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);
});

