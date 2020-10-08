import * as travel_tracker_service from "./travel_tracker_service";
import * as dashboard_helper from "./dashboard_helper";

function setRandomBackgroundImage(destinations) {

  let destination = destinations[Math.floor(Math.random() * destinations.length)];
  let randomDestinationImage = destination.image
  document.getElementById('h1-div').style.backgroundImage = `url(${destination.image})`
  document.getElementById('home-page-h1').style.opacity = "1.0"
  document.getElementById('home-page-h1').style.backgroundColor = "rgba(0, 0, 0, 0.2)"
  document.getElementById('home-page-h1').style.border = "1px solid #fff"
  document.getElementById('home-page-h1').style.borderRadius = "20px"
  return randomDestinationImage


}

function styleHomePage() {
  travel_tracker_service.getAllDestinations().then(function (result) {
    // document.getElementById('site-container').style.display = "none";
    document.getElementById("login-form").style.visibility = "initial";
    ("initial");

    let destinations = result;
    let homePage = document.createElement("div");
    let h1Div = document.createElement("div");
    h1Div.id = "h1-div";
    homePage.className = "home-page";
    homePage.id = "home-page";
    let homePageH1 = document.createElement("h1");
    homePageH1.id = "home-page-h1";
    let h1Text = document.createTextNode("Where would you like to go?");
    homePageH1.appendChild(h1Text);
    h1Div.appendChild(homePageH1);
    document.getElementById("test-id").appendChild(h1Div);
    document.getElementById("test-id").appendChild(homePage);
    setRandomBackgroundImage(destinations)
    for (let i = 0; i < destinations.length - 44; i++) {
      let imageAndNameDiv = document.createElement("div");
      (imageAndNameDiv.onclick = "href"), "alert(HEY)";
      imageAndNameDiv.className = "image-and-name-div";
      let destination = destinations[Math.floor(Math.random() * destinations.length)];
      var img = document.createElement("img");
      img.className = "home-destination-image";
      img.src = `${destination.image}`;

      let destinationName = destination.destination
      let paragraph = document.createElement("paragraph");
      paragraph.className = "home-destination-name";
      let destinationNode = document.createTextNode(`${destinationName}`);
      paragraph.appendChild(destinationNode);
      imageAndNameDiv.appendChild(img);
      imageAndNameDiv.appendChild(paragraph);
      document.getElementById("home-page").appendChild(imageAndNameDiv);

    }

  });
}

export { styleHomePage };
