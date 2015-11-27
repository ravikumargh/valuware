'use strict';
angular.module('AdminApp').factory('DepartmentService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var urlBase = serviceBase + 'api/department/';
        var dataFactory = {};
        dataFactory.addNewDepartment = function (department) {
            return $http.post(urlBase, department );
        };

         
        dataFactory.getDepartments = function () {
            return $http.get(urlBase);
        };
         
        dataFactory.updateDepartment = function (department) {
            return $http.put(urlBase,  department);
        };

        dataFactory.deleteDepartment = function (department_id) {
            return $http.delete(urlBase + department_id + '/');
        };

        return dataFactory;
    }
]);
