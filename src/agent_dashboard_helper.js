import * as travel_tracker_service from "./travel_tracker_service";
import * as dashboard_helper from "./dashboard_helper";

function renderAgentWelcome() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  var welcomeHeader = document.createElement("H1");
  var headerText = document.createTextNode("Welcome, AGENT");
  welcomeHeader.appendChild(headerText);
  document.body.appendChild(welcomeHeader);
}

function renderAmountAgentEarned(trips, destinations) {
  let amountAgentEarned = getLodgingCostsForAgent(destinations, trips);
  renderTotalEarned(amountAgentEarned);
}

function renderPendingAndTodaysTrips(trips, destinations) {
  let pendingTrips = dashboard_helper.getPendingTrips(trips);
  renderAgentTrips(pendingTrips, destinations);
  dashboard_helper.renderTripsHeader("Today's");
  let todaysTrips = dashboard_helper.getTodaysTrips(trips);
  renderAgentTrips(todaysTrips, destinations);
}

function renderSuccessfulAgencyLogin() {
  renderAgentWelcome();
  travel_tracker_service.getAllTrips().then(function (trips) {
    travel_tracker_service.getAllDestinations().then(function (destinations) {
      trips;
      renderAmountAgentEarned(trips, destinations);
      dashboard_helper.renderTripsHeader("Requested");
      renderPendingAndTodaysTrips(trips, destinations);
    });
  });
}

function returnApprovedTrips(trips) {
  let approvedTrips = [];
  let i;
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === "approved") {
      approvedTrips.push(trips[i]);
    }
  }
  return approvedTrips;
}

function returnApprovedTripsFlightsAndLodging(destinations, approvedTrips) {
  let approvedTripsFlightPlusLodging = [];
  let destinationIndex;
  for (let i = 0; i < approvedTrips.length; i++) {
    for (
      destinationIndex = 0;
      destinationIndex < destinations.length;
      destinationIndex++
    ) {
      let destinationID = approvedTrips[i].destinationID;
      let destinationIndexId = destinations[destinationIndex].id;
      if (destinationID === destinationIndexId) {
        approvedTripsFlightPlusLodging.push(
          destinations[destinationIndex].estimatedLodgingCostPerDay +
          destinations[destinationIndex].estimatedFlightCostPerPerson
        );
      }
    }
  }
  return approvedTripsFlightPlusLodging;
}

function getLodgingCostsForAgent(destinations, trips) {
  let approvedTrips = returnApprovedTrips(trips);
  let approvedTripsFlightsPlusLodging = returnApprovedTripsFlightsAndLodging(
    destinations,
    approvedTrips
  );
  let amountTravelersHaveSpent = approvedTripsFlightsPlusLodging.reduce(
    (lodgingCost, flightCost) => lodgingCost + flightCost,
    0
  );
  let amountAgentEarned = amountTravelersHaveSpent * 0.1;
  return amountAgentEarned;
}

function renderTotalEarned(amountAgentEarned) {
  amountAgentEarned;
  let totalAmount = amountAgentEarned.toFixed(2);
  let totalEarnedParagraph = document.createElement("paragraph");
  totalEarnedParagraph.className = "total-earned";
  let totalEarnedText = document.createTextNode(
    `Total Amount Earned: $${totalAmount}`
  );
  totalEarnedParagraph.appendChild(totalEarnedText);
  document.querySelector("body").appendChild(totalEarnedParagraph);
}

function renderAgentTrips(pendingTrips, destinations) {
  let i;
  for (i = 0; i < pendingTrips.length; i++) {
    dashboard_helper.renderDestinationImage(pendingTrips[i], destinations);
    dashboard_helper.renderTripDate(pendingTrips[i]);
    dashboard_helper.renderTripDestination(pendingTrips[i], destinations);
    dashboard_helper.renderTripStatus(pendingTrips[i]);
    dashboard_helper.renderTripDuration(pendingTrips[i]);
  }
}

export { renderSuccessfulAgencyLogin };
