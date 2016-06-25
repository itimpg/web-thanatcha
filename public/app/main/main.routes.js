angular.module('main').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/main/views/home.view.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);