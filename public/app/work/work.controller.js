angular.module('work').controller('WorkController', ['$scope', '$routeParams', 'WorkService',
    function ($scope, $routeParams, WorkService) {

        if ($routeParams.workId) {
            $scope.workItem = WorkService.getWorkDetail($routeParams.workId);
        } else {
            $scope.works = WorkService.getWorks();
        }
    }
]);