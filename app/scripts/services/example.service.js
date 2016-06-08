(function() {

  'use strict';

  angular
    .module('app')
    .service('myService', myService);

  myService.$inject = ['$log'];

  function myService($log) {

    // Define public functions
    return {
      test: test
    };

    function test() {
      return true;
    }

  }

})();
