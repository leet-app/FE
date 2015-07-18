;(function (){

  'use strict';

  angular.module('LeetApp')

  .service('UserService', [ 'RB', '$http', '$location', '$cookies',

    function (RB, $http, $location, $cookies) {

      var regEndpoint = RB.URL + 'users/register',
          loginEndpoint = RB.URL + 'users/login',
          accessToken = RB.CONFIG.headers['Access-Token'];

      var _routeUser = function (token) {
        if (token === undefined) {
          $location.path('/register');
        } else if($location.path() === '/register') {
          $location.path('/dashboard');
        }
      };

      var _updateToken = function (token) {
        if (token !== undefined) {
          accessToken = token;
        }
        _routeUser(token);
      };

      var _setCookies = function (data) {
        console.log(data);
        $cookies.put('Access-Token', data.access_token);
        $location.path('/dashboard');
      };

      var _routeNewUser = function(data) {
        $location.path('/login');
        console.log('userdata', data);
      };

      var _logErrors = function (data) {
        console.log(data.errors);
      };

      var User = function (options) {
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.email = options.email;
        this.user_name = options.user_name;
        this.password = options.password;
        this.phone = options.phone;
        this.avatar = options.avatar;
      };

      var Login = function (options) {
        this.user_name = options.user_name;
        this.password = options.password;
      };

      this.checkUser = function() {
        var token = $cookies.get('Access-Token');
        _updateToken(token);
      };

      this.newUser = function (account) {
        var u = new User(account);

        return $http.post(regEndpoint, u).success(function(data) {
          _routeNewUser(data);
        }).error(function(data){
          _logErrors(data);
        });
      };

      this.userLogin = function (account) {
        var l = new Login(account);

        return $http.post(loginEndpoint, l).success(function (data){
          _setCookies(data);
        });

      };

      this.userLogout = function () {
        $cookies.remove('Access-Token');
        accessToken = '';
        $location.path('/login');
      };
    }

  ]);

}());
