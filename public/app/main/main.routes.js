angular.module('main').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/main/views/home.view.html'
        }).when('/writing', {
            templateUrl: 'app/main/views/writing.view.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);