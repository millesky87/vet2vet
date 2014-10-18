var currentLocation = {},
    i = 0;

function get_location(i) {
    navigator.geolocation.getCurrentPosition(getCoords);
}

function getCoords(position) {
    i++
    if (position) {
        currentLocation.lat = position.coords.latitude;
        currentLocation.lng = position.coords.longitude;
        currentLocation.altitude = position.coords.altitude;
        console.log(currentLocation.lng);
        console.log(currentLocation.lat);
        // setTimeout(function() {
        //     geoFire.set("location" + i, [currentLocation.lat, currentLocation.lng]).then(function() {
        //         console.log("Provided key has been added to GeoFire");
        //     }, function(error) {
        //         console.log("Error: " + error);
        //     });
        // }, 0);
    } else {
        console.log("not added");
    }
}

var fireURL = "https://trailblazr.firebaseio.com/";

var fireRef = new Firebase(fireURL);
var geoFire = new GeoFire(fireRef);

//geoFire.child();

setInterval(
    function() {
        get_location(i);
    }, 5000
);

// var route = setInterval()