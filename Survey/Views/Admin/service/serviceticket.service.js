'use strict';
angular.module('AdminApp').factory('ServiceTicketService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/serviceticket/';
        var dataFactory = {};
        dataFactory.addNewServiceTicket = function (serviceticket) {
            return $http.post(urlBase, serviceticket );
        };

         
        dataFactory.getServiceTickets = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateServiceTicket = function (serviceticket) {
            return $http.put(urlBase,  serviceticket);
        };

        dataFactory.deleteServiceTicket = function (serviceticket_id) {
            return $http.delete(urlBase + serviceticket_id + '/');
        };

        return dataFactory;
    }
]);
