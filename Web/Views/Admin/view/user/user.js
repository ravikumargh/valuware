'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/user', {
            templateUrl: 'views/admin/view/user/users.html',
            controller: 'UserController'
        });
  });
