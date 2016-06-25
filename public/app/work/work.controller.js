angular.module('work').controller('WorkController', ['$scope', 'WorkService',
    function ($scope, WorkService) {
        $scope.sometext = WorkService;
    }
]);