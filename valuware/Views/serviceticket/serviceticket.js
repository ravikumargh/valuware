'use strict';

angular.module('yeomanApp')
  .config(function ($stateProvider) {
      $stateProvider
        .state('serviceticket', {
            url: '/serviceticket',
            templateUrl: 'views/serviceticket/servicetickets.html',
            controller: 'ServiceTicketController'
        }).state('newserviceticket', {
            url: '/newserviceticket',
            templateUrl: 'views/serviceticket/serviceticket-new.html',
            controller: 'ServiceTicketController'
        }).state('viewserviceticket', {
            url: '/viewserviceticket/:id',
            templateUrl: 'views/serviceticket/serviceticket-view.html',
            controller: 'ServiceTicketController'
        });

      //$routeProvider
      //  .when('/serviceticket', {
      //      templateUrl: 'views/serviceticket/servicetickets.html',
      //      controller: 'ServiceTicketController'
      //  }).when('/newserviceticket', {
      //      templateUrl: 'views/serviceticket/serviceticket-new.html',
      //      controller: 'ServiceTicketController'
      //  });
  });
