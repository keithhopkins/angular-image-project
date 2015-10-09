angular.module('imageApp')
.factory('socialauthFactory', ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    // create user variable
    var user = null;

    // return available functions for use in controllers
    return ({
      getUserStatus: getUserStatus,
      login: login,
    });

    function getUserStatus() {
      if(user) {
        return true;
      } else {
        return false;
      }
    }

    function login(username, password) {
      // create a new instance of deferred
      var deferred = $q.defer();
      // send a post request to the server
      $http.get('/social/github')
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            user = true;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });
      // return promise object
      return deferred.promise;
    }

}]);
