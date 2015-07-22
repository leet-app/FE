;(function (){

  'use strict';

  angular.module('LeetApp')

  .controller('LoginCtrl', ['$scope', 'UserService',

    function ($scope, UserService) {
      $scope.userLogin = function (account) {
        UserService.userLogin(account);
      };
    }
  ]);

}());
