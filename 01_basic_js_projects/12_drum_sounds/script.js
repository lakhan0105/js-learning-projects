const keys = document.querySelectorAll(".key");

// play audio function which takes the keyElCode/keyboardBtnCode as argument
function playAudio(specialCode) {
  let audioEl = document.querySelector(`[data-audio-code="${specialCode}"]`);
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play();
  } else {
    console.log("the press key/sound not  available ");
  }
}

// Click Event listener ----------------------------------------------------------------------------------
keys.forEach((key) => {
  key.addEventListener("click", function (e) {
    const keyElCode = e.currentTarget.dataset.keyElCode;
    playAudio(keyElCode);
  });

  key.addEventListener("transitionend", removeClicked);
});

// keydown Event Listener --------------------------------------------------------------------------------
window.addEventListener("keydown", (e) => {
  const keyboardBtnCode = e.keyCode;

  playAudio(keyboardBtnCode);
  const keyEl = document.querySelector(
    `.key[data-key-el-code="${keyboardBtnCode}"]`
  );
  if (keyEl) {
    keyEl.classList.add("clicked");
  }
});

// Function to remove transition
function removeClicked(e) {
  this.classList.remove("clicked");
}
