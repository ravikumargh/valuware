'use strict';
angular.module('AdminApp').factory('ClientTypeService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/clienttype/';

        var dataFactory = {};
        dataFactory.addNewClientType = function (clienttype) {
            return $http.post(urlBase,  clienttype );
        };

         
        dataFactory.getClientTypes = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateClientType = function (clienttype) {
            return $http.put(urlBase ,  clienttype );
        };

        dataFactory.deleteClientType = function (clienttype_id) {
            return $http.delete(urlBase + clienttype_id + '/');
        };

        return dataFactory;
    }
]);
