var currentLocation = {};

function get_location() {
    navigator.geolocation.getCurrentPosition(show_map);
}

function show_map(position) {
    currentLocation.lat = position.coords.latitude;
    currentLocation.lng = position.coords.longitude;
    console.log(currentLocation.lat);
    console.log(currentLocation.lng);
    geoFire.set("test", [currentLocation.lat, currentLocation.lng]).then(function() {
        console.log("Provided key has been added to GeoFire");
    }, function(error) {
        console.log("Error: " + error);
    });

}

var fireURL = "https://trailblazr.firebaseio.com/";

var fireRef = new Firebase(fireURL);
var geoFire = new GeoFire(fireRef);

get_location();