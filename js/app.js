/* global angular */

angular.module('app', ['ngRoute'])

.config(['$routeProvider',

  function($routeProvider) {
    $routeProvider
    .when('/example', {
      templateUrl: 'templates/example.html'
    })
    .otherwise({
      redirectTo: '/example'
    });
  }

]);
