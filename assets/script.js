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

const centerPosition = { lat: 40.76103973388672, lng: -111.87799835205078 };
async function initMap() {
  // The location of Uluru
  const position = centerPosition;
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');

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

  //The User's marker
  const pinElement = new PinElement({
    background: '#50C878',
    borderColor: '#FFF',
    glyphColor: 'white',
    scale: 1.5,
  });
  const usersMarker = new AdvancedMarkerElement({
    position: centerPosition,
    map: map,
    gmpDraggable: true,
    title: 'You!',
    id: 'UsersMarker',
    glyphColor: 'white',
    content: pinElement.element,
  });
  const content = advancedMarker.content;

  content.style.opacity = '0';
  content.addEventListener('animationed', (event) => {
    content.classList.remove('drop');
    content.style.opacity = '1';
  });

  // 2 second delay so that we can see the animation.
  const time = 2 + Math.random();

  content.style.setProperty('--delay-time', time + 's');
  IntersectionObserver.observe(content);

  usersMarker.addListener('dragend', (event) => {
    const position = usersMarker.position;
    infoWindow.close();
    infoWindow.setContent(`Pin dropped at: ${position.lat()}, ${position.lng()}`);
    infoWindow.open(usersMarker.map, usersMarker);
  });
}

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
  if (event.target == submit) {
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
