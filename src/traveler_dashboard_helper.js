import * as travel_tracker_service from "./travel_tracker_service";
import * as dashboard_helper from "./dashboard_helper";

function renderTripRequestButton() {
  let tripRequestButton = document.createElement("button");
  tripRequestButton.setAttribute("id", "trip-request-button");
  tripRequestButton.textContent = "CALCULATE";
  dashboard_helper.appendToRequestForm(tripRequestButton);
}

function renderRequestFormElements(destinationsArr, allTrips) {
  dashboard_helper.renderNumberOfTravelersInput();
  dashboard_helper.renderDateSelectInputs();
  renderTripRequestButton();
  dashboard_helper.createOnClickFunctionAndRenderTrip(
    destinationsArr,
    allTrips
  );
}

function renderTravelerTripRequestForm() {
  travel_tracker_service.getAllTrips().then(function (result) {
    let allTrips = result;
    travel_tracker_service.getAllDestinations().then(function (result) {
      let destinationsArr = result;
      dashboard_helper.renderDestinationSearchBar(allTrips, destinationsArr);
      renderRequestFormElements(destinationsArr, allTrips);
    });
  });
}

function renderTopSectionOfDashboard(travelerDashboardData) {
  renderTravelerWelcome(travelerDashboardData.traveler);
  renderTotalSpent(travelerDashboardData);
  dashboard_helper.renderTripsHeader("Upcoming");
}

function renderTripsAndRequestForm(trips, destinations) {
  dashboard_helper.renderTrips(trips.upcomingTripsArr, destinations);
  dashboard_helper.renderTripsHeader("Past");
  dashboard_helper.renderTrips(trips.pastTripsArr, destinations);
  dashboard_helper.renderTripsHeader("Request");
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
    let travDate = dashboard_helper.returnTravDate(smallDate);
    if (today < travDate) {
      upcomingTripsArr.push(travelerTrips[i]);
    } else {
      pastTripsArr.push(travelerTrips[i]);
    }
  }
  return { upcomingTripsArr, pastTripsArr };
}

function filterPastAndUpcomingTrips(travelerTrips) {
  let today = dashboard_helper.returnCurrentDate();
  let tripsArray = makePastAndUpcomingTripsArrays(travelerTrips, today);
  let pastTripsArr = tripsArray.pastTripsArr;
  let upcomingTripsArr = tripsArray.upcomingTripsArr;
  return { pastTripsArr, upcomingTripsArr };
}

function renderTravelerWelcome(traveler) {
  // document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  let welcomeHeader = document.createElement("h1");
  welcomeHeader.className = "welcome-header"
  let headerText = document.createTextNode(`Hello, ${traveler.name}`);
  welcomeHeader.appendChild(headerText);
  document.getElementById('home-page-h1').style.display = "initial";
  document.getElementById('home-page-h1').innerHTML = `Hello, ${traveler.name}`;
  document.getElementById('h1-div').style.marginTop = "100px"
  // document.getElementsByTagName("BODY")[0].appendChild(welcomeHeader);
}

function renderTotalSpent(travelerDashboardData) {
  let totalAmount = travelerDashboardData.totalAfterAgentFee.toFixed(2);
  let totalSpentParagraph = document.createElement("paragraph");
  totalSpentParagraph.className = "total-spent";
  let totalSpentText = document.createTextNode(
    `Total Amount Spent: $${totalAmount}`
  );
  totalSpentParagraph.appendChild(totalSpentText);
  dashboard_helper.appendToSection(totalSpentParagraph)
  // document.querySelector("body").appendChild(totalSpentParagraph);
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
