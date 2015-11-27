'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('UserController', ['$scope', 'UserService', '$uibModal', '$log', 'RoleService', 'TeamService', function ($scope, UserService, $uibModal, $log, RoleService, TeamService) {

      $scope.newuser = {
          'Name': '',
          'Email': '',
          'TeamId': '',
          'RoleId': '',
          'PhoneNumber': '',
          'Address': ''
      }

    
      $scope.init = function () {

          $scope.users = null;
          $scope.roles = null;

          UserService.getUsers()
              .then(function (response) {
                  $scope.users = response.data;
              },
              function (err) {

              });

          RoleService.getRoles()
              .then(function (response) {
                  $scope.roles = response.data;
              },
              function (err) {

              });

          $scope.teams = null;
          TeamService.getTeams()
              .then(function (response) {
                  $scope.teams = response.data;
              },
              function (err) {

              });

      };

      $scope.getRoleDetails = function (rowObj) {
          return _.find($scope.roles, function(role) {
              return role.Id ===rowObj.user.RoleId;
          });
      };
      $scope.getTeamDetails = function (rowObj) {
          return _.find($scope.teams, function(team) {
              return team.Id ===rowObj.user.TeamId;
          });
      };

      $scope.deleteUser = function (user) {
          UserService.deleteUser(user.Id).then(function (response) {
              //_.remove($scope.users, function (user) {
              //    return user.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewUser = function () {
          $scope.error = undefined;
          //if (!$scope.newuser.name) {
          //    $scope.error = 'Please enter valid user name.';
          //    return;
          //}
           
          $scope.addNew($scope.newuser);
      };

      $scope.addNew = function (newuser) {
          UserService.addNewUser(newuser).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (user) {
          UserService.updateUser(user).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editUserModel = function (user) {
          $scope.selectedUser = angular.copy(user);

          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'UserModalContent.html',
              controller: 'UserModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (user) {
              $scope.update(user);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
          $scope.openNewUserModel = function () {
              $scope.selectedUser= $scope.newuser;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'UserModalContent.html',
              controller: 'UserModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (newUser) {
              $scope.addNew(newUser);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteUserModel = function (user) {
          $scope.selectedUser = user;
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

          modalInstance.result.then(function (selectedUser) {
              $scope.deleteUser(selectedUser);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('UserModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedUser = parentScope.selectedUser;
    $scope.roles = parentScope.roles;
    $scope.teams = parentScope.teams;
    
    $scope.ok = function () {
        console.log($scope.selectedUser);
        $uibModalInstance.close($scope.selectedUser);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('DeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedUser = parentScope.selectedUser;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedUser);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});