angular.module('work').controller('WorkController', ['$scope', '$routeParams', 'WorkService',
    function ($scope, $routeParams, WorkService) {

        var getUrl = window.location;
        $scope.baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

        if ($routeParams.year && $routeParams.id) {

            WorkService.get({
                year: $routeParams.year,
                workId: $routeParams.id
            }, function (workItem) {
                if (workItem) {
                    $scope.workItem = workItem;

                    $scope.slides = [];
                    for (var i = 0; i < workItem.images.length; i++) {
                        var img = workItem.images[i];
                        $scope.slides.push({
                            id: i,
                            image: img.src,
                            text: img.desc,
                        });
                    }
                }
            });

        } else {
            $scope.works = WorkService.query();
        }
    }
]);