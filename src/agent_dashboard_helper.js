import * as travel_tracker_service from "./travel_tracker_service";
import * as dashboard_helper from "./dashboard_helper";
import * as traveler_dashboard_helper from "./traveler_dashboard_helper"

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

      dashboard_helper.renderTripsHeader("Agent Tools and Traveler")
      renderTravelerSearchBar()
      renderShowTravelerButton(trips, destinations)
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
  if (pendingTrips.length === undefined) {
    let todaysTrips = pendingTrips.todaysTrips;
    dashboard_helper.renderDestinationImage(todaysTrips, destinations);
    dashboard_helper.renderTripDate(todaysTrips);
    dashboard_helper.renderTripDestination(todaysTrips, destinations);
    dashboard_helper.renderTripStatus(todaysTrips);
    dashboard_helper.renderTripDuration(todaysTrips);
    renderApproveAndDenyButtons(todaysTrips, destinations)
  } else {
    let i;

    for (i = 0; i < pendingTrips.length; i++) {
      dashboard_helper.renderDestinationImage(pendingTrips[i], destinations);
      dashboard_helper.renderTripDate(pendingTrips[i]);
      dashboard_helper.renderTripDestination(pendingTrips[i], destinations);
      dashboard_helper.renderTripStatus(pendingTrips[i]);
      dashboard_helper.renderTripDuration(pendingTrips[i]);
      renderApproveAndDenyButtons(pendingTrips[i], destinations)
    }
  }
}

function renderApproveAndDenyButtons(pendingTrip, destinations) {
  destinations;
  let approveButton = document.createElement("button");
  if (document.getElementById("traveler-page")) {
    let i;
    for (i = 0; i < pendingTrip.pastTripsArr.length + pendingTrip.upcomingTripsArr.length; i++) {

      if (pendingTrip.upcomingTripsArr[i].status === "pending") {
        approveButton.setAttribute(
          "id",
          `approve-button-${pendingTrip.upcomingTripsArr[i].id}`
        );
        approveButton.setAttribute("class", "approve-button");
        approveButton.textContent = "APPROVE";
        let denyButton = document.createElement("button");
        denyButton.setAttribute(
          "id",
          `deny-button-${pendingTrip.upcomingTripsArr[i].id}`
        );
        denyButton.setAttribute("class", "deny-button");
        denyButton.textContent = "KEEP AS PENDING";
        dashboard_helper.appendToSection(approveButton);
        dashboard_helper.appendToSection(denyButton);
        approveButton.onclick = function approveTrip() {
          destinations;
          pendingTrip;
          let i;
          for (i = 0; i < pendingTrip.upcomingTripsArr.length; i++) {
            const data = {
              id: pendingTrip.upcomingTripsArr[i].id,
              status: "approved",
              suggestedActivities: [],
            };

            fetch(
              "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip",
              {
                method: "POST", // or 'PUT'
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
                console.error("Error:", error);
              });
          }
        };

        denyButton.onclick = function denyTrip() {
          destinations;
          pendingTrip;
          let i;
          for (i = 0; i < pendingTrip.upcomingTripsArr.length; i++) {
            const data = {
              id: pendingTrip.upcomingTripsArr[i].id,
              status: "pending",
              suggestedActivities: [],
            };

            fetch(
              "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip",
              {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log("Success:", data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
        };
      }
    }
  } else {
    approveButton.setAttribute("id", `approve-button-${pendingTrip.id}`);
    approveButton.setAttribute("class", "approve-button");
    approveButton.textContent = "APPROVE";
    let denyButton = document.createElement("button");
    denyButton.setAttribute("id", `deny-button-${pendingTrip.id}`);
    denyButton.setAttribute("class", "deny-button");
    denyButton.textContent = "KEEP AS PENDING";
    dashboard_helper.appendToSection(approveButton);
    dashboard_helper.appendToSection(denyButton);
    document.getElementById(
      `approve-button-${pendingTrip.id}`
    ).onclick = function approveTrip() {
      destinations;
      pendingTrip;
      const data = {
        id: pendingTrip.id,
        status: "approved",
        suggestedActivities: [],
      };

      fetch(
        "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    document.getElementById(
      `deny-button-${pendingTrip.id}`
    ).onclick = function denyTrip() {
      destinations;
      pendingTrip;
      const data = {
        id: pendingTrip.id,
        status: "pending",
        suggestedActivities: [],
      };

      fetch(
        "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  }
}

function renderTravelerSearchBar() {
  travel_tracker_service.getAllTravelers().then(function (result) {
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

function getSingleTravelerByName(travelers) {
  let allTravelers = travelers.travelers;
  let travelerName = document.getElementById('traveler').value;
  let i;
  for (i = 0; i < allTravelers.length; i++) {
    if (travelerName === allTravelers[i].name) {
      let traveler = allTravelers[i];
      return traveler;
    }
  }
}

function prepareDashboardData(traveler, travelerTrips, travelerDestinations, destinations) {

  let lodgingCosts = traveler_dashboard_helper.getLodgingCosts(travelerDestinations, travelerTrips);
  let flightCosts = traveler_dashboard_helper.getFlightCosts(travelerDestinations, travelerTrips);
  let flightsPlusLodging = traveler_dashboard_helper.addFlightandLodgingCosts(flightCosts, lodgingCosts);
  let totalAmountCustHasSpentBeforeAgentFee = traveler_dashboard_helper.reduceFlightsPlusLodging(
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
    destinations
  };
}

function renderTravelerPageForAgent(travelerInfo) {
  document.getElementById('agent-tools').style.display = 'none';
  dashboard_helper.renderTripsHeader(`${travelerInfo.traveler.name}'s`)
  let travelerPage = document.querySelectorAll('section')[3];
  travelerPage.setAttribute("id", "traveler-page")
  traveler_dashboard_helper.renderTotalSpent(travelerInfo)
  let trips = traveler_dashboard_helper.filterPastAndUpcomingTrips(travelerInfo.travelerTrips);
  let destinations = travelerInfo.destinations;
  dashboard_helper.renderTrips(trips.upcomingTripsArr, destinations);
  dashboard_helper.renderTrips(trips.pastTripsArr, destinations);
  renderApproveAndDenyButtons(trips, destinations)
}

function renderShowTravelerButton(trips, destinations) {
  document.getElementsByClassName('container')[2].setAttribute("id", "agent-tools")
  let showTravelerButton = document.createElement('button');
  showTravelerButton.setAttribute("id", "show-traveler-button");
  showTravelerButton.textContent = "SHOW TRAVELER";

  document.getElementById('agent-tools').appendChild(showTravelerButton)

  showTravelerButton.onclick = function showTravelerInformation() {
    trips;
    destinations;
    travel_tracker_service.getAllTravelers().then(function (result) {
      let travelers = result;
      let traveler = getSingleTravelerByName(travelers);
      let i;
      let travelerTrips = [];
      for (i = 0; i < trips.length; i++) {
        if (traveler.id === trips[i].userID) {
          travelerTrips.push(trips[i])
        }
      }
      travelerTrips;
      let travelerDestinations = []
      for (i = 0; i < travelerTrips.length; i++) {
        let destinationIndex;
        for (destinationIndex = 0; destinationIndex < destinations.length; destinationIndex++) {
          if (travelerTrips[i].destinationID === destinations[destinationIndex].id) {
            travelerDestinations.push(destinations[i])
          }
        }
        travelerDestinations;
      }

      let dashboardData = prepareDashboardData(traveler, travelerTrips, travelerDestinations, destinations);
      renderTravelerPageForAgent(dashboardData);
    })

  }
}








export { renderSuccessfulAgencyLogin };
