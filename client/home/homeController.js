angular.module('imageApp')
  .controller('HomeController', function($scope, homeFactory){

    $scope.getKeywords = function(){
      homeFactory.getKeywords($scope.imgUrl)
        .then(function(response){
          // get keywords out of response
          var keyword = JSON.parse(response.data.body).imageKeywords[0].text;
          console.log(keyword);
          // call factory for request to instagram
          getInstagram(keyword);
        }, function(response){
          console.log('FAIL', response);
        });
    }
    function getInstagram(keyword){
      homeFactory.getInstagram(keyword)
        .then(function(response){
          console.log(response);
          $scope.pictures = JSON.parse(response.data.body).data;
          console.log($scope.pictures);
        }, function(response){
          console.log('FAIL', response);
        })
    }
  });
