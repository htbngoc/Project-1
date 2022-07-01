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
  alert(quantity + " box of 140gr x 24 has added to your basket!");
}

let shoppingCart = document.querySelector("#shopping-button");
shoppingCart.addEventListener("click", shopping);

let orderEvent = document.querySelector("#order-button");
orderEvent.addEventListener("click", makeOrder);

let addProductEvent = document.querySelector("#add-product");
addProductEvent.addEventListener("click", addProduct);
