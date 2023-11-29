// Group Project 1 api:
// AIzaSyDzc69XmD4DeT9-Te5GUZ-_6BwQgIyvkNw
// Get the modal
var modal = document.getElementById('modalForm');
// Get the button that opens the modal
var btn = document.getElementById('addMeButton');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
// When the user clicks on the button, open the modal
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.76103973388672, lng: -111.87799835205078 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  // The map, centered at Uluru
  map = new Map(document.getElementById('map'), {
    zoom: 14,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });

  const position1 = { lat: 40.76509094238281, lng: -111.84213256835938 };
  const position2 = { lat: 40.74976348876953, lng: -111.86538696289062 };
  const position3 = { lat: 40.76545333862305, lng: -111.86117553710938 };
  const position4 = { lat: 40.760536193847656, lng: -111.87846374511719 };
  const position5 = { lat: 40.769466400146484, lng: -111.90396118164062 };

  const marker1 = new AdvancedMarkerElement({
    map: map,
    position: position1,
    title: 'Marker 1',
  });

  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: position2,
    title: 'Marker 2',
  });
  const marker3 = new AdvancedMarkerElement({
    map: map,
    position: position3,
    title: 'Marker 3',
  });
  const marker4 = new AdvancedMarkerElement({
    map: map,
    position: position4,
    title: 'Marker 4',
  });
  const marker5 = new AdvancedMarkerElement({
    map: map,
    position: position5,
    title: 'Marker 5',
  });
}

// initMap(){
//     <gmp-advanced-marker position="40.76509094238281,-111.84213256835938" title="My location"> </gmp-advanced-marker>
//           <gmp-advanced-marker position="40.74976348876953,-111.86538696289062" title="My location"> </gmp-advanced-marker>
//           <gmp-advanced-marker position="40.76545333862305,-111.86117553710938" title="My location"> </gmp-advanced-marker>
//           <gmp-advanced-marker position="40.760536193847656,-111.87846374511719" title="My location"> </gmp-advanced-marker>
//           <gmp-advanced-marker position="40.769466400146484,-111.90396118164062" title="My location"> </gmp-advanced-marker>
// };

// async function initMap() {
//   // Request needed libraries.
//   const { Map, InfoWindow } = await google.maps.importLibrary('maps');
//   const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
//   const map = new Map(document.getElementById('map'), {
//     center: { lat: 40.76103973388672, lng: -111.87799835205078 },
//     zoom: 14,
//     mapId: 'DEMO_MAP_ID',
//   });
//   const infoWindow = new InfoWindow();
//   const draggableMarker = new AdvancedMarkerElement({
//     map,
//     position: { lat: 37.39094933041195, lng: -122.02503913145092 },
//     gmpDraggable: true,
//     title: 'This marker is draggable.',
//   });

//   draggableMarker.addListener('dragend', (event) => {
//     const position = draggableMarker.position;

//     infoWindow.close();
//     infoWindow.setContent(`Pin dropped at: ${position.lat()}, ${position.lng()}`);
//     infoWindow.open(draggableMarker.map, draggableMarker);
//   });
// }

initMap();

btn.addEventListener('click', function (event) {
  event.preventDefault();
  modal.style.display = 'block';
});
// When the user clicks on <span> (x), close the modal
span.onclick = function (event) {
  modal.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == Submit) {
    modal.style.display = 'none';
  }
};

var email = document.getElementById('email');
var namer = document.getElementById('name');
var bio = document.getElementById('bio');

function store() {
  localStorage.clear;
  var emailInput = email.value;
  localStorage.setItem('email', emailInput);
  var namerInput = namer.value;
  localStorage.setItem('name', namerInput);
  var bioInput = bio.value;
  localStorage.setItem('bio', bioInput);
  console.log(emailInput);
  console.log(namerInput);
  console.log(bioInput);
}
