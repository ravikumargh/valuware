'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('StatusreasonController', ['$scope', 'StatusreasonService', '$uibModal', '$log', function ($scope, StatusreasonService, $uibModal, $log) {

      $scope.newstatusreason = {
          'Name': '' 
      }

    
      $scope.init = function () {

          $scope.statusreasons = null;

          StatusreasonService.getStatusreasons()
              .then(function (response) {
                  $scope.statusreasons = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteStatusreason = function (statusreason) {
          StatusreasonService.deleteStatusreason(statusreason.Id).then(function (response) {
              //_.remove($scope.statusreasons, function (statusreason) {
              //    return statusreason.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewStatusreason = function () {
          $scope.error = undefined;
          //if (!$scope.newstatusreason.name) {
          //    $scope.error = 'Please enter valid statusreason name.';
          //    return;
          //}
          $scope.newstatusreason.Name = "Statusreason 1";
          $scope.addNew($scope.newstatusreason);
      };

      $scope.addNew = function (newstatusreason) {
          StatusreasonService.addNewStatusreason(newstatusreason).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (statusreason) {
          StatusreasonService.updateStatusreason(statusreason).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editStatusreasonModel = function (statusreason) {
          $scope.selectedStatusreason = angular.copy(statusreason);

          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'StatusReasonModalContent.html',
              controller: 'StatusReasonModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (statusreason) {
              $scope.update(statusreason);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
      $scope.openNewStatusreasonModel = function () {
          $scope.selectedStatusreason= $scope.newstatusreason;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'StatusReasonModalContent.html',
              controller: 'StatusReasonModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (newStatusreason) {
              $scope.addNew(newStatusreason);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteStatusreasonModel = function (statusreason) {
          $scope.selectedStatusreason = statusreason;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'StatusReasonDeleteConfirmationModalContent.html',
              controller: 'StatusReasonDeleteConfirmationModalInstanceControl',
              size: 'sm', 
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (selectedStatusreason) {
              $scope.deleteStatusreason(selectedStatusreason);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('StatusReasonModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedStatusreason = parentScope.selectedStatusreason;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedStatusreason);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('StatusReasonDeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedStatusreason = parentScope.selectedStatusreason;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedStatusreason);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});