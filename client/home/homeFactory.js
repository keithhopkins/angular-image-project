angular.module('imageApp')
.factory('homeFactory', ['$http', function($http){
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

  factory.addStoryBoard = function(imgUrl) {
    return $http({
      method: 'POST',
      url: '/api/storyboard',
      data: {
        imgUrl: imgUrl
      }
    });
  };

  return factory;
}]);
