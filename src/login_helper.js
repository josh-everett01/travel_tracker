import { getApprovedTripsForAgent } from "./travel_tracker_service";

var correctPw = 'travel2020';
var agentUn = 'agency';


function isValidPassword(passwordInput) {
  if (passwordInput === correctPw) {
    return true;
  }
}

function isValidAgency(usernameInput) {
  var usernameInput = document.getElementById('input-username');
  var whatUsernameShouldBe = 'agency';
  let agencyId = usernameInput.value.toLowerCase();
  if (agencyId === whatUsernameShouldBe) {

    return true;
  }
}



function renderSuccessfulTravelerLogin(travelerDashboardData) {
  // travelerDashboardData.destinations
  // This function will take all the destinations, trips, and traveler data. 
  // All of this data will be dynamically assigned to HTML
  // We will add classes to this HTML in this function
  // In our CSS file, we will add styling to these classes
  // Now a styled meaningful traveler login displays on the screen

  //
  var userId = usernameInput.value.slice(8);
  document.getElementById('site-container').style.display = "none";
  var h = document.createElement("H1");
  var t = document.createTextNode(`traveler${userId}`);
  h.appendChild(t);
  document.body.appendChild(h);
}

function clearLoginForm() {
  document.getElementById("input-username").value = "";
  document.getElementById("input-password").value = "";
}

function loginError() {
  alert("Login Unsuccessful!");
  clearLoginForm();
}




function renderAgencyWelcome() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  let welcomeHeader = document.createElement("h1");
  let headerText = document.createTextNode('Hello, AGENT');
  welcomeHeader.appendChild(headerText);
  document.getElementsByTagName("BODY")[0].appendChild(welcomeHeader);
}

export {
  isValidPassword, isValidAgency,
  renderAgencyWelcome, renderSuccessfulTravelerLogin,
  clearLoginForm, loginError
};