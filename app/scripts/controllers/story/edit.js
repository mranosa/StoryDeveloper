'use strict';

StoryDeveloperApp.controller('Story/EditCtrl', function($scope, UserService, $location) {

  var STORIES_URL = 'https://story-developer.firebaseIO.com/stories';
  var storiesRef = new Firebase(STORIES_URL);
  var storyUrl, versionsRef, versionRef, notificationString;

  $scope.story = {};
  $scope.title = $location.search().title;
  $scope.storyId = $location.search().storyId;

  $scope.loadStory = function(){
      var VERSIONS_URL = 'https://story-developer.firebaseIO.com/stories/' + $location.search().storyId + '/versions';
      var versionsRef = new Firebase(VERSIONS_URL);

      $.pnotify({
          title: 'Getting Latest Version',
          text: 'Please wait for latest version of the story.'
      });
      versionsRef.endAt().limit(1).once('value', function(snapshot){
          snapshot.forEach(function(childSnapshot) {
              $scope.$apply(function(){
                  $scope.story = childSnapshot.val();

                  $('#story_part_1').html(childSnapshot.val().story_part_1);
                  $('#story_part_2').html(childSnapshot.val().story_part_2);
                  $('#story_part_3').html(childSnapshot.val().story_part_3);
                  $('#story_part_4').html(childSnapshot.val().story_part_4);
                  $('#story_part_5').html(childSnapshot.val().story_part_5);
                  $('#story_part_6').html(childSnapshot.val().story_part_6);
                  $('#story_part_7').html(childSnapshot.val().story_part_7);

                  $('#story_part_1').wysihtml5();
                  $('#story_part_2').wysihtml5();
                  $('#story_part_3').wysihtml5();
                  $('#story_part_4').wysihtml5();
                  $('#story_part_5').wysihtml5();
                  $('#story_part_6').wysihtml5();
                  $('#story_part_7').wysihtml5();

                  $.pnotify({
                      title: 'Done!',
                      text: 'Latest version loaded.'
                  });
              });
          });
      });
  };

  $scope.saveStory = function(){

      //add/update story reference
      if($scope.storyId){
          storyUrl = STORIES_URL + '/' + $scope.storyId;
          notificationString = 'You has just updated "' + $('#title').val() + '".';
      } else {
          storyUrl = storiesRef.push({
              title: $('#title').val(),
              author: UserService.name
          });
          notificationString = 'You has just created "' + $('#title').val() + '".';
      }

      //add a new version
      versionsRef = new Firebase(storyUrl + '/versions');
      versionRef = versionsRef.push({
          author: UserService.name,
          story_part_1: $('#story_part_1').val(),
          story_part_2: $('#story_part_2').val(),
          story_part_3: $('#story_part_3').val(),
          story_part_4: $('#story_part_4').val(),
          story_part_5: $('#story_part_5').val(),
          story_part_6: $('#story_part_6').val(),
          story_part_7: $('#story_part_7').val()
      });


      //notify here
      $.pnotify({
          title: 'New Story Added',
          text: notificationString
      });
      $location.path('/story/list');
  }

  if($scope.storyId){
      $scope.loadStory();
  } else {
      $('#story_part_1').wysihtml5();
      $('#story_part_2').wysihtml5();
      $('#story_part_3').wysihtml5();
      $('#story_part_4').wysihtml5();
      $('#story_part_5').wysihtml5();
      $('#story_part_6').wysihtml5();
      $('#story_part_7').wysihtml5();
  }
});
