angular.module('imageApp')
  .controller('HomeController', function($scope, homeFactory, $timeout){
    $scope.storyBoard = {panels:[]};
    $scope.errorMessage = '';

    function messageTimeout() {
      $scope.errorMessage = '';
    }

    homeFactory.getStoryBoards()
    .then(function(response){
      $scope.storyBoards = response.data;
      console.log($scope.storyBoards);
    }, function(response){
      console.log('failed to get all storyboards');
    });

    // delete story

    $scope.getKeywordsAndInstagram = function(){
      // $scope.storyBoard.push($scope.imgUrl);
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
      var obj = {imgUrl: $scope.imgUrl,
                 caption: $scope.caption};
      console.log(obj);
      $scope.storyBoard.panels.push(obj);
    };

    $scope.saveStory = function(){
      $scope.storyBoards.push($scope.storyBoard);
      homeFactory.saveStoryBoard($scope.storyBoard)
      .then(function(response) {
        console.log('success save', response);
      }, function(response) {
        console.log('FAIL', response);
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

    $scope.urlFinder = function(url) {
      console.log('It is working', url);
      $scope.imgUrl = url;
    };

    $scope.showValues = function() {
      console.log($scope.storyBoard);
    }




  }); //end
