'use strict';

describe('Controller: Story/PreviewCtrl', function() {

  // load the controller's module
  beforeEach(module('StoryDeveloperApp'));

  var Story/PreviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Story/PreviewCtrl = $controller('Story/PreviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
