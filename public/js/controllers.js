'use strict';

/* Controllers */

var blogeaControllers = angular.module('blogeaControllers', []);

blogeaControllers.controller('AboutCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.info = 'I am Larry Lee';
    }
]);

blogeaControllers.controller('SearchCtrl', ['$scope',
    function($scope) {
        $scope.doSearch = function($event) {
            if($event.keyCode === 13){
                alert($scope.searchValue);
            }
        };
    }
]);

blogeaControllers.controller('PostsListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('api/posts').success(function(data) {
            $scope.posts = data;
        });
    }
]);

blogeaControllers.controller('PostCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('api/post/' + $routeParams.postId).success(function(data) {
            $scope.post = data;
        });
    }
]);
