angular.module('imageApp')
  .controller('HomeController', function($scope, homeFactory){
    
    $scope.getKeywords = function(){
      homeFactory.getKeywords($scope.imgUrl)
        .then(function(response){
          // get keywords out of response
          var keyword = JSON.parse(response.data.body).imageKeywords[0];
          // call factory for request to instagram
          getInstagram(keyword);
          $scope.test = JSON.parse(response.data.body).imageKeywords;
        }, function(response){
          console.log('FAIL', response);
        });
    }
    function getInstagram(keyword){
      homeFactory.getInstagram(keyword)
        .then(function(response){
          $scope.pictures = response.data;
        }, function(response){
          console.log('FAIL', response);
        })
    }
  });
