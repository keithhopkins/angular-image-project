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

  factory.saveStoryBoard = function(storyBoard) {
    return $http({
      method: 'POST',
      url: '/api/storyboard',
      data: storyBoard
    });
  };

  factory.getStoryBoards = function(){
    return $http({
      method: 'GET',
      url: '/api/storyboard'
    });
  };

  factory.deletePicture = function() {
    return $http({
      method: 'DELETE',
      url: '/api/panels'
    });
  };

  return factory;
}]);
