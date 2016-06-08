(function() {

  'use strict';

  angular
    .module('app')
    .directive('myDirective', myDirective);

  myDirective.$inject = ['$log'];

  function myDirective($log) {

    return {
      link: link,
      templateUrl: 'templates/example.html',
      controller: 'ExampleController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        number: '='
      }
    };

    function link(scope, element) {

      var vm = scope.vm; // Access the view model

      scope.addOne = function() {
        vm.number += 1;
      };

    }

  }

})();
