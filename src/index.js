import './css/base.scss';
import { isValidTraveler, getSingleTraveler, getAllTrips } from './travel_tracker_service.js'
import { isValidAgency, renderSuccessfulAgencyLogin, renderSuccessfulTravelerLogin, loginError, isValidPassword } from './login_helper.js';
import { getTripsArr, getTravelerInfo } from './traveler_dashboard.js'

let button = document.getElementById('submit');

button.onclick = getTravelerInfo;

// button.onclick = function processLogin() {
//   let usernameInput = document.getElementById('input-username').value;
//   let passwordInput = document.getElementById('input-password').value;
//   let validTraveler = isValidTraveler(usernameInput);
//   if (isValidPassword(passwordInput)) {
//     isValidTraveler(usernameInput).then(function (result) {
//       if (result === true) {
//         renderSuccessfulTravelerLogin();
//       } else if
//         (isValidAgency(usernameInput)) {
//         renderSuccessfulAgencyLogin();
//       } else {
//         loginError();
//       }
//     });
//   } else {
//     loginError();
//   }
// };

