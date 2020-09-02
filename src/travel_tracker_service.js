async function isValidTraveler(usernameInput) {
  const userId = usernameInput.slice(8);
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers';
  let response = await fetch(url);
  let awaitRes = await response.json();
  let travelers = awaitRes.travelers;
  let idToNum = Number(userId);
  let idsArray = [];
  let valid = false;
  travelers.forEach(traveler => {
    idsArray.push(traveler.id);
  });

  idsArray.forEach(id => {
    if (idToNum === id) {
      valid = true;
    }
  });
  return valid;
}

async function getSingleTraveler(travelerId) {
  let fullUsername = document.getElementById('input-username');
  const travelerIdNumber = fullUsername.value.slice(8);
  const url = `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${travelerIdNumber}`;
  let response = await fetch(url);
  let traveler = await response.json();
  return { traveler };
}



async function getTravelerTrips(traveler) {
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips';
  let response = await fetch(url);
  let tripArr = await response.json();
  let trips = tripArr.trips;
  let travelerTrips = [];

  var i;
  for (i = 0; i < trips.length; i++) {
    let trip = trips[i];

    if (traveler.id == trip.userID) {
      travelerTrips.push(trip);
    }
  }

  return { travelerTrips, traveler };
}

// getTravelerDestinations(travelerTrips, traveler)
async function getTravelerDestinations(travelerTrips, traveler) {
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations';
  let response = await fetch(url);
  let destinationsResponse = await response.json();
  let destinations = destinationsResponse.destinations;
  let tripDestinationIds = [];
  let travelerDestinations = [];
  travelerTrips.forEach(trip => tripDestinationIds.push(trip.destinationID));
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (tripDestinationIds.includes(destinations[i].id)) {
      travelerDestinations.push(destinations[i]);
    }

  }
  // return { travelerTrips, traveler, travelerDestinations }

  return { travelerTrips, traveler, travelerDestinations }
}

// Change this function name to getTravelerDashboardData
async function getTripTotals(traveler, travelerDestinations, travelerTrips) {
  let lodgingCosts = [];
  let i;
  for (i = 0; i < travelerDestinations.length; i++) {
    lodgingCosts.push(travelerDestinations[i].estimatedLodgingCostPerDay * travelerTrips[i].duration)
  }

  let flightCosts = [];
  for (i = 0; i < travelerDestinations.length; i++) {
    flightCosts.push(
      travelerDestinations[i].estimatedFlightCostPerPerson * travelerTrips[i].travelers)
  }

  let flightsPlusLodging = []
  for (i = 0; i < travelerDestinations.length; i++) {
    flightsPlusLodging.push(lodgingCosts[i] + flightCosts[i])
  }

  var totalAmountCustHasSpentBeforeAgentFee = flightsPlusLodging.reduce(function (a, b) {
    return a + b;
  }, 0);
  var totalAfterAgentFee = totalAmountCustHasSpentBeforeAgentFee * 1.1;


  // This should return traveler, trips, destinations, and everything else below
  return { traveler, travelerTrips, travelerDestinations, lodgingCosts, flightCosts, flightsPlusLodging, totalAmountCustHasSpentBeforeAgentFee, totalAfterAgentFee }





}


async function getApprovedTripsForAgent() {
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips';
  let response = await fetch(url);
  let tripsResponse = await response.json();
  let trips = tripsResponse.trips;
  return { trips };
}

async function getDestinationsForAgent() {
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations';
  let response = await fetch(url);
  let destinationsResponse = await response.json();
  let destinations = destinationsResponse.destinations;
  return { destinations };
}





export { isValidTraveler, getSingleTraveler, getTravelerTrips, getTravelerDestinations, getTripTotals, getApprovedTripsForAgent, getDestinationsForAgent }