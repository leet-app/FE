;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .controller('NavbarCtrl', ['$scope', '$mdSidenav', '$timeout', '$log', '$mdUtil', '$anchorScroll', '$location',

    function ($scope, $mdSidenav, $timeout, $log, $mdUtil, $anchorScroll, $location) {

      $scope.toggleLeft = buildToggler('left');

     function buildToggler(navID) {
       var debounceFn =  $mdUtil.debounce(function(){
             $mdSidenav(navID)
               .toggle()
               .then(function () {
                 $log.debug("toggle " + navID + " is done");
               });
           },300);
       return debounceFn;
     }

      $scope.close = function () {
        $mdSidenav('left').close()
          .then(function () {
            $log.debug("close LEFT is done");
          });
      };

      $scope.toTop = function () {
        $location.hash('top');
        $anchorScroll();
      };
    }
  ]);

}());