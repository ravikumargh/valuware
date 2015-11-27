//'use strict';

//angular.module('AdminApp')
//  .config(function ($routeProvider) {
//      $routeProvider
//        .when('/departments', {
//            templateUrl: 'views/department/departments.html',
//            controller: 'departmentController'
//        }).when('/my/departments', {
//            templateUrl: 'views/department/departments-list.html',
//            controller: 'departmentController'
//        }).when('/my/departments/new', {
//            templateUrl: 'views/department/department-create-dialog.html',
//            controller: 'departmentController'
//        }).when('/my/department/edit/:id', {
//            templateUrl: 'views/department/department-create-dialog.html',
//            controller: 'departmentController'
//        })
//          .when('/department/:id', {
//              templateUrl: 'views/department/department-details.html',
//              controller: 'departmentsCtrl'
//          });
//  });
'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/departments', {
            templateUrl: 'views/department/departments.html',
            controller: 'DepartmentController'
        });
  });
