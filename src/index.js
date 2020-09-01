import './css/base.scss';
import { isValidTraveler, getSingleTraveler, getTravelerTrips, getTravelerDestinations, getTripTotals, getApprovedTripsForAgent, getDestinationsForAgent } from './travel_tracker_service.js'
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

        // comment out everything below and work on each one 
        // 1. getSingleTraveler.then (console.log result to verify)
        // 2. getTravelerTrips
        // 3. getTravelerDestinations
        // 4. getTripTotals
        // 5. renderSuccesfulTravelerLogin  (this has all ^^ data)


        // slice the user Id from the username Input
        // let travelerId = the Id from step 17
        var travelerId = usernameInput.slice(8);
        // we need to define async function getSingleTraveler(travelerId) in travel tracker service 
        // have the function return the traveler object
        // call getSingleTraveler(travelerId) 
        getSingleTraveler(travelerId).then(function (result) {
          let traveler = result.traveler;


          getTravelerTrips(traveler).then(function (result) {
            // Where getAllTrips() is defined; remember to return the traveler as well
            let travelerTrips = result.travelerTrips;

            // After renaming this function getTravelerTrips()
            // we can move all the below loop logic into where function is defined


            // var j; ** THIS IS NOT NEEDED**
            // for (j = 0; j < travelerTrips.length; j++) {

            //   var node = document.createElement("div");
            //   var textnode = document.createTextNode('ID: ' + travelerTrips[j].id + ' , ' + ' User Id: ' + travelerTrips[j].userID + ' , ' + ' Destination Id: ' + travelerTrips[j].destinationID + ' , ' + ' Travelers: ' + travelerTrips[j].travelers + ' , ' + ' Date: ' + travelerTrips[j].date + ' , ' + ' Duration: ' + travelerTrips[j].duration + ' , ' + ' Status: ' + travelerTrips[j].status + ' , ' + ' Suggested Activities: ' + travelerTrips[j].suggestedActivities);
            //   node.appendChild(textnode);

            //   document.getElementById("test-Id").appendChild(node);

            // }


            // getTravelerDestinations(travelerTrips, traveler)
            // 
            getTravelerDestinations(travelerTrips, traveler).then(function (result) {

              var destinations = result.travelerDestinations;
              var trips = result.travelerTrips;


              // getTripTotals(traveler, destinations, trips)
              getTripTotals(traveler, destinations, trips).then(function (result) {

                // BEFORE BUILDING HTML verify getTripTotals() returns all teh psuedo-coded data



                // Call a function renderSuccessfulTravelerLogin(result)
                renderSuccessfulTravelerLogin(result);
                // This function will spit out styled HTML to display all the trips and traveler information

                // var node = document.createElement("div");
                // var textnode = document.createTextNode('Total Amount Spent On Trips: ' + '$' + result.totalAmountCustHasSpentTotal);
                // node.appendChild(textnode);

                // document.getElementById("test-Id").style.border = '3px solid white';
                // document.getElementById("test-Id").style.textAlign = 'center';
                // document.getElementById("test-Id").style.padding = '5%';
                // document.getElementById("test-Id").style.margin = '3%', '3%', '5%', '3%';
                // document.getElementById("test-Id").appendChild(node);
              })
            })
          })


        })





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

