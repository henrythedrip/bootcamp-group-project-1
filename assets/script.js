// Group Project 1 api:
// AIzaSyDzc69XmD4DeT9-Te5GUZ-_6BwQgIyvkNw
// Get the modal
var inputEmail = document.getElementById("email");
var inputName = document.getElementById("name");
var inputBio = document.getElementById("bio");
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
