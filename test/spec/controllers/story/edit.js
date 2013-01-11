'use strict';

describe('Controller: Story/EditCtrl', function() {

  // load the controller's module
  beforeEach(module('StoryDeveloperApp'));

  var Story/EditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Story/EditCtrl = $controller('Story/EditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
