angular.module('imageApp')
  .controller('HomeController', function($scope, homeFactory){
    // $scope.getTest = function(){
    //   homeFactory.getTest($scope.imgUrl)
    //     .then(function(response){
    //       console.log(response);
    //       $scope.test = JSON.parse(response.data.body).imageKeywords;
    //     }, function(response){
    //       console.log('fail', response);
    //     });
    // }

    $scope.getKeywords = function(){
      homeFactory.getKeywords($scope.imgUrl)
        .then(function(response){
          // get keywords out of response
          // call factory for request to instagram
          $scope.test = JSON.parse(response.data.body).imageKeywords;
        }, function(response){
          console.log('FAIL', response);
        })
    }
  });
