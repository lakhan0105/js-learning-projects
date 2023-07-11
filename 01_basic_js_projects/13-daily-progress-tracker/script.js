const tasksArray = [];
const cardsArray = [];

const monthsArray = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

let currDate;

// Selecting the elements
const startTime = document.querySelector(".start-time");
const endTime = document.querySelector(".end-time");
const taskInput = document.querySelector(".task-input");
const submit = document.querySelector(".submit-btn");
const taskList = document.querySelector(".task-list"); // ul tag
const dateEl = document.querySelector(".date");
const sidebarContainer = document.querySelector(".sidebar-container");
const sidebarCard = document.querySelector(".sidebar-card");
const sidebarCardsContainer = document.querySelector(
  ".sidebar-cards-container"
);
const sidebarTaskList = document.querySelector(".sidebar-task-list");
const taskCard = document.querySelector(".task-card");

// Event Listener (Submit button)
submit.addEventListener("click", function (e) {
  // Date Object
  const dateObject = new Date();
  const date = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  const time = dateObject.valueOf();
  currDate = `${date} - ${monthsArray[month]} - ${year}`;

  // Prevent the default behaviour of submit btn
  e.preventDefault();

  // Store the values in a object
  const obj = {
    startTime: startTime.value,
    endTime: endTime.value,
    taskInput: taskInput.value,
    taskDate: currDate,
  };

  // push the object to the tasksArray
  tasksArray.push(obj);

  // create a card object
  const cardObj = {
    time: time,
    date: currDate,
    tasks: tasksArray,
  };
  cardsArray.push(cardObj);
  // console.log(cardsArray);

  // Reset the input values
  startTime.value = "";
  endTime.value = "";
  taskInput.value = "";

  // Display/update the task items in the card
  displayText(tasksArray);
  displaySidebarCards(tasksArray);
});

//   Function to display/update the task items in the card
function displayText(arr) {
  // update the dateObject in the card
  dateEl.textContent = currDate;

  // cardsArray.forEach((card)=>{
  //   if(card.date===currDate){
  //     const mapped = arr.map(function(item){

  //     })
  //   }
  // })

  // update the list items
  const mapped = arr
    .map(function (item) {
      const { startTime, endTime, taskInput } = item;
      // console.log(startTime, endTime, taskInput);

      return `<li class="task-item">
                    <div class="task-time-text-container">
                        <span class="start-time-text">${startTime}</span>
                        <span class="end-time-text"> <span>-</span> ${endTime}</span>
                    </div>
                    <p class="task-input-text">${taskInput}</p>
                </li>
                `;
    })
    .join("");
  taskList.innerHTML = mapped;

  //   Display card in the sidebar
  sidebarContainer.classList.add("show");
}

console.log(tasksArray);

function displaySidebarCards(arr) {
  const mapped = arr
    .map(function (item) {
      const { taskDate, startTime, endTime, taskInput } = item;

      return `<li class="sidebar-card">
                <div class="sidebar-date-container">
                    <p class="sidebar-date">${taskDate}</p>
                </div>
                <ul class="sidebar-task-list">
                    <li class="task-item">
                        <div class="task-time-text-container">
                            <span class="start-time-text">${startTime}</span>
                            <span class="end-time-text"> <span>-</span> ${endTime}</span>
                        </div>
                        <p class="task-input-text">${taskInput}</p>
                    </li>
                </ul>
            </li>`;
    })
    .join("");

  sidebarCardsContainer.innerHTML = mapped;
}
