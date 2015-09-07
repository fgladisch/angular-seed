/* global angular */

angular.module('app')
.service('exampleService', ['$log', function($log) {

  this.test = function() {
    return true;
  };

}]);
