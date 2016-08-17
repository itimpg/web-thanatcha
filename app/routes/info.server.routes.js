var curriculums = require('../../app/controllers/info.server.controller');

module.exports = function (app) {

    app.route('/api/v1/info')
        .get(curriculums.list);

}