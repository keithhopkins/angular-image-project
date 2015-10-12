angular.module('imageApp')
  .controller('StoriesController', function($scope, httpFactory) {

    httpFactory.getStoryBoards()
    .then(function(response){
      $scope.storyBoards = response.data;
      console.log($scope.storyBoards);
    }, function(response){
      console.log('failed to get all storyboards');
    });


  });
