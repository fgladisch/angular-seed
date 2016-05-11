angular.module('app')
  .controller('exampleController', ['$scope', '$log', 'exampleService',
    function($scope, $log, exampleService) {

      'use strict';

      $scope.test = function() {
        exampleService.test();
      };

    }
  ]);
