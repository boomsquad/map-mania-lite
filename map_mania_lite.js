var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    // Marker for Chicago, Il
    var marker = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});

    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Chicago, Illinois'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
}




function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom();
    var inBounds = false;

    if (gMap.getBounds().contains({lat:41.8781,lng:-87.6298})) {
        inBounds = true;
    }

    console.log("inBounds: " + inBounds + " zoomLevel: " + zoomLevel);
}



function initApplication() {
    console.log('Map Mania Lite - Starting!')
}