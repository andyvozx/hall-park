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
let gooMarker = [];
let markers = [
  {
    coords: { lat: 33.1005, lng: -96.8234 },
    content: "<h1>A1</h1>",
  },
  {
    coords: { lat: 33.100429, lng: -96.82447 },
    content: "<h1>A1 to A2 jumper</h1>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.1004, lng: -96.8247 },
    content: "<h1>A2</h1>",
  },
  {
    coords: { lat: 33.09961, lng: -96.82567 },
    content: "<h1>A2 to B2 jumper (1 of 2)</h1>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.1001, lng: -96.8258 },
    content: "<h1>A2 to B2 jumper (2 of 2)</h1>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.10014, lng: -96.82579 },
    content: "<h1>B2</h1>",
  },
  {
    coords: { lat: 33.10111, lng: -96.8268 },
    content: "<h1>B2 to C pumps jumper</h1>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.1008, lng: -96.8244 },
    content: "<h1>B1</h1>",
  },
  {
    coords: { lat: 33.1015, lng: -96.8246 },
    content: "<h1>B1 to C pumps jumper</h1>",
    iconImage: "resources/pics/greenx.png",
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
  {
    coords: { lat: 33.1019, lng: -96.8271 },
    content: "<h1>C1</h1>",
  },
  {
    coords: { lat: 33.1027, lng: -96.8272 },
    content: "<h1>C2 (1 of 2)</h1>",
  },
  {
    coords: { lat: 33.1031, lng: -96.8293 },
    content:
      "<h1>C2 (2 of 2) & C2 to G3 jumper (1 of 2)</h1> <p>Normally Open</p>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.1031, lng: -96.8296 },
    content:
      "<h1>C2 to G3 jumper (2 of 2)</h1> <p>G3 (3 of 3)</p> <p>Normally Open</p>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.104, lng: -96.8266 },
    content: "<h1>C3</h1>",
  },
  {
    coords: { lat: 33.1037, lng: -96.8265 },
    content: "<h1>C3 to Median 3</h1>",
  },
  {
    coords: { lat: 33.1037, lng: -96.8262 },
    content: "<h1>C3 to E1 jumper</h1>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.1042, lng: -96.8264 },
    content: "<h1>Median 3 to 4</h1>",
  },
  {
    coords: { lat: 33.1064, lng: -96.8266 },
    content: "<h1>D1 and D2</h1>",
  },
  {
    coords: { lat: 33.1065, lng: -96.8279 },
    content: "<h1>D2</h1>",
  },
  {
    coords: { lat: 33.1054, lng: -96.8293 },
    content: "<h1>D2 to G5 jumper (1 of 2)</h1> <p>Normally Open</p>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.1054, lng: -96.8295 },
    content: "<h1>D2 to G5 jumper (2 of 2)</h1> <p>Normally Open</p>",
    iconImage: "resources/pics/greenx.png",
  },
  {
    coords: { lat: 33.105, lng: -96.8309 },
    content: "<h1>G5</h1>",
  },
  {
    coords: { lat: 33.1031, lng: -96.831 },
    content: "<h1>G4</h1> <p>G3 (2 of 3)</p>",
  },
  {
    coords: { lat: 33.1016, lng: -96.831 },
    content: "<h1>G2</h1> <p>G3 (1 of 3)</p>",
  },
  {
    coords: { lat: 33.1003, lng: -96.8289 },
    content: "<h1>G1</h1>",
  },
  {
    coords: { lat: 33.1003, lng: -96.8289 },
    content: "<h1>G1</h1>",
  },
  {
    coords: { lat: 33.1026, lng: -96.826 },
    content: "<h1>Median 2, Median 1, and Sculture Garden</h1>",
  },
  //Meter Keys
  {
    coords: { lat: 33.1017, lng: -96.828 },
    content: "<h1>Ball Valve Key</h1> <p>At back wall by pipe</p>",
    iconImage: "resources/pics/key.png",
  },
  {
    coords: { lat: 33.1001, lng: -96.8243 },
    content: "<h1>NRS Valve Key</h1> <p>Inside pump room</p>",
    iconImage: "resources/pics/key.png",
  },
];

// Loop through markers
for (let i = 0; i < markers.length; i++) {
  // Add marker
  addMarker(markers[i]);
  // gooMarker.push(new google.maps.Marker());
}

// Add Marker Function
function addMarker(props) {
  let marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    icon: "resources/pics/redx.png",

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
  // Push marker to array (google.maps.marker)
  gooMarker.push(marker);
}

//Dropdown

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Hide markers
function hideMarkers() {
  for (let i = 0; i < gooMarker.length; i++) {
    gooMarker[i].setVisible(false);
  }
}

// Show markers
function showMarkers() {
  for (let i = 0; i < gooMarker.length; i++) {
    gooMarker[i].setVisible(true);
  }
}

// Generate Map
let menu = document.getElementById("myDropdown");
menu.addEventListener("click", generateMap);
menu.addEventListener("onChange", generateMap);

function generateMap(event) {
  if (menu.value == "All") {
    showMarkers();
  } else if (menu.value == "A1") {
    hideMarkers();
    gooMarker[0].setVisible(true);
  } else if (menu.value == "A2") {
    hideMarkers();
    gooMarker[2].setVisible(true);
  } else if (menu.value == "B1") {
    hideMarkers();
    gooMarker[7].setVisible(true);
  } else if (menu.value == "B2") {
    hideMarkers();
    gooMarker[5].setVisible(true);
  } else if (menu.value == "C1") {
    hideMarkers();
    gooMarker[15].setVisible(true);
    gooMarker[16].setVisible(true);
  } else if (menu.value == "C2") {
    hideMarkers();
    gooMarker[17].setVisible(true);
  } else if (menu.value == "C3") {
    hideMarkers();
    gooMarker[20].setVisible(true);
  } else if (menu.value == "D1") {
    hideMarkers();
    gooMarker[24].setVisible(true);
    gooMarker[25].setVisible(true);
  } else if (menu.value == "D2") {
    hideMarkers();
    gooMarker[25].setVisible(true);
    gooMarker[26].setVisible(true);
  } else if (menu.value == "E1") {
    hideMarkers();
    gooMarker[14].setVisible(true);
  } else if (menu.value == "G1") {
    hideMarkers();
    gooMarker[32].setVisible(true);
  } else if (menu.value == "G2") {
    hideMarkers();
    gooMarker[30].setVisible(true);
  } else if (menu.value == "G3") {
    hideMarkers();
    gooMarker[19].setVisible(true);
    gooMarker[29].setVisible(true);
  } else if (menu.value == "G4") {
    hideMarkers();
    gooMarker[28].setVisible(true);
    gooMarker[29].setVisible(true);
  } else if (menu.value == "G5") {
    hideMarkers();
    gooMarker[27].setVisible(true);
    gooMarker[28].setVisible(true);
  } else if (menu.value == "T1") {
    hideMarkers();
    gooMarker[11].setVisible(true);
  } else if (menu.value == "T2") {
    hideMarkers();
    gooMarker[12].setVisible(true);
    gooMarker[13].setVisible(true);
  } else if (menu.value == "Median1") {
    hideMarkers();
    gooMarker[33].setVisible(true);
  } else if (menu.value == "Median2") {
    hideMarkers();
    gooMarker[33].setVisible(true);
  } else if (menu.value == "Median3") {
    hideMarkers();
    gooMarker[21].setVisible(true);
    gooMarker[33].setVisible(true);
    gooMarker[23].setVisible(true);
  } else if (menu.value == "Median4") {
    hideMarkers();
    gooMarker[23].setVisible(true);
  } else if (menu.value == "Daycare") {
    hideMarkers();
    gooMarker[10].setVisible(true);
  } else if (menu.value == "SculptureGarden") {
    hideMarkers();
    gooMarker[9].setVisible(true);
  } else if (menu.value == "Keys") {
    hideMarkers();
    gooMarker[34].setVisible(true);
    gooMarker[35].setVisible(true);
  } else if (menu.value == "AllJumpers") {
    hideMarkers();
    gooMarker[1].setVisible(true);
    gooMarker[3].setVisible(true);
    gooMarker[4].setVisible(true);
    gooMarker[6].setVisible(true);
    gooMarker[8].setVisible(true);
    gooMarker[18].setVisible(true);
    gooMarker[19].setVisible(true);
    gooMarker[22].setVisible(true);
    gooMarker[26].setVisible(true);
    gooMarker[27].setVisible(true);
  }
}
// gooMarker[1].setVisible(false);
