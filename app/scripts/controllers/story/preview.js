'use strict';

StoryDeveloperApp.controller('Story/PreviewCtrl', function($scope, $location) {

    var VERSIONS_URL = 'https://story-developer.firebaseIO.com/stories/' + $location.search().storyId + '/versions';
    var versionsRef = new Firebase(VERSIONS_URL);

    $scope.story = {};
    $scope.title = $location.search().title;

    $scope.showStory  = function(){
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

    $scope.showStory();
});
