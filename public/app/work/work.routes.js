angular.module('work').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/works', {
                templateUrl: 'app/work/views/work-list.view.html'
            })
            .when('/works/:workId', {
                templateUrl: 'app/work/views/work-read.view.html'
            });
    }
]);