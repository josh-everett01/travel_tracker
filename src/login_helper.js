const { getTravelerTrips } = require("./travel_tracker_service");

var correctPw = 'travel2020';
var agentUn = 'agency';
var usernameInput = document.getElementById('input-username');

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
  document.getElementById('site-container').style.display = "none";
  var h = document.createElement("H1");
  var t = document.createTextNode("AGENT");
  h.appendChild(t);
  document.body.appendChild(h);
}

function renderSuccessfulTravelerLogin(travelerDashboardData) {
  let travelerName = travelerDashboardData.traveler.name;
  let travelerType = travelerDashboardData.traveler.travelerType;
  let moneySpentOnTrips = travelerDashboardData.totalAfterAgentFee;
  let destinations = travelerDashboardData.travelerDestinations;
  let i;
  let pastTripDatesArr = [];
  let presentTripDatesArr = [];
  let futureTripDatesArr = [];
  let pendingTripsArr = [];
  let approvedTripsArr = [];
  let destinationImages = [];
  let date = new Date();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  let todaysDate = yyyy + mm + dd;
  for (i = 0; i < destinations.length; i++) {
    let tripsDate = travelerDashboardData.travelerTrips[i].date;
    let formattedTripsDate = tripsDate.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

    if (formattedTripsDate < todaysDate) {
      pastTripDatesArr.push(`You traveled to ${destinations[i].destination} on ${tripsDate}`)
    }

    else if (formattedTripsDate === todaysDate) {
      presentTripDatesArr.push(`Today is ${tripsDate}. You are currently traveling in ${destinations[i].destination}. Enjoy your trip!`)
    }
    else if (formattedTripsDate > todaysDate) {
      futureTripDatesArr.push(`You are scheduled to travel to ${destinations[i].destination} on ${tripsDate}. Enjoy your trip!`)
    }
    else { console.log('SUPER ERROR') }


    if (travelerDashboardData.travelerTrips[i].status === 'pending') {
      pendingTripsArr.push(travelerDashboardData.travelerTrips[i])
    }
    if (travelerDashboardData.travelerTrips[i].status === 'approved') {
      approvedTripsArr.push(travelerDashboardData.travelerTrips[i])

    }
    let destinationImage = travelerDashboardData.travelerDestinations[i].image;
    destinationImages.push(destinationImage);
  };

  document.getElementById('login-form').style.display = 'none';
  let siteContainer = document.getElementById('site-container'); siteContainer.className = "traveler-dashboard-js-container";




  let pastTripsDestAndDate = pastTripDatesArr;
  let presentTrips = presentTripDatesArr;
  let futureTrips = futureTripDatesArr;
  let approvedTrips = approvedTripsArr;
  let pendingTrips = pendingTripsArr;

  let node = document.createElement("div");
  let helloTraveler = document.createTextNode(`Hello, ${travelerName}! `);
  node.appendChild(helloTraveler);
  let yourPastTrips = document.createTextNode(`${pastTripsDestAndDate} `);
  let pastTripsNode = document.createElement("div");
  pastTripsNode.appendChild(yourPastTrips);
  let yourPresentTrips = document.createTextNode(`${presentTrips} `);
  if (presentTripDatesArr.length > 0) {
    node.appendChild(yourPresentTrips)
  };
  let yourFutureTrips = document.createTextNode(`${futureTrips} `); if (futureTripDatesArr.length > 0) {
    node.appendChild(yourFutureTrips);
  }
  let YourAmountSpent = document.createTextNode(`To date you have spent ${moneySpentOnTrips} travelling the world!`);
  document.getElementById('site-container').appendChild(helloTraveler);
  siteContainer.style.pageBreakAfter = 'initial';

  siteContainer.appendChild(yourPastTrips);
  document.getElementById('site-container').appendChild(yourPresentTrips);
  document.getElementById('site-container').appendChild(yourFutureTrips);
  document.getElementById('site-container').appendChild(YourAmountSpent);
  debugger;

  // travelerDashboardData.destinations
  // This function will take all the destinations, trips, and traveler data. 
  // All of this data will be dynamically assigned to HTML
  // We will add classes to this HTML in this function
  // In our CSS file, we will add styling to these classes
  // Now a styled meaningful traveler login displays on the screen
  //
  // var userId = usernameInput.value.slice(8);
  // document.getElementById('site-container').style.display = "none";
  // var h = document.createElement("H1");
  // var t = document.createTextNode(`traveler${userId}`);
  // h.appendChild(t);
  // document.body.appendChild(h);
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
  isValidPassword, isValidAgency,
  renderSuccessfulAgencyLogin, renderSuccessfulTravelerLogin,
  clearLoginForm, loginError
};