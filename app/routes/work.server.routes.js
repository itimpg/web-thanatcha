var work = require('../../app/controllers/work.server.controller');

module.exports = function (app) {

    app.route('/api/v1/works')
        .get(work.list);

    app.route('/api/v1/works/:year/:workId')
        .get(work.read);

    app.param('year', work.workByYear);
    app.param('workId', work.workById)
}