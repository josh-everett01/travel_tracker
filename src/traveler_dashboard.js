import { getSingleTraveler, getAllTrips } from './travel_tracker_service.js'

function getTravelerInfo(travelerId) {
  getSingleTraveler().then(travelerInfo => console.log(travelerInfo))
    .catch(reason => console.log(reason.message))
}

function getTripsArr() {
  getAllTrips().then(tripArr => console.log(tripArr.trips))
    .catch(reason => console.log(reason.message))
}

export { getTravelerInfo, getTripsArr }