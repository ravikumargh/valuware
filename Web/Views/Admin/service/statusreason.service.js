'use strict';
angular.module('AdminApp').factory('StatusreasonService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/statusreason/';

        var dataFactory = {};
        dataFactory.addNewStatusreason = function (status) {
            return $http.post(urlBase,  status );
        };

         
        dataFactory.getStatusreasons = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateStatusreason = function (status) {
            return $http.put(urlBase ,  status );
        };

        dataFactory.deleteStatusreason = function (status_id) {
            return $http.delete(urlBase + status_id + '/');
        };

        return dataFactory;
    }
]);
