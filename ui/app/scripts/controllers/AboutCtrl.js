/**
 * Controller for About The Hive modal page
 */
(function() {
    'use strict';

    angular.module('theHiveControllers').controller('AboutCtrl',
        function($rootScope, $scope, $uibModalInstance, VersionSrv, AlertSrv) {
            VersionSrv.get().then(function(response) {
                $scope.version = response.versions;
            }, function(data, status) {
                AlertSrv.error('AboutCtrl', data, status);
            });

            $scope.close = function() {
                $uibModalInstance.close();
            };
        }
    );
})();
