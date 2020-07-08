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

function authPW() {
  if (password.value == agentPw && username.value == agentUn) {
    document.getElementById('site-container').style.display = "none";
    var h = document.createElement("H1"); // Create the H1 element 
    var t = document.createTextNode("AGENT"); // Create a text element 
    h.appendChild(t); // Append the text node to the H1 element 

    document.body.appendChild(h); // Append the H1 element to the document body 
  } else {
    alert("Incorrect Login!!");
    document.getElementById("input-username").value = "";
    document.getElementById("input-password").value = "";
    
  }

  
};
