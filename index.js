// Initialize and add the map
function initMap() {
  // The location of Uluru -
  const uluru = { lat: -22.792850, lng: -43.365330 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  //const marker = new google.maps.Marker({
  //  position: uluru,
  //  map: map,
  //});
  
  
  const tourStops = [
    [{ lat: -22.792850, lng: -43.365330 }, "Av. Automóvel Clube (Lugano)"],
    [{ lat: -22.792419093752684, lng: -43.378491232636605 }, "Vila Rosali"],
    [{ lat: -22.797459533548427, lng: -43.353823402670415 }, "Shopping Grande Rio"],
    [{ lat: -22.794904962642008, lng: -43.365860980846804 }, "Stop Beer Point"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      //label: `${i + 1}`,
	  icon: 'https://evjen-five.github.io/img/cctv1.png',
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    //marker.addListener("click", () => {
      
	  //infoWindow.close();
      //infoWindow.setContent(marker.getTitle());
      //infoWindow.open(marker.getMap(), marker);
    //});
	
	marker.addListener("click", () => {
		window.open('https://rtsp.me/embed/yNndN9Gt/', '_blank');
	});
  
  });
  
}

window.initMap = initMap;