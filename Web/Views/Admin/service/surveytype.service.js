'use strict';
angular.module('AdminApp').factory('SurveyTypeService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/surveytype/';

        var dataFactory = {};
        dataFactory.addNewSurveyType = function (surveytype) {
            return $http.post(urlBase,  surveytype );
        };

         
        dataFactory.getSurveyTypes = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateSurveyType = function (surveytype) {
            return $http.put(urlBase ,  surveytype );
        };

        dataFactory.deleteSurveyType = function (surveytype_id) {
            return $http.delete(urlBase + surveytype_id + '/');
        };

        return dataFactory;
    }
]);
