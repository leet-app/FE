;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .service('MeetupService', [ 'Auth', 'RB', '$http', '$location',

    function (Auth, RB, $http, $location) {

      var getMeetupEndpoing = RB.URL + '';

      this.getMeetup = function () {

      };

    }
  ]);

}());