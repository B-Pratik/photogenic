/**
 * Created by Pratik on 2/25/2016.
 */
var express     = require('express');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + '/../build'));

module.exports = app;