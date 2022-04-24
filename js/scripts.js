//BusinessLogic for Destination List

function DestinationList() {
  this.locations = {}
}

DestinationList.prototype.addLocation = function (trip) {
  this.locations[trip.location] = trip
}


// Business Logic for  each Trip
function Trip(location, landmarks, year, notes) {
  this.location = location
  this.landmarks = landmarks
  this.year = year
  this.notes = notes
}



//User Interface Get Values
$(function () {
  $('form').submit(function (event) {
    event.preventDefault()
    const userLocation = $('#location').val()
    const userLandmark = $('#landmark').val()
    const userYear = $('#year').val()
    const userNotes = $('#notes').val()

    let destinationList = new DestinationList()
    let trip = new Trip(userLocation, userLandmark, userYear, userNotes)
    destinationList.addLocation(trip)
    console.log(destinationList.locations)

  })

})

