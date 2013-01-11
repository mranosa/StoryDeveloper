'use strict';

var StoryDeveloperApp = angular.module('StoryDeveloperApp', [])
  .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .when('/story/list', {
          templateUrl: '../views/story/list.html',
          controller: 'Story/ListCtrl'
        })
        .when('/story/edit', {
          templateUrl: '../views/story/edit.html',
          controller: 'Story/EditCtrl'
        })
        .when('/story/create', {
            templateUrl: '../views/story/edit.html',
            controller: 'Story/EditCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    return $locationProvider.html5Mode(true).hashPrefix('!');
  }]);
