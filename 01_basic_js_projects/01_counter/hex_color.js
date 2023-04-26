// hex colors array
const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Selecting the elements
const hexBtn = document.querySelector(".hex-color-btn");
const hexText = document.querySelector(".color");
const mainEl = document.querySelector("main");

// Initialise
let hexCode = "#";

// Function to generate random numbers
function genRandom() {
  return Math.floor(Math.random() * hexColor.length);
}

// Function to generate hex color code
const generateHex = function () {
  hexCode = "#"; // reset the hexCode to '#'

  for (let i = 0; i < 6; i++) {
    hexCode += hexColor[genRandom()];
  }
  return hexCode;
};

// Event Listener for generate hex color btn
hexBtn.addEventListener("click", function () {
  hexText.textContent = generateHex(); // change the text value in the dom
  mainEl.style.backgroundColor = hexText.textContent; // change the mainEl bgcolor
});
