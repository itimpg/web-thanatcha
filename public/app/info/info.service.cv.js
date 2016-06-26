angular.module('info').factory('CvService', [
    function () {
        var curriculums = [
            {
                header: "Exhibitions",
                works: [
                    {
                        year: 2010,
                        items: [
                            'Tang Kerb  exhibition at Panisa gallery Chiang Mai Thailand',
                            'AVOCADO  exhibition at Fine arts  gallery Chiang Mai Thailand',
                            'Poster Art  exhibition at Fine arts  gallery Chiang Mai Thailand',
                            'Small print exhibition at Fine arts  gallery Chiang Mai Thailand',
                            'Love exhibition at Fine arts  gallery Chiang Mai Thailand',
                        ]
                    },
                    {
                        year: 2011,
                        items: [
                            'Lanna – Taksin   exhibition at CMU art center Chiang Mai Thailand',
                            'Sticky rice  exhibition at Fine arts  gallery Chiang Mai Thailand',
                        ]
                    },
                    {
                        year: 2012,
                        items: [
                            'Stone sculpture exhibition at Koankean Thailand',
                            'Sculpture for city exhibition at CMU art center Chiang Mai Thailand',
                            'Young artist exhibition at Sanamjan  art center Bangkok Thailand',
                            'Kasikorn Thai exhibition at Kasikon bank  Bangkok Thailand',
                            'International art exhibition “Art under the roof” Asia art  link at Hanoi university Vietnam',
                            '“Art under the roof”  Internationals art workshop at  Meung Museum  Hanoi Vietnam',
                            '“Java spice”  Yogyakarta International Art Exhibition at Yogyakarta Indonesia',
                        ]
                    },
                    {
                        year: 2013,
                        items: [
                            '“Young Thai artist make contemporary art with national Thai artist ” exhibition  at  Krabi contemporary art museum  Thailand',
                            '“Young Thai artist camp” exhibition at Baan dum nang lea Chiang Rai Thailand',
                            '“4th Young Thai artist aword” exhibition at Consulate of Thailand in America , America',
                            '“Baan nai saun ” Internationals art work shop at Baan nai saun Chiang Mai Thailand',
                            '“Young Thai artist camp” exhibition at Rachadumnern contemporary gallery Bangkok Thailand',
                        ]
                    },
                    {
                        year: 2014,
                        items: [
                            '“Nan nerb nerb” exhibition at Sudrit art gallery  Nan Thailand ',
                            '“8 years young artist talent” exhibition at   The Queen\'s Gallery Bangkok Thailand',
                        ]
                    },
                    {
                        year: 2015,
                        items: [
                            "“Vietnam - Thailand – Japan” exhibition Okinawa Japan",
                            "“Yogyakarta International art festival” exhibition at Yogyakarta museum, Yogyakarta Indonesia",
                            "“Lucky”  exhibition at Beaux-arts de Paris , Paris France",
                        ]
                    }, {
                        year: 2016,
                        items: [
                            "“Same same but different” exhibition at Beaux-arts de Paris ,Paris France",
                            "“Look” exhibition at Bridge art space, Bangkok Thailand",
                            "The 7th young Thai artist talent art exhibition at Ratchadumnern ,Bangkok Thailand",
                            "“Coffee , tea or me” exhibition at Kumnum , Nakornprathom Thailand"
                        ]
                    }
                ]
            }
        ];

        var slides = [
            '2012_02_03_opt.jpg',
            '2013_02_01_opt.jpg',
            '2015_01_01_opt.jpg',
            '2013_03_05_opt.jpg',
        ];

        return {
            getInfo: function () {
                return curriculums;
            }
        }
    }
]);