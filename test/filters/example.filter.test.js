describe('Unit: Example filter', function() {

  'use strict';

  beforeEach(module('app'));

  var $filter;

  beforeEach(inject(function($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should succeed', function() {
    var result = $filter('myFilter')(2);
    expect(result).toBe(4);
  });

});
