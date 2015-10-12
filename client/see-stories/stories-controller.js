angular.module('imageApp')
  .controller('StoriesController', function($scope, homeFactory) {

    homeFactory.getStoryBoards()
    .then(function(response){
      $scope.storyBoards = response.data;
      console.log($scope.storyBoards);
    }, function(response){
      console.log('failed to get all storyboards');
    });


  });
