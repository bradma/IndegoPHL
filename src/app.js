'use strict';

import * as fs from 'fs';
import * as csv from 'fast-csv';

let stream = fs.createReadStream('./Indego_Trips_2016Q2.csv'),
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
    ];


let totalCountOneWay = 0,
    totalCountRoundTrip = 0,
    totalMembershipsUsed = 0,
    totalWalkUps = 0,
    totalMinutesRidden = 0;
csv
    .fromStream(stream, {headers: csvHeaders})
    .on("data", (data) => {
        totalCategory(data)
        totalPassHolderTypes(data)
        totalMinutesRidersRidden()

        console.log('Startin Lat', data.start_lat)
        console.log('End Long', data.start_lon)
    })
    .on("end", () => {
        console.log("--------------------------------")
        console.log('Total Count One Way:', totalCountOneWay)
        console.log('Total Count Round Trip:', totalCountRoundTrip)
        console.log('Times Memberships Used:', totalMembershipsUsed)
        console.log('Total Walkups Used:', totalWalkUps)
        console.log('Difference Between Ridership', differenceBetweenRiders())
        console.log('Average Between Ridership', averageBetweenRiders(),
                    'Percentage:', percentageAverageBetweenRiders())

        console.log('Total Minutes Ridden', totalMinutesRidden,
                    'Total Hours Ridden', totalHours())
    })

function totalHours() {
    return Math.floor(totalMinutesRidden/60)
}

function totalMinutesRidersRidden() {
    return totalMinutesRidden+=1
}

function percentageAverageBetweenRiders() {
    if (differenceBetweenRiders() > averageBetweenRiders())
        return Math.ceil((averageBetweenRiders()/differenceBetweenRiders())*100)
    else
        return Math.ceil((differenceBetweenRiders()/averageBetweenRiders())*100)
}

function averageBetweenRiders() {
    return (totalMembershipsUsed+totalWalkUps)/2
}

function differenceBetweenRiders() {
    if (totalMembershipsUsed > totalWalkUps)
        return totalMembershipsUsed - totalWalkUps
    else
        return totalWalkUps - totalMembershipsUsed
}

function totalPassHolderTypes(data) {
    if (data.passholder_type === 'Indego30')
        totalMembershipsUsed+=1
    else
        totalWalkUps+=1
}

function totalCategory(data) {
    if (data.trip_route_category === 'Round Trip')
        totalCountRoundTrip+=1
    else
        totalCountOneWay+=1
}
