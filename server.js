process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = require('./config/express')();
app.listen(3000);
module.exports = app;