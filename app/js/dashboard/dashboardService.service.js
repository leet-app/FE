;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .service('DashboardService', ['RB', '$http', '$cookies',

    function (RB, $http, $cookies) {

      var newLayoverEndpoint = RB.URL + 'layovers/create',
          getUserLayoversEndpoint = RB.URL + 'layovers/user/layover';

      this.getLayovers = function() {
        return $http.get(getUserLayoversEndpoint, RB.CONFIG);
      };
    }
  ]);

}());