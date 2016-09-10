'use strict';

var fs = require('fs');
var csv = require('fast-csv');

var IndegoSource = {
    gatherData: function() {
        let stream = fs.createReadStream('./logic/Indego_Trips_2016Q2.csv'),
            csvHeaders = [
                "trip_id",
                "duration",
                "start_time",
                "end_time",
                "start_station_id",
                "start_lat",
                "start_lon",
                "end_station_id",
                "end_lat",
                "end_lon",
                "bike_id",
                "plan_duration",
                "trip_route_category",
                "passholder_type"
            ],
            csvData = [];

        return new Promise(
            function(resolve, reject) {
                csv
                .fromStream(stream, {headers: csvHeaders})
                .on("data", function(data) {
                    csvData.push(data)
                })
                .on("end", function() {
                   resolve(csvData)
                })
        })
    }
}

module.exports = IndegoSource
