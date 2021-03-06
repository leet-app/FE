;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .controller('MeetupCtrl', ['$scope', 'Auth','RB', '$http', '$stateParams', 'DashboardService',

    function ($scope, Auth, RB, $http, $stateParams, DashboardService) {

      Auth.setHeaders();
      Auth.checkHeaders();

      var layoverId = $stateParams.id,
          meetupEndpoint = RB.URL + 'layovers/' + layoverId + '/layover_meetup';

      DashboardService.getLayovers().success(function(data){

        var layoverFiltered = data.map(function (layover) {
          
          layover.layover_info.arrival_time = moment(layover.layover_info.arrival_time).format('MMM Do h:mm A');
          layover.layover_info.departure_time = moment(layover.layover_info.departure_time).format('h:mm A');

          return layover;
        });

        var singleLayover = _.where(layoverFiltered, {id: Number(layoverId)});

        $scope.layoverData = singleLayover;
      });

      $http.get(meetupEndpoint, RB.CONFIG).success(function(data){

        var layoverFiltered = data.map(function (layover) {
          
          layover.layover_info.arrival_time = moment(layover.layover_info.arrival_time).format('MMM Do h:mm A');
          layover.layover_info.departure_time = moment(layover.layover_info.departure_time).format('h:mm A');

          return layover;
        });

        console.log('layovers', layoverFiltered);

        $scope.otherLayoverList = layoverFiltered;
      });

    }
  ]);

}());