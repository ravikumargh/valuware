'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('ServiceTicketController', [
      '$scope', '$location', 'ServiceTicketService', '$uibModal', '$log','StatusService', 'ClientService','DepartmentService', 'SurveyTypeService', 'StatusreasonService', 'UserService',
function ($scope, $location, ServiceTicketService, $uibModal, $log,StatusService, ClientService, DepartmentService, SurveyTypeService, StatusreasonService, UserService) {

    $scope.newserviceticket = {}

    
    $scope.init = function () {

        //$scope.servicetickets = null;
          
        $scope.serviceticket={
            date:"Aug 01",
            clientname:"hdfc-Auto",
            clienttitle:"Auto valued at 75000",
            survayedon:"survayed on August 15, 2015 by Ravikumar",
            surveyno: 35468,
            location : 'Mysore',
            status: 'new'
        }
         
        
        $scope.statuses = null;
        StatusService.getStatuses()
            .then(function (response) {
                $scope.statuses = response.data;
            },
            function (err) {

            });
          
        $scope.clients = null;
        ClientService.getClients()
            .then(function (response) {
                $scope.clients = response.data;
            },
            function (err) {

            });
          
        $scope.departments = null;
        DepartmentService.getDepartments()
            .then(function (response) {
                $scope.departments = response.data;
            },
            function (err) {

            });

        $scope.surveytypes = null;
        SurveyTypeService.getSurveyTypes()
            .then(function (response) {
                $scope.surveytypes = response.data;
            },
            function (err) {

            });

        $scope.statusreasons = null;
        StatusreasonService.getStatusreasons()
            .then(function (response) {
                $scope.statusreasons = response.data;
            },
            function (err) {

            });

        $scope.users = null;
        UserService.getUsers()
            .then(function (response) {
                $scope.users = response.data;
            },
            function (err) {

            });
        
        ServiceTicketService.getServiceTickets()
            .then(function (response) {
                $scope.servicetickets = response.data;
            },
            function (err) {

            });

    };

    $scope.getClientDetails = function (rowObj) {
        return _.find($scope.clients, function(client) {
            return client.Client_ID ===rowObj.serviceticket.Client_ID;
        });
    };
    $scope.getSurveyType= function (rowObj) {
        return _.find($scope.surveytypes, function(surveytype) {
            return surveytype.Survey_Type_ID ===rowObj.serviceticket.Survey_Type_ID;
        });
    };
    $scope.deleteServiceTicket = function (serviceticket) {
        ServiceTicketService.deleteServiceTicket(serviceticket.Id).then(function (response) {
            //_.remove($scope.servicetickets, function (serviceticket) {
            //    return serviceticket.Id;
            //});
            $scope.init();
        },
          function (err) {
              $scope.error = err;
          });
    }
    $scope.SaveServiceTicket = function () {
        $scope.error = undefined;
        //if (!$scope.newserviceticket.name) {
        //    $scope.error = 'Please enter valid serviceticket name.';
        //    return;
        //}
        $scope.addNew($scope.newserviceticket);
    };

    $scope.addNew = function (newserviceticket) {
        ServiceTicketService.addNewServiceTicket(newserviceticket).then(function (response) {
            //$scope.init();
            $location.path('/serviceticket');
        },
        function (err) {

        });
    }

    $scope.update = function (serviceticket) {
        ServiceTicketService.updateServiceTicket(serviceticket).then(function (response) {
            $scope.init();
        },
        function (err) {

        });
    }
      
    $scope.editServiceTicketModel = function (serviceticket) {
        $scope.selectedServiceTicket = angular.copy(serviceticket);

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm',
            animation: true,
            resolve: {
                parentScope: function () {
                    return $scope;
                }
            }
        });

        modalInstance.result.then(function (serviceticket) {
            $scope.update(serviceticket);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    $scope.openNewServiceTicketModel = function () {
        $scope.selectedServiceTicket= $scope.newserviceticket;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm',
            animation: true,
            resolve: {
                parentScope: function () {
                    return $scope;
                }
            }
        });

        modalInstance.result.then(function (newServiceTicket) {
            $scope.addNew(newServiceTicket);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    $scope.deleteServiceTicketModel = function (serviceticket) {
        $scope.selectedServiceTicket = serviceticket;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'DeleteConfirmationModalContent.html',
            controller: 'DeleteConfirmationModalInstanceControl',
            size: 'sm', 
            animation: true,
            resolve: {
                parentScope: function () {
                    return $scope;
                }
            }
        });

        modalInstance.result.then(function (selectedServiceTicket) {
            $scope.deleteServiceTicket(selectedServiceTicket);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}]);


angular.module('AdminApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedServiceTicket = parentScope.selectedServiceTicket;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedServiceTicket);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('DeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedServiceTicket = parentScope.selectedServiceTicket;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedServiceTicket);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});