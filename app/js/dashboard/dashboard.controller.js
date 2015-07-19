;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .controller('DashboardCtrl', ['$scope', 'DashboardService', '$http', 'RB',

      function ($scope, DashboardService, $http, RB) {
        
        $scope.newLayover = function(layover) {
          DashboardService.newLayover(layover);
        };
      }
    ]);
}());