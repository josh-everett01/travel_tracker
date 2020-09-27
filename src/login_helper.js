import {
  renderTravelerWelcome,
  renderTripsHeader,
  renderSuccessfulAgencyLogin,
  renderTrips,
  renderTotalSpent,
} from "./traveler_dashboard_helper";
import { getAllDestinationsForAgent } from "./travel_tracker_service";

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

function renderTravelerTripRequestForm() {
  getAllDestinationsForAgent().then(function (result) {
    let destinationsArr = result;
    let i;
    let destinations = [];
    for (i = 0; i < result.length; i++) { destinations.push(destinationsArr[i].destination) };
    let searchBarLabel = document.createElement('label');
    searchBarLabel.setAttribute('for', 'destination-choice');
    let searchBarLabelText = document.createTextNode('Search for a Destination:')
    searchBarLabel.appendChild(searchBarLabelText);
    document.querySelectorAll('section')[2].setAttribute('id', 'request-form');
    document.getElementById('request-form').appendChild(searchBarLabel);
    let inputList = document.createElement("input");
    inputList.setAttribute("list", "destination-choice");
    // inputList.setAttribute("id", "destination-choice");
    // inputList.setAttribute("name", "destination-choice");
    document.getElementById("request-form").appendChild(inputList);
    let dataList = document.createElement("datalist");
    dataList.setAttribute("id", "destination-choice");
    document.getElementById("request-form").appendChild(dataList);
    for (i = 0; i < destinations.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${destinations[i]}`);
      // let optionText = document.createTextNode(`${destinations[i]}`)
      // option.appendChild(optionText);
      document.getElementById("destination-choice").appendChild(option);
    }
  })

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
  renderTripsHeader("Request");
  renderTravelerTripRequestForm()
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