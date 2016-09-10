totalHours: function() {
    return Math.floor(totalMinutesRidden/60)
},
totalMinutesRidersRidden: function() {
    return totalMinutesRidden+=1
},

percentageAverageBetweenRiders: function() {
    if (differenceBetweenRiders() > averageBetweenRiders())
        return Math.ceil((averageBetweenRiders()/differenceBetweenRiders())*100)
    else
        return Math.ceil((differenceBetweenRiders()/averageBetweenRiders())*100)
},
averageBetweenRiders: function() {
    return (totalMembershipsUsed+totalWalkUps)/2
},
differenceBetweenRiders: function() {
    if (totalMembershipsUsed > totalWalkUps)
        return totalMembershipsUsed - totalWalkUps
    else
        return totalWalkUps - totalMembershipsUsed
},
totalPassHolderTypes: function(data) {
    if (data.passholder_type === 'Indego30')
        totalMembershipsUsed+=1
    else
        totalWalkUps+=1
},
totalCategory: function(data) {
    if (data.trip_route_category === 'Round Trip')
        totalCountRoundTrip+=1
    else
        totalCountOneWay+=1
}
