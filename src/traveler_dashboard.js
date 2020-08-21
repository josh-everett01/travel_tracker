import { getSingleTraveler, getAllTrips, getAllDestinations } from './travel_tracker_service.js'

function getTravelerInfo(travelerId) {
  getSingleTraveler().then(travelerInfo => console.log(travelerInfo.travelers[5]))
    .catch(reason => console.log(reason.message))
    
}

function getTripsArr() {
  getAllTrips().then(tripArr => 
console.log(tripArr.trips[32]))
    .catch(reason => console.log(reason.message))
    // if (tripArr.trips[32].id.value === 33) {
    //   console.log('yes');
    // }
}

async function matchTravToTrip(travelerId) {
  getAllTrips().then(tripArr => {
    // console.log(tripArr.trips[32])
    const username = document.getElementById('input-username');
    const usernameInput = username.value;
    const userId = usernameInput.slice(8);
    tripArr.trips.forEach(id => {
      if (Number(userId) === Number(tripArr.trips[32].userId)) {console.log('yaas') 
  } else {console.log('nahh')};
    })
  // let idToNum = Number(userId);
  
    console.log(Number(userId), tripArr.trips[32])})
        .catch(reason => console.log(reason.message))
}



export { getTravelerInfo, getTripsArr, matchTravToTrip }