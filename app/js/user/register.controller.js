;(function (){

  'use strict';

  angular.module('LeetApp')

  .controller('RegisterCtrl', ['$scope', '$http', '$location', 'UserService',

    function ($scope, $http, $location, UserService) {
      $scope.createUser = function (account) {
        UserService.newUser(account);
      };
    }
  ]);

}());
