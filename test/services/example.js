/* global module,
          require,
          describe,
          beforeEach,
          inject,
          it,
          expect */

describe('Unit: UtilServive', function() {

  beforeEach(module('app'));

  var example;

  beforeEach(inject(function($injector) {
    example = $injector.get('exampleService');
  }));

  it('should succeed', function() {
    expect(example.test()).toEqual(true);
  });

});

