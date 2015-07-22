;(function (){

  'use strict';

  angular.module('LeetApp')

  .controller('UserCtrl', ['$scope', '$http', '$location', 'UserService',

    function ($scope, $http, $location, UserService) {

      $scope.createUser = function (account) {
        UserService.newUser(account);
      };

      $scope.userLogin = function (account) {
        UserService.userLogin(account);
      };
      $scope.userLogout = function () {
        UserService.userLogout();
      };

      $scope.getUser = function() {

        UserService.getUser().success(function(data){
          console.log(data);
          $scope.userData = data;
        });
      };
    }
  ]);

}());
