'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('ClientTypeController', ['$scope', 'ClientTypeService', '$uibModal', '$log', function ($scope, ClientTypeService, $uibModal, $log) {

      $scope.newstatus = {
          'Name': '' 
      }

    
      $scope.init = function () {

          $scope.clienttypes = null;

          ClientTypeService.getClientTypes()
              .then(function (response) {
                  $scope.clienttypes = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteClientType = function (status) {
          ClientTypeService.deleteClientType(status.Id).then(function (response) {
              //_.remove($scope.clienttypes, function (status) {
              //    return status.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewClientType = function () {
          $scope.error = undefined;
          //if (!$scope.newstatus.name) {
          //    $scope.error = 'Please enter valid status name.';
          //    return;
          //}
          $scope.newstatus.Name = "ClientType 1";
          $scope.addNew($scope.newstatus);
      };

      $scope.addNew = function (newstatus) {
          ClientTypeService.addNewClientType(newstatus).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (status) {
          ClientTypeService.updateClientType(status).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editClientTypeModel = function (status) {
          $scope.selectedClientType = angular.copy(status);

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

          modalInstance.result.then(function (status) {
              $scope.update(status);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
      $scope.openNewClientTypeModel = function () {
          $scope.selectedClientType= $scope.newstatus;
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

          modalInstance.result.then(function (newClientType) {
              $scope.addNew(newClientType);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteClientTypeModel = function (status) {
          $scope.selectedClientType = status;
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

          modalInstance.result.then(function (selectedClientType) {
              $scope.deleteClientType(selectedClientType);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedClientType = parentScope.selectedClientType;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedClientType);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('DeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedClientType = parentScope.selectedClientType;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedClientType);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});