import { getSingleTraveler, getAllDestinations } from './travel_tracker_service.js'

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
  getAllTrips(function (tripArr) {
    let data = tripArr
    console.log('here:', data)
  });

}





export { getTravelerInfo, getTripsArr, matchTravToTrip }