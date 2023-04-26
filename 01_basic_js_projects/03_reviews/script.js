// Array containing all the review information
const infoArray = [
  {
    id: 0,
    img: "./images/0_image.jpg",
    author: "Lakhan",
    job: "Web developer",
    review:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry",
  },
  {
    id: 1,
    img: "./images/1_image.jpg",
    author: "Dinesh",
    job: "social media manager",
    review:
      "Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. ",
  },
  {
    id: 2,
    img: "./images/2_image.jpg",
    author: "Sarvan",
    job: "Software Engineer",
    review:
      "Chambray pop-up. I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry",
  },
  {
    id: 3,
    img: "./images/3_image.jpg",
    author: "Dhanush",
    job: "Photographer",
    review:
      "sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry. I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they ",
  },
  {
    id: 4,
    img: "./images/4_image.jpg",
    author: "Sachin",
    job: "business managaer",
    review:
      "sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry. I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they ",
  },
];

// Initialisation
let id = 0;

// Selecting the elements
const imgEl = document.querySelector(".image");
const authorEl = document.querySelector(".author");
const jobEl = document.querySelector(".job");
const reviewEl = document.querySelector(".review");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", function () {
  id = 0;
  updateReview(id);
});

// Function to update the review content
function updateReview(id) {
  imgEl.src = infoArray[id].img;
  authorEl.textContent = infoArray[id].author;
  jobEl.textContent = infoArray[id].job;
  reviewEl.textContent = infoArray[id].review;
}

// generate random function
function genRandom() {
  return Math.floor(Math.random() * infoArray.length);
}

// nextBtn
nextBtn.addEventListener("click", function () {
  if (id < infoArray.length - 1) {
    id++;
    updateReview(id);
  } else {
    id = 0;
    updateReview(id);
  }
});

// previous button
prevBtn.addEventListener("click", function () {
  if (id <= 0) {
    id = infoArray.length - 1;
    updateReview(id);
  } else {
    id--;
    updateReview(id);
  }
});

// random btn event listener
randomBtn.addEventListener("click", function () {
  id = genRandom();
  updateReview(id);
});
