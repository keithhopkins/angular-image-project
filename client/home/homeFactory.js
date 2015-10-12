angular.module('imageApp')
.factory('homeFactory', [function(){
  var factory = {};

  factory.addStoryBoard = function(storyBoard, img, caption){
    storyBoard.panels.push({imgUrl: img,
                            caption: caption});
  }

  return factory;
}]);
