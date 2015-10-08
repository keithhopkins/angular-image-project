angular.module('imageApp')
  .controller('HomeController', function($scope, homeFactory, $timeout){
    $scope.storyBoard = [];
    $scope.errorMessage = '';

    function messageTimeout() {
      $scope.errorMessage = '';
    }

    homeFactory.getStoryBoards()
    .then(function(response){
      console.log('all storyboards', response);
      $scope.storyBoards = response;
    }, function(response){
      console.log('failed to get all storyboards');
    });

    // delete story

    $scope.getKeywordsAndInstagram = function(){
      $scope.storyBoard.push($scope.imgUrl);
      homeFactory.getKeywords($scope.imgUrl)
        .then(function(response){
          var keyword;
          var keywords = JSON.parse(response.data.body).imageKeywords;
          console.log('keywords', keywords);
          if(keywords.length===0){
            $scope.errorMessage = 'Cannot analyze image. Try another image.';
            $timeout(messageTimeout, 5000);
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

    $scope.addStoryBoard = function() {
      $scope.storyBoard.push($scope.imgUrl);
    };

    $scope.saveStory = function(){
      homeFactory.saveStoryBoard($scope.title, $scope.storyBoard)
      .then(function(response) {
        console.log('success save', response);
      }, function(response) {
        console.log('FAIL', response);
      });
    }

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

    $scope.urlFinder = function(url) {
      console.log('It is working', url);
      $scope.imgUrl = url;
    };




  }); //end
