describe('Unit: Example servive', function() {

  'use strict';

  beforeEach(module('app'));

  var myService;

  beforeEach(inject(function($injector) {
    myService = $injector.get('myService');
  }));

  it('should succeed', function() {
    expect(myService.test()).toBe(true);
  });

});
