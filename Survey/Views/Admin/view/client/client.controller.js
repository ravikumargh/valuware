'use strict';

/**
 * @ngdoc function
 * @name AdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the AdminApp
 */
angular.module('AdminApp')
  .controller('ClientController', ['$scope', 'ClientService', '$uibModal', '$log', function ($scope, ClientService, $uibModal, $log) {

      $scope.newclient = {
          'Name': '',
          'Code': ''
      }

    
      $scope.init = function () {

          $scope.clients = null;

          ClientService.getClients()
              .then(function (response) {
                  $scope.clients = response.data;
              },
              function (err) {

              });
      };

      $scope.deleteClient = function (client) {
          ClientService.deleteClient(client.Client_ID).then(function (response) {
              //_.remove($scope.clients, function (client) {
              //    return client.Id;
              //});
              $scope.init();
          },
            function (err) {
                $scope.error = err;
            });
      }
      $scope.createNewClient = function () {
          $scope.error = undefined;
          //if (!$scope.newclient.name) {
          //    $scope.error = 'Please enter valid client name.';
          //    return;
          //}
          $scope.newclient.Name = "Client 1";
          $scope.newclient.Code = "C1";
          $scope.addNew($scope.newclient);
      };

      $scope.addNew = function (newclient) {
          ClientService.addNewClient(newclient).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }

      $scope.update = function (client) {
          ClientService.updateClient(client).then(function (response) {
              $scope.init();
          },
          function (err) {

          });
      }
      
      $scope.editClientModel = function (client) {
          $scope.selectedClient = angular.copy(client);

          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'ClientModalContent.html',
              controller: 'ClientModalInstanceCtrl',
              size: 'sm',
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (client) {
              $scope.update(client);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      }
          $scope.openNewClientModel = function () {
              $scope.selectedClient= $scope.newclient;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'ClientModalContent.html',
              controller: 'ClientModalInstanceCtrl',
              size: 'sm',
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (newClient) {
              $scope.addNew(newClient);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
      $scope.deleteClientModel = function (client) {
          $scope.selectedClient = client;
          var modalInstance = $uibModal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'ClientDeleteConfirmationModalContent.html',
              controller: 'ClientDeleteConfirmationModalInstanceControl',
              size: 'sm', 
              resolve: {
                  parentScope: function () {
                      return $scope;
                  }
              }
          });

          modalInstance.result.then(function (selectedClient) {
              $scope.deleteClient(selectedClient);
          }, function () {
              $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }]);


angular.module('AdminApp').controller('ClientModalInstanceCtrl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedClient = parentScope.selectedClient;
    
    $scope.ok = function () {
        console.log($scope.selectedClient);
        $uibModalInstance.close($scope.selectedClient);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

angular.module('AdminApp').controller('ClientDeleteConfirmationModalInstanceControl', function ($scope, $uibModalInstance, parentScope) {

    $scope.selectedClient = parentScope.selectedClient;


    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedClient);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});