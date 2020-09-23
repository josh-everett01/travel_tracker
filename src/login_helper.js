import {
  renderTravelerWelcome,
  renderTripsHeader,
  renderSuccessfulAgencyLogin,
  renderTrips,
  renderTotalSpent,
} from "./traveler_dashboard_helper";

function isValidPassword(passwordInput) {
  var correctPw = "travel2020";
  if (passwordInput === correctPw) {
    return true;
  }
}

function isValidAgency(usernameInput) {
  let agentUn = "agency";
  var downcasedUsernameInput = usernameInput.toLowerCase();
  if (downcasedUsernameInput === agentUn) {
    return true;
  }
}

function returnCurrentDate() {
  var myDate = new Date();
  var myDateString;
  myDateString =
    myDate.getFullYear() +
    "/" +
    ("0" + (myDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + myDate.getDate()).slice(-2);
  let today = myDateString;
  return today;
}

function returnTravDate(smallDate) {
  let travDate =
    smallDate.getFullYear() +
    "/" +
    ("0" + (smallDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + smallDate.getDate()).slice(-2);
  return travDate;
}

function filterPastAndUpcomingTrips(travelerTrips) {
  let i;
  let upcomingTripsArr = [];
  let pastTripsArr = [];
  let today = returnCurrentDate();
  for (i = 0; i < travelerTrips.length; i++) {
    let smallDate = new Date(travelerTrips[i].date);
    let travDate = returnTravDate(smallDate);
    if (today < travDate) {
      upcomingTripsArr.push(travelerTrips[i]);
    } else {
      pastTripsArr.push(travelerTrips[i]);
    }
  }
  return { pastTripsArr, upcomingTripsArr };
}

function renderTripRequestForm() {
  renderTripsHeader('Request');
  let tripRequestSection = document.getElementsByTagName("SECTION")[2];
  let requestForm = document.createElement('form');
  let tripDestinations = document.createElement('h3');
  let h3Text = document.createTextNode('Where would you like to travel?');
  let destinationsInput = document.createElement('input');
  destinationsInput.type = 'text';
  destinationsInput.placeholder = 'Search for Destinations...';
  let numberOfTravelersHeader = document.createTextNode('How many people will be traveling?');
  let numberOfTravelersH3 = document.createElement('h3');
  let numberOfTravelers = document.createElement('select');
  numberOfTravelers.name = 'number-of-travelers';
  numberOfTravelers.id = 'number-of-travelers';
  let optionOne = document.createElement('option');
  optionOne.value = '1';
  let numberOne = document.createTextNode('1');
  numberOfTravelersH3.appendChild(numberOfTravelersHeader);
  optionOne.appendChild(numberOne);
  numberOfTravelers.appendChild(optionOne);
  let optionTwo = document.createElement('option');
  optionTwo.value = '2';
  let numberTwo = document.createTextNode('2');
  numberOfTravelersH3.appendChild(numberOfTravelersHeader);
  optionOne.appendChild(numberOne);
  optionTwo.appendChild(numberTwo);
  // Make a function that loops to 10 and appends each option to the select list
  numberOfTravelers.appendChild(optionOne);
  numberOfTravelers.appendChild(optionTwo);
  tripDestinations.appendChild(h3Text);
  requestForm.appendChild(tripDestinations);
  requestForm.appendChild(destinationsInput);
  requestForm.appendChild(numberOfTravelersHeader);
  requestForm.appendChild(numberOfTravelers);
  tripRequestSection.appendChild(requestForm);


}

function renderTravelerDashboard(travelerDashboardData) {
  renderTravelerWelcome(travelerDashboardData.traveler);
  renderTotalSpent(travelerDashboardData);
  renderTripsHeader("Upcoming");
  let trips = filterPastAndUpcomingTrips(travelerDashboardData.travelerTrips);
  let destinations = travelerDashboardData.travelerDestinations;
  renderTrips(trips.upcomingTripsArr, destinations);
  renderTripsHeader("Past");
  renderTrips(trips.pastTripsArr, destinations);
  renderTripRequestForm(travelerDashboardData);
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
  returnCurrentDate,
};