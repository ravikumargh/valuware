'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/role', {
            templateUrl: 'views/role/roles.html',
            controller: 'RoleController'
        });
  });
