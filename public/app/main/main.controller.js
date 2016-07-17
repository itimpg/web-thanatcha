angular.module('main').controller('MainController', ['$scope',
    function ($scope) {
        $scope.sendMessage = function (contact) {
            $scope.isMessageSend = true;
        }
    }
]);