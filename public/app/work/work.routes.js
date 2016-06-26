angular.module('work').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/works', {
                templateUrl: 'app/work/views/works.view.html'
            })
            .when('/works/:year/:id', {
                templateUrl: 'app/work/views/work.view.html'
            });
    }
]);