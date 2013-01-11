'use strict';

describe('Controller: Story/ListCtrl', function() {

  // load the controller's module
  beforeEach(module('StoryDeveloperApp'));

  var Story/ListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Story/ListCtrl = $controller('Story/ListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
