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
      editable: '@'
    },
    transclude: true,
    link: function(scope, elem, attrs){
      console.log("woo!",scope.editable);
      if(scope.editable){
        $('.container').append("<button class='btn btn-danger'>Delete</button>");
      }
      console.log('hi',$('.container'));
    },
    templateUrl: 'home/partials/panel.html'
  };
});
// img {
//   max-height: 250px;
//   max-width: 250px;
//   margin: 10px;
// }
