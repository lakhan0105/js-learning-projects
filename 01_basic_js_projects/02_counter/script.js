// Selecting the elements
const btns = document.querySelectorAll(".btn");
const countEl = document.querySelector(".count");

// Initialise
let count = 0;

// Event Listener for all btns
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("increase-btn")) {
      count++;
      updateColor();
    } else if (btn.classList.contains("decrease-btn")) {
      count--;
      updateColor();
    } else {
      count = 0;
      updateColor();
    }

    // update countEl 
    countEl.textContent = count;
  });
});

// Update color Function
function updateColor() {
  if (count < 0) {
    countEl.style.color = "red";
  } else if (count > 0) {
    countEl.style.color = "green";
  } else {
    countEl.style.color = "black";
  }
}
