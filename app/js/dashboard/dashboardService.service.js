;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .service('DashboardService', ['RB', '$http', '$cookies', 'Auth',

    function (RB, $http, $cookies, Auth) {

      Auth.setHeaders();

      var newLayoverEndpoint = RB.URL + 'layovers/create',
          getUserLayoversEndpoint = RB.URL + 'layovers/user/layover';

      this.getLayovers = function() {
        return $http.get(getUserLayoversEndpoint, RB.CONFIG);
      };
    }
  ]);

}());