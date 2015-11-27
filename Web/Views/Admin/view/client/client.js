'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/client', {
            templateUrl: 'views/client/clients.html',
            controller: 'ClientController'
        });
  });
