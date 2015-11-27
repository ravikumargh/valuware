'use strict';
angular.module('AdminApp').factory('RoleService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/role/';
        var dataFactory = {};
        dataFactory.addNewRole = function (role) {
            return $http.post(urlBase, role );
        };

         
        dataFactory.getRoles = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateRole = function (role) {
            return $http.put(urlBase,  role);
        };

        dataFactory.deleteRole = function (role_id) {
            return $http.delete(urlBase + role_id + '/');
        };

        return dataFactory;
    }
]);
