angular.module('imageApp', ['ngRoute', 'homeDirective'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      });
      .when('/login', {
        templateUrl: 'auth/partials/login.html',
        controller: 'LoginController'
      })
      .when('/logout', {
        controller: 'LogoutController'
      })
      .when('/register', {
        templateUrl: 'auth/partials/register.html',
        controller: 'RegisterController'
      })
      .otherwise({redirectTo: '/'});
  });
