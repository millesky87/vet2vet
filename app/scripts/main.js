function show_map(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
}

function get_location() {
  navigator.geolocation.getCurrentPosition(show_map);
}
