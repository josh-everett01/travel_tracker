import './css/base.scss';
import { isValidTraveler, getSingleTraveler, getAllTrips, getAllDestinations } from './travel_tracker_service.js'
import { isValidAgency, renderSuccessfulAgencyLogin, renderSuccessfulTravelerLogin, loginError, isValidPassword } from './login_helper.js';
import { getTripsArr, getTravelerInfo, matchTravToTrip } from './traveler_dashboard.js'

let button = document.getElementById('submit');

// button.onclick = getAllDestinations;

button.onclick = function processLogin() {
  let usernameInput = document.getElementById('input-username').value;
  let passwordInput = document.getElementById('input-password').value;
  let validTraveler = isValidTraveler(usernameInput);
  if (isValidPassword(passwordInput)) {
    isValidTraveler(usernameInput).then(function (result) {
      if (result === true) {
        renderSuccessfulTravelerLogin(
          getAllTrips().then(function (result) {
            let travelerTrips = [];
            var i;
            for (i = 0; i < result.trips.length; i++) {
              let trip = result.trips[i];
              let travelerId = usernameInput.slice(8);
              if (travelerId == trip.userID) {
                travelerTrips.push(trip);
              }
            }

            var j;
            for (j = 0; j < travelerTrips.length; j++) {

              var node = document.createElement("div");
              var textnode = document.createTextNode('ID: ' + travelerTrips[j].id + ' , ' + ' User Id: ' + travelerTrips[j].userID + ' , ' + ' Destination Id: ' + travelerTrips[j].destinationID + ' , ' + ' Travelers: ' + travelerTrips[j].travelers + ' , ' + ' Date: ' + travelerTrips[j].date + ' , ' + ' Duration: ' + travelerTrips[j].duration + ' , ' + ' Status: ' + travelerTrips[j].status + ' , ' + ' Suggested Activities: ' + travelerTrips[j].suggestedActivities);         // Create a text node
              node.appendChild(textnode);                              // Append the text to <li>
              document.getElementById("test-Id").appendChild(node);     // Append <li> to <ul> with id="myList"

            }



            getAllDestinations(travelerTrips).then(function (result) {
              // make a destinations variable out of the result destinations
              // make a trips variable out of the result trips
              // call an async function getTripTotals(destinations, trips)
              // this function will calculate the stuff below
              // in the .then I should have all my data




              // Lodging Costs = the destination lodging cost per day * trip duration 
              // Flight Costs = Estimated flight cost per person * travelers
              // As we loop, add the flight cost and lodging costs to the total cost 
              // After the loop; multiply total cost * 1.1 to add travel agents fee













            })






          })
        );
      } else if
        (isValidAgency(usernameInput)) {
        renderSuccessfulAgencyLogin();
      } else {
        loginError();
      }
    });
  } else {
    loginError();
  }
};

