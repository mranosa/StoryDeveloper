'use strict';

describe('Controller: StoryEditCtrl', function() {

  // load the controller's module
  beforeEach(module('StoryDeveloperApp'));

  var StoryEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    StoryEditCtrl = $controller('StoryEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
