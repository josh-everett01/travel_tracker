## Travel Tracker

### Overview

Travel Tracker is an application which manages and tracks different trips for
users and travel agents, by consuming and posting to an external API.
This is a project made by [Joshua Everett](https://github.com/josh-everett01).
This project implements HTML / CSS for the main skeleton design and styling, and
uses JavaScript to authorize user login, make calls to the API, and to populate
travelers / trips information on the user dashboard.

#### Login

**Upon opening / navigating to the project:**
The user sees a login screen which
accepts a username based on either a traveler or an agent of a travel agency.
When a traveler logs in a fetch call is made to the API to verify the travelers
ID against the ID's in the Array of travelers.

#### Traveler Dashboard

**If a traveler logs in they see a dashboard page showing them:**

- All trips taken (past, present, upcoming, and pending)
- Total amount of money spent on trips this year (This
  is calculated from the trips data and includes a 10%
  agent fee)

#### Agent Dashboard

**If an agent logs in they see a dashboard page showing them:**

- New trip requests (a users pending trips)
- Total income generated this year (will be 10% of user
  trip cost)
- Travelers on trips for today's date

#### Traveler Interaction

**A traveler who is logged in is able to make a trip request:**

- Select a date, duration, number of travelers
- Choose from a list of destinations
  After making these selections, they see an estimated
  cost (including a 10% travel agent fee) for the trip.
- Once they submit the trip request, it will show on
  their dashboard as “pending” so that the travel agency
  can approve or deny it.

#### Agent Interaction

**An agent who is logged in is able to:**

- See and approve / deny trip requests
- Search for any user by name
- View their:
  _ name
  _ a list of all of their trips
  _ The total amount they’ve spent (including
  10% agent cut)
  _ Approve a trip request for that user - Delete an
  upcoming trip for that user

### Setup

**Git Setup**

```
$ git clone git@github.com:josh-everett01/travel_tracker.git

```

### Production Links

###### [Frontend Interface](https://github.com/josh-everett01/travel_tracker)

### Versions

`npm 6.14.7`

### Tech Stack

- JavaScript
- HTML5/CSS3/SCSS

### Project Boards

###### [Travel Tracker Project Board](https://github.com/josh-everett01/travel_tracker/projects/1)
