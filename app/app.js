'use strict';

define([
	'angular',
	'angularRoute',
	'sanitize',
	'home/homeView',
	'search/searchView',
	'service/searchService'
], function(angular, angularRoute, sanitize, view1, view2, searchService) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ngRoute',
		'ngSanitize',
		'myApp.home',
		'myApp.search',
		'myApp.service'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);
	/*Testing TeamCity*/
});

