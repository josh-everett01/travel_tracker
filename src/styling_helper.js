import * as travel_tracker_service from "./travel_tracker_service";

function setBackgroundImageAndH1Opacity(destination) {
  document.getElementById(
    "h1-div"
  ).style.backgroundImage = `url(${destination.image})`;
  document.getElementById("home-page-h1").style.opacity = "1.0";
  document.getElementById("home-page-h1").style.backgroundColor =
    "rgba(0, 0, 0, 0.2)";
  document.getElementById("home-page-h1").style.border = "1px solid #fff";
}

function setRandomBackgroundImage(destinations) {
  let destination =
    destinations[Math.floor(Math.random() * destinations.length)];
  setBackgroundImageAndH1Opacity(destination);
  let randomDestinationImage = destination.image;
  return randomDestinationImage;
}

function createDivsAndSetIdsClass(result) {
  let destinations = result;
  let homePage = document.createElement("div");
  let h1Div = document.createElement("div");
  h1Div.id = "h1-div";
  homePage.className = "home-page";
  homePage.id = "home-page";
  return { destinations, h1Div, homePage };
}

function appendHomePageData(
  h1Text,
  homePageH1,
  destH1DivHomePage,
  destinations
) {
  homePageH1.appendChild(h1Text);
  destH1DivHomePage.h1Div.appendChild(homePageH1);
  document.querySelector("body").appendChild(destH1DivHomePage.h1Div);
  document.querySelector("body").appendChild(destH1DivHomePage.homePage);
  setRandomBackgroundImage(destinations);
}

function createHeaderAndSetBackgroundImg(result) {
  let destH1DivHomePage = createDivsAndSetIdsClass(result);
  let destinations = destH1DivHomePage.destinations;
  let homePageH1 = document.createElement("h1");
  homePageH1.id = "home-page-h1";
  let h1Text = document.createTextNode("Where would you like to go?");
  appendHomePageData(h1Text, homePageH1, destH1DivHomePage, destinations);
  return destinations;
}

function renderDestinationImages(destinations) {
  let imageAndNameDiv = document.createElement("div");
  (imageAndNameDiv.onclick = "href"), "alert(HEY)";
  imageAndNameDiv.className = "image-and-name-div";
  let destination =
    destinations[Math.floor(Math.random() * destinations.length)];
  var img = document.createElement("img");
  img.className = "home-destination-image";
  img.src = `${destination.image}`;
  return { destination, imageAndNameDiv, img };
}

function appendImageAndName(destination, destinationName, paragraph) {
  let destinationNode = document.createTextNode(`${destinationName}`);
  paragraph.appendChild(destinationNode);
  destination.imageAndNameDiv.appendChild(destination.img);
  destination.imageAndNameDiv.appendChild(paragraph);
  document.getElementById("home-page").appendChild(destination.imageAndNameDiv);
}

function populateDestinationsAndNames(destinations) {
  for (let i = 0; i < destinations.length - 44; i++) {
    let destination = renderDestinationImages(destinations);
    let destinationName = destination.destination.destination;
    let paragraph = document.createElement("paragraph");
    paragraph.className = "home-destination-name";
    appendImageAndName(destination, destinationName, paragraph);
  }
}

function styleHomePage() {
  travel_tracker_service.getAllDestinations().then(function (result) {
    let destinations = createHeaderAndSetBackgroundImg(result);
    populateDestinationsAndNames(destinations);
  });
}

function styleTravelerPage() {
  document.getElementById("header-section").style.display = "none";
  document.getElementById("home-page-h1").style.padding = "2%";
  document.getElementById("home-page-h1").style.display = "flex";
  document.getElementById("home-page-h1").style.borderRadius = "0 0 20px 20px";
  document.getElementById("home-page-h1").style.marginTop = "0";
  document.getElementById("h1-div").style.padding = "20%";
  document.getElementById("h1-div").style.marginTop = "-5%";
  document.getElementById('h1-div').style.gridAutoColumns = "1fr 1fr 1fr";
  placeLogOutButton()
  styleLogOutButton()
  document.getElementById('h1-div').style.gridTemplateRows = "1fr .1fr 1fr";
  document.getElementById('home-page-h1').style.gridRow = "3"

}

function travelerMediaQuery() {
  function myFunction(x) {
    if (x.matches) {
      styleTravelerPage();
    } else {
      return;
    }
  }
  var x = window.matchMedia("(max-width: 425px)");
  myFunction(x);
  x.addListener(myFunction);
}

function placeLogOutButton() {
  let logOutButton = document.getElementById('log-out-button');
  document.getElementById('h1-div').appendChild(logOutButton);

}

function styleLogOutButton() {
  let logOutButton = document.getElementById('log-out-button');
  logOutButton.style.height = "fit-content"
  document.getElementById('h1-div').style.gridTemplateRows = "1fr"
}

function styleAgentPage() {
  placeLogOutButton()
  document.getElementById("header-section").style.display = "none";
  styleLogOutButton()
  document.getElementById("h1-div").style.padding = "15%";
  document.getElementById("agent-header").style.padding = "2%";
  document.getElementById("agent-header").style.display = "flex";
  document.getElementById("agent-header").style.borderRadius = "0 0 20px 20px";
}

function agentMediaQuery() {
  function myFunction(x) {
    if (x.matches) {
      styleAgentPage();
    } else {
      return;
    }
  }
  var x = window.matchMedia("(max-width: 425px)");
  myFunction(x);
  x.addListener(myFunction);
}

function styleAgentPageFor768() {
  document.getElementById("header-section").style.display = "none";
  document.getElementById("h1-div").style.marginTop = "0";
  document.getElementById("h1-div").style.padding = "15%";
  document.getElementById("agent-header").style.padding = "2%";
  document.getElementById("agent-header").style.borderRadius = "0 0 20px 20px";
}

function agentMediaQuery768() {
  function myFunction(y) {
    if (y.matches) {
      styleAgentPageFor768();
    } else {
      return;
    }
  }
  var y = window.matchMedia("(max-width: 768px)");
  myFunction(y);
  y.addListener(myFunction);
}

export {
  styleHomePage,
  travelerMediaQuery,
  agentMediaQuery,
  agentMediaQuery768,
};
