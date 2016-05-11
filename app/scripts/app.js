angular.module('app', ['ngRoute'])

.config(['$routeProvider',

  function($routeProvider) {

    'use strict';

    $routeProvider
      .when('/example', {
        templateUrl: 'templates/example.html'
      })
      .otherwise({
        redirectTo: '/example'
      });

  }

]);
