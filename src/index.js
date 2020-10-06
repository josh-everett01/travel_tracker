import "./css/base.scss";
import * as travel_tracker_service from "./travel_tracker_service.js";
import * as traveler_dashboard_helper from "./traveler_dashboard_helper";
import * as agent_dashboard_helper from "./agent_dashboard_helper";
import * as login_helper from "./login_helper";
import * as styling from "./styling_helper";
document.querySelector('body').onload = styling.styleHomePage();

let button = document.getElementById("submit");

button.onclick = function processLogin() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('home-page-h1').style.display = 'none';

  let usernameInput = document.getElementById("input-username").value;
  let passwordInput = document.getElementById("input-password").value;
  if (login_helper.isValidPassword(passwordInput)) {
    travel_tracker_service
      .isValidTraveler(usernameInput)
      .then(function (result) {
        if (result === true) {
          var travelerId = usernameInput.slice(8);
          travel_tracker_service
            .getSingleTraveler(travelerId)
            .then(function (result) {
              let traveler = result.traveler;
              travel_tracker_service
                .getTravelerTrips(traveler)
                .then(function (result) {
                  let travelerTrips = result.travelerTrips;
                  travel_tracker_service
                    .getTravelerDestinations(travelerTrips, traveler)
                    .then(function (result) {
                      var destinations = result.travelerDestinations;
                      var trips = result.travelerTrips;
                      let travelerDashboardData =
                        traveler_dashboard_helper.prepareTravelerDashboardData(
                          traveler,
                          destinations,
                          trips
                        );
                      traveler_dashboard_helper.renderTravelerDashboard(
                        travelerDashboardData
                      );
                    });
                });
            });
        } else if (login_helper.isValidAgency(usernameInput)) {
          agent_dashboard_helper.renderSuccessfulAgencyLogin();
        } else {
          login_helper.loginError();
        }
      });
  } else {
    login_helper.loginError();
  }
};
