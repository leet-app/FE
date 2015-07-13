;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .controller('DashboardCtrl', ['$scope', '$mdSidenav', '$timeout', '$log', '$mdUtil',

    function ($scope, $mdSidenav, $timeout, $log, $mdUtil) {

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

    }
  ]);

}());