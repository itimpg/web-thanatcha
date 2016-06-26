angular.module('work').controller('WorkController', ['$scope', '$routeParams', 'WorkService',
    function ($scope, $routeParams, WorkService) {

        if ($routeParams.year && $routeParams.id) {
            $scope.workItem = WorkService.getWorkDetail($routeParams.year, $routeParams.id);
        } else {
            $scope.works = WorkService.getWorks();
        }
    }
]);