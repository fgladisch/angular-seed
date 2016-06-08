(function() {

  'use strict';

  angular
    .module('app')
    .filter('myFilter', myFilter);

  myFilter.$inject = ['$log'];

  function myFilter($log) {

    return function(value) {
      return value * 2;
    };

  }

})();
