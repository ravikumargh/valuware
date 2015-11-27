'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('RoleController', ['$scope', 'RoleService', '$uibModal', '$log', function ($scope, RoleService, $uibModal, $log) {

      $scope.newrole = {
          'Name': ''
      }

    
      $scope.init = function () {

          $scope.roles = null;

          RoleService.getRoles()
              .then(function (response) {
                  $scope.roles = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteRole = function (role) {
          RoleService.deleteRole(role.Id).then(function (response) {
              //_.remove($scope.roles, function (role) {
              //    return role.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewRole = function () {
          $scope.error = undefined;
          //if (!$scope.newrole.name) {
          //    $scope.error = 'Please enter valid role name.';
          //    return;
          //}
          $scope.newrole.Name = "Role 1";
          $scope.addNew($scope.newrole);
      };

      $scope.addNew = function (newrole) {
          RoleService.addNewRole(newrole).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (role) {
          RoleService.updateRole(role).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editRoleModel = function (role) {
          $scope.selectedRole = angular.copy(role);

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

          modalInstance.result.then(function (role) {
              $scope.update(role);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
          $scope.openNewRoleModel = function () {
              $scope.selectedRole= $scope.newrole;
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

          modalInstance.result.then(function (newRole) {
              $scope.addNew(newRole);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteRoleModel = function (role) {
          $scope.selectedRole = role;
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

          modalInstance.result.then(function (selectedRole) {
              $scope.deleteRole(selectedRole);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedRole = parentScope.selectedRole;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedRole);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('DeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedRole = parentScope.selectedRole;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedRole);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});