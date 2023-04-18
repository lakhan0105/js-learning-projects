// select the elements
const simpleColBtn = document.querySelector(".simple-color-btn");
const colorEl = document.querySelector(".color");
const mainEl = document.querySelector("main");

// set an array of colors
const colorsArray = ["red", "blue", "green", "purple", "white"];

// random number from 0 to colorsArray length-1 (and then +1)
const randomNumber = function () {
  return Math.floor(Math.random() * colorsArray.length);
};

// Button click event listener
simpleColBtn.addEventListener("click", function () {
  const randomColor = colorsArray[randomNumber()]; // set random col to var
  mainEl.style.background = randomColor; // set main bg to randomColor variable
  colorEl.textContent = randomColor; // set the bgcol text to randomColor
});
