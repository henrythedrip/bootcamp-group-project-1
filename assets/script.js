// Group Project 1 api:
// AIzaSyDzc69XmD4DeT9-Te5GUZ-_6BwQgIyvkNw
// Get the modal
var modal = document.getElementById("modalForm");
// Get the button that opens the modal
var btn = document.getElementById("addMeButton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal

// Initialize and add the map
let map;
// Set the center coordinates in a reusable way.
const mapCenterPosition = { lat: 40.76103973388672, lng: -111.87799835205078 };

async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );
  //map basics
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: mapCenterPosition,
    mapId: "DEMO_MAP_ID",
  });

  // the user's marker styling
  const usersPinElement = new PinElement({
    background: "#50C878",
    borderColor: "#FFF",
    glyphColor: "white",
    glyph: "YOU!",
    scale: 2,
  });

  // Library of Users
  const libraryOfUsers = [
    {
      mapInfoWindow: {
        name: "Joe Billy",
        email: "joebilly@website.com",
        bio: "Hey whats up?! My name is Joe Billy and I love Rock & Roll. Currently looking for a good group of individuals to drink with on the weekends. I am married and have 1 kid, so time away from my house is a needed repreve.",
        drink: "Old Fashioned",
        drinkUrl:
          "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
      },
      mapOptions: {
        map: map,
        position: { lat: 40.76509094238281, lng: -111.84213256835938 },
        title: "Joe Billy",
      },
    },
    {
      mapInfoWindow: {
        name: "Big Stepper",
        email: "bigstepper1111@website.com",
        bio: "Hey good gang?! they call me Big Stepper and I am a devil on the mic. I been making Hip Hop for over 10 years and the women love me. Currently looking for a good group of dudes to hit my favorite bar, Lake Effect, with. Sometimes I freestyle rap there on tuesdays with the house band. Come on by and buy me a drink, esspecially if you love underground Hip Hop.",
        drink: "Negroni",
        drinkUrl:
          "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
      },
      mapOptions: {
        map: map,
        position: { lat: 40.74976348876953, lng: -111.86538696289062 },
        title: "Big Stepper",
      },
    },
    {
      mapInfoWindow: {
        name: "Lisa Simpleton",
        email: "lisasimpleton420@website.com",
        bio: "Hello you sweet people! I am Lisa and I am looking for a good group of girls to have my back when the parties get wild. Love going to Bar X and Beer Bar on the weekends, because thats where the cutest guys are. If you love to have fun and hate Trump HMU!",
        drink: "Daiquiri",
        drinkUrl:
          "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
      },
      mapOptions: {
        map: map,
        position: { lat: 40.76545333862305, lng: -111.86117553710938 },
        title: "Lisa Simpleton",
      },
    },
    {
      mapInfoWindow: {
        name: "Betty Brown",
        email: "bb127@website.com",
        bio: "Sup? Betty is the name and I searching for a steller group of women that love to have fun on a night out. Love going to Johnny's On 2nd because who wants to pay for expensive drinks? I am a nurse and mother of 2. I am new to SLC, originally from Missouri. Where my southern bells at? :)",
        drink: "Gin Tonic",
        drinkUrl:
          "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
      },
      mapOptions: {
        map: map,
        position: { lat: 40.760536193847656, lng: -111.89846374511719 },
        title: "Betty Brown",
      },
    },
    {
      mapInfoWindow: {
        name: "Richard Guu",
        email: "guurichard@website.com",
        bio: "Salutations! I am a foreign exchange student from China looking for a fun group of outgoing Americans to practice english with. I have lived here for 2 months and and pursing a masters degree. I am studying Art at the University of Utah, hoping to become a professor of painting before I reach the age of 30. Currently working on an art showcase about skiing. I love to hit Brighton on the weekends, although I am just a beginner.",
        drink: "Whiskey Sour",
        drinkUrl:
          "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
      },
      mapOptions: {
        map: map,
        position: { lat: 40.76536193847656, lng: -111.8846374511719 },
        title: "Richard Guu",
      },
    },
  ];
  // const infowindow = new InfoWindow(libraryOfUsers[i].mapInfoWindow);

  //Function to add the new user to the array libraryOfUsers
  function createUsersMarker() {
    console.log([libraryOfUsers]);
    libraryOfUsers.push({
      name: localStorage.name,
      mapInfoWindow: {
        email: localStorage.email,
        bio: localStorage.bio,
        drink: "Randomly Applied",
        drinkUrl: "Ranomly Applied",
      },
      mapOptions: {
        map: map,
        gmpDraggable: true,
        position: mapCenterPosition,
        title: localStorage.name,
        content: usersPinElement.element,
      },
      infoWindowOptions: {
        content: localStorage.bio,
        ariaLabel: localStorage.name,
      },
    });
    console.log([libraryOfUsers]);
  }

  // Only run the function if the local storage has content.
  var usersName = localStorage.getItem("name");
  if (usersName) {
    createUsersMarker();
  } else {
  }

  // Loops through the LibraryOfUsers and creates markers and infowindows for each user.
  for (let i = 0; i < libraryOfUsers.length + 1; i++) {
    const marker = new AdvancedMarkerElement(libraryOfUsers[i].mapOptions);
    const infowindow = new InfoWindow(libraryOfUsers[i].mapInfoWindow);
    console.log(infowindow);
    var name = infowindow.name;
    var email = infowindow.email;
    var bio = infowindow.bio;
    var drink = infowindow.drink;
    var drinkImg = infowindow.drinkUrl;
    // console.log(drinkImg);
    // Function that creates const that takes the properties of the infoWindowOptions and puts them in a string.
    const contentString = `<section class="card-main"><h3 class="card-name">${name}</h3><div class="email-mailto"><a href="mailto:${email}" class="card-email"<p>${email}</p></a></div><p class="card-bio">${bio}</p> <p class="card-fav-drink">Their Drink:</p><p class="card-drink"> ${drink}</p><div class="card-img-container"><img src="${drinkImg}" class="card-img" width="100" height="100"></div></section>
    `;
    marker.addListener("click", () => {
      infowindow.setContent(contentString);
      infowindow.open({
        content: contentString,
        anchor: marker,
        map,
      });
    });
  }
}

initMap();

// Makes the modal sign up form appear by changing CSS display property.
btn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal.
span.onclick = function (event) {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it.
window.onclick = function (event) {
  if (event.target == submit) {
    modal.style.display = "none";
  }
};

// Where we pass the form input info into a veriable.
var usersEmail = document.getElementById("email");
var usersName = document.getElementById("name");
var usersBio = document.getElementById("bio");

// Where we store the users form input on their local storage.
function store() {
  localStorage.clear();
  var usersNameInput = usersName.value;
  localStorage.setItem("name", usersNameInput);
  var emailInput = usersEmail.value;
  localStorage.setItem("email", emailInput);
  var bioInput = usersBio.value;
  localStorage.setItem("bio", bioInput);
}

document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
