describe('Unit: Example controller', function() {

  beforeEach(module('app'));

  var $scope;

  var exampleService = jasmine.createSpyObj('example', [
    'test',
  ]);

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    $controller('exampleController', {
      $scope: $scope,
      exampleService: exampleService
    });
  }));

  it('should succeed', function() {
    $scope.test();
    expect(exampleService.test).toHaveBeenCalled();
  });

});
