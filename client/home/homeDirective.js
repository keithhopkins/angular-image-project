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
  }
})
