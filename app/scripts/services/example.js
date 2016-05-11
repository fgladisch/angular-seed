angular.module('app')
  .service('exampleService', ['$log',
    function($log) {

      'use strict';

      this.test = function() {
        return true;
      };

    }
  ]);
