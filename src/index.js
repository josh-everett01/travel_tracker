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
            //Pt. 1
            // Put all the trip data on the page with HTML and styling
            var j;
            for (j = 0; j < travelerTrips.length; j++) {

              var node = document.createElement("div");                 // Create a <li> node

              // var textnode = document.createTextNode(JSON.stringify(travelerTrips[j]));         // Create a text node
              // node.appendChild(textnode);                              // Append the text to <li>
              // document.getElementById("test-Id").appendChild(node);     // Append <li> to <ul> with id="myList"
              var textnode = document.createTextNode('ID: ' + travelerTrips[j].id + ' , ' + ' User Id: ' + travelerTrips[j].userID + ' , ' + ' Destination Id: ' + travelerTrips[j].destinationID + ' , ' + ' Travelers: ' + travelerTrips[j].travelers + ' , ' + ' Date: ' + travelerTrips[j].date + ' , ' + ' Duration: ' + travelerTrips[j].duration + ' , ' + ' Status: ' + travelerTrips[j].status + ' , ' + ' Suggested Activities: ' + travelerTrips[j].suggestedActivities);         // Create a text node
              node.appendChild(textnode);                              // Append the text to <li>
              document.getElementById("test-Id").appendChild(node);     // Append <li> to <ul> with id="myList"

            }

            // 
            //
            //Pt. 2
            // Put all of the traveler trips destination ID's in an array

            let destinationIdArray = [];
            let g;
            for (g = 0; g < travelerTrips.length; g++) {

              destinationIdArray.push(travelerTrips[g].destinationID)
            }

            console.log(destinationIdArray);
            // call an async function to get all destinations

            getAllDestinations().then(function (result) {
              // Then loop through the destinations array

              let destinationsArray = [];
              var d;
              for (d = 0; d < result.destinationsArr.destinations.length; d++) {
                let destination = result.destinationsArr.destinations[d];
                destinationsArray.push(destination);


                let g;
                for (g = 0; g < travelerTrips.length; g++)
                  // if destination.Id included in the traveler trip destination ID Arr

                  if (destinationsArray[d].id === destinationIdArray[g]) {
                    var costArr = [];
                    console.log('Lodging: ' + destinationsArray[d].estimatedLodgingCostPerDay, 'Flights: ' + destinationsArray[d].estimatedFlightCostPerPerson)

                  };

              }



            })


            // getAllTrips().then(function (result) {
            //   let tripDestinationsArr = [];
            //   var i;
            //   for (i = 0; i < result.trips.length; i++) {
            //     let trip = result.trips[i];

            //     if (i < result.trips.length) {
            //       tripDestinationsArr.push(trip);
            //     }
            //   }

            //   console.log(tripDestinationsArr);
            //   getAllDestinations().then(function (result) {
            //     let destinationsIdsArr = [];
            //     var l;
            //     for (l = 0; l < result.destinations.length; l++) {
            //       let destination = result.destinations[l];

            //       if (l < result.destinations.length) {
            //         destinationsIdsArr.push(destination);


            //       }




            //     }
            //   }





            //   )})
            // call an async function to get all destinations
            // then loop through the destinations array
            // if destination.Id included in the traveler trip destination ID
            // put that destination price in an array and then 
            // add sum of price 

            console.log(travelerTrips);
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

