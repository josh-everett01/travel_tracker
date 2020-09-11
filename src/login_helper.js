const { getTravelerTrips } = require("./travel_tracker_service");

var correctPw = "travel2020";
var agentUn = "agency";
var usernameInput = document.getElementById("input-username");

function isValidPassword(passwordInput) {
  if (passwordInput === correctPw) {
    return true;
  }
}

function isValidAgency(usernameInput) {
  var downcasedUsernameInput = usernameInput.toLowerCase();
  if (downcasedUsernameInput === agentUn) {
    return true;
  }
}

function renderSuccessfulAgencyLogin(agencyDashboardData) {
  document.getElementById("site-container").style.display = "none";
  var h = document.createElement("H1");
  var t = document.createTextNode("AGENT");
  h.appendChild(t);
  document.body.appendChild(h);
}

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

function filterUpcomingTrips(travelerTrips) {
  let i;
  let upcomingTripsArr = [];
  var MyDate = new Date();
  var MyDateString;
  MyDateString =
    MyDate.getFullYear() +
    "/" +
    ("0" + (MyDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + MyDate.getDate()).slice(-2);
  let today = MyDateString;

  for (i = 0; i < travelerTrips.length; i++) {
    let smallDate = new Date(travelerTrips[i].date);
    let travDate =
      smallDate.getFullYear() +
      "/" +
      ("0" + (smallDate.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + smallDate.getDate()).slice(-2);
    if (today < travDate) {
      upcomingTripsArr.push(travelerTrips[i]);
    }
  }
  return upcomingTripsArr;
}

function getTodaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  let todaysDate = yyyy + mm + dd;
  return todaysDate;
}

function formatTripsDate(travelerTrips) {
  let date = travelerTrips;
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);
  let formattedDate = year + month + day;
  return formattedDate;
}

function filterPastTrips(travelerTrips) {
  let i;
  let pastTripsArr = [];
  var MyDate = new Date();
  var MyDateString;
  MyDateString =
    MyDate.getFullYear() +
    "/" +
    ("0" + (MyDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + MyDate.getDate()).slice(-2);
  let today = MyDateString;

  for (i = 0; i < travelerTrips.length; i++) {
    let smallDate = new Date(travelerTrips[i].date);
    let travDate =
      smallDate.getFullYear() +
      "/" +
      ("0" + (smallDate.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + smallDate.getDate()).slice(-2);
    if (today > travDate) {
      pastTripsArr.push(travelerTrips[i]);
    }
  }
  return pastTripsArr;
}

function appendToSection(paragraph) {
  if (document.getElementsByTagName("SECTION").length === 1) {
    document
      .getElementsByTagName("SECTION")[0]
      .appendChild(paragraph);
  } else {
    document
      .getElementsByTagName("SECTION")[1]
      .appendChild(paragraph);
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
  let destinationArr = [];
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

// change name to renderTravelerDashboard
function renderTravelerDashboard(travelerDashboardData) {
  renderTravelerWelcome(travelerDashboardData.traveler);
  renderTotalSpent(travelerDashboardData);
  renderTripsHeader("Upcoming");
  let upcomingTrips = filterUpcomingTrips(travelerDashboardData.travelerTrips);
  let destinations = travelerDashboardData.travelerDestinations;
  renderTrips(upcomingTrips, destinations);
  let pastTrips = filterPastTrips(travelerDashboardData.travelerTrips);
  renderTripsHeader("Past");
  renderTrips(pastTrips, destinations);
}

function clearLoginForm() {
  document.getElementById("input-username").value = "";
  document.getElementById("input-password").value = "";
}

function loginError() {
  alert("Login Unsuccessful!");
  clearLoginForm();
}

export {
  isValidPassword,
  isValidAgency,
  renderSuccessfulAgencyLogin,
  renderTravelerDashboard,
  clearLoginForm,
  loginError,
};
