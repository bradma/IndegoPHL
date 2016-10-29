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
            let total = data.length,
                size = 20,
                pageTotal = data.length/20,
                currentPage = 1,
                paginatedData = [];

            while (data.length > 0)
                paginatedData.push(data.splice(0, size))
            ///?page=2
            if (typeof req.query.page !== 'undefined')
                currentPage = +req.query.page

            let response = paginatedData[currentPage - 1];
            res.status(200).json(response)
        });
    });

let server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port)
    console.log('Use endpoint /data/')
})
