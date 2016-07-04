angular.module('work').factory('WorkService', [
    function () {

        var images = [
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

        var theDiminishFolkways = {
            id: 201601,
            imageTitle: 'The Diminish Folkways/The diminish folkways (1).jpg',
            name: 'The Diminish Folkways',
            desc: '',
            images:
            [
                {
                    src: 'The Diminish Folkways/The diminish folkways (1).jpg',
                    desc: "",
                },
                {
                    src: 'The Diminish Folkways/The diminish folkways (2).jpg',
                    desc: "",
                },
                {
                    src: 'The Diminish Folkways/The diminish folkways (3).jpg',
                    desc: "",
                },
                {
                    src: 'The Diminish Folkways/The diminish folkways (4).jpg',
                    desc: "",
                },
                {
                    src: 'The Diminish Folkways/The diminish folkways (5).jpg',
                    desc: "",
                },
                {
                    src: 'The Diminish Folkways/The diminish folkways (6).jpg',
                    desc: "",
                },
                {
                    src: 'The Diminish Folkways/The diminish folkways (7).jpg',
                    desc: "",
                }
            ]
        };

        var theDiaryOfCraftsManI = {
            id: 201602,
            imageTitle: 'The Diary of Craftsman I/The diary of craftmans I (3).jpg',
            name: 'The Diary of Craftsman I',
            desc: '',
            images:
            [
                {
                    src: 'The Diary of Craftsman I/The diary of craftmans I (1).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman I/The diary of craftmans I (2).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman I/The diary of craftmans I (3).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman I/The diary of craftmans I (4).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman I/The diary of craftmans I (5).jpg',
                    desc: "",
                },
            ]
        };

        var theDiaryOfCraftsManII = {
            id: 201603,
            imageTitle: 'The Diary of Craftsman II/The diary of craftmans II (1).jpg',
            name: 'The Diary of Craftsman II',
            desc: '',
            images:
            [
                {
                    src: 'The Diary of Craftsman II/The diary of craftmans II (1).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman II/The diary of craftmans II (2).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman II/The diary of craftmans II (3).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman II/The diary of craftmans II (4).jpg',
                    desc: "",
                },
                {
                    src: 'The Diary of Craftsman II/The diary of craftmans II (5).jpg',
                    desc: "",
                },
            ]
        };

        var theSomething1 = {
            id: 201604,
            imageTitle: 'untitle1/I (6).jpg',
            name: 'The Untitle I',
            desc: '',
            images:
            [
                {
                    src: 'untitle1/I (1).jpg',
                    desc: "",
                },
                {
                    src: 'untitle1/I (2).jpg',
                    desc: "",
                },
                {
                    src: 'untitle1/I (3).jpg',
                    desc: "",
                },
                {
                    src: 'untitle1/I (4).jpg',
                    desc: "",
                },
                {
                    src: 'untitle1/I (5).jpg',
                    desc: "",
                },
                {
                    src: 'untitle1/I (6).jpg',
                    desc: "",
                },
            ]
        };

        var theSomething2 = {
            id: 201605,
            imageTitle: 'untitle2/4.jpg',
            name: 'The Untitle II',
            desc: '',
            images:
            [
                {
                    src: 'untitle2/1.jpg',
                    desc: "",
                },
                {
                    src: 'untitle2/2.jpg',
                    desc: "",
                },
                {
                    src: 'untitle2/3.jpg',
                    desc: "",
                },
                {
                    src: 'untitle2/4.jpg',
                }
            ]
        };

        var works = [
            {
                year: 2016,
                projects:
                [
                    theDiminishFolkways,
                    theDiaryOfCraftsManI,
                    theDiaryOfCraftsManII,
                    theSomething1,
                    theSomething2
                ]
            },
        ];


        return {
            getWorks: function () {
                return works;
            },
            getWorkDetail: function (year, id) {
                var itemByYear = works.filter(function (work) {
                    return work.year == year;
                })[0];

                if (itemByYear) {
                    return itemByYear.projects.filter(function (project) {
                        return project.id == id;
                    })[0];
                }
                return null;
            }
        }
    }
]);