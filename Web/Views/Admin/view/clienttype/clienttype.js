'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/clienttype', {
            templateUrl: 'views/clienttype/clienttypes.html',
            controller: 'ClientTypeController'
        });
  });
