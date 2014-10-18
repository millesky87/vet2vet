
locations = [
{lat:34.8402232, lng:-82.3981692},
{lat:34.9402232, lng:-82.4981692}
]

function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var flightPlanCoordinates = 
  	locations.map(function(location){
  		console.log(location)
  		return new google.maps.LatLng(location.lat, location.lng)
  	});

  	console.log(flightPlanCoordinates);

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: .9,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
