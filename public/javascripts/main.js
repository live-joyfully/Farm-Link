var locations = [
  ['Heart of the City Farmers Market', 37.780453, -122.414524,'http://heartofthecity-farmersmar.squarespace.com/'],
  ['Alemany Farm', 37.732659, -122.419951,'http://www.alemanyfarm.org/'],
  ['Green Skies Vertical Farm', 37.811200, -122.296932,'http://www.gsvfarm.com/index.html'],
  ['Fort Mason Center Farmers Market', 37.806824, -122.431770,'http://www.cafarmersmkts.com/fort-mason-center-farmers-market'],
  ['Olson Farms', 37.835946100, -122.269786300,'http://www.olsonfarmsproduce.com/' ]
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: new google.maps.LatLng(37.774929,-122.419418 ),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent("<a href='" + locations[i][3] + "'>" + locations[i][0] + "</a>");
      infowindow.open(map, marker);
    }
  })(marker, i));
}