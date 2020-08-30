import './css/base.scss';
import { isValidTraveler, getSingleTraveler, getAllTrips, getTravelerDestinations, getTripTotals, getApprovedTripsForAgent, getDestinationsForAgent } from './travel_tracker_service.js'
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
              var textnode = document.createTextNode('ID: ' + travelerTrips[j].id + ' , ' + ' User Id: ' + travelerTrips[j].userID + ' , ' + ' Destination Id: ' + travelerTrips[j].destinationID + ' , ' + ' Travelers: ' + travelerTrips[j].travelers + ' , ' + ' Date: ' + travelerTrips[j].date + ' , ' + ' Duration: ' + travelerTrips[j].duration + ' , ' + ' Status: ' + travelerTrips[j].status + ' , ' + ' Suggested Activities: ' + travelerTrips[j].suggestedActivities);
              node.appendChild(textnode);

              document.getElementById("test-Id").appendChild(node);

            }



            getTravelerDestinations(travelerTrips).then(function (result) {
              var destinations = result.travelerDestinations;
              var trips = result.travelerTrips;

              getTripTotals(destinations, trips).then(function (result) {
                console.log(result);
                // Call a function renderSuccessfulTravelerLogin(result)
                // This function will spit out styled HTML to display all the trips and traveler information
                var node = document.createElement("div");
                var textnode = document.createTextNode('Total Amount Spent On Trips: ' + '$' + result.totalAmountCustHasSpentTotal);
                node.appendChild(textnode);

                document.getElementById("test-Id").style.border = '3px solid white';
                document.getElementById("test-Id").style.textAlign = 'center';
                document.getElementById("test-Id").style.padding = '5%';
                document.getElementById("test-Id").style.margin = '3%', '3%', '5%', '3%';
                document.getElementById("test-Id").appendChild(node);
              })
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

