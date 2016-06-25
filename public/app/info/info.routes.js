angular.module('info').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/info', {
                templateUrl: 'app/info/views/info.view.html'
            });
    }
]);