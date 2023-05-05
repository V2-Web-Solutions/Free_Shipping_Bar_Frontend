// Function to format a currency amount as a string
function formatCurrency(amount, currency) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    amount
  );
}

// Function to check if the cart qualifies for free shipping
async function isFreeShippingEligible() {
  const response = await fetch("/cart.js");
  const cart = await response.json();
  return cart;
}

// Function to update the text of the free shipping bar
async function updateFreeShippingBar() {
  console.log("called");
  const freeShippingBar = document.querySelector(".free-shipping-bar");
  const freeShippingText = freeShippingBar.querySelector(".free-shipping-text");
  const cart = await isFreeShippingEligible();
  const cartPrice = cart.total_price / 100;

  if (cartPrice > 5000) {
    freeShippingText.textContent =
      "Congratulations! You qualify for free shipping!";
  } else {
    const remainingAmount = formatCurrency(5000 - cartPrice, cart.currency);

    freeShippingText.textContent = `Spend ${remainingAmount} more to qualify for free shipping`;
  }
}

// Listen for cart updates and update the free shipping bar accordingly
// document.addEventListener("cart:update", function (event) {
//   // console.log("details", event.detail.cart);
//   console.log("cart update");
//   updateFreeShippingBar();
// });

// Update the free shipping bar when the page loads
updateFreeShippingBar();
