angular.module('info').factory('CvService', ['$resource',
    function ($resource) {
        return $resource('api/v1/info');
    }
]);