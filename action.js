function shopping(event) {
  event.preventDefault;
  let decision = prompt("Check out already!?");
  decision = decision.toLowerCase().trim();

  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  if (decision === "yes") {
    alert("Thank you, " + name + ". We will contact you by " + email + "!");
  } else {
    alert("Let's shop a little bit more!");
  }
}

function makeOrder() {
  alert("Make your first $100 order with free shipping!");
}

function addProduct(event) {
  event.preventDefault;
  let quantity = prompt("How many boxes do you want to buy?");
  if (quantity > 0) {
    alert(quantity + " box of 140gr x 24 has added to your basket!");
  } else {
    alert("Let's order something!");
  }
}

let shoppingCart = document.querySelector("#shopping-button");
shoppingCart.addEventListener("click", shopping);

let orderEvent = document.querySelector("#order-button");
orderEvent.addEventListener("click", makeOrder);

let addProductEvent = document.querySelector("#add-product");
addProductEvent.addEventListener("click", addProduct);

let addProductEvent1 = document.querySelector("#add-product-1");
addProductEvent1.addEventListener("click", addProduct);

let addProductEvent2 = document.querySelector("#add-product-2");
addProductEvent2.addEventListener("click", addProduct);

let addProductEvent3 = document.querySelector("#add-product-3");
addProductEvent3.addEventListener("click", addProduct);

let addProductEvent4 = document.querySelector("#add-product-4");
addProductEvent4.addEventListener("click", addProduct);

let addProductEvent5 = document.querySelector("#add-product-5");
addProductEvent5.addEventListener("click", addProduct);
