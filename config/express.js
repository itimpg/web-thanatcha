var config = require('./config'),
    express = require('express');

module.exports = function () {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', 'app/views');
    app.use(express.static('public'));

    require('../app/routes/index.server.routes')(app);
    require('../app/routes/info.server.routes')(app);
    require('../app/routes/work.server.routes')(app);

    return app;
}