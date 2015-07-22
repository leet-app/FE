;(function (){

  'use strict';

  angular.module('LeetApp')

  .service('UserService', [ 'RB', '$http', '$location', '$state', '$cookies', 'Auth',

    function (RB, $http, $location, $state, $cookies, Auth) {

      var regEndpoint = RB.URL + 'users/register',
          loginEndpoint = RB.URL + 'users/login',
          singleUserEndpoint = RB.URL + 'user';

      var _routeUser = function (token) {
        if (token === undefined) {
          $location.path('/register');
        } else if($location.path() === '/register') {
          $location.path('/dashboard');
        }
      };

      var _routeNewUser = function(data) {
        $location.path('/login');
      };

      var _setCookies = function (data) {
        $cookies.put('Access-Token', data.access_token);
        $location.path('/dashboard');

        swal({
          title: 'Hey there!',
          text: '<div class="promo"><p>Thanks for using Leet. Don\'\t forget to check out out our mobile website.</p><br></br><div class="md-iphone-5 md-white-device md-glare"> <div class="md-body"> <div class="md-buttons"></div> <div class="md-front-camera"></div> <div class="md-top-speaker"></div> <div class="md-screen"> <-- Your content here --> </div> <button class="md-home-button"></button> </div> </div></div>',
          html: true });
      };

      var _destroyCookies = function() {
        $cookies.remove('Access-Token');
        $location.path('/login');
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

      // this.checkUser = function() {
      //   var token = $cookies.get('Access-Token');
      //   console.log('c');
      //   _updateToken(token);
      // };

      this.newUser = function (account) {
        var u = new User(account);

        return $http.post(regEndpoint, u).success(function(data) {
          _routeNewUser(data);
        }).error(function(data){
          swal('Error', 'Form errors. Please try again.', 'error');
        });
      };

      this.userLogin = function (account) {
        var l = new Login(account);

        return $http.post(loginEndpoint, l).success(function (data){
          _setCookies(data);
          Auth.setHeaders(data);
        })
        .error(function(data) {
          swal('Error', data.message + ' Please try again.', 'error');
        });
      };

      this.userLogout = function () {
        _destroyCookies();
        Auth.destroyHeaders();
      };

      this.getUser = function () {
        return $http.get(singleUserEndpoint, RB.CONFIG);
      };
    }

  ]);

}());