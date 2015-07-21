;(function (){
  
  'use strict';

  angular.module('LeetApp')

  .controller('DashboardCtrl', ['$scope', 'DashboardService', '$http', 'RB', '$cookies', 'Auth',

      function ($scope, DashboardService, $http, RB, $cookies, Auth) {

        Auth.setHeaders();
        
        $scope.newLayover = function(layover) {

          var newLayoverEndpoint = RB.URL + 'layovers/create',
              dateString = layover.date.toDateString(),
              arrivalMoment = moment(),
              deptMoment = moment();

          layover = {
            short_name : layover.short_name,
            city : layover.city,
            arrival_time : layover.arrival_time,
            dept_time : layover.dept_time,
            display : layover.display,
            date: dateString
          };

          console.log('date', dateString);
          console.log('layover', layover);
        };

        DashboardService.getLayovers().success(function(data) {
          
          var layoverArrayRaw = data.map(function (layover) {

            layover.layover_info.arrival_time = moment(layover.layover_info.arrival_time).format('MMMM Do YYYY, h:mm A');

            layover.layover_info.departure_time = moment(layover.layover_info.departure_time).format('MMMM Do YYYY, h:mm A');

            return layover;
          });

          console.log('layovers', layoverArrayRaw);

          $scope.layoverList = layoverArrayRaw;
        });
      }
    ]);
}());

// var m1 = moment();
// undefined
// m1;
// Moment {_isAMomentObject: true, _isUTC: false, _locale: Locale, _d: Mon Jul 20 2015 17:07:28 GMT-0400 (EDT), _z: null}_d: Mon Jul 20 2015 17:07:28 GMT-0400 (EDT)_isAMomentObject: true_isUTC: false_locale: Locale_z: null__proto__: Moment
// m1.format('HH:mm:ss')
// "17:07:28"
// m1.format('HH:mm:ss Z')
// "17:07:28 -04:00"
// m2 = moment('Jun 14 2014 ' + m1.format('HH:mm:ss Z'), 'MMM DD YYYY HH:mm:ss Z');
// Moment {_isAMomentObject: true, _i: "Jun 14 2014 17:07:28 -04:00", _f: "MMM DD YYYY HH:mm:ss Z", _tzm: -240, _isUTC: false…}
// m2;
// Moment {_isAMomentObject: true, _i: "Jun 14 2014 17:07:28 -04:00", _f: "MMM DD YYYY HH:mm:ss Z", _tzm: -240, _isUTC: false…}_a: Array[7]_d: Sat Jun 14 2014 17:07:28 GMT-0400 (EDT)_f: "MMM DD YYYY HH:mm:ss Z"_i: "Jun 14 2014 17:07:28 -04:00"_isAMomentObject: true_isUTC: false_locale: Locale_pf: Object_tzm: -240_z: null__proto__: Moment