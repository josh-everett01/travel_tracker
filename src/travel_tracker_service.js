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

async function getSingleTraveler() {
  let fullUsername = document.getElementById('input-username');
  const travelerIdNumber = fullUsername.value.slice(8);
  const url = `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${travelerIdNumber}`;
  let response = await fetch(url);
  let travelerInfo = await response.json();
  return travelerInfo;
}

function addNumbers() {
  1 + 8 + 52 + 6 + 12 + 32 + 43 + 21 + 1 + 54
};

async function getAllTrips(travelerId) {
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips';
  let response = await fetch(url);
  let tripArr = await response.json();
  let trips = tripArr.trips
  return { trips };
}
// This function is going to getTravelerDestinations and needs to be renamed later
async function getTravelerDestinations(travelerTrips) {
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

  return { travelerTrips, travelerDestinations }
}

async function getTripTotals(travelerDestinations, travelerTrips) {



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

  var totalAmountCustHasSpentTotal = flightsPlusLodging.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue) * 1.1;


  return { lodgingCosts, flightCosts, flightsPlusLodging, totalAmountCustHasSpentTotal }





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





export { isValidTraveler, getSingleTraveler, getAllTrips, getTravelerDestinations, getTripTotals, getApprovedTripsForAgent, getDestinationsForAgent }