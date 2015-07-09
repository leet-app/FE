;(function (){

  'use strict';

  angular.module('LeetApp')

  .service('UserService', [ 'RB', '$http',

    function (RB, $http) {
      // endpoints we need (variables)

      var regEndpoint = RB.URL + 'users/register',
          logEndpoint = RB.URL + 'users/login';

      // register blueprint (constructor)

      var User = function (options) {
        this.first = options.first;
        this.last = options.last;
        this.email = options.email;
        this.username = options.username;
        this.phone = options.phone;
        this.avatar = options.avatar;
        this.linked_in = options.linked_in;
      };

      // login blueprint (constructor)

      var Login = function (options) {
        this.username = options.username;
        this.password = options.password;
      };

      // user register (function)

      this.newUser = function (account) {
        var u = new User(account);
        console.log(u);
      };
    }

  ]);

}());
