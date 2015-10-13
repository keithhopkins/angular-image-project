angular.module('imageApp')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getKeywords = function(imgUrl){
    return $http({
      method: 'POST',
      url: '/api/vision',
      data: {
        imgUrl: imgUrl
      }
    });
  };

  factory.getInstagram = function(keyword){
    return $http({
      method: 'POST',
      url: '/api/instagram',
      data: {
        keyword: keyword
      }
    });
  };

  factory.getStoryBoards = function(){
    return $http({
      method: 'GET',
      url: '/api/storyboard'
    });
  };

  factory.saveStoryBoard = function(storyBoard) {
    return $http({
      method: 'POST',
      url: '/users/stories',
      data: storyBoard
    });
  };

  factory.getUserStories = function(){
    return $http({
      method: 'GET',
      url: '/users/stories'
    })
  }

  factory.updateStoryBoard = function(storyBoard){
    return $http({
      method: 'PUT',
      url: '/users/stories',
      data: storyBoard
    })
  }

  factory.deleteStoryBoard = function(storyBoard){
    return $http({
      method: 'DELETE',
      url: '/users/story',
      data: storyBoard
    })
  }

  factory.deletePicture = function() {
    return $http({
      method: 'DELETE',
      url: '/api/panels'
    });
  };

  return factory;
}]);
