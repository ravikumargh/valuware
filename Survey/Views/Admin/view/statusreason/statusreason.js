'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/statusreasons', {
            templateUrl: 'views/statusreasons/statusreasons.html',
            controller: 'StatusreasonController'
        });
  });
