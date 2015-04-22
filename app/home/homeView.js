'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
		angular.module('myApp.home', ['ngRoute','myApp.service'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl: 'home/homeView.html',
				controller: 'homeCtrl'
			});
		}])
		.controller('homeCtrl', ['$scope', '$injector','SearchService','$location', function($scope, $injector,SearchService, $location) {
			require(['home/homeCtrl'], function(ctrl1) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(ctrl1, this, {'$scope': $scope,'SearchService':SearchService,'$location':$location});

			});
		}]);
});

