'use strict';

angular.module('AdminApp')
  .config(function ($stateProvider) {
      $stateProvider
        .state('serviceticket', {
            url: 'servicetickets',
            templateUrl: 'views/serviceticket/view/serviceticket/servicetickets.html',
            controller: 'ServiceTicketController'
        }).state('newserviceticket', {
            url: '/newserviceticket',
            templateUrl: 'views/serviceticket/view/serviceticket/serviceticket-new.html',
            controller: 'ServiceTicketController'
        }).state('viewserviceticket', {
            url: '/viewserviceticket/:id',
            templateUrl: 'views/serviceticket/view/serviceticket/serviceticket-view.html',
            controller: 'ServiceTicketController'
        });
        
  });
