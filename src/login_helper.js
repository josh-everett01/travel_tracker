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

function renderSuccessfulAgencyLogin() {
  document.getElementById('site-container').style.display = "none";
  var h = document.createElement("H1");
  var t = document.createTextNode("AGENT");
  h.appendChild(t);
  document.body.appendChild(h);
}

function renderSuccessfulTravelerLogin() {
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

export {
  isValidPassword, isValidAgency,
  renderSuccessfulAgencyLogin, renderSuccessfulTravelerLogin,
  clearLoginForm, loginError
};