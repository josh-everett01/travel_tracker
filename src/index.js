import "./css/base.scss";
import {
  isValidTraveler,
  getSingleTraveler,
  getTravelerTrips,
  getTravelerDestinations,
  getTravelerDashboardData,
  getApprovedTripsForAgent,
  getDestinationsForAgent,
} from "./travel_tracker_service.js";
import {
  isValidAgency,
  renderSuccessfulAgencyLogin,
  renderTravelerDashboard,
  loginError,
  isValidPassword,
} from "./login_helper.js";

let button = document.getElementById("submit");

button.onclick = function processLogin() {
  let usernameInput = document.getElementById("input-username").value;
  let passwordInput = document.getElementById("input-password").value;
  if (isValidPassword(passwordInput)) {
    isValidTraveler(usernameInput).then(function (result) {
      if (result === true) {
        var travelerId = usernameInput.slice(8);
        getSingleTraveler(travelerId).then(function (result) {
          let traveler = result.traveler;
          getTravelerTrips(traveler).then(function (result) {
            let travelerTrips = result.travelerTrips;
            getTravelerDestinations(travelerTrips, traveler).then(function (
              result
            ) {
              var destinations = result.travelerDestinations;
              var trips = result.travelerTrips;
              getTravelerDashboardData(traveler, destinations, trips).then(
                function (result) {
                  renderTravelerDashboard(result);
                }
              );
            });
          });
        });
      } else if (isValidAgency(usernameInput)) {
        renderSuccessfulAgencyLogin();
      } else {
        loginError();
      }
    });
  } else {
    loginError();
  }
};
