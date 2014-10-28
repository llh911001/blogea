'use strict';

/* App Module */

var blogea = angular.module('blogea', [
    'ngRoute',
    'blogeaControllers'
]);

blogea.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/articles.html',
        controller: 'ArticleListCtrl'
    }).
    when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
    }).
    when('/articles', {
        templateUrl: 'partials/articles.html',
        controller: 'ArticleListCtrl'
    }).
    when('/article/:articleId', {
        templateUrl: 'partials/article.html',
        controller: 'ArticleCtrl'
    }).
    when('/create', {
        templateUrl: 'partials/create.html',
        controller: 'CreateCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]);
