angular.module('main').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/main/views/home.view.html'
        }).when('/writing', {
            templateUrl: 'app/main/views/writing.view.html'
        }).when('/contact', {
            templateUrl: 'app/main/views/contact.view.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);