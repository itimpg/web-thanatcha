angular.module('work').factory('WorkService', ['$resource',
    function ($resource) {
        return $resource('/api/v1/works/:year/:workId', {
            year: '@_year',
            workId: '@_workId'
        });
    }
]);