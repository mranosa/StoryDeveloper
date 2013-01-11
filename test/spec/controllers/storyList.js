'use strict';

describe('Controller: StoryListCtrl', function() {

  // load the controller's module
  beforeEach(module('StoryDeveloperApp'));

  var StoryListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    StoryListCtrl = $controller('StoryListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
