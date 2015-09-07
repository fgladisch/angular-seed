/* global module,
          require,
          describe,
          beforeEach,
          inject,
          it,
          expect */

var exampleServiceMock = {
  test: function() {
    return true;
  }
};

describe('Unit: ExampleController', function() {

  beforeEach(module('app'));

  var $scope;

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    $controller('exampleController', {
      $scope: $scope,
      exampleService: exampleServiceMock
    });
  }));

  it('should succeed', function() {
    expect($scope.test()).toEqual(true);
  });

});
