'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/team', {
            templateUrl: 'views/team/teams.html',
            controller: 'TeamController'
        });
  });
