'use strict';

angular.module('AdminApp')
  .config(function ($stateProvider) {
      $stateProvider
        .state('survey', {
            url: '',
            templateUrl: 'views/survey/view/survey/survey.html',
            controller: 'SurveyController'
        })

          .state('survey.serviceticket', {
              url: '/serviceticket',
              templateUrl: 'views/survey/view/serviceticket/servicetickets.html',
              controller: 'ServiceTicketController',
              data: {
                  requireLogin: true
              }
          })




        .state('survey.clients', {
            url: '/clients',
            templateUrl: 'views/client/clients.html',
            controller: 'ClientController',
            data: {
                requireLogin: true
            }
        })
        .state('survey.roles', {
            url: '/roles',
            templateUrl: 'views/role/roles.html',
            controller: 'RoleController',
            data: {
                requireLogin: true
            }
        })
          .state('survey.statuses', {
              url: '/statuses',
              templateUrl: 'views/status/statuses.html',
              controller: 'StatusController',
              data: {
                  requireLogin: true
              }
          })
          .state('survey.surveytypes', {
              url: '/surveytypes',
              templateUrl: 'views/surveytype/surveytypes.html',
              controller: 'SurveyTypeController',
              data: {
                  requireLogin: true
              }
          })
          .state('survey.clienttypes', {
              url: '/clienttypes',
              templateUrl: 'views/clienttype/clienttypes.html',
              controller: 'ClientTypeController',
              data: {
                  requireLogin: true
              }
          })
            .state('survey.statusreasons', {
              url: '/statusreasons',
              templateUrl: 'views/statusreason/statusreasons.html',
              controller: 'StatusreasonController',
              data: {
                  requireLogin: true
              }
          })
      .state('survey.departments', {
          url: '/departments',
          templateUrl: 'views/department/departments.html',
          controller: 'DepartmentController',
          data: {
              requireLogin: true
          }
      });
  });
