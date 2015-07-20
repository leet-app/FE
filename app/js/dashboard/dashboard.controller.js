;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .controller('DashboardCtrl', ['$scope', 'DashboardService', '$http', 'RB',

      function ($scope, DashboardService, $http, RB) {
        
        $scope.newLayover = function(layover) {

          // var newLayoverEndpoint = RB.URL + 'layovers/create';
          
          layover = {
            short_name : layover.short_name,
            city : layover.city,
            arrival_time : layover.arrival_time,
            dept_time : layover.dept_time,
            display : layover.display
          };

          console.log('layover', layover);
        };

        $scope.getLayovers = function() {

        };
      }
    ]);
}());