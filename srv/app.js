'use strict';

var express = require('express');
var app = express();

var IndegoSource = require('./logic/data');

app.get('/data/', function(req, res) {
    IndegoSource.gatherData().then(function(data){
        res.json(data);
    });
});

app.listen(3000, function() { })
