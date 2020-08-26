## Travel Tracker

### Overview

Travel Tracker is an application which manages and tracks different trips for
users and a travel agency. This is a project made by [Joshua Everett](https://github.com/josh-everett01).
This project implements HTML / CSS for the main skeleton design and styling, and uses JavaScript
to authorize user login, make calls to the API, and to populate travelers / trips information on the user dashboard.

Upon opening / navigating to the project; the user sees a login screen which
accepts a username based on either a traveler or an agent of a travel agency. When a traveler logs in a fetch
call is made to the API to verify the travelers ID against the ID's in the Array of travelers.

If a traveler logs in they see a dashboard page showing them: - All trips taken (past, present, upcoming, and pending) - Total amount of money spent on trips this year (This
is calculated from the trips data and includes a 10%
agent fee)
If an agent logs in they see a dashboard page showing them: - New trip requests (a users pending trips) - Total income generated this year (will be 10% of user
trip cost) - Travelers on trips for today's date
A traveler who is logged in is able to make a trip request: - Select a date, duration, number of travelers and choose
from a list of destinations - After making these selections, they see an estimated
cost (including a 10% travel agent fee) for the trip. - Once they submit the trip request, it will show on
their dashboard as “pending” so that the travel agency
can approve or deny it.
An agent who is logged in is able to: - See and approve / deny trip requests - Search for any user by name and: - View their name, a list
of all of their trips,
and the total amount
they’ve spent (including
10% agent cut) - Approve a trip request
for that user - Delete an upcoming trip
for that user

### Setup

**Git Setup**

```
$ git clone git@github.com:josh-everett01/travel_tracker.git
$ cd calorie_counts
$ npm install
```

### Production Links

###### [Frontend Interface](https://github.com/josh-everett01/travel_tracker)

### Versions

`npm 6.14.7`

### Schema

### Tech Stack

- JavaScript
- HTML5/CSS3/SCSS

### Project Boards

###### [Travel Tracker Project Board](https://github.com/josh-everett01/travel_tracker/projects/1)

### Endpoints

#### Get all travelers

Request :

```
GET https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers
```

Response:

```
An object with travelers property containing an array of all travelers
body:
{
    "travelers": [
        {
            "id":1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
        },
        {
            "id":2,
            "name": "Rachael Vaughten",
            "travelerType": "thrill-seeker"
        }
     ]
}
```

#### Get single traveler

Request :

```
GET https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/<id> where<id> will be a number of a traveler’s id
```

Response:

```
An object of single traveler’s info
body:
{
    "id":1,
    "name":"Ham Leadbeater",
    "travelerType":"relaxer"
}
```

#### Get all trips

Request :

```
GET https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations
```

Response:

```
An object with trips property containing an array of all travelers
body:
{
    "destinations": [
        {
            "id":1,
            "destination":"Lima, Peru",
            "estimatedLodgingCostPerDay":70,
            "estimatedFlightCostPerPerson":400,
            "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80","alt":"overview of city buildings with a clear sky"
        },
        {
            "id":2,
            "destination":"Stockholm, Sweden",
            "estimatedLodgingCostPerDay":100,
            "estimatedFlightCostPerPerson":780,
            "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80","alt":"city with boats on the water during the day time"
        },
}
```

#### Add new trip

Request :

```
POST https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
(Required Properties for Request:
{
    id: <number>,
    userID: <number>,
    destinationID: <number>,
    travelers: <number>,
    date: <string 'YYYY/MM/DD'>,
    duration: <number>,
    status: <string 'approved' or 'pending'>,
    suggestedActivities: <array of strings>
}
```

Response:

```
{
    message: 'Resource with id <id> successfully posted',
    newResource: <Object with trip info just posted>
}
```

#### Add new destination

Request :

```
POST https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations
(Required Properties for Request:
{
    id: <number>,
    destination: <string>,
    estimatedLodgingCostPerDay: <number>,
    estimatedFlightCostPerPerson: <number>,
    image: <string>,
    alt: <string>
}
```

Response:

```
{
    message: 'Resource with id <id> successfully posted',
    newResource: <Object with destination info just posted>
}
```

#### Modify single trip

Request :

```
POST https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip
(Required Properties for Request:
{
    id: <number>,
    status:<String of 'approved' or 'pending',
    suggestedActivities: <Array of strings>
}
(Only a status or a suggestedActivities property is required for a successful request)
```

Response:

```
{
    message: 'Trip #<id> has been modified',
    updatedResource: <Object with newly updated data>
}
```

#### Delete single trip

Request :

```
DELETE https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
(Required Properties for Request:
{
    id: <Number>
}
```

Response:

```
Trip # has been deleted
```
