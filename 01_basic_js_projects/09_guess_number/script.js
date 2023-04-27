// Selecting the elements
const usrInputEl = document.querySelector(".input-number");
const checkBtn = document.querySelector(".check-btn");
const playAgainBtn = document.querySelector(".again-btn");
const gameTitleEl = document.querySelector(".game-title");
const resultEl = document.querySelector(".result");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");

// Initialisation
let score = 20;
let highscore = 20;
let usrInput;

// Function to generarte Random number
const genRandomNum = function () {
  return Math.floor(Math.random() * 20) + 1;
};
let randomNumber = genRandomNum();

// Function to check the result
function checkResult() {
  usrInput = Number(usrInputEl.value);

  if (!(usrInput <= 0)) {
    if (usrInput === randomNumber) {
      resultEl.textContent = usrInput;
      gameTitleEl.textContent = "Play Again!";
      updateHighScore();
      updateMessage("You guessed it right!");
      changeColor("green");
      usrInputEl.setAttribute("disabled", "disabled");
    } else if (usrInput !== randomNumber) {
      changeColor("#201f20");
      updateMessage(`${usrInput > randomNumber ? "too high" : "too low"}`);
      decreaseScore();
    }
  } else {
    updateMessage("Invalid input");
    changeColor("red");
  }
}

// Function to update the message
function updateMessage(message) {
  messageEl.textContent = message;
}

// Function to update the highscore
function updateHighScore() {
  highscore = score;
  highScoreEl.textContent = highscore;
}

// Function  to decrease the score
function decreaseScore() {
  if (score > 1) {
    score--;
    scoreEl.textContent = score;
  } else {
    score = 0;
    scoreEl.textContent = score;
    gameTitleEl.textContent = "You loose";
    changeColor("red");
    usrInputEl.setAttribute("disabled", "disabled");
    updateMessage("Play again!");
  }
}

// Function to change the color
function changeColor(color) {
  headerEl.style.backgroundColor = color;
  mainEl.style.backgroundColor = color;
}

// Function to play again
function playAgain() {
  randomNumber = genRandomNum();
  console.log(randomNumber);
  gameTitleEl.textContent = "Guess My Number!";
  resultEl.textContent = "?";
  usrInputEl.value = "";
  score = 20;
  scoreEl.textContent = score;
  updateMessage("Start Guessing...");
  changeColor("#201f20");
  usrInputEl.removeAttribute("disabled", "disabled");
}

// Event Listener for check btn
checkBtn.addEventListener("click", function () {
  checkResult();
});

// Event Listener for play again btn
playAgainBtn.addEventListener("click", playAgain);
