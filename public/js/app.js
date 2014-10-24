'use strict';

/* App Module */

var blogea = angular.module('blogea', [
    'ngRoute',
    'blogeaControllers'
]);

blogea.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/posts.html',
        controller: 'PostsListCtrl'
    }).
    when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
    }).
    when('/posts', {
        templateUrl: 'partials/posts.html',
        controller: 'PostsListCtrl'
    }).
    when('/post/:postId', {
        templateUrl: 'partials/post.html',
        controller: 'PostCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });

    //$locationProvider.html5Mode(true);

}]);
