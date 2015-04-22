'use strict';

define([], function() {
    return ['$scope','SearchService','$location', function($scope, SearchService, $location) {
        // You can access the scope of the controller from here
        $scope.welcomeMessage = 'hey this is homeCtrl.js!';
        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.searchPress=function($event){
            if ($event.keyCode === 13) {
                $location.path('/search/' +$scope.searchTerm);
                //$scope.getResult = SearchService.fetch($scope.searchItems).getSearchResults;
            }
        };
        $scope.$apply();
    }];
});