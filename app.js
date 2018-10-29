var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var api = require('./api');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/convert', api.convert);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        msg: err.message,
        err: {}
    });
});

module.exports = app;