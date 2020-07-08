// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
// import './src/css/base.scss';
// import './css'

// An example of how you tell webpack to use an image (also need to link to it in the index.html

// export

var password = document.getElementById('input-password');
var username = document.getElementById('input-username');
var agentPw = 'travel2020';
var agentUn = 'agency';
var travPw = 'travel2020';
var travUn = 'traveler50';
var noTravUn = 'traveler650'

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
