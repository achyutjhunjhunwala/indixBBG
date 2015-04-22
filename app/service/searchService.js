'use strict';

define(['angular'],function(angular) {
    angular.module('myApp.service', [])
        .factory('SearchService', ['$q', '$http', function ($q, $http) {
            var searchResult, searchAPI = {
                fetch: function (searchText) {
                    var deferred = $q.defer();
                    $http({
                        url: "http://api.duckduckgo.com?callback=JSON_CALLBACK",
                        params: {format: "json", pretty: 1, q: searchText},
                        method: "JSONP",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (response) {
                        searchResult = response;
                        deferred.resolve(response);
                    }).error(function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                },
                getSearchResults: function () {
                    return searchResult;
                }
            };
            return searchAPI;
        }])
        .factory('RelatedDataService', ['$q', '$http', function ($q, $http) {
            var rdAPI = {
                fetch: function (searchText) {
                    var deferred = $q.defer();
                    $http({
                        url: "mock_data/relatedData.json",
                        method: "GET"
                    }).success(function (response) {
                        deferred.resolve(response);
                    }).error(function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                }
            };
            return rdAPI;
        }])
    });