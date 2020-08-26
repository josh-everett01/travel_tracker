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

async function getAllDestinations(travelerId) {
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations';
  let response = await fetch(url);
  let destinationsArr = await response.json();
  return { destinationsArr };
}



export { isValidTraveler, getSingleTraveler, getAllTrips, getAllDestinations }