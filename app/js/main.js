;(function (){
  
  'use strict';

  angular.module('LeetApp', ['ui.router', 'ngMaterial', 'angular-loading-bar'])

    .constant('RB', {
      URL: '',
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
            controller: 'UserControl'
          })

          .state('register', {
            url: '/register',
            templateUrl: 'js/templates/register.tpl.html',
            controller: 'UserControl'
          })
          .state('dash', {
            url: '/dash',
            templateUrl: 'js/templates/dash.tpl.html',
            controller: ''
          });
      }

  ]);

}());