// Selecting the elements
const keys = document.querySelectorAll(".key");

// mousedown and mouseup event listeners
keys.forEach((key) => {
  // mousedown event
  key.addEventListener("mousedown", function (e) {
    key.classList.add("clicked"); // add clicked class

    if (e.currentTarget.classList.contains("key")) {
      let audioId = e.currentTarget.lastElementChild.id;
      let audio = document.querySelector(`#${audioId}`);
      audio.play();
    } else {
      console.log("This key is not working");
    }
  });

  // mouseup event
  key.addEventListener("mouseup", function () {
    key.classList.remove("clicked"); // remove clicked class
  });
});
