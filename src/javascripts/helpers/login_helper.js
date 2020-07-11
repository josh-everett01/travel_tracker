var password = document.getElementById('input-password');
var username = document.getElementById('input-username');
var agentPw = 'travel2020';
var agentUn = 'agency';
var travPw = 'travel2020';
var travUn = 'traveler50';
var noTravUn = 'traveler650';
var button = document.getElementById('submit');

function authPW() {
  if
    (password.value == agentPw && username.value == agentUn) {
    document.getElementById('site-container').style.display = "none";
    var h = document.createElement("H1");
    var t = document.createTextNode("AGENT");
    h.appendChild(t);
    document.body.appendChild(h);

  } else if
    (password.value == travPw && username.value == travUn) {
    document.getElementById('site-container').style.display = "none";
    var h = document.createElement("H1");
    var t = document.createTextNode("traveler50");
    h.appendChild(t);
    document.body.appendChild(h);

  } else if (username.value == noTravUn && password.value.length >= 0) {
    alert("Invalid Traveler Login!!");
    document.getElementById("input-username").value = "";
    document.getElementById("input-password").value = "";

  } else {
    alert("Incorrect Login!!");
    document.getElementById("input-username").value = "";
    document.getElementById("input-password").value = "";
  }
};