// selecting the elements
const plusIcon = document.querySelectorAll(".plus-icon");
const btns = document.querySelectorAll(".btn");
const answerEl = document.querySelectorAll(".answer");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle("show-text");
  });
});
