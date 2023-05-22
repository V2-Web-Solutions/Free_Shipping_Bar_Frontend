const shopName = myApp.shopName;
// console.log("shopName---",shopName);
const updateData = async () => {
  let file = "https://5760-49-43-34-232.ngrok-free.app/api/getIsActive";

  try {
    const response = await fetch(file, {
      headers: {
        "X-Shop-Name": shopName,
        "Access-Control-Allow-Headers": "*",
      },
    });
    const data = await response.json();
    // console.log("data---", data);
    return data;
  
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};


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
 
  try {
    const updateDataMessage = await updateData()
    const freeShippingBar = document.querySelector(".free-shipping-bar");
    const freeShippingText = freeShippingBar.querySelector(".free-shipping-text");
    const cart = await isFreeShippingEligible();
    const cartPrice = cart.total_price / 100;

    if (cartPrice > 5000) {
      freeShippingText.textContent = `${updateDataMessage.data.message5}`;      
  } else {
    const remainingAmount = formatCurrency(5000 - cartPrice, cart.currency);

    freeShippingText.textContent = `Spend ${remainingAmount} more to qualify for free shipping`;
  }

  } catch (error) {
    console.log("Error:", error);
  }
  
}

// Function to update the cart using the Shopify AJAX API
function updateCart() {
  const params = {
    type: "POST",
    url: "/cart/update.js",
    dataType: "json",
    success: function (cart) {
      updateFreeShippingBar();
    },
    error: function (XMLHttpRequest, textStatus) {
      console.log("Error:", textStatus);
    },
  };
  $.ajax(params);
}

// Listen for changes in the quantity input fields
document.addEventListener("change", updateCart);

// Update the free shipping bar when the page loads
updateFreeShippingBar();

