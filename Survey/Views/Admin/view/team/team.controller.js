'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('TeamController', ['$scope', 'TeamService', '$uibModal', '$log', function ($scope, TeamService, $uibModal, $log) {

      $scope.newteam = {
          'Name': '' 
      }

    
      $scope.init = function () {

          $scope.teams = null;

          TeamService.getTeams()
              .then(function (response) {
                  $scope.teams = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteTeam = function (team) {
          TeamService.deleteTeam(team.Id).then(function (response) {
              //_.remove($scope.teams, function (team) {
              //    return team.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewTeam = function () {
          $scope.error = undefined;
          //if (!$scope.newteam.name) {
          //    $scope.error = 'Please enter valid team name.';
          //    return;
          //}
          //$scope.newteam.Name = "Team 1";
          $scope.addNew($scope.newteam);
      };

      $scope.addNew = function (newteam) {
          TeamService.addNewTeam(newteam).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (team) {
          TeamService.updateTeam(team).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editTeamModel = function (team) {
          $scope.selectedTeam = angular.copy(team);

          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'TeamModalContent.html',
              controller: 'TeamModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (team) {
              $scope.update(team);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
      $scope.openNewTeamModel = function () {
          $scope.selectedTeam= $scope.newteam;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'TeamModalContent.html',
              controller: 'TeamModalInstanceCtrl',
              size: 'sm',
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (newTeam) {
              $scope.addNew(newTeam);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteTeamModel = function (team) {
          $scope.selectedTeam = team;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'TeamDeleteConfirmationModalContent.html',
              controller: 'TeamDeleteConfirmationModalInstanceControl',
              size: 'sm', 
              animation: true,
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (selectedTeam) {
              $scope.deleteTeam(selectedTeam);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('TeamModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedTeam = parentScope.selectedTeam;
    
    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedTeam);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('TeamDeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedTeam = parentScope.selectedTeam;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedTeam);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});