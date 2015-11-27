'use strict';
angular.module('AdminApp').factory('ClientService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/client/';
        var dataFactory = {};
        dataFactory.addNewClient = function (client) {
            return $http.post(urlBase, client );
        };

         
        dataFactory.getClients = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateClient = function (client) {
            return $http.put(urlBase,  client);
        };

        dataFactory.deleteClient = function (client_id) {
            return $http.delete(urlBase + client_id + '/');
        };

        return dataFactory;
    }
]);
