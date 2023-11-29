// Group Project 1 api:
// AIzaSyDzc69XmD4DeT9-Te5GUZ-_6BwQgIyvkNw
// Get the modal
var modal = document.getElementById("modalForm");
// Get the button that opens the modal
var btn = document.getElementById("addMeButton");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.onclick = function (event) {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == Submit) {
        modal.style.display = "none";
    }
};

var email = document.getElementById("email");
var namer = document.getElementById("name");
var bio = document.getElementById("bio");

function store() {
localStorage.clear;
var emailInput = email.value;
localStorage.setItem("email", emailInput);
var namerInput = namer.value;
localStorage.setItem("name", namerInput);
var bioInput = bio.value;
localStorage.setItem("bio", bioInput);
console.log(emailInput);
console.log(namerInput);
console.log(bioInput);
}
