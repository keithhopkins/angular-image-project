angular.module('imageApp')
.controller('LoginController', ['$scope', '$location', 'AuthFactory',
  function ($scope, $location, AuthFactory) {

    console.log(AuthFactory.getUserStatus());

    $scope.login = function () {
      // initial values
      $scope.error = false;
      $scope.disabled = true;
      // call login from service
      AuthFactory.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });
    };

}]);


angular.module('imageApp')
.controller('LogoutController', ['$scope', '$location', 'AuthFactory',
  function ($scope, $location, AuthFactory) {

    $scope.logout = function () {
      console.log(AuthFactory.getUserStatus());
      // call logout from service
      AuthFactory.logout()
        .then(function () {
          $location.path('/login');
        });
    };

}]);

angular.module('imageApp')
.controller('RegisterController', ['$scope', '$location', 'AuthFactory',
  function ($scope, $location, AuthFactory) {

    console.log(AuthFactory.getUserStatus());
    $scope.register = function () {
      // initial values
      $scope.error = false;
      $scope.disabled = true;
      // call register from service
      AuthFactory.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });
    };



  $scope.githubLogin = function() {
    AuthFactory.githubLogin()
    .then(function() {
      $location.path('/');
    })
    .catch(function () {
      $scope.error = true;
      $scope.errorMessage = "Something went wrong.";
    });
  };

}]);




