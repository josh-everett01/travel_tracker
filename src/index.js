import "./css/base.scss";
import * as travelTrackerService from "./travel_tracker_service.js";
import * as travelerDashboardHelper from "./traveler_dashboard_helper";
import * as agentDashboardHelper from "./agent_dashboard_helper";
import * as loginHelper from "./login_helper";

let button = document.getElementById("submit");

button.onclick = function processLogin() {
  let usernameInput = document.getElementById("input-username").value;
  let passwordInput = document.getElementById("input-password").value;
  if (loginHelper.isValidPassword(passwordInput)) {
    travelTrackerService.isValidTraveler(usernameInput).then(function (result) {
      if (result === true) {
        var travelerId = usernameInput.slice(8);
        travelTrackerService
          .getSingleTraveler(travelerId)
          .then(function (result) {
            let traveler = result.traveler;
            travelTrackerService
              .getTravelerTrips(traveler)
              .then(function (result) {
                let travelerTrips = result.travelerTrips;
                travelTrackerService
                  .getTravelerDestinations(travelerTrips, traveler)
                  .then(function (result) {
                    var destinations = result.travelerDestinations;
                    var trips = result.travelerTrips;
                    // eslint-disable-next-line max-len
                    let travelerDashboardData = travelerDashboardHelper.prepareTravelerDashboardData(
                      traveler,
                      destinations,
                      trips
                    );
                    travelerDashboardHelper.renderTravelerDashboard(
                      travelerDashboardData
                    );
                  });
              });
          });
      } else if (loginHelper.isValidAgency(usernameInput)) {
        agentDashboardHelper.renderSuccessfulAgencyLogin();
      } else {
        loginHelper.loginError();
      }
    });
  } else {
    loginHelper.loginError();
  }
};
