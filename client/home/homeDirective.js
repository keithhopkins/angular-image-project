angular.module('homeDirective', [])
.directive('results', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'home/partials/results.html'
  };
});

angular.module('homeDirective')
.directive('storyBoard', function(){
  return {
    restrict: 'E',
    templateUrl: 'home/partials/storyBoard.html'
  };
});

angular.module('homeDirective')
.directive('hover', function() {
  return {
    restrict: 'A',
    link:function($scope, element, attribute) {
     element.on('click', function() {
      console.log('work!!');
      element.addClass('border');
      $scope.imgUrl = 'banana';
     });
    }
  };
});










