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

function renderTravelerWelcome(traveler) {
  document.getElementById('login-form').style.display = 'none';
  let welcomeHeader = document.createElement("h1");
  let headerText = document.createTextNode(`Hello, ${traveler.name}`);
  welcomeHeader.appendChild(headerText);
  document.getElementsByTagName("BODY")[0].appendChild(welcomeHeader);
}

function renderUpcomingTripsHeader() {
  let upcomingTripsSection = document.createElement("section");
  upcomingTripsSection.className = 'upcoming-trips';
  let upcomingTripsHeader = document.createElement("h3");
  let upcomingTripsHeaderText = document.createTextNode('Upcoming Trips: ');
  upcomingTripsHeader.appendChild(upcomingTripsHeaderText);
  upcomingTripsSection.appendChild(upcomingTripsHeader);
  document.getElementsByTagName("BODY")[0].appendChild(upcomingTripsSection);
}

function filterUpcomingTrips(travelerTrips) {

  travelerTrips.forEach(trip =>
    // if the trips date is greater than now
    // shovel the trip in an array
    // return that array
    console.log(trip)
  );
};

// function filterPastTrips(trips) {}

// function renderTrips(trips, destinations) {
// trips.forEach(trip => 
// renderTripDate(trip)
// renderTripDestination(trip, destinations)
// renderTripStatus(trip)
// renderTripDuration(trip)
//)
//}

// change name to renderTravelerDashboard
function renderSuccessfulTravelerLogin(travelerDashboardData) {
  renderTravelerWelcome(travelerDashboardData.traveler);
  renderUpcomingTripsHeader();
  let upcomingTrips = filterUpcomingTrips(travelerDashboardData.travelerTrips);

  // filterPastTrips(travelerDashboardData.travelerTrips)
  // save the output to a variable

  // let destinations = travelerDashboardData.****
  // renderTrips(upcomingTrips, destinations)

  // renderPastTripsHeader(); 
  // renderTrips(pastTrips);

  // renderTotalSpent(*get this data from trav dashboard data*);
  // After everything above is working; go back and assign classnames to all HTML elements 
  // Apply styling to the above classes


  // Everything below is previous work that may be relevant or helpful
  //--------------------------------------------------------------
  // let travelerName = travelerDashboardData.traveler.name;
  // let travelerType = travelerDashboardData.traveler.travelerType;
  // let moneySpentOnTrips = travelerDashboardData.totalAfterAgentFee;
  // let destinations = travelerDashboardData.travelerDestinations;
  // let i;
  // let pastTripDatesArr = [];
  // let presentTripDatesArr = [];
  // let futureTripDatesArr = [];
  // let pendingTripsArr = [];
  // let approvedTripsArr = [];
  // let destinationImages = [];
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();

  // let todaysDate = yyyy + mm + dd;
  // for (i = 0; i < destinations.length; i++) {
  //   let tripsDate = travelerDashboardData.travelerTrips[i].date;
  //   let formattedTripsDate = tripsDate.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

  //   if (formattedTripsDate < todaysDate) {
  //     destinations.forEach(destination => pastTripDatesArr.push(`You traveled to ${destinations[i].destination} on ${tripsDate} `))

  //   }

  //   else if (formattedTripsDate === todaysDate) {
  //     presentTripDatesArr.push(`Today is ${tripsDate}. You are currently traveling in ${destinations[i].destination}. Enjoy your trip!`)
  //   }
  //   else if (formattedTripsDate > todaysDate) {
  //     futureTripDatesArr.push(`You are scheduled to travel to ${destinations[i].destination} on ${tripsDate}. Enjoy your trip!`)
  //   }
  //   else { console.log('SUPER ERROR') }


  //   if (travelerDashboardData.travelerTrips[i].status === 'pending') {
  //     pendingTripsArr.push(travelerDashboardData.travelerTrips[i])
  //   }
  //   if (travelerDashboardData.travelerTrips[i].status === 'approved') {
  //     approvedTripsArr.push(travelerDashboardData.travelerTrips[i])

  //   }
  //   let destinationImage = travelerDashboardData.travelerDestinations[i].image;
  //   destinationImages.push(destinationImage);
  // };

  // document.getElementById('login-form').style.display = 'none';
  // let siteContainer = document.getElementById('site-container'); siteContainer.className = "traveler-dashboard-js-container";
  // let travNameDiv = document.getElementById('trav-name');
  // travNameDiv.className = "travname";
  // let pastTripsDiv = document.getElementById('past-trips');
  // pastTripsDiv.className = "past-trips";
  // let presentTripsDiv = document.getElementById('present-trips');
  // presentTripsDiv.className = "present-trips";
  // let futureTripsDiv = document.getElementById('future-trips');
  // futureTripsDiv.className = "future-trips";
  // let amountSpentDiv = document.getElementById('amount-spent');
  // amountSpentDiv.className = "amount-spent"

  // let pastTripsDestAndDate = pastTripDatesArr;
  // let presentTrips = presentTripDatesArr;
  // let futureTrips = futureTripDatesArr;
  // let approvedTrips = approvedTripsArr;
  // let pendingTrips = pendingTripsArr;

  // let node = document.createElement("div");
  // let helloTraveler = document.createTextNode(`Hello, ${travelerName}! `);

  // let yourPastTrips = document.createTextNode(`${pastTripsDestAndDate} `);

  // pastTripsDiv.appendChild(yourPastTrips);
  // debugger;
  // let yourPresentTrips = document.createTextNode(`${presentTrips} `);
  // if (presentTripDatesArr.length > 0) {
  //   presentTripsDiv.appendChild(yourPresentTrips)
  // };
  // let yourFutureTrips = document.createTextNode(`${futureTrips} `); if (futureTripDatesArr.length > 0) {
  //   futureTripsDiv.appendChild(yourFutureTrips);
  // }
  // let YourAmountSpent = document.createTextNode(`To date you have spent ${moneySpentOnTrips} travelling the world!`);
  // amountSpentDiv.appendChild(YourAmountSpent);
  // travNameDiv.appendChild(helloTraveler);

  // siteContainer.appendChild(yourPastTrips);
  // document.getElementById('site-container').appendChild(yourPresentTrips);
  // document.getElementById('site-container').appendChild(yourFutureTrips);
  // document.getElementById('site-container').appendChild(YourAmountSpent);

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