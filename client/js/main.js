angular.module('imageApp', ['ngRoute', 'homeDirective'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      });
  });
