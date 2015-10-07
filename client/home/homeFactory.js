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

  factory.getFaces = function(imgUrl){
    return $http({
      method: 'POST',
      url: '/api/facetags',
      data: {
        imgUrl: imgUrl
      }
    });
  };

  factory.getEntities = function(imgUrl){
    return $http({
      method: 'POST',
      url: '/api/entities',
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
  return factory;
}]);
