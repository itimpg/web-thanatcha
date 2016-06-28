angular.module('work').controller('WorkController', ['$scope', '$routeParams', 'WorkService',
    function ($scope, $routeParams, WorkService) {

        if ($routeParams.year && $routeParams.id) {
            $scope.workItem = WorkService.getWorkDetail($routeParams.year, $routeParams.id);
            $scope.slides = [];
            for (var i = 0; i < $scope.workItem.images.length; i++) {
                var img = $scope.workItem.images[i];
                $scope.slides.push({
                    id: i,
                    image: img.src,
                    text: img.desc
                });
            }
        } else {
            $scope.works = WorkService.getWorks();
        }
    }
]);