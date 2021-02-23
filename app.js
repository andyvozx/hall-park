let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.10324394465482, lng: -96.82622539804454 },

    zoom: 16.8,
  });
}

initMap();
