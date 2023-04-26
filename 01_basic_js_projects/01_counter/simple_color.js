
// colors array
const colors = ["red", "green", "blue", "orange"];

// Selecting the elements
const colorValue = document.querySelector(".color");
const simpleBtn = document.querySelector(".simple-color-btn");
const mainEl = document.querySelector("main");

// Function to generate random number till the length of the array passed in it
const genRandom = function (arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return rand;
};

// Event Listeners for generate simple color button
simpleBtn.addEventListener("click", function () {
  const randomNum = genRandom(colors); // store rand num in a var
  colorValue.textContent = colors[randomNum]; // change the dom text
  mainEl.style.backgroundColor = colors[randomNum]; // change the bg color of main
});
