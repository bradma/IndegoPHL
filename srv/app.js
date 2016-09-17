'use strict';

var express = require('express');
var app = express();

var IndegoSource = require('./logic/data');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app
    .get('/data/', function(req, res) {
        IndegoSource.gatherData().then(function(data){
            res.json(data);
        });
    });

app.listen(3000, function() { })
