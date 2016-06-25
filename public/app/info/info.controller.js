angular.module('info').controller('InfoController', ['$scope', 'CvService',
    function ($scope, CvService) {
        $scope.cvInfo = CvService;
    }
]);