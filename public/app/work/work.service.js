angular.module('work').factory('WorkService', [
    function () {
        var works = [
            {
                year: 2012,
                pictures: [
                    '2012_01_01_opt.jpg',
                    '2012_01_02_opt.jpg',
                    '2012_01_03_opt.jpg',
                    '2012_02_01_opt.jpg',
                    '2012_02_02_opt.jpg',
                    '2012_02_03_opt.jpg',
                    '2012_03_01_opt.jpg',
                    '2012_03_02_opt.jpg',
                    '2012_03_03_opt.jpg',
                ]
            },
            {
                year: 2013,
                pictures: [
                    '2013_01_01_opt.jpg',
                    '2013_01_02_opt.jpg',
                    '2013_01_03_opt.jpg',
                    '2013_01_04_opt.jpg',
                    '2013_02_01_opt.jpg',
                    '2013_02_02_opt.jpg',
                    '2013_03_01_opt.jpg',
                    '2013_03_02_opt.jpg',
                    '2013_03_03_opt.jpg',
                    '2013_03_04_opt.jpg',
                    '2013_03_05_opt.jpg',
                ]
            },
            {
                year: 2014,
                pictures: [
                    '2014_01_01_opt.jpg',
                    '2014_01_02_opt.jpg',
                    '2014_01_03_opt.jpg',
                    '2014_02_01_opt.jpg',
                    '2014_03_01_opt.jpg',
                ]
            },
            {
                year: 2015,
                pictures: [
                    '2015_01_01_opt.jpg',
                    '2015_01_02_opt.jpg',
                    '2015_01_03_opt.jpg',
                    '2015_01_04_opt.jpg',
                    '2015_01_05_opt.jpg',
                    '2015_01_06_opt.jpg',
                    '2015_01_07_opt.jpg',
                ]
            }
        ];
        
        return works;
    }
]);