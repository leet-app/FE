;(function (){

  'use strict';

  angular.module('LeetApp', ['ui.router', 'ngMaterial', 'angular-loading-bar'])

    .constant('RB', {
      URL: 'http://floating-garden-2631.herokuapp.com/',
      CONFIG: {
        headers: {

        }
      }
    })

    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue');
    })

    .config([ '$stateProvider', '$urlRouterProvider',

      function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'js/templates/home.tpl.html',
            controller: ''
          })

          .state('register', {
            url: '/register',
            templateUrl: 'js/templates/register.tpl.html',
            controller: 'RegisterCtrl'
          })
          .state('dash', {
            url: '/dash',
            templateUrl: 'js/templates/dash.tpl.html',
            controller: ''
          });
      }

  ]);

}());
