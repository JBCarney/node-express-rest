var express = require('express'),
    mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var bookRouter = express.Router();
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');
var app = express();

bookRouter.route('/Books')
    .get(function (req, res) {
        var responseJson = { hello: "This is my API" };
        res.json(responseJson);
    });

app.use('/api', bookRouter);

app.get('/', function (req, res) {
    res.send('welcome to my API!!!');
});

app.listen(port, function () {
    console.log('Gulp is running my app on  PORT: ' + port);
});