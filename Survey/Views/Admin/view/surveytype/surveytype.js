'use strict';

angular.module('AdminApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/surveytype', {
            templateUrl: 'views/surveytype/surveytypes.html',
            controller: 'SurveyTypeController'
        });
  });
