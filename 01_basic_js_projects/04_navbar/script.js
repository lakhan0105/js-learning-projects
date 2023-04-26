// Selecting the elements
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show");
});
