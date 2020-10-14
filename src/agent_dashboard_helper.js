import * as travelTrackerService from "./travel_tracker_service";
import * as dashboardHelper from "./dashboard_helper";
import * as travelerDashboardHelper from "./traveler_dashboard_helper";
import * as styling from "./styling_helper";

function setAgentPage() {
  document.getElementById("footer").style.display = "none";
  document.getElementById("home-page-h1").innerHTML = "Welcome, AGENT";
  document.getElementById("home-page-h1").id = "agent-header";
}

function renderAgentWelcome() {
  setAgentPage();
  styling.agentMediaQuery();
  styling.agentMediaQuery768();
}

function renderAmountAgentEarned(trips, destinations) {
  let amountAgentEarned = getLodgingCostsForAgent(destinations, trips);
  renderTotalEarned(amountAgentEarned);
}

function checkForNoTravelers(todaysTrips) {
  if (todaysTrips.todaysTrips.length === 0) {
    let noTravelersTextNode = document.createTextNode(
      "There are no travelers on Trips Today"
    );
    let noTravelersH1 = document.createElement("h1");
    noTravelersH1.appendChild(noTravelersTextNode);
    document.querySelectorAll("section")[1].appendChild(noTravelersH1);
  }
}

function renderTravelersOnTripsToday(todaysTrips, destinations) {
  if (todaysTrips.todaysTrips.length > 0) {
    renderAgentTrips(todaysTrips, destinations);
  }
}

function renderPendingAndTodaysTrips(trips, destinations) {
  let pendingTrips = dashboardHelper.getPendingTrips(trips);
  renderAgentTrips(pendingTrips, destinations);
  dashboardHelper.renderTripsHeader("Today's");
  document.getElementsByClassName("container")[1].id = "todays-trips";
  let todaysTrips = dashboardHelper.getTodaysTrips(trips);
  checkForNoTravelers(todaysTrips);
  renderTravelersOnTripsToday(todaysTrips, destinations);
}

function renderTopHalfOfAgentDashboard(trips, destinations) {
  renderAmountAgentEarned(trips, destinations);
  dashboardHelper.renderTripsHeader("Requested");
  renderPendingAndTodaysTrips(trips, destinations);
}

function renderBottomHalfOfAgentDashboard(trips, destinations) {
  dashboardHelper.renderTripsHeader("Agent Tools and Traveler");
  renderTravelerSearchBar();
  renderShowTravelerButton(trips, destinations);
}

