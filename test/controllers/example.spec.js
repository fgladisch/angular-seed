describe('Unit: Example controller', function() {

  'use strict';

  beforeEach(module('app'));

  var vm;

  var myService = jasmine.createSpyObj('myService', ['test']);

  beforeEach(inject(function($controller) {
    vm = $controller('ExampleController', {
      myService: myService
    });
  }));

  it('should …', function() {
    vm.test();
    expect(myService.test).toHaveBeenCalled();
  });

});
