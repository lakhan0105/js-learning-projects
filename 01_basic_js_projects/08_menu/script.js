// Items information array
const menuItems = [
  {
    id: 1,
    category: "breakfast",
    img: "./images/item-1.jpeg",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 2,
    category: "breakfast",
    img: "./images/item-2.jpeg",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 3,
    category: "breakfast",
    img: "./images/item-3.jpeg",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 4,
    category: "breakfast",
    img: "./images/item-4.jpeg",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 5,
    category: "breakfast",
    img: "./images/item-5.jpeg",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 6,
    img: "./images/item-6.jpeg",
    category: "dinner",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 7,
    img: "./images/item-7.jpeg",
    category: "lunch",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 8,
    img: "./images/item-8.jpeg",
    category: "lunch",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
  {
    id: 9,
    img: "./images/item-9.jpeg",
    category: "lunch",
    title: "ButterMilk",
    price: 271,
    itemInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nam fuga, similique expedita",
  },
];

// Selecting the elements
const menuItemsCont = document.querySelector(".menu-container");
const btnsConatiner = document.querySelector(".btns-container");

// Function to displat the menu items
const displayMenu = function (arr) {
  const mappedMenu = arr
    .map(function (item) {
      return `<article class="menu-item">
                <div class="item-image">
                    <img src="${item.img}" alt="not found">
                </div>
                <div class="item-info">
                    <div class="header">
                        <h2 class="item-title">${item.title}</h2>
                        <h2 class="item-price">₹${item.price}</h2>
                    </div>
                    <p class="item-text">${item.itemInfo}</p>
                </div>
            </article>`;
    })
    .join("");

  return mappedMenu;
};

// Function to display the filter btns dynamically
const displaybtns = function () {
  // create an array of categories
  const categoriesArray = menuItems.reduce(
    function (acc, curr) {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    },
    ["all"]
  );

  //   map the btns
  const mappedBtns = categoriesArray
    .map(function (category) {
      return `
    <button class="btn ${category}-btn" data-id="${category}">
        ${category}
    </button>
    `;
    })
    .join("");
  btnsConatiner.innerHTML = mappedBtns;

  const btns = document.querySelectorAll(".btn"); // sel the btns
  //   add event listeners fot the btns
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const id = e.currentTarget.dataset.id; // get the category of the btn

      //   filter the categories
      const filtered = menuItems.filter(function (item) {
        if (item.category === id) {
          return item;
        }
      });

      //   check the category and display
      if (id === "all") {
        menuItemsCont.innerHTML = displayMenu(menuItems);
      } else {
        menuItemsCont.innerHTML = displayMenu(filtered);
      }
    });
  });
};

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", function () {
  displaybtns();
});
