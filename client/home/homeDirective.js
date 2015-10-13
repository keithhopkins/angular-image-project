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
    link:function(scope, elem, attrs) {
     elem.on('click', function() {
      // needs to get fixed
      console.log('work!!');
      elem.addClass('border');
     });
    }
  };
});

angular.module('homeDirective')
.directive('panel', function(){
  return {
    restrict: 'E',
    scope:{
      img: '@',
      index: '@'
    },
    transclude: true,
    // something about this doesn't work.... but it shows up... but it doesn't know the controller to use
    // link: function(scope, elem, attrs){
    //   if(scope.editable){
    //     elem.append("<button ng-click='deletePicture()' class='btn btn-danger'>Delete</button>");
    //   }
    // },
    templateUrl: 'home/partials/panel.html'
  };
});
