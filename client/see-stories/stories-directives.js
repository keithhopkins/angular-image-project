angular.module('StoriesDirective', [])
.directive('stories', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'see-stories/partials/stories.html'
  };
});
