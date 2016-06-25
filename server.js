var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000);