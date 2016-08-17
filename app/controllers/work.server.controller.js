var theDiminishFolkways = {
    id: 201601,
    imageTitle: 'The Diminish Folkways/The diminishing of the folkways 1.jpg',
    name: 'The Diminish Folkways',
    desc: 'clay, water, video',
    dimension: 'dimensions variable',
    youtube: 'https://www.youtube.com/embed/Zwlpq2wkSpY',
    images:
    [
        {
            src: 'The Diminish Folkways/The diminishing of the folkways 1.jpg',
            desc: "",
        },
        {
            src: 'The Diminish Folkways/The diminishing of the folkways 2.jpg',
            desc: "",
        },
        {
            src: 'The Diminish Folkways/The diminishing of the folkways 3.jpg',
            desc: "",
        },
        {
            src: 'The Diminish Folkways/The diminishing of the folkways 4.jpg',
            desc: "",
        },
        {
            src: 'The Diminish Folkways/The diminishing of the folkways 5.jpg',
            desc: "",
        },
        {
            src: 'The Diminish Folkways/The diminishing of the folkways 6.jpg',
            desc: "",
        },
        {
            src: 'The Diminish Folkways/The diminishing of the folkways 7.jpg',
            desc: "",
        }
    ]
};

var theDiaryOfCraftsManI = {
    id: 201602,
    imageTitle: 'The Diary of Craftsman I/The diary of craftsman I (3).jpg',
    name: 'The Diary of Craftsman I',
    desc: 'craving on tools and table, photo',
    dimension: '80 x 120 x 200 cm',
    images:
    [
        {
            src: 'The Diary of Craftsman I/The diary of craftsman I (1).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman I/The diary of craftsman I (2).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman I/The diary of craftsman I (3).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman I/The diary of craftsman I (4).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman I/The diary of craftsman I (5).jpg',
            desc: "",
        },
    ]
};

var theDiaryOfCraftsManII = {
    id: 201603,
    imageTitle: 'The Diary of Craftsman II/The diary of craftsman II (1).jpg',
    name: 'The Diary of Craftsman II',
    desc: 'craving tools and wood',
    dimension: '45, 135, 150 cm',
    images:
    [
        {
            src: 'The Diary of Craftsman II/The diary of craftsman II (1).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman II/The diary of craftsman II (2).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman II/The diary of craftsman II (3).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman II/The diary of craftsman II (4).jpg',
            desc: "",
        },
        {
            src: 'The Diary of Craftsman II/The diary of craftsman II (5).jpg',
            desc: "",
        },
    ]
};

var theCheckMate = {
    id: 201604,
    imageTitle: 'Check - mate/check-mate (3).jpg',
    name: 'Check - mate',
    desc: 'Rubbing on paper, Drawing, wood',
    dimension: 'dimensions variable',
    images:
    [
        {
            src: 'Check - mate/check-mate (1).jpg',
            desc: "",
        },
        {
            src: 'Check - mate/check-mate (2).jpg',
            desc: "",
        },
        {
            src: 'Check - mate/check-mate (3).jpg',
            desc: "",
        },
        {
            src: 'Check - mate/check-mate (4).jpg',
            desc: "",
        },
        {
            src: 'Check - mate/check-mate (5).jpg',
            desc: "",
        }
    ]
};

var theCommand = {
    id: 201605,
    imageTitle: 'untitle2/4.jpg',
    name: 'Command',
    desc: 'craving on tools',
    dimension: '3 x 3 x 110 cm',
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

var theUntitle3 = {
    id: 201606,
    imageTitle: 'untitle3/Untitled-1.jpg',
    name: 'lucky shirt',
    desc: "Homeless people's shirt , chair",
    dimension: '55 x 63 x 75 cm',
    images:
    [
        {
            src: 'untitle3/Untitled-1.jpg',
            desc: "",
        },
        {
            src: 'untitle3/Untitled-3.jpg',
            desc: "",
        },
        {
            src: 'untitle3/Untitled-3.jpg',
            desc: "",
        }
    ]
}

var howToUseTheseTools = {
    id: 201501,
    imageTitle: 'How to use these tools/How to use these tools 1.jpg',
    name: 'How to use these tools',
    desc: 'mixed media',
    dimension: '110 x 80 x170 cm',
    images:
    [
        {
            src: 'How to use these tools/How to use these tools 1.jpg',
            desc: "",
        },
        {
            src: 'How to use these tools/How to use these tools 2.jpg',
            desc: "",
        },
        {
            src: 'How to use these tools/How to use these tools 3.jpg',
            desc: "",
        },
        {
            src: 'How to use these tools/How to use these tools 4.jpg',
        },
        {
            src: 'How to use these tools/How to use these tools 5.jpg',
        },
        {
            src: 'How to use these tools/How to use these tools 6.jpg',
        }
    ]
};

var works = [
    {
        year: 2016,
        projects:
        [
            theDiminishFolkways,
            theDiaryOfCraftsManII,
            theDiaryOfCraftsManI,
            theCommand,
            theCheckMate,
            theUntitle3,
        ]
    },
    {
        year: 2015,
        projects: [
            howToUseTheseTools
        ]
    }
];


exports.list = function (req, res) {
    res.json(works);
}

exports.workByYear = function (req, res, next, year) {

    req.worksByYear = works.filter(function (work) {
        return work.year == year;
    })[0];

    next();
}

exports.workById = function (req, res, next, id) {

    if (req.worksByYear) {
        req.works = req.worksByYear.projects.filter(function (project) {
            return project.id == id;
        })[0];
    }
    next();
}

exports.read = function (req, res) {
    res.json(req.works);
}