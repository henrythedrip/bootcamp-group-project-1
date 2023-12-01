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
const mapCenterPosition = { lat: 40.76103973388672, lng: -111.87799835205078 };
// Set the center coordinates in a reusable way.

// Library of Users
const userData = [
  {
    name: 'Joe Billy',
    email: 'joebilly@website.com',
    bio: 'Hey whats up?! My name is Joe Billy and I love Rock & Roll. Currently looking for a good group of individuals to drink with on the weekends. I am married and have 1 kid, so time away from my house is a needed repreve.',
    drink: 'Old Fashioned',
    drinkUrl: 'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
    mapOptions: {
      map: map,
      position: { lat: 40.76509094238281, lng: -111.84213256835938 },
      title: 'Marker 1',
    },
  },
  {
    name: 'Big Stepper',
    email: 'bigstepper1111@website.com',
    bio: 'Hey good gang?! they call me Big Stepper and I am a devil on the mic. I been making Hip Hop for over 10 years and the women love me. Currently looking for a good group of dudes to hit my favorite bar, Lake Effect, with. Sometimes I freestyle rap there on tuesdays with the house band. Come on by and buy me a drink, esspecially if you love underground Hip Hop.',
    drink: 'Negroni',
    drinkUrl: 'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg',
    mapOptions: {
      map: map,
      position: { lat: 40.74976348876953, lng: -111.86538696289062 },
      title: 'Marker 2',
    },
  },
  {
    name: 'Lisa Simpleton',
    email: 'lisasimpleton420@website.com',
    bio: 'Hello you sweet people! I am Lisa and I am looking for a good group of girls to have my back when the parties get wild. Love going to Bar X and Beer Bar on the weekends, because thats where the cutest guys are. If you love to have fun and hate Trump HMU!',
    drink: 'Daiquiri',
    drinkUrl: 'https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg',
    mapOptions: {
      map: map,
      position: { lat: 40.76545333862305, lng: -111.86117553710938 },
      title: 'Marker 3',
    },
  },
  {
    name: 'Betty Brown',
    email: 'bb127@website.com',
    bio: "Sup? Betty is the name and I searching for a steller group of women that love to have fun on a night out. Love going to Johnny's On 2nd because who wants to pay for expensive drinks? I am a nurse and mother of 2. I am new to SLC, originally from Missouri. Where my southern bells at? :)",
    drink: 'Gin Tonic',
    drinkUrl: 'https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg',
    mapOptions: {
      map: map,
      position: { lat: 40.760536193847656, lng: -111.89846374511719 },
      title: 'Marker 4',
    },
  },
  {
    name: 'Richard Guu',
    email: 'guurichard@website.com',
    bio: 'Salutations! I am a foreign exchange student from China looking for a fun group of outgoing Americans to practice english with. I have lived here for 2 months and and pursing a masters degree. I am studying Art at the University of Utah, hoping to become a professor of painting before I reach the age of 30. Currently working on an art showcase about skiing. I love to hit Brighton on the weekends, although I am just a beginner.',
    drink: 'Whiskey Sour',
    drinkUrl: 'https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg',
    mapOptions: {
      map: map,
      position: { lat: 40.76536193847656, lng: -111.81246374511719 },
      title: 'Marker 5',
    },
  },
];

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker');

  map = new Map(document.getElementById('map'), {
    zoom: 14,
    center: mapCenterPosition,
    mapId: 'DEMO_MAP_ID',
  });

  console.log(userData[3].mapOptions);
  const marker1 = new AdvancedMarkerElement(userData[0].mapOptions);
  const marker2 = new AdvancedMarkerElement(userData[1].mapOptions);
  const marker3 = new AdvancedMarkerElement(userData[2].mapOptions);
  const marker4 = new AdvancedMarkerElement(userData[3].mapOptions);
  const marker5 = new AdvancedMarkerElement(userData[4].mapOptions);
  const markerArray = [marker1, marker2, marker3, marker4, marker5];
  for (let i = 0; i < markerArray.length + 1; i++) {
    markerArray[i]['map'] = map;
  }
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
  localStorage.clear();
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