function renderSuccessfulAgencyLogin() {
  dashboardHelper.renderLogOutButton();
  renderAgentWelcome();
  travelTrackerService.getAllTrips().then(function (trips) {
    travelTrackerService.getAllDestinations().then(function (destinations) {
      trips;
      renderTopHalfOfAgentDashboard(trips, destinations);
      renderBottomHalfOfAgentDashboard(trips, destinations);
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

function loopThroughApprovedTrip(
  approvedTrip,
  destinations,
  destinationIndex,
  approvedTripsFlightPlusLodgingArr
) {
  for (
    destinationIndex = 0;
    destinationIndex < destinations.length;
    destinationIndex++
  ) {
    let destinationID = approvedTrip.destinationID;
    let destinationIndexId = destinations[destinationIndex].id;
    if (destinationID === destinationIndexId) {
      approvedTripsFlightPlusLodgingArr.push(
        destinations[destinationIndex].estimatedLodgingCostPerDay +
        destinations[destinationIndex].estimatedFlightCostPerPerson
      );
      let approvedTripFlightPlusLodging = approvedTripsFlightPlusLodgingArr;
      return approvedTripFlightPlusLodging;
    }
  }
}

function returnApprovedTripsFlightsAndLodging(destinations, approvedTrips) {
  let approvedTripsFlightPlusLodgingArr = [];
  let destinationIndex;
  for (let i = 0; i < approvedTrips.length; i++) {
    loopThroughApprovedTrip(
      approvedTrips[i],
      destinations,
      destinationIndex,
      approvedTripsFlightPlusLodgingArr
    );
  }
  return approvedTripsFlightPlusLodgingArr;
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
  totalEarnedParagraph.className = "total-spent";
  let totalEarnedText = document.createTextNode(
    `Total Amount Earned: $${totalAmount}`
  );
  totalEarnedParagraph.appendChild(totalEarnedText);
  document.querySelector("body").appendChild(totalEarnedParagraph);
}

function renderTrips(todaysTrips, destinations) {
  dashboardHelper.renderDestinationImage(todaysTrips, destinations);
  dashboardHelper.renderTripDate(todaysTrips);
  dashboardHelper.renderTripDestination(todaysTrips, destinations);
  dashboardHelper.renderTripStatus(todaysTrips);
  dashboardHelper.renderTripDuration(todaysTrips);
  renderApproveAndDenyButtons(todaysTrips, destinations);
}

function renderPendingTrips(pendingTrip, destinations) {
  dashboardHelper.renderDestinationImage(pendingTrip, destinations);
  dashboardHelper.renderTripDate(pendingTrip);
  dashboardHelper.renderTripDestination(pendingTrip, destinations);
  dashboardHelper.renderTripStatus(pendingTrip);
  dashboardHelper.renderTripDuration(pendingTrip);
  renderApproveAndDenyButtons(pendingTrip, destinations);
}

function renderAgentTrips(pendingTrips, destinations) {
  if (pendingTrips.length === undefined) {
    let todaysTrips = pendingTrips.todaysTrips;
    let i;
    for (i = 0; i < todaysTrips.length; i++) {
      renderTrips(todaysTrips[i], destinations);
    }
  } else {
    let i;
    for (i = 0; i < pendingTrips.length; i++) {
      renderPendingTrips(pendingTrips[i], destinations);
    }
  }
}

function appendApproveAndDenyButton(approveButton, denyButton) {
  dashboardHelper.appendToSection(approveButton);
  dashboardHelper.appendToSection(denyButton);
}

function createApproveButton(pendingTripId) {
  let approveButton = document.createElement("button");
  approveButton.setAttribute("id", `approve-button-${pendingTripId}`);
  approveButton.setAttribute("class", "approve-button");
  approveButton.textContent = "APPROVE";
  return approveButton;
}

function createDenyButton(pendingTripId) {
  let denyButton = document.createElement("button");
  denyButton.setAttribute("id", `deny-button-${pendingTripId}`);
  denyButton.setAttribute("class", "deny-button");
  denyButton.textContent = "DELETE TRIP";
  return denyButton;
}

function setData(status, pendingTripId) {
  const data = {
    id: pendingTripId,
    status,
    suggestedActivities: [],
  };
  return data;
}

function fetchPostCall(data) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      alert("Success:", data);
    })
    .catch((error) => {
      alert("Error:", error);
    });
}

function setButtonOnclick(pendingTrip, button, status) {
  button.onclick = function approveOrDenyTrip() {
    pendingTrip;
    let data = setData(status, pendingTrip.id);
    fetchPostCall(data);
  };
}

function fetchAndDeleteTrip(data) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips",
    {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      alert("Success:", data);
    });
  alert((error) => {
    alert("Error:", error);
  });
}

function setButtonOnclickToDelete(pendingTrip, button) {
  button.onclick = function deleteTrip() {
    pendingTrip;
    let data = { id: pendingTrip.id };
    fetchAndDeleteTrip(data);
  };
}

function renderButtonsForTravelerPage(pendingTrip) {
  let approveButton = createApproveButton(pendingTrip.id);
  let denyButton = createDenyButton(pendingTrip.id);
  appendApproveAndDenyButton(approveButton, denyButton);
  setButtonOnclick(pendingTrip, approveButton, "approved");
  setButtonOnclickToDelete(pendingTrip, denyButton, "pending");
}

function renderButtonsForAgentDashboard(pendingTrip) {
  let approveButton = createApproveButton(pendingTrip.id);
  let denyButton = createDenyButton(pendingTrip.id);
  appendApproveAndDenyButton(approveButton, denyButton);
  setButtonOnclick(pendingTrip, approveButton, "approved");
  setButtonOnclick(pendingTrip, denyButton, "pending");
}

function renderApproveAndDenyButtons(pendingTrip, destinations) {
  destinations;
  if (document.getElementById("traveler-page")) {
    let i;
    for (i = 0; i < pendingTrip.length; i++) {
      renderButtonsForTravelerPage(pendingTrip[i]);
    }
  } else {
    renderButtonsForAgentDashboard(pendingTrip);
  }
}

function travelersNames(result) {
  let travelers = [];
  let travelersArray = result;
  let i;
  for (i = 0; i < travelersArray.travelers.length; i++) {
    travelers.push(travelersArray.travelers[i].name);
  }
  return travelers;
}

function createAndRenderTravSearchBarLabel() {
  let travSearchBarLabel = document.createElement("label");
  travSearchBarLabel.setAttribute("for", "traveler-list");
  let travSearchBarLabelText = document.createTextNode(
    "Search for a Traveler:"
  );
  travSearchBarLabel.appendChild(travSearchBarLabelText);
  document.querySelectorAll("section")[2].setAttribute("id", "agent-tools");
  document.querySelectorAll("section")[2].setAttribute("class", "container");
  document.getElementById("agent-tools").appendChild(travSearchBarLabel);
}

function setInputList() {
  let inputList = document.createElement("input");
  inputList.setAttribute("list", "traveler-list");
  inputList.setAttribute("id", "traveler");
  document.getElementById("agent-tools").appendChild(inputList);
}

function setDataList() {
  let dataList = document.createElement("datalist");
  dataList.setAttribute("id", "traveler-list");
  document.getElementById("agent-tools").appendChild(dataList);
}

function returnTravelersNames(result) {
  let travelers = travelersNames(result);
  createAndRenderTravSearchBarLabel();
  setInputList();
  setDataList();
  return travelers;
}

function renderTravelerSearchBar() {
  travelTrackerService.getAllTravelers().then(function (result) {
    let travelers = returnTravelersNames(result);
    for (let i = 0; i < travelers.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${travelers[i]}`);
      document.getElementById("traveler-list").appendChild(option);
    }
    document.getElementById("traveler").placeholder = "Enter traveler name";
  });
}

function getSingleTravelerByName(travelers) {
  let allTravelers = travelers.travelers;
  let travelerName = document.getElementById("traveler").value;
  let i;
  for (i = 0; i < allTravelers.length; i++) {
    if (travelerName === allTravelers[i].name) {
      let traveler = allTravelers[i];
      return traveler;
    }
  }
}

function getLodgingCosts(travelerDestinations, travelerTrips) {
  let lodgingCosts = travelerDashboardHelper.getLodgingCosts(
    travelerDestinations,
    travelerTrips
  );
  return lodgingCosts;
}

function getFlightCosts(travelerDestinations, travelerTrips) {
  let flightCosts = travelerDashboardHelper.getFlightCosts(
    travelerDestinations,
    travelerTrips
  );
  return flightCosts;
}

function getFlightsPlusLodging(traveler, travelerTrips, travelerDestinations) {
  let lodgingCosts = getLodgingCosts(travelerDestinations, travelerTrips);
  let flightCosts = getFlightCosts(travelerDestinations, travelerTrips);
  let flightsPlusLodging = travelerDashboardHelper.addFlightandLodgingCosts(
    flightCosts,
    lodgingCosts
  );
  return flightsPlusLodging;
}

function addFee(traveler, travelerTrips, travelerDestinations, destinations) {
  let flightsPlusLodging = getFlightsPlusLodging(
    traveler,
    travelerTrips,
    travelerDestinations,
    destinations
  );
  let totalBeforeFee = travelerDashboardHelper.reduceFlightsPlusLodging(
    flightsPlusLodging
  );
  var totalAfterAgentFee = totalBeforeFee * 1.1;
  return totalAfterAgentFee;
}

function getTotalAfterAgentFee(
  traveler,
  travelerTrips,
  travelerDestinations,
  destinations
) {
  let totalAfterAgentFee = addFee(
    traveler,
    travelerTrips,
    travelerDestinations,
    destinations
  );
  return totalAfterAgentFee;
}

function prepareDashboardData(result, trips, destinations) {
  let travelers = result;
  let traveler = getSingleTravelerByName(travelers);
  let travelerTrips = getTravelersTrips(trips, traveler);
  let travelerDestinations = getTravelersDestinations(
    travelerTrips,
    destinations
  );
  let totalAfterAgentFee = getTotalAfterAgentFee(
    traveler,
    travelerTrips,
    travelerDestinations,
    destinations
  );
  return {
    traveler,
    travelerTrips,
    travelerDestinations,
    totalAfterAgentFee,
    destinations,
  };
}

function hideSearchFormRenderHeaderAndTotalSpent(travelerInfo) {
  document.getElementById("agent-tools").style.display = "none";
  dashboardHelper.renderTripsHeader(`${travelerInfo.traveler.name}'s`);
  let travelerPage = document.querySelectorAll("section")[3];
  travelerPage.setAttribute("id", "traveler-page");
  travelerDashboardHelper.renderTotalSpent(travelerInfo);
}

function getPendingAndApprovedTrips(travelerInfo) {
  let pendingTrips = [];
  let approvedTrips = [];
  for (let i = 0; i < travelerInfo.travelerTrips.length; i++) {
    if (travelerInfo.travelerTrips[i].status === "pending") {
      pendingTrips.push(travelerInfo.travelerTrips[i]);
    } else if (travelerInfo.travelerTrips[i].status === "approved") {
      approvedTrips.push(travelerInfo.travelerTrips[i]);
    }
  }
  return { pendingTrips, approvedTrips };
}

function renderTravelerPageForAgent(travelerInfo) {
  hideSearchFormRenderHeaderAndTotalSpent(travelerInfo);
  let trips = getPendingAndApprovedTrips(travelerInfo);
  let pendingTrips = trips.pendingTrips;
  let approvedTrips = trips.approvedTrips;
  let destinations = travelerInfo.destinations;
  dashboardHelper.renderTrips(pendingTrips, destinations);
  dashboardHelper.renderTrips(approvedTrips, destinations);
  renderApproveAndDenyButtons(pendingTrips, destinations);
}

function createShowTravelerButton() {
  document
    .getElementsByClassName("container")[2]
    .setAttribute("id", "agent-tools");
  let showTravelerButton = document.createElement("button");
  showTravelerButton.setAttribute("id", "show-traveler-button");
  showTravelerButton.textContent = "SHOW TRAVELER";
  document.getElementById("agent-tools").appendChild(showTravelerButton);
  return showTravelerButton;
}

function getTravelersTrips(trips, traveler) {
  let i;
  let travelerTrips = [];
  for (i = 0; i < trips.length; i++) {
    if (traveler.id === trips[i].userID) {
      travelerTrips.push(trips[i]);
    }
  }
  return travelerTrips;
}

function loopThroughDestinations(
  destinations,
  travelerTrip,
  destination,
  travelerDestinationsArr
) {
  let destinationIndex;
  for (
    destinationIndex = 0;
    destinationIndex < destinations.length;
    destinationIndex++
  ) {
    if (travelerTrip.destinationID === destinations[destinationIndex].id) {
      travelerDestinationsArr.push(destination);
    }
  }
  let travelerDestinations = travelerDestinationsArr;
  return travelerDestinations;
}

function getTravelersDestinations(travelerTrips, destinations) {
  let travelerDestinationsArr = [];
  for (let i = 0; i < travelerTrips.length; i++) {
    let travelerDestinations = loopThroughDestinations(
      destinations,
      travelerTrips[i],
      destinations[i],
      travelerDestinationsArr
    );
    return travelerDestinations;
  }
}

function setShowTravelerButtonOnClick(showTravelerButton, trips, destinations) {
  showTravelerButton.onclick = function showTravelerInformation() {
    trips;
    destinations;
    travelTrackerService.getAllTravelers().then(function (result) {
      let dashboardData = prepareDashboardData(result, trips, destinations);
      renderTravelerPageForAgent(dashboardData);
    });
  };
}

function renderShowTravelerButton(trips, destinations) {
  let showTravelerButton = createShowTravelerButton();
  setShowTravelerButtonOnClick(showTravelerButton, trips, destinations);
}

export { renderSuccessfulAgencyLogin };
