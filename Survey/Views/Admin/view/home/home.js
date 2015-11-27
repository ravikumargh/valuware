'use strict';

angular.module('AdminApp')
  .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'views/admin/view/home/home.html',
            controller: 'AdminController'
        })
        .state('home.users', {
            url: '/users',
            templateUrl: 'views/admin/view/user/users.html',
            controller: 'UserController',
            data: {
                requireLogin: true
            }
        })
        .state('home.clients', {
            url: '/clients',
            templateUrl: 'views/admin/view/client/clients.html',
            controller: 'ClientController',
            data: {
                requireLogin: true
            }
        })
        .state('home.roles', {
            url: '/roles',
            templateUrl: 'views/admin/view/role/roles.html',
            controller: 'RoleController',
            data: {
                requireLogin: true
            }
        })
        .state('home.teams', {
            url: '/teams',
            templateUrl: 'views/admin/view/team/teams.html',
            controller: 'TeamController',
            data: {
                requireLogin: true
            }
        })
          .state('home.statuses', {
              url: '/statuses',
              templateUrl: 'views/admin/view/status/statuses.html',
              controller: 'StatusController',
              data: {
                  requireLogin: true
              }
          })
          .state('home.surveytypes', {
              url: '/surveytypes',
              templateUrl: 'views/admin/view/surveytype/surveytypes.html',
              controller: 'SurveyTypeController',
              data: {
                  requireLogin: true
              }
          })
          .state('home.clienttypes', {
              url: '/clienttypes',
              templateUrl: 'views/admin/view/clienttype/clienttypes.html',
              controller: 'ClientTypeController',
              data: {
                  requireLogin: true
              }
          })
            .state('home.statusreasons', {
                url: '/statusreasons',
                templateUrl: 'views/admin/view/statusreason/statusreasons.html',
                controller: 'StatusreasonController',
                data: {
                    requireLogin: true
                }
            })
      .state('home.departments', {
          url: '/departments',
          templateUrl: 'views/admin/view/department/departments.html',
          controller: 'DepartmentController',
          data: {
              requireLogin: true
          }
      });
  });
