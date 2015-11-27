'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/status', {
            templateUrl: 'views/status/statuses.html',
            controller: 'StatusController'
        });
  });
