import {
  renderTravelerWelcome,
  renderTripsHeader,
  renderSuccessfulAgencyLogin,
  renderTrips,
  renderTotalSpent,
  renderTripDate
} from "./traveler_dashboard_helper";
import { getAllDestinationsForAgent, getAllTripsForAgent } from "./travel_tracker_service";

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

// function calculateTripRequest() {
//   alert('HEY');
// }

function daysBetween(startDate, endDate) {
  let formattedStartDate = new Date(startDate);
  let formattedEndDate = new Date(endDate);
  // The number of milliseconds in all UTC days (no DST)
  const oneDay = 1000 * 60 * 60 * 24;

  // A day in UTC always lasts 24 hours (unlike in other time formats)
  const start = Date.UTC(formattedEndDate.getFullYear(), formattedEndDate.getMonth(), formattedEndDate.getDate());
  const end = Date.UTC(formattedStartDate.getFullYear(), formattedStartDate.getMonth(), formattedStartDate.getDate());

  // so it's safe to divide by 24 hours
  let daysBetween = (start - end) / oneDay;
  return daysBetween;
}


function renderTravelerTripRequestForm() {
  getAllTripsForAgent().then(function (result) {
    let allTrips = result;

    getAllDestinationsForAgent().then(function (result) {
      allTrips;
      let destinationsArr = result;
      let i;
      let destinations = [];

      for (i = 0; i < result.length; i++) { destinations.push(destinationsArr[i]) };
      let searchBarLabel = document.createElement('label');
      searchBarLabel.setAttribute('for', 'destination-choice');
      let searchBarLabelText = document.createTextNode('Search for a Destination:')
      searchBarLabel.appendChild(searchBarLabelText);
      document.querySelectorAll('section')[2].setAttribute('id', 'request-form');
      document.querySelectorAll('section')[2].setAttribute('class', 'container');
      document.getElementById('request-form').appendChild(searchBarLabel);
      let inputList = document.createElement("input");
      inputList.setAttribute("list", "destination-choice");
      inputList.setAttribute("id", "destination");
      // inputList.setAttribute("name", "destination-choice");
      document.getElementById("request-form").appendChild(inputList);
      let dataList = document.createElement("datalist");
      dataList.setAttribute("id", "destination-choice");
      document.getElementById("request-form").appendChild(dataList);
      for (i = 0; i < destinations.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", `${destinations[i].destination}`);
        // let optionText = document.createTextNode(`${destinations[i]}`)
        // option.appendChild(optionText);
        document.getElementById("destination-choice").appendChild(option);
      }

      let numberOfTravelersLabel = document.createElement('label');
      numberOfTravelersLabel.setAttribute('for', 'number-of-travelers');
      let numberOfTravelersLabelText = document.createTextNode('Number of Travelers:')
      numberOfTravelersLabel.appendChild(numberOfTravelersLabelText);
      document.getElementById('request-form').appendChild(numberOfTravelersLabel);
      let numberOfTravelersInput = document.createElement("input");
      numberOfTravelersInput.setAttribute("list", "number-of-travelers");
      numberOfTravelersInput.setAttribute("id", "number-of-travs");
      document.getElementById("request-form").appendChild(numberOfTravelersInput);
      let numberOfTravelersDataList = document.createElement("datalist");
      numberOfTravelersDataList.setAttribute("id", "number-of-travelers");
      document.getElementById("request-form").appendChild(numberOfTravelersDataList);
      for (i = 1; i <= 20; i++) {
        let number = document.createElement("option");
        number.setAttribute("value", `${i}`);
        document.getElementById('number-of-travelers').appendChild(number);
      }

      let tripDurationLabel = document.createElement('label');
      tripDurationLabel.setAttribute('for', 'trip-duration');
      let tripDurationLabelText = document.createTextNode('Please select a start and end date:')
      tripDurationLabel.appendChild(tripDurationLabelText);
      document.getElementById('request-form').appendChild(tripDurationLabel);

      let tripStartLabel = document.createElement('label');
      tripStartLabel.setAttribute('for', 'trip-start');
      document.getElementById('request-form').appendChild(tripStartLabel);
      let startDateInput = document.createElement("input")
      startDateInput.setAttribute("type", "date");
      startDateInput.setAttribute("id", "start");
      startDateInput.setAttribute("name", "trip-start")
      startDateInput.setAttribute("value", "2020-09-27")
      startDateInput.setAttribute("min", "2020-09-27")
      startDateInput.setAttribute("max", "2021-12-31")
      document.getElementById('request-form').appendChild(startDateInput);

      let tripEndLabel = document.createElement('label');
      tripEndLabel.setAttribute('for', 'trip-end');
      document.getElementById('request-form').appendChild(tripEndLabel);
      let endDateInput = document.createElement("input")
      endDateInput.setAttribute("type", "date");
      endDateInput.setAttribute("id", "end");
      endDateInput.setAttribute("name", "trip-end");
      endDateInput.setAttribute("value", "2020-09-27");
      endDateInput.setAttribute("min", "2020-09-27");
      endDateInput.setAttribute("max", "2023-12-31");
      document.getElementById('request-form').appendChild(endDateInput);

      let tripRequestButton = document.createElement('button');
      tripRequestButton.setAttribute("id", "trip-request-button");
      tripRequestButton.textContent = 'CALCULATE';
      tripRequestButton.onclick = function calculateTripRequest() {
        let tripRequestData = [];
        let tripRequestDestination = document.getElementById('destination').value;
        let numberOfTravelers = document.getElementById('number-of-travs').value;
        let tripRequestStartDate = document.getElementById('start').value;
        let tripRequestEndDate = document.getElementById('end').value;
        tripRequestData.push("Destination: " + tripRequestDestination, "Number of Travelers: " + numberOfTravelers, "Trip Start Date: " + tripRequestStartDate, "Trip End Date:" + tripRequestEndDate);
        console.log(tripRequestData, allTrips, destinations);
        let i; for (i = 0; i < destinations.length; i++) {
          if (tripRequestDestination === destinations[i].destination) {
            let destinationInfo = destinations[i];
            console.log(destinationInfo);
            daysBetween(tripRequestStartDate, tripRequestEndDate);
            let flightCosts = numberOfTravelers * destinations[i].estimatedFlightCostPerPerson;
            let lodgingCostsPerDay = numberOfTravelers * destinations[i].estimatedLodgingCostPerDay;
            let totalLodgingCosts = lodgingCostsPerDay * daysBetween(tripRequestStartDate, tripRequestEndDate);
            let costBeforeAgentFee = flightCosts + totalLodgingCosts;
            let agentFee = costBeforeAgentFee * 0.1;
            let totalTripCost = costBeforeAgentFee + agentFee;
            document.getElementById('request-form').style.display = "none";
            renderTripsHeader("Your Requested");
            document.querySelectorAll('section')[3].setAttribute('id', 'requested-trips')
            let destinationImage = destinationInfo.image;
            var img = document.createElement("img");
            img.className = "destination-image";
            img.src = `${destinationImage}`;
            document.querySelectorAll('section')[3].appendChild(img);

            let destinationName = document.createTextNode(`Trip Destination: ${destinationInfo.destination}`)

            let destinationNameParagraph = document.createElement('paragraph');
            destinationNameParagraph.appendChild(destinationName);
            document.querySelectorAll('section')[3].appendChild(destinationNameParagraph);

            let numOfTravelersNode = document.createTextNode(`Number of Travelers: ${numberOfTravelers}`);
            let numOfTravelersParagraph = document.createElement('paragraph');
            numOfTravelersParagraph.appendChild(numOfTravelersNode);
            document.querySelectorAll('section')[3].appendChild(numOfTravelersParagraph);

            let formattedStartDate = new Date(tripRequestStartDate).toLocaleDateString();
            let formattedEndDate = new Date(tripRequestEndDate).toLocaleDateString();
            let startDateParagraph = document.createElement('paragraph');
            let endDateParagraph = document.createElement('paragraph');
            let startDateNode = document.createTextNode(`Trip Start Date: ${formattedStartDate}`);
            let endDateNode = document.createTextNode(`Trip End Date: ${formattedEndDate}`)
            startDateParagraph.appendChild(startDateNode);
            endDateParagraph.appendChild(endDateNode);
            document.querySelectorAll('section')[3].appendChild(startDateParagraph);
            document.querySelectorAll('section')[3].appendChild(endDateParagraph);

            let totalCostNode = document.createTextNode(`Total Estimated Trip Cost: $${totalTripCost.toFixed(2)}`);
            document.querySelectorAll('section')[3].appendChild(totalCostNode);





          }

        }

      };
      document.getElementById('request-form').appendChild(tripRequestButton);

    })
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