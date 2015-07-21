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
        console.log('Destroy Headers', RB.CONFIG);
      };
    }
  ]);

}());