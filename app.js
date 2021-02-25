let map;
const HALL_BOUNDS = {
  north: 33.1067,
  south: 33.0985,
  west: -96.831,
  east: -96.8229,
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.10324394465482, lng: -96.82622539804454 },
    zoom: 16.8,
    restriction: {
      latLngBounds: HALL_BOUNDS,
      strictBounds: false,
    },
  });
}

initMap();

// Array of markers
let markers = [
  {
    coords: { lat: 33.1005, lng: -96.8234 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: "<h1>A1</h1>",
  },
  {
    coords: { lat: 33.1004, lng: -96.8244 },
    content: "<h1>A1 to A2 jumper</h1>",
  },
  {
    coords: { lat: 33.1004, lng: -96.8247 },
    content: "<h1>A2</h1>",
  },
  {
    coords: { lat: 33.0996, lng: -96.8256 },
    content: "<h1>A2 to B2 jumper (1 of 2)</h1>",
  },
  {
    coords: { lat: 33.1001, lng: -96.8258 },
    content: "<h1>A2 to B2 jumper (2 of 2)</h1>",
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  },
  {
    coords: { lat: 33.1001, lng: -96.8258 },
    content: "<h1>B2</h1>",
  },
  {
    coords: { lat: 33.1015, lng: -96.8268 },
    content: "<h1>B2 to C pumps jumper</h1>",
  },
  {
    coords: { lat: 33.1008, lng: -96.8244 },
    content: "<h1>B1</h1>",
  },
  {
    coords: { lat: 33.1015, lng: -96.8246 },
    content: "<h1>B1 to C pumps jumper</h1>",
  },
  {
    coords: { lat: 33.1018, lng: -96.8237 },
    content: "<h1>Sculpture garden to Median 1</h1>",
  },
  {
    coords: { lat: 33.1022, lng: -96.8237 },
    content: "<h1>Daycare</h1>",
  },
  {
    coords: { lat: 33.1034, lng: -96.8255 },
    content: "<h1>T1</h1>",
  },
  {
    coords: { lat: 33.104, lng: -96.8246 },
    content: "<h1>T2 (1 of 2)</h1>",
  },
  {
    coords: { lat: 33.1057, lng: -96.8249 },
    content: "<h1>T2 (2 of 2)</h1>",
  },
  {
    coords: { lat: 33.1043, lng: -96.8262 },
    content: "<h1>E1</h1>",
  },
  {
    coords: { lat: 33.1011, lng: -96.8272 },
    content: "<h1>C1 Garage</h1>",
  },
];

// Loop through markers
for (let i = 0; i < markers.length; i++) {
  // Add marker
  addMarker(markers[i]);
}

// Add Marker Function
function addMarker(props) {
  let marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    //icon:props.iconImage
  });

  // Check for customicon
  if (props.iconImage) {
    // Set icon image
    marker.setIcon(props.iconImage);
  }

  // Check content
  if (props.content) {
    let infoWindow = new google.maps.InfoWindow({
      content: props.content,
    });

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  }
}
