;(function (){

  'use strict';

  angular.module('LeetApp')

  .controller('LogoutCtrl', ['$scope', 'UserService',

    function ($scope, UserService) {
      $scope.userLogout = function () {
        UserService.userLogout();
      };
    }
  ]);

}());
