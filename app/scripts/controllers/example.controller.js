(function() {

  'use strict';

  angular
    .module('app')
    .controller('ExampleController', ExampleController);

  ExampleController.$inject = ['$log', 'myService', 'myConstant'];

  function ExampleController($log, myService, myConstant) {

    var vm = this; // vm = View model

    this.text = 'Hello ' + myConstant.value;

    this.test = function() {
      myService.test();
    };

  }

})();
