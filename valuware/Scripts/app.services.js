//var App = angular.module('drag-and-drop', []);

//App.controller('oneCtrl', function ($scope, $window, $localStorage, $http) {

//    // TODO: check can we have another controller file of the same name (like partial class in c#)
//    $scope.callInitialServices = function () {

//        // clients dropdown binding
//        getAllClientsService();

//        // depts dropdown binding
//        getAllDepartmentsService();

//        // surveytypes dropdown binding
//        getAllSurveyTypesService();

//    }

//    getAllClientsService = function () {
//        $http.get('/api/clients').
//                then(function (response) {
//                    //alert("success" + response);

//                    $scope.clientsSource = response.data;
//                    $scope.selectedClient = response.data[0];


//                }, function (response) {
//                    alert("failed in /clients get call");
//                }
//            );
//    }

//    getAllDepartmentsService = function () {
//        $http.get('/api/departments').
//                then(function (response) {
//                    //alert("success" + response);

//                    $scope.departmentsSource = response.data;
//                    $scope.selectedDepartment = response.data[0];


//                }, function (response) {
//                    alert("failed in /departments get call");
//                }
//            );
//    }

//    getAllSurveyTypesService = function () {
//        $http.get('/api/surveytypes').
//                then(function (response) {
//                    //alert("success" + response);

//                    $scope.surveyTypesSource = response.data;
//                    $scope.selectedSurveyType = response.data[0];


//                }, function (response) {
//                    alert("failed in /surveytypes get call");
//                }
//            );
//    }

//});
