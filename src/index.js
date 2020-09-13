import "./css/base.scss";
import {
  isValidTraveler,
  getSingleTraveler,
  getTravelerTrips,
  getTravelerDestinations,
} from "./travel_tracker_service.js";
import { prepareTravelerDashboardData } from "./traveler_dashboard_helper";
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
              let travelerDashboardData = prepareTravelerDashboardData(traveler, destinations, trips)
              renderTravelerDashboard(travelerDashboardData)
            });
          });
        });
      } else if (isValidAgency(usernameInput)) {
        renderSuccessfulAgencyLogin(

        );
      } else {
        loginError();
      }
    });
  } else {
    loginError();
  }
};
