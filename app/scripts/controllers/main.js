'use strict';

StoryDeveloperApp.controller('MainCtrl', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {

  $scope.forwardToDashboard = function(){
    if($('#sign-in').valid()) {
        UserService.name = $("#temp_login_username").val();
        $location.path('/dashboard');
    }
  };

}]);
