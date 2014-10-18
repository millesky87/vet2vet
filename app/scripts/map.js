function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.9402232, -82.4981692),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var flightPlanCoordinates = [
    new google.maps.LatLng(34.8402232, -82.3981692),
    new google.maps.LatLng(34.9402232, -82.4981692)
  ];
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
