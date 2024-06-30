const products = [
  {
    id: 1,
    name: "Noodles",
    image: "images/noodles.svg",
    price: 73,
    amount: 0,
    calculatePrice() {
      return this.price * this.amount;
    },
  },
  {
    id: 2,
    name: "Burger",
    image: "images/burger.svg",
    price: 45,
    amount: 0,
    calculatePrice() {
      return this.price * this.amount;
    },
  },
  {
    id: 3,
    name: "Twister",
    image: "images/twister.svg",
    price: 28,
    amount: 0,
    calculatePrice() {
      return this.price * this.amount;
    },
  },
  {
    id: 4,
    name: "Vinegar",
    image: "images/vinegar.svg",
    price: 18,
    amount: 0,
    calculatePrice() {
      return this.price * this.amount;
    },
  },
];

const buttons = document.querySelectorAll(".section__two-button"),
  cartButton = document.querySelector(".navbar__button"),
  counter = document.querySelector(".navbar__button span"),
  model = document.querySelector(".model"),
  closeButton = document.querySelector(".model__button"),
  counterTwo = document.querySelector(".model__title span"),
  modelContent = document.querySelector(".model__content");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const parent = button.closest(".section__two-card");
    const attribute = parent.getAttribute("id");

    let commonAmount = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const name = product.name.toLowerCase();

      if (attribute === name) {
        if (button.getAttribute("data-attribute") === "+") {
          const amount = (product.amount += 1);

          if (product.amount >= 1) {
            modelContent.innerHTML += addToCart(product);
          }

          button.previousElementSibling.textContent = amount;
        } else if (button.getAttribute("data-attribute") === "-") {
          if (product.amount >= 1) {
            const amount = (product.amount -= 1);

            button.nextElementSibling.textContent = amount;
          }
        }
      }

      commonAmount += product.amount;
    }

    if (commonAmount >= 1) {
      counterTwo.textContent = `(${commonAmount})`;
    } else {
      counterTwo.textContent = "Пустая";
    }

    counter.textContent = commonAmount;
  });
});

cartButton.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  model.style.display = "block";
});

closeButton.addEventListener("click", () => {
  document.body.style.overflowY = "visible";
  model.style.display = "none";
});

function addToCart(product) {
  return `
  <div class="model__content-item">
    <div class="model__content-information">
      <h3 class="model__content-title">
        ${product.name}
      </h3>  
      <p class="model__content-text">
        $${product.price}
      </p>
    </div>
    <span class="model__content-amount">
        ${product.amount}
    </span>
    <div class="model__content-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>
  </div>
  `;
}
