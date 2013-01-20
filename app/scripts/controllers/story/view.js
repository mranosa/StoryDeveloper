'use strict';

StoryDeveloperApp.controller('Story/ViewCtrl', function($scope, $location, UserService) {

  var VERSIONS_URL = 'https://story-developer.firebaseIO.com/stories/' + $location.search().storyId + '/versions';
  var versionsRef = new Firebase(VERSIONS_URL);
  var COMMENTS_URL = 'https://story-developer.firebaseIO.com/stories/' + $location.search().storyId + '/comments';
  var commentsRef = new Firebase(COMMENTS_URL);

  $scope.story = {};
  $scope.title = $location.search().title;
  $scope.storyId = $location.search().storyId;
  $scope.comments = [];

  $scope.showStory = function(){
      $.pnotify({
          title: 'Getting Latest Version',
          text: 'Please wait for latest version of the story.'
      });
      versionsRef.endAt().limit(1).once('value', function(snapshot){
          snapshot.forEach(function(childSnapshot) {
              $scope.$apply(function(){
                  $scope.story = childSnapshot.val();

                  $.pnotify({
                      title: 'Done!',
                      text: 'Latest version loaded.'
                  });
              });
          });
      });
  };

  $scope.addComment = function(){
      commentsRef.push({
          author: UserService.name,
          comment: $('#inputEditorSimple').val()
      });

      $.pnotify({
          title: 'New Comment',
          text: 'You added a new comment.'
      });

      $('#inputEditorSimple').val('');
      $scope.listComments();
  };

  $scope.listComments = function(){
      commentsRef.once('value', function(snapshot){
          snapshot.forEach(function(childSnapshot) {
              $scope.$apply(function(){
                  $scope.comments.push(childSnapshot.val());
              });
          });
      });
  };

  $scope.showStory();
  $scope.listComments();
});
