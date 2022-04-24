//BusinessLogic for Destination List

function DestinationList() {
  this.locations = {}
}

DestinationList.prototype.addLocation = function (trip) {
  this.locations[trip.location] = trip
}


// Business Logic for Trip
function Trip(location, landmarks, year, notes) {
  this.location = location
  this.landmarks = landmarks
  this.year = year
  this.notes = notes
}


let destinationList = new DestinationList();
let trip = new Trip("Texas", "Salt Lick", "2022", "it was fun!");
destinationList.addLocation(trip);
destinationList.locations;
