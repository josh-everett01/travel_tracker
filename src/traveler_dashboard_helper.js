import {
  getAllTripsForAgent,
  getAllDestinationsForAgent,
  getAllTravelers
} from "./travel_tracker_service";
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
  let pendingTrips = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === "pending") {
      pendingTrips.push(trips[i]);
    }
  }
  return pendingTrips;
}

function getLodgingCostsForAgent(destinations, trips) {
  let approvedTrips = [];
  let approvedTripsFlightPlusLodging = [];
  let i;
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === "approved") {
      approvedTrips.push(trips[i]);
    }
  }
  let destinationIndex;
  for (i = 0; i < approvedTrips.length; i++) {
    for (
      destinationIndex = 0;
      destinationIndex < destinations.length;
      destinationIndex++
    ) {
      if (
        approvedTrips[i].destinationID === destinations[destinationIndex].id
      ) {
        approvedTripsFlightPlusLodging.push(
          destinations[destinationIndex].estimatedLodgingCostPerDay +
          destinations[destinationIndex].estimatedFlightCostPerPerson
        );
      }
    }
  }
  let amountTravelersHaveSpent = approvedTripsFlightPlusLodging.reduce(
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



function renderApproveAndDenyButtons(pendingTrip, destinations) {
  destinations;
  let approveButton = document.createElement('button');
  approveButton.setAttribute("id", `approve-button-${pendingTrip.id}`)
  approveButton.setAttribute("class", 'approve-button')
  approveButton.textContent = 'APPROVE';
  let denyButton = document.createElement('button');
  denyButton.setAttribute("id", `deny-button-${pendingTrip.id}`)
  denyButton.setAttribute("class", 'deny-button')
  denyButton.textContent = 'KEEP AS PENDING';
  appendToSection(approveButton);
  appendToSection(denyButton);
  document.getElementById(`approve-button-${pendingTrip.id}`).onclick = function approveTrip() {
    destinations;
    pendingTrip;
    const data = { id: pendingTrip.id, status: 'approved', suggestedActivities: [] };

    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  };
  document.getElementById(`deny-button-${pendingTrip.id}`).onclick = function denyTrip() {
    destinations;
    pendingTrip;
    const data = { id: pendingTrip.id, status: 'pending', suggestedActivities: [] };

    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  };

}

function renderAgentTrips(pendingTrips, destinations) {
  let i;
  for (i = 0; i < pendingTrips.length; i++) {
    renderDestinationImage(pendingTrips[i], destinations);
    renderTripDate(pendingTrips[i]);
    renderTripDestination(pendingTrips[i], destinations);
    renderTripStatus(pendingTrips[i]);
    renderTripDuration(pendingTrips[i]);
    renderApproveAndDenyButtons(pendingTrips[i], destinations)
  }


}

function getTodaysTrips(trips) {
  let today = returnCurrentDate();
  let i;
  let todaysTripsArr = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].date === today) {
      todaysTripsArr.push(trips[i]);
    }
  }
  let todaysTrips = todaysTripsArr;
  return todaysTrips;
}

function renderTravelerSearchBar() {
  getAllTravelers().then(function (result) {
    let travelers = [];
    let travelersArray = result;

    let i;
    for (i = 0; i < travelersArray.travelers.length; i++) {
      travelers.push(travelersArray.travelers[i].name);
    }
    let travSearchBarLabel = document.createElement("label");
    travSearchBarLabel.setAttribute("for", "traveler-list");
    let travSearchBarLabelText = document.createTextNode(
      "Search for a Traveler:"
    );
    travSearchBarLabel.appendChild(travSearchBarLabelText);
    document
      .querySelectorAll("section")[2]
      .setAttribute("id", "agent-tools");
    document
      .querySelectorAll("section")[2]
      .setAttribute("class", "container");
    document.getElementById("agent-tools").appendChild(travSearchBarLabel);
    let inputList = document.createElement("input");
    inputList.setAttribute("list", "traveler-list");
    inputList.setAttribute("id", "traveler");
    document.getElementById("agent-tools").appendChild(inputList);
    let dataList = document.createElement("datalist");
    dataList.setAttribute("id", "traveler-list");
    document.getElementById("agent-tools").appendChild(dataList);

    for (i = 0; i < travelers.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${travelers[i]}`);
      // let optionText = document.createTextNode(`${destinations[i]}`)
      // option.appendChild(optionText);
      document.getElementById("traveler-list").appendChild(option);
    }

  })
}

function renderSuccessfulAgencyLogin() {
  renderAgentWelcome();
  getAllTripsForAgent().then(function (trips) {
    getAllDestinationsForAgent().then(function (destinations) {
      trips;
      let amountAgentEarned = getLodgingCostsForAgent(destinations, trips);
      renderTotalEarned(amountAgentEarned);
      renderTripsHeader("Requested");
      let pendingTrips = getPendingTrips(trips);
      renderAgentTrips(pendingTrips, destinations);
      renderTripsHeader("Today's");
      let todaysTrips = getTodaysTrips(trips);
      renderAgentTrips(todaysTrips, destinations);

      renderTripsHeader("Agent Tools and Traveler")
      renderTravelerSearchBar()

    });
  });
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
