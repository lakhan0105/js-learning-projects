const quizData = [
  {
    question: "What is your Name?",
    a_text: "Dinesh",
    b_text: "Sarvan",
    c_text: "Charith",
    d_text: "Lakhan",
    ans: "d",
  },

  {
    question: "Which IPL team doesn't have any trophy?",
    a_text: "Rcb",
    b_text: "Csk",
    c_text: "Lsg",
    d_text: "Mi",
    ans: "a",
  },
];

// Selecting the elements
const cardCont = document.querySelector(".card-container");
const questionTxt = document.querySelector(".question-text");
const optionA = document.querySelector(".textA");
const optionB = document.querySelector(".textB");
const optionC = document.querySelector(".textC");
const optionD = document.querySelector(".textD");
const submitBtn = document.querySelector(".submit-btn");
const radioInputs = document.querySelectorAll("input");
// const optionEls = document.querySelectorAll(".option");

// Initialization
let questionNum = 0;
let score = 0;

// Function to load the question and options
function loadData() {
  const currentQuestion = quizData[questionNum];
  questionTxt.textContent = currentQuestion.question;
  optionA.textContent = currentQuestion.a_text;
  optionB.textContent = currentQuestion.b_text;
  optionC.textContent = currentQuestion.c_text;
  optionD.textContent = currentQuestion.d_text;
}

window.addEventListener("DOMContentLoaded", function () {
  loadData();
});

// Function to check if the radio value is checked or not
function nextQuestionNumber() {
  radioInputs.forEach((radio) => {
    if (radio.checked) {
      questionNum++;
      radio.checked = false;
    }
  });
}

function loadNextQuestion() {
  if (questionNum <= quizData.length - 1) {
    loadData();
  } else {
    cardCont.textContent = `${score}/${quizData.length} Answers were correct`;
    console.log(score);
  }
}

const fetchAnswer = function () {
  let answer = undefined;
  radioInputs.forEach((radio) => {
    if (radio.checked) {
      answer = radio.id;
    }
  });
  return answer;
};

// Event for submit btn
submitBtn.addEventListener("click", function () {
  // update the score when asnwer is correct
  let answer = fetchAnswer();
  if (answer === quizData[questionNum].ans) {
    score++;
  }

  nextQuestionNumber();
  loadNextQuestion();
});
