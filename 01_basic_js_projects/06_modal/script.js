// Selecting the elements
const showModalBtn = document.querySelector(".show-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modalContainer = document.querySelector(".modal-container");

// Event listener for show modal btn
showModalBtn.addEventListener("click", function () {
  modalContainer.classList.remove("hide");
});

// close modal btn event listener
closeModalBtn.addEventListener("click", function () {
  modalContainer.classList.add("hide");
});
