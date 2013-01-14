'use strict';

describe('Controller: Story/ViewCtrl', function() {

  // load the controller's module
  beforeEach(module('StoryDeveloperApp'));

  var Story/ViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Story/ViewCtrl = $controller('Story/ViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
