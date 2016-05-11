describe('Unit: Example servive', function() {

  'use strict';

  beforeEach(module('app'));

  var example;

  beforeEach(inject(function($injector) {
    example = $injector.get('exampleService');
  }));

  it('should succeed', function() {
    expect(example.test()).toEqual(true);
  });

});
