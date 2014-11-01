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

blogeaControllers.controller('ArticleListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('api/articles').success(function(data) {
            $scope.articles = data.articles;
        });
    }
]);

blogeaControllers.controller('ArticleCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('api/article/' + $routeParams.articleId).success(function(data) {
            $scope.article = data;
        });
    }
]);

blogeaControllers.controller('CreateCtrl', ['$scope', '$http', '$window', '$location',
    function($scope, $http, $window, $location) {
        $scope.form = {};
        $scope.submitCreateForm = function(event){
            $http.post('/api/article', $scope.form).success(function(data){
                $location.path('/');
                // refresh the index page to update `recent post`
                $window.location.href = '/';
            });
        };
    }
]);
