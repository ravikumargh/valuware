'use strict';
angular.module('AdminApp').factory('TeamService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/team/';
        var dataFactory = {};
        dataFactory.addNewTeam = function (team) {
            return $http.post(urlBase, team );
        };

         
        dataFactory.getTeams = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateTeam = function (team) {
            return $http.put(urlBase,  team);
        };

        dataFactory.deleteTeam = function (team_id) {
            return $http.delete(urlBase + team_id + '/');
        };

        return dataFactory;
    }
]);
