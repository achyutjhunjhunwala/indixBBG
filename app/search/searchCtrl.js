'use strict';

define([], function() {
	return ['$scope','$routeParams','SearchService', function($scope,$routeParams,SearchService) {
		// You can access the scope of the controller from here
		SearchService.fetch($routeParams.searchTerm).then(function(result){
			$scope.result = result;
		});
		$scope.searchTerm = $routeParams.searchTerm;
		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});