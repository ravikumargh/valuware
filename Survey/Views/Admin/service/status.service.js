'use strict';
angular.module('AdminApp').factory('StatusService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/status/';

        var dataFactory = {};
        dataFactory.addNewStatus = function (status) {
            return $http.post(urlBase,  status );
        };

         
        dataFactory.getStatuses = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateStatus = function (status) {
            return $http.put(urlBase ,  status );
        };

        dataFactory.deleteStatus = function (status_id) {
            return $http.delete(urlBase + status_id + '/');
        };

        return dataFactory;
    }
]);
