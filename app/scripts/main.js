var currentLocation = {},
    i = 0;
function error(err) {
  console.log(err.code);
}

function get_location(i) {
    navigator.geolocation.watchPosition(getCoords,error,{enableHighAccuracy:true});
}

function getCoords(position) {
    i++
    if (position) {
        currentLocation.lat = position.coords.latitude;
        currentLocation.lng = position.coords.longitude;
        currentLocation.altitude = position.coords.altitude;
        console.log(currentLocation.lng);
        console.log(currentLocation.lat);
          geoFire.set("location" + i, [currentLocation.lat, currentLocation.lng]).then(function() {
              console.log("Provided key has been added to GeoFire");
          }, function(error) {
              console.log("Error: " + error);
          });
    } else {
        console.log("not added");
    }
}
get_location();

var fireURL = "https://trailblazr.firebaseio.com/";

var fireRef = new Firebase(fireURL);
var geoFire = new GeoFire(fireRef);

//geoFire.child();

// var route = setInterval()

window.Trailblazr = Ember.Application.create();

Trailblazr.Router.map(function(){
    this.route('active');
});
