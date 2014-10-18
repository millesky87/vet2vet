var currentLocation = {},
    i = 0;

function get_location(i) {
    navigator.geolocation.getCurrentPosition(getCoords);
}

function getCoords(position) {
    i++;
    if (position) {
        currentLocation.lat = position.coords.latitude;
        currentLocation.lng = position.coords.longitude;
        
        console.log(currentLocation.lng);
        console.log(currentLocation.lat);

        setTimeout(function() {
            geoFire.set("_" + i, [currentLocation.lat, currentLocation.lng]).then(function() {
                console.log("Provided key has been added to GeoFire");
            }, function(error) {
                console.log("Error: " + error);
            });
        }, 0);
    } 

    else {
        console.log("not added");
    }
}

var fireURL = "https://trailblazr.firebaseio.com/trails";

var fireRef = new Firebase(fireURL);
//var route = geoFire.child();

var geoFire = new GeoFire(fireRef);

setInterval(
    function() {
        get_location(i);
    }, 5000
);

// var route = setInterval()