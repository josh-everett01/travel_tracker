import { getAllTripsForAgent, getAllDestinationsForAgent } from "./travel_tracker_service";
import { returnCurrentDate } from "./login_helper";

function renderTravelerWelcome(traveler) {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  let welcomeHeader = document.createElement("h1");
  let headerText = document.createTextNode(`Hello, ${traveler.name}`);
  welcomeHeader.appendChild(headerText);
  document.getElementsByTagName("BODY")[0].appendChild(welcomeHeader);
}

function renderTripsHeader(title) {
  let upcomingTripsSection = document.createElement("section");
  upcomingTripsSection.className = "container";
  let upcomingTripsHeader = document.createElement("h3");
  let upcomingTripsHeaderText = document.createTextNode(`${title} Trips:`);
  upcomingTripsHeader.appendChild(upcomingTripsHeaderText);
  upcomingTripsSection.appendChild(upcomingTripsHeader);
  document.getElementsByTagName("BODY")[0].appendChild(upcomingTripsSection);
}

function renderAgentWelcome() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  var welcomeHeader = document.createElement("H1");
  var headerText = document.createTextNode("Welcome, AGENT");
  welcomeHeader.appendChild(headerText);
  document.body.appendChild(welcomeHeader);
}

function getPendingTrips(trips) {
  let i;
  let pendingTripsArr = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === 'pending') {
      pendingTripsArr.push(trips[i])
    }
  }
  let pendingTrips = pendingTripsArr;
  return pendingTrips;
}

function getLodgingCostsForAgent(destinations, trips) {
  let approvedTripsArr = [];
  let approvedTripsFlightPlusLodging = [];
  let i;
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === "approved") {
      approvedTripsArr.push(trips[i])
    }
  }

  let j;
  for (i = 0; i < approvedTripsArr.length; i++) {
    for (j = 0; j < destinations.length; j++) {
      if (approvedTripsArr[i].destinationID === destinations[j].id) {

        approvedTripsFlightPlusLodging.push(destinations[j].estimatedLodgingCostPerDay + destinations[j].estimatedFlightCostPerPerson)
      }
    }
  }
  let amountTravelersHaveSpent = approvedTripsFlightPlusLodging.reduce((lodgingCost, flightCost) => lodgingCost + flightCost, 0);
  let amountAgentEarned = amountTravelersHaveSpent * .1;
  return amountAgentEarned
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
  destinations;
  let i;
  for (i = 0; i < pendingTrips.length; i++) {
    renderDestinationImage(pendingTrips[i], destinations);
    renderTripDate(pendingTrips[i]);
    renderTripDestination(pendingTrips[i], destinations);
    renderTripStatus(pendingTrips[i]);
    renderTripDuration(pendingTrips[i]);
  }
}

function getTodaysTrips(trips) {
  let today = returnCurrentDate();
  let i;
  let todaysTripsArr = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].date === today) {
      todaysTripsArr.push(trips[i])
    }
  }
  let todaysTrips = todaysTripsArr;
  return todaysTrips;
}

function renderSuccessfulAgencyLogin() {
  renderAgentWelcome();
  getAllTripsForAgent().then(function (trips) {
    getAllDestinationsForAgent().then(function (destinations) {
      trips;
      let amountAgentEarned = getLodgingCostsForAgent(destinations, trips)
      renderTotalEarned(amountAgentEarned);
      renderTripsHeader("Requested");
      let pendingTrips = getPendingTrips(trips);
      renderAgentTrips(pendingTrips, destinations);
      renderTripsHeader("Today's")
      let todaysTrips = getTodaysTrips(trips);
      renderAgentTrips(todaysTrips, destinations)
    })
  })
}

function appendToSection(paragraph) {
  if (document.getElementsByTagName("SECTION").length === 1) {
    document.getElementsByTagName("SECTION")[0].appendChild(paragraph);
  } else {
    document.getElementsByTagName("SECTION")[1].appendChild(paragraph);
  }
}

function renderTripDate(trip) {
  let tripDate = trip.date;
  let tripDateParagraph = document.createElement("paragraph");
  tripDateParagraph.className = "trip-date";
  let tripDateText = document.createTextNode(`Trip Date: ${tripDate} `);
  tripDateParagraph.appendChild(tripDateText);
  appendToSection(tripDateParagraph);
}

function renderTripDestination(trip, destinations) {
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (trip.destinationID === destinations[i].id) {
      let tripDestination = destinations[i].destination;
      let tripDestinationParagraph = document.createElement("paragraph");
      tripDestinationParagraph.className = "trip-destination";
      let tripDestinationText = document.createTextNode(
        `Trip Destination: ${tripDestination}`
      );
      tripDestinationParagraph.appendChild(tripDestinationText);
      appendToSection(tripDestinationParagraph);
    }
  }
}

function renderTripStatus(trip) {
  let tripStatus = trip.status;
  let tripStatusParagraph = document.createElement("paragraph");
  tripStatusParagraph.className = "trip-status";
  let tripStatusText = document.createTextNode(`Trip Status: ${tripStatus}`);
  tripStatusParagraph.appendChild(tripStatusText);
  appendToSection(tripStatusParagraph);
}

function renderTripDuration(trip) {
  let tripDuration = trip.duration;
  let tripDurationParagraph = document.createElement("paragraph");
  tripDurationParagraph.className = "trip-duration";
  let tripDurationText = document.createTextNode(
    `Trip Duration: ${tripDuration} days`
  );
  tripDurationParagraph.appendChild(tripDurationText);
  appendToSection(tripDurationParagraph);
}

function renderDestinationImage(trip, destinations) {
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (trip.destinationID === destinations[i].id) {
      let destinationImage = destinations[i].image;
      var img = document.createElement("img");
      img.className = "destination-image";
      img.src = `${destinationImage}`;
      appendToSection(img);
    }
  }
}

function renderTrips(trips, destinations) {
  let i;
  for (i = 0; i < trips.length; i++) {
    renderDestinationImage(trips[i], destinations);
    renderTripDate(trips[i]);
    renderTripDestination(trips[i], destinations);
    renderTripStatus(trips[i]);
    renderTripDuration(trips[i]);
  }
}

function renderTotalSpent(travelerDashboardData) {
  let totalAmount = travelerDashboardData.totalAfterAgentFee.toFixed(2);
  let totalSpentParagraph = document.createElement("paragraph");
  totalSpentParagraph.className = "total-spent";
  let totalSpentText = document.createTextNode(
    `Total Amount Spent: $${totalAmount}`
  );
  totalSpentParagraph.appendChild(totalSpentText);
  document.querySelector("body").appendChild(totalSpentParagraph);
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
  renderTripsHeader,
  renderSuccessfulAgencyLogin,
  appendToSection,
  renderTripDate,
  renderTripDestination,
  renderTripStatus,
  renderTripDuration,
  renderDestinationImage,
  renderTrips,
  renderTotalSpent,
  getLodgingCosts,
  getFlightCosts,
  addFlightandLodgingCosts,
  reduceFlightsPlusLodging,
  prepareTravelerDashboardData,
};

