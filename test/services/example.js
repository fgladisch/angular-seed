describe('Unit: Example servive', function() {

  beforeEach(module('app'));

  var example;

  beforeEach(inject(function($injector) {
    example = $injector.get('exampleService');
  }));

  it('should succeed', function() {
    expect(example.test()).toEqual(true);
  });

});
