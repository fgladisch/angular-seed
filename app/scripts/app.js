(function() {

  'use strict';

  angular
    .module('app', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {

    $routeProvider
      .when('/example', {
        templateUrl: 'views/example.html',
        controller: 'ExampleController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/example'
      });

  }

})();
