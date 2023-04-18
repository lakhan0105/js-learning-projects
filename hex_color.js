const hexColBtn = document.querySelector(".hex-color-btn");
const colorEl = document.querySelector(".color");
const mainEl = document.querySelector("main");

// random number from 0 to colorsArray length-1 (and then +1)
const randomNumber = function () {
  const hex = Math.floor(Math.random() * 15) + 1;
  if (hex === 10) {
    return "A";
  } else if (hex === 11) {
    return "B";
  } else if (hex === 12) {
    return "C";
  } else if (hex === 13) {
    return "D";
  } else if (hex === 14) {
    return "E";
  } else if (hex === 15) {
    return "F";
  } else {
    return hex;
  }
};

// Event Listener
hexColBtn.addEventListener("click", function () {
  colorEl.textContent = "#";
  for (let i = 1; i <= 6; i++) {
    colorEl.textContent += randomNumber(); // gen the color code in text format
  }
  const hexColor = colorEl.textContent; // assign the hex code to variable
  mainEl.style.backgroundColor = hexColor; // assign the color of main to hex code
});
