angular.module('demo', []);

angular.module('demo').controller('demoCtrl',
    ['$scope', function ($scope) {
        $scope.register = {
            phoneNumber:"1234567890"
        }
        $scope.registerUser = function () {
            console.log($scope.register);
        };
}]);
