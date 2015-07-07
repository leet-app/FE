;(function (){
  
  'use strict';

  angular.module('LeetApp', ['ui.router', 'ngMaterial', 'angular-loading-bar'])

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
            controller: ''
          });
      }

  ]);

}());