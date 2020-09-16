async function isValidTraveler(usernameInput) {
  const userId = usernameInput.slice(8);
  const url =
    // eslint-disable-next-line max-len
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers";
  let response = await fetch(url);
  let awaitRes = await response.json();
  let travelers = awaitRes.travelers;
  let idToNum = Number(userId);
  let idsArray = [];
  let valid = false;
  travelers.forEach((traveler) => {
    idsArray.push(traveler.id);
  });

  idsArray.forEach((id) => {
    if (idToNum === id) {
      valid = true;
    }
  });
  return valid;
}

async function getSingleTraveler() {
  let fullUsername = document.getElementById("input-username");
  const travelerIdNumber = fullUsername.value.slice(8);
  const url =
    // eslint-disable-next-line max-len
    `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${travelerIdNumber}`;
  let response = await fetch(url);
  let traveler = await response.json();
  return { traveler };
}

async function getTravelerTrips(traveler) {
  const url =
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips";
  let response = await fetch(url);
  let tripArr = await response.json();
  let trips = tripArr.trips;
  let travelerTrips = [];
  var i;
  for (i = 0; i < trips.length; i++) {
    let trip = trips[i];

    if (traveler.id === trip.userID) {
      travelerTrips.push(trip);
    }
  }
  return { travelerTrips, traveler };
}

async function getTravelerDestinations(travelerTrips, traveler) {
  const url =
    // eslint-disable-next-line max-len
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations";
  let response = await fetch(url);
  let destinationsResponse = await response.json();
  let destinations = destinationsResponse.destinations;
  let tripDestinationIds = [];
  let travelerDestinations = [];
  travelerTrips.forEach((trip) => tripDestinationIds.push(trip.destinationID));
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (tripDestinationIds.includes(destinations[i].id)) {
      travelerDestinations.push(destinations[i]);
    }
  }
  return { travelerTrips, traveler, travelerDestinations };
}

export {
  isValidTraveler,
  getSingleTraveler,
  getTravelerTrips,
  getTravelerDestinations,
};
