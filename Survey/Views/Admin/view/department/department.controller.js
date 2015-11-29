'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('DepartmentController', ['$scope', 'DepartmentService', '$uibModal', '$log', function ($scope, DepartmentService, $uibModal, $log) {

      $scope.newdepartment = {
          'Name': ''
      }

    
      $scope.init = function () {

          $scope.departments = null;

          DepartmentService.getDepartments()
              .then(function (response) {
                  $scope.departments = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteDepartment = function (department) {
          DepartmentService.deleteDepartment(department.Department_ID).then(function (response) {
              //_.remove($scope.departments, function (department) {
              //    return department.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewDepartment = function () {
          $scope.error = undefined;
          //if (!$scope.newdepartment.name) {
          //    $scope.error = 'Please enter valid department name.';
          //    return;
          //}
          $scope.newdepartment.Name = "Department 1";
          $scope.newdepartment.Code = "C1";
          $scope.addNew($scope.newdepartment);
      };

      $scope.addNew = function (newdepartment) {
          DepartmentService.addNewDepartment(newdepartment).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (department) {
          DepartmentService.updateDepartment(department).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editDepartmentModel = function (department) {
          $scope.selectedDepartment = angular.copy(department);

          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'DepartmentModalContent.html',
              controller: 'DepartmentModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (department) {
              $scope.update(department);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
      $scope.openNewDepartmentModel = function () {
          $scope.selectedDepartment= $scope.newdepartment;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'DepartmentModalContent.html',
              controller: 'DepartmentModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (newDepartment) {
              $scope.addNew(newDepartment);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteDepartmentModel = function (department) {
          $scope.selectedDepartment = department;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'DepartmentDeleteConfirmationModalContent.html',
              controller: 'DepartmentDeleteConfirmationModalInstanceControl',
              size: 'sm', 
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (selectedDepartment) {
              $scope.deleteDepartment(selectedDepartment);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('DepartmentModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedDepartment = parentScope.selectedDepartment;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedDepartment);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('DepartmentDeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedDepartment = parentScope.selectedDepartment;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedDepartment);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});