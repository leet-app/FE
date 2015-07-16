;(function (){

  'use strict';

  angular.module('LeetApp')

  .service('UserService', [ 'RB', '$http', '$location', '$cookies',

    function (RB, $http, $location, $cookies) {

      var regEndpoint = RB.URL + 'users/register',
          logEndpoint = RB.URL + 'users/login';

      var User = function (options) {
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.email = options.email;
        this.user_name = options.user_name;
        this.password = options.password;
        // this.phone = options.phone;
        // this.avatar = options.avatar;
      };

      var Login = function (options) {
        this.username = options.username;
        this.password = options.password;
      };

      this.newUser = function (account) {
        var u = new User(account);

        return $http.post(regEndpoint, u).success(function(data) {
          $location.path('/login');
          console.log('userdata', data);
        }).error(function(data){
          console.log(data.errors);
        });
      };

      this.userLogin = function (account) {
        var l = new Login(account);
        console.log(l);
        // $cookies.put('sessionToken', data.access_token);
        // RB.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');
      };
    }

  ]);

}());
