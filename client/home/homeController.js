angular.module('imageApp')
  .controller('HomeController', function($scope, homeFactory){
    $scope.storyBoard = [];
    $scope.getKeywordsAndInstagram = function(){
      $scope.storyBoard.push($scope.imgUrl);
      homeFactory.getKeywords($scope.imgUrl)
        .then(function(response){
          $scope.errorMessage = '';
          var keyword;
          var keywords = JSON.parse(response.data.body).imageKeywords;
          console.log('keywords', keywords);
          if(keywords.length===0){
            $scope.errorMessage = 'Cannot analyze image. Try another image.';
          } else if (keywords[0].text==='person'){
            if(keywords[1]){
              keyword = keywords[1].text;
            }
          } else {
            keyword = keywords[0].text;
          }
          console.log('keyword', keyword);
          $scope.hashTag = keyword;
          if(keyword!==undefined){
            $scope.showTitle=true;
            getInstagram(keyword);
          }
        }, function(response){
          console.log('FAIL', response);
        });
    };

    $scope.getFaces = function() {
      homeFactory.getFaces($scope.imgUrl)
      .then(function(response){
        console.log(response);
      }, function(response) {
        console.log('Fail', response);
      });
    };

    $scope.getEntities = function() {
      homeFactory.getEntities($scope.imgUrl)
      .then(function(response){
        console.log(response);
      }, function(response){
        console.log("FAIL", response);
      });
    };

    function getInstagram(keyword){
      console.log('get instagram', keyword);
      homeFactory.getInstagram(keyword)
        .then(function(response){
          console.log(response);
          $scope.pictures = JSON.parse(response.data.body).data;
          console.log($scope.pictures);
        }, function(response){
          console.log('FAIL', response);
        });
    }
  });
