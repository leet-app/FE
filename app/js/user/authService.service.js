;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .service('Auth', ['RB', '$http', '$cookies', '$location',

    function (RB, $http, $cookies, $location) {

      this.setHeaders = function (data) {
        var token = $cookies.get('Access-Token');
        RB.CONFIG.headers['Access-Token'] = token;
      };

      this.destroyHeaders = function () {
        RB.CONFIG.headers['Access-Token'] = undefined;
        console.log('Destroyed Headers', RB.CONFIG);
      };

      this.checkHeaders = function () {

        var accessToken = $cookies.get('Access-Token');

        if (accessToken) {
          $location.path();
        } else {
          swal("Error", "Please log in.", "error");
          $location.path('/login');
        }
      };

      this.redirectUser = function() {
        
        if(RB.CONFIG.headers['Access-Token'] === undefined) {
          $location.path('/login');
        }

      };
    }
  ]);

}());