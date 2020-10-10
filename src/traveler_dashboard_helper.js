import * as travelTrackerService from "./travel_tracker_service";
import * as dashboardHelper from "./dashboard_helper";
import * as styling from "./styling_helper";

function renderTripRequestButton() {
  let tripRequestButton = document.createElement("button");
  tripRequestButton.setAttribute("id", "trip-request-button");
  tripRequestButton.textContent = "CALCULATE";
  dashboardHelper.appendToRequestForm(tripRequestButton);
}

function renderRequestFormElements(destinationsArr, allTrips) {
  dashboardHelper.renderNumberOfTravelersInput();
  dashboardHelper.renderDateSelectInputs();
  renderTripRequestButton();
  dashboardHelper.createOnClickFunctionAndRenderTrip(destinationsArr, allTrips);
}

function renderTravelerTripRequestForm() {
  travelTrackerService.getAllTrips().then(function (result) {
    let allTrips = result;
    travelTrackerService.getAllDestinations().then(function (result) {
      let destinationsArr = result;
      dashboardHelper.renderDestinationSearchBar(allTrips, destinationsArr);
      renderRequestFormElements(destinationsArr, allTrips);
    });
  });
}

function renderTopSectionOfDashboard(travelerDashboardData) {
  dashboardHelper.renderLogOutButton();
  renderTravelerWelcome(travelerDashboardData.traveler);
  renderTotalSpent(travelerDashboardData);
  dashboardHelper.renderTripsHeader("Upcoming");
}

function renderTripsAndRequestForm(trips, destinations) {
  dashboardHelper.renderTrips(trips.upcomingTripsArr, destinations);
  dashboardHelper.renderTripsHeader("Past");
  dashboardHelper.renderTrips(trips.pastTripsArr, destinations);
  dashboardHelper.renderTripsHeader("Request");
  renderTravelerTripRequestForm();
}

function renderTravelerDashboard(travelerDashboardData) {
  renderTopSectionOfDashboard(travelerDashboardData);
  let trips = filterPastAndUpcomingTrips(travelerDashboardData.travelerTrips);
  let destinations = travelerDashboardData.travelerDestinations;
  renderTripsAndRequestForm(trips, destinations);
}

function makePastAndUpcomingTripsArrays(travelerTrips, today) {
  let upcomingTripsArr = [];
  let pastTripsArr = [];
  for (let i = 0; i < travelerTrips.length; i++) {
    let smallDate = new Date(travelerTrips[i].date);
    let travDate = dashboardHelper.returnTravDate(smallDate);
    if (today < travDate) {
      upcomingTripsArr.push(travelerTrips[i]);
    } else {
      pastTripsArr.push(travelerTrips[i]);
    }
  }
  return { upcomingTripsArr, pastTripsArr };
}

function filterPastAndUpcomingTrips(travelerTrips) {
  let today = dashboardHelper.returnCurrentDate();
  let tripsArray = makePastAndUpcomingTripsArrays(travelerTrips, today);
  let pastTripsArr = tripsArray.pastTripsArr;
  let upcomingTripsArr = tripsArray.upcomingTripsArr;
  return { pastTripsArr, upcomingTripsArr };
}

function renderTravelerWelcome(traveler) {
  document.getElementById("footer").style.display = "none";
  let welcomeHeader = document.createElement("h1");
  welcomeHeader.className = "welcome-header";
  document.getElementById(
    "home-page-h1"
  ).innerHTML = `Hello, <br> ${traveler.name}`;
  styling.travelerMediaQuery();
}

function renderTotalSpent(travelerDashboardData) {
  let totalAmount = travelerDashboardData.totalAfterAgentFee.toFixed(2);
  let totalSpentParagraph = document.createElement("paragraph");
  totalSpentParagraph.className = "total-spent";
  let totalSpentText = document.createTextNode(
    `Total Amount Spent: $${totalAmount}`
  );
  totalSpentParagraph.appendChild(totalSpentText);
  dashboardHelper.appendToSection(totalSpentParagraph);
}

function getLodgingCosts(travelerDestinations, travelerTrips) {
  let lodgingCosts = [];
  let i;
  for (i = 0; i < travelerDestinations.length; i++) {
    lodgingCosts.push(
      travelerDestinations[i].estimatedLodgingCostPerDay *
      travelerTrips[i].duration
    );
  }
  return lodgingCosts;
}

function getFlightCosts(travelerDestinations, travelerTrips) {
  let flightCosts = [];
  let i;
  for (i = 0; i < travelerDestinations.length; i++) {
    flightCosts.push(
      travelerDestinations[i].estimatedFlightCostPerPerson *
      travelerTrips[i].travelers
    );
  }
  return flightCosts;
}

function addFlightandLodgingCosts(flightCosts, lodgingCosts) {
  let flightsPlusLodging = [];
  let i;
  for (i = 0; i < flightCosts.length; i++) {
    flightsPlusLodging.push(lodgingCosts[i] + flightCosts[i]);
  }
  return flightsPlusLodging;
}

function reduceFlightsPlusLodging(flightsPlusLodging) {
  let flightsPlusLodgingReduced = flightsPlusLodging.reduce(function (
    flights,
    lodging
  ) {
    return flights + lodging;
  },
    0);
  return flightsPlusLodgingReduced;
}

function prepareTravelerDashboardData(
  traveler,
  travelerDestinations,
  travelerTrips
) {
  let lodgingCosts = getLodgingCosts(travelerDestinations, travelerTrips);
  let flightCosts = getFlightCosts(travelerDestinations, travelerTrips);
  let flightsPlusLodging = addFlightandLodgingCosts(flightCosts, lodgingCosts);
  let totalAmountCustHasSpentBeforeAgentFee = reduceFlightsPlusLodging(
    flightsPlusLodging
  );
  var totalAfterAgentFee = totalAmountCustHasSpentBeforeAgentFee * 1.1;
  return {
    traveler,
    travelerTrips,
    travelerDestinations,
    lodgingCosts,
    flightCosts,
    flightsPlusLodging,
    totalAmountCustHasSpentBeforeAgentFee,
    totalAfterAgentFee,
  };
}

export {
  renderTravelerWelcome,
  renderTotalSpent,
  getLodgingCosts,
  getFlightCosts,
  addFlightandLodgingCosts,
  reduceFlightsPlusLodging,
  prepareTravelerDashboardData,
  filterPastAndUpcomingTrips,
  renderTravelerDashboard,
  renderTravelerTripRequestForm,
};
