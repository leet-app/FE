;(function (){

  'use strict';

  angular.module('LeetApp')

  .controller('LoginCtrl', ['$scope', '$http', '$location', 'UserService',

    function ($scope, $http, $location, UserService) {
      $scope.userLogin = function (account) {
        UserService.userLogin(account);
      };
    }
  ]);

}());
