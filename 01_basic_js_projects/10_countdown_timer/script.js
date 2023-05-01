// Selecting the elements
const counts = document.querySelectorAll(".count");
const hrsCount = document.querySelector(".hours-count");
const minsCount = document.querySelector(".mins-count");
const secsCount = document.querySelector(".secs-count");
const messageEl = document.querySelector(".message");
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset-btn");
const playPauseBtn = document.querySelector(".play-pause-btn");
const playIcon = document.querySelector(".play-btn");
const pauseIcon = document.querySelector(".pause-btn");
const btns = document.querySelectorAll(".btn");
const timeTxt = document.querySelectorAll(".time-txt");

// Variables to store the input value when user enters it
let minutes;
let hours;
let seconds;
let total = 0;
let interval;

function decreaseTime() {
  total =
    Number(hrsCount.value) * 3600 +
    Number(minsCount.value) * 60 +
    Number(secsCount.value);
  total--;

  if (total >= 0) {
    hours = Math.floor(total / (60 * 60));
    minutes = Math.floor((total % 3600) / 60);
    seconds = Math.floor(total % 60);

    hrsCount.value = hours;
    minsCount.value = minutes;
    secsCount.value = seconds;
  } else {
    messageEl.textContent = "Time up";
  }
}

function showPauseBtn() {
  playIcon.classList.add("hide");
  pauseIcon.classList.remove("hide");
}

function showPlayBtn() {
  playIcon.classList.remove("hide");
  pauseIcon.classList.add("hide");
}

function fillEmpty() {
  if (hrsCount.value === "") {
    hrsCount.value = `00`;
  }
  if (minsCount.value === "") {
    minsCount.value = `00`;
  }
  if (secsCount.value === "") {
    secsCount.value = `00`;
  }
}

function showTxt() {
  timeTxt.forEach(function (time) {
    time.classList.remove("hide");
    counts.forEach(function (count) {
      count.style.border = "none";
    });
  });
}

function hideTxt() {
  timeTxt.forEach(function (time) {
    time.classList.add("hide");
    counts.forEach(function (count) {
      count.style.borderBottom = "1px solid";
    });
  });
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    fillEmpty();
    showTxt();

    if (!(secsCount.value < 0 && hrsCount.value < 0 && minsCount.value < 0)) {
      if (e.currentTarget.classList.contains("play-btn")) {
        clearInterval(interval);
        interval = setInterval(decreaseTime, 1000);
        showPauseBtn();
      } else if (e.currentTarget.classList.contains("pause-btn")) {
        clearInterval(interval);
        showPlayBtn();
      } else if (e.currentTarget.classList.contains("reset-btn")) {
        console.log("reset");
        clearInterval(interval);
        hrsCount.value = "";
        minsCount.value = "";
        secsCount.value = "";
        messageEl.textContent = "Enter the input ";
        showPlayBtn();
        hideTxt();
      }
    } else {
      messageEl.textContent = "Please enter the input";
    }
  });
});

// remove the message when the inputt starts to fill
counts.forEach(function (count) {
  count.addEventListener("input", function () {
    messageEl.textContent = "";
  });
});
