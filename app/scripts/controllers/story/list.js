'use strict';

StoryDeveloperApp.controller('Story/ListCtrl', function($scope) {
    var STORIES_URL = 'https://story-developer.firebaseIO.com/stories';
    var storiesRef = new Firebase(STORIES_URL);

    $scope.listStory = function(){
        $.pnotify({
            title: 'Loading Stories...',
            text: 'Please wait for awhile. :)'
        });

        storiesRef.once('value', function(snapshot) {
            var totalCount = snapshot.numChildren();
            var currIndex = 0;

            if(totalCount > 0){
                snapshot.forEach(function(childSnapshot) {
                    $('#datatables').dataTable().fnAddData([
                        '<a href="/story/view?title=' + childSnapshot.val().title + '&storyId=' +
                            childSnapshot.name() + '">' + childSnapshot.val().title + '</a>',
                        childSnapshot.val().author,
                        '<a href="/story/preview?title=' + childSnapshot.val().title + '&storyId=' +
                            childSnapshot.name() + '"><i class="icofont-external-link"></i></a>'
                    ]);

                    currIndex += 1;

                    if(totalCount === currIndex){
                        $.pnotify({
                            title: 'Stories Loading Done',
                            text: 'All Stories have been loaded, HAVE FUN!'
                        });
                    }
                });
            } else {
                $.pnotify({
                    title: 'No Stories Yet!',
                    text: 'You are the lucky first user! :)'
                });
            }
        });
    };

    $('#datatables').dataTable();
    $scope.listStory();
});
