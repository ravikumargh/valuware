var App = angular.module('drag-and-drop', ['ngStorage']);

App.controller('templateListController', function ($scope, $http, $window, $localStorage) {

    $scope.templatesList = [];


    $scope.loadAllFormTemplates = function () {

        $http.get('/api/FormTemplateMaster').
                then(function (response) {
                    alert("success" + response.data.form_Template_Name);

                    $scope.templatesList = response.data;
                    

                }, function (response) {
                    alert("failed in /clients GET call");
                }
            );
    }

    $scope.loadFormTemplateDetails = function (formTemplateMasterId) {
        $localStorage.formTemplateMasterId = formTemplateMasterId;
        alert('formTemplateMasterId: ' + formTemplateMasterId);
        $http.get('/api/FormTemplateDesign/' + formTemplateMasterId).
                then(function (response) {
                    alert("success" + response);

                    $localStorage.form_template_design_DataCollection = response.data;
                    $window.location.href = '/Home/FormDesigner';
                    

                }, function (response) {
                    alert("failed in /FormTemplateDesign GET call");
                }
            );
    }

    $scope.alertme = function (msg) {

        alert(msg);
    }

});