describe('Unit: My directive', function() {

  'use strict';

  var TEST_VALUE = 123;

  var scope;
  var element;

  beforeEach(module('app'));

  beforeEach(inject(function($injector, $rootScope, $compile, $httpBackend) {
    var $scope = $rootScope.$new();
    element = $compile('<my-directive number="' + TEST_VALUE + '"></my-directive>')($scope);

    $httpBackend.expectGET('templates/example.html').respond('');
    $scope.$digest(); // $digest will request the template
    $httpBackend.flush();

    scope = element.isolateScope();
  }));

  it('should succeed', function() {
    scope.addOne();
    expect(scope.vm.number).toBe(TEST_VALUE + 1);
  });

});
