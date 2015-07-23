;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .controller('DashboardCtrl', ['$scope', 'DashboardService', '$http', 'RB', '$cookies', 'Auth', '$location', '$stateParams', '$state',

      function ($scope, DashboardService, $http, RB, $cookies, Auth, $location, $stateParams, $state) {

        Auth.setHeaders();

        Auth.checkHeaders();
        
        $scope.newLayover = function(layover) {

          var newLayoverEndpoint = RB.URL + 'layovers/create',
              dateString = layover.date.toDateString(),
              arriveString = layover.arrival_time.toTimeString(),
              departString = layover.dept_time.toTimeString();

          var depart = moment(dateString + ' ' + arriveString).subtract(1, 'hours').format();
          var arrival = moment(dateString + ' ' + departString).subtract(1, 'hours').format();

          layover = {
            short_name : layover.short_name,
            city : layover.city,
            dept_time : depart,
            arrival_time : arrival,
            display : layover.display,
            date: dateString
          };

          $http.post(newLayoverEndpoint, layover, RB.CONFIG).success(function(data) {
            $state.reload('dashboard');
            swal('Success', 'Have a good trip! :)', 'success');
          });
        };

        DashboardService.getLayovers().success(function(data) {
          
          var layoverFiltered = data.map(function (layover) {
            
            layover.layover_info.arrival_time = moment(layover.layover_info.arrival_time).format('MMM Do YYYY h:mm A');
            layover.layover_info.departure_time = moment(layover.layover_info.departure_time).format('h:mm A');

            return layover;
          });

          $scope.layoverList = layoverFiltered;
        });
      }
    ]);
}());