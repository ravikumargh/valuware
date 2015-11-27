'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('SurveyTypeController', ['$scope', 'SurveyTypeService', '$uibModal', '$log', function ($scope, SurveyTypeService, $uibModal, $log) {

      $scope.newstatus = {
          'Name': '' 
      }

    
      $scope.init = function () {

          $scope.surveytypes = null;

          SurveyTypeService.getSurveyTypes()
              .then(function (response) {
                  $scope.surveytypes = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteSurveyType = function (status) {
          SurveyTypeService.deleteSurveyType(status.Id).then(function (response) {
              //_.remove($scope.surveytypes, function (status) {
              //    return status.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewSurveyType = function () {
          $scope.error = undefined;
          //if (!$scope.newstatus.name) {
          //    $scope.error = 'Please enter valid status name.';
          //    return;
          //}
          $scope.newstatus.Name = "SurveyType 1";
          $scope.addNew($scope.newstatus);
      };

      $scope.addNew = function (newstatus) {
          SurveyTypeService.addNewSurveyType(newstatus).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (status) {
          SurveyTypeService.updateSurveyType(status).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editSurveyTypeModel = function (status) {
          $scope.selectedSurveyType = angular.copy(status);

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
      $scope.openNewSurveyTypeModel = function () {
          $scope.selectedSurveyType= $scope.newstatus;
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

          modalInstance.result.then(function (newSurveyType) {
              $scope.addNew(newSurveyType);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteSurveyTypeModel = function (status) {
          $scope.selectedSurveyType = status;
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

          modalInstance.result.then(function (selectedSurveyType) {
              $scope.deleteSurveyType(selectedSurveyType);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedSurveyType = parentScope.selectedSurveyType;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedSurveyType);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('DeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedSurveyType = parentScope.selectedSurveyType;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedSurveyType);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});