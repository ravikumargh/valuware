'use strict';
angular.module('AdminApp').factory('UserService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/user/';
        var dataFactory = {};
        dataFactory.addNewUser = function (user) {
            return $http.post(urlBase, user );
        };

         
        dataFactory.getUsers = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateUser = function (user) {
            return $http.put(urlBase,  user);
        };

        dataFactory.deleteUser = function (user_id) {
            return $http.delete(urlBase + user_id + '/');
        };

        return dataFactory;
    }
]);
