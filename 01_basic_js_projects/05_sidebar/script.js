// selceting the elements
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sideContainer = document.querySelector(".side-container");

// close btn event listener
closeBtn.addEventListener("click", function () {
  sideContainer.classList.add("hide");
});

// toggle btn event Listener
toggleBtn.addEventListener("click", function () {
  sideContainer.classList.toggle("hide");
});
