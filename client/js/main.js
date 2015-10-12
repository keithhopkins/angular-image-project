angular.module('imageApp', ['ngRoute', 'homeDirective'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController',
        access: {restricted: true}
      })
      .when('/login', {
        templateUrl: 'auth/partials/login.html',
        controller: 'LoginController',
        access: {restricted: false}
      })
      .when('/logout', {
        controller: 'LogoutController',
        access: {restricted: true}
      })
      .when('/register', {
        templateUrl: 'auth/partials/register.html',
        controller: 'RegisterController',
        access: {restricted: false}
      })
      .when('/stories', {
        templateUrl: 'see-stories/partials/stories.html',
        controller: 'StoriesController',
        access: {restricted: false}
      })
      .otherwise({redirectTo: '/'});
  });

angular.module('imageApp')
.run(function ($rootScope, $location, $route, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !AuthFactory.getUserStatus()) {
      $location.path('/login');
      $route.reload();
    }
  });
});
