;(function (){

  'use strict';

  angular.module('LeetApp', ['ui.router', 'ngMaterial', 'angular-loading-bar', 'ngCookies'])

    .constant('RB', {
      URL: 'https://leetapp.herokuapp.com/',
      CONFIG: {
        headers: {
          'Access-Token' : ''
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
            views: {
              'main' : {
                templateUrl: 'js/templates/home.tpl.html',
                controller: 'LoginCtrl'
              },
              'sidebar' : {
                templateUrl: 'js/templates/homenav.tpl.html'
              }
          }
        })
        .state('register', {
          url: '/register',
          views: {
            'main': { 
              templateUrl: 'js/templates/register.tpl.html',
              controller: 'RegisterCtrl'
            },
            'sidebar' : {
                templateUrl: 'js/templates/homenav.tpl.html'
            }
          }
        })
        .state('dashboard', {
          url: '/dashboard',
          views: {
            'main': { 
              templateUrl: 'js/templates/dashboard.tpl.html',
              controller: 'DashboardCtrl'
            }
          }
        });
      }

  ]);

}());
