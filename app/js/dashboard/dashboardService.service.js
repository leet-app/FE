;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .service('DashboardService', ['RB', '$http', 

    function (RB, $http) {

      var newLayoverEndpoint = RB.URL + 'layovers/create',
          getUserLayoversEndpoint = RB.URL + 'layovers/user/layover';

      var Layover = function(options) {
      this.short_name = options.short_name;
      this.city = options.city;
      this.dept_time = options.dept_time;
      this.arrival_time = options.arrival_time;
      this.display = options.display;
      };

      this.newLayover = function(layover) {
        var l = new Layover(layover);
        console.log('layover', l);
      };

      this.getLayovers = function() {

      };
    }
  ]);

}());