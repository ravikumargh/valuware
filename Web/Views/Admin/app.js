'use strict';

var app = angular
 .module('AdminApp', [
   'ngRoute',
   'LocalStorageModule',
   'ui.bootstrap',
   'ui.router'
 ])
 .config(function ($routeProvider, $stateProvider) {
      
     $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        });

     $routeProvider
       .when('/', {
           templateUrl: 'views/main.html',
           controller: 'MainCtrl'
       })
       .when('/about', {
           templateUrl: 'views/about.html',
           controller: 'AboutCtrl'
       })
         .when('/services', {
             templateUrl: 'views/services.html',
             controller: 'ServicesCtrl'
         })
         .when('/carrier', {
             templateUrl: 'views/carrier.html',
             controller: 'CarrierCtrl'
         })
         .when('/contact-us', {
             templateUrl: 'views/contact-us.html',
             controller: 'ContactUsCtrl'
         })
         //.when('/login', {
         //    templateUrl: 'views/login.html',
         //    controller: 'LoginCtrl'
         //})
         .when('/register', {
             templateUrl: 'views/register.html',
             controller: 'LoginCtrl'
         })
          .when('/partyWorkers', {
              templateUrl: 'views/party-workers.html',
              controller: 'PartyWorkersCtrl'
          })
         .when('/PeopleIssues', {
             templateUrl: 'views/people-issues.html',
             controller: 'PeopleIssuesCtrl'
         })
         .when('/departments', {
             templateUrl: 'views/department/departments.html',
             controller: 'departmentController'
         });

       //.otherwise({
       //    redirectTo: '/'
       //});
 });
var serviceBase = 'http://localhost:55910/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});
//app.config(function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptorService');
//});
app.run(['$rootScope', '$location', '$http',
		function ($rootScope, $location,  $http) {
		    $rootScope.isAuthenticated = sessionStorage.getItem("lastname");
		}
 ]);

