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
      img: '@'
    },
    transclude: true,
    // link: function(scope, elem, attrs){
    //   elem.children().css('display', 'inline');
    //   elem.css('max-width', '250px');
    //   elem.css('max-height', '350px');
    //   elem.css('margin', '10px');
    //   console.log(elem);
    // },
    templateUrl: 'home/partials/panel.html'
  }
})
// img {
//   max-height: 250px;
//   max-width: 250px;
//   margin: 10px;
// }
