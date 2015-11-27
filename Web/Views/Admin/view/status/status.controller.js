'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('StatusController', ['$scope', 'StatusService', '$uibModal', '$log', function ($scope, StatusService, $uibModal, $log) {

      $scope.newstatus = {
          'Name': '' 
      }

    
      $scope.init = function () {

          $scope.statuss = null;

          StatusService.getStatuses()
              .then(function (response) {
                  $scope.statuss = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteStatus = function (status) {
          StatusService.deleteStatus(status.Id).then(function (response) {
              //_.remove($scope.statuss, function (status) {
              //    return status.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewStatus = function () {
          $scope.error = undefined;
          //if (!$scope.newstatus.name) {
          //    $scope.error = 'Please enter valid status name.';
          //    return;
          //}
          $scope.newstatus.Name = "Status 1";
          $scope.addNew($scope.newstatus);
      };

      $scope.addNew = function (newstatus) {
          StatusService.addNewStatus(newstatus).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (status) {
          StatusService.updateStatus(status).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editStatusModel = function (status) {
          $scope.selectedStatus = angular.copy(status);

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
      $scope.openNewStatusModel = function () {
          $scope.selectedStatus= $scope.newstatus;
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

          modalInstance.result.then(function (newStatus) {
              $scope.addNew(newStatus);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteStatusModel = function (status) {
          $scope.selectedStatus = status;
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

          modalInstance.result.then(function (selectedStatus) {
              $scope.deleteStatus(selectedStatus);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedStatus = parentScope.selectedStatus;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedStatus);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('DeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedStatus = parentScope.selectedStatus;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedStatus);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});