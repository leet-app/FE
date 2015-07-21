;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .service('DashboardService', ['RB', '$http', '$cookies',

    function (RB, $http, $cookies) {

      var newLayoverEndpoint = RB.URL + 'layovers/create',
          getUserLayoversEndpoint = RB.URL + 'layovers/user/layover';

      this.getLayovers = function() {
        console.log('cookie auth', $cookies.get('Access-Token'));
        console.log('headers', RB.CONFIG.headers);
        return $http.get(getUserLayoversEndpoint, RB.CONFIG);
      };
    }
  ]);

}());