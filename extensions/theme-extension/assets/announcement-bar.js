const ENV_LIVE_URL = "https://d3e5-49-43-33-199.ngrok-free.app"

const shopName = myApp.shopName.replace(/^https?:\/\//, '');

const updateData = async () => {
  let file = ENV_LIVE_URL + "/api/getIsActive";

  try {
    const response = await fetch(file, {
      headers: {
        "X-Shop-Name": shopName,
        "Access-Control-Allow-Headers": "*",
      },
    });
    const data = await response.json();
    
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
    const freeShippingBar = document.querySelector(".v2-free-shipping-bar");
    const freeShippingText = freeShippingBar.querySelector(".v2-free-shipping-text");

    const cart = await isFreeShippingEligible();
    const cartPrice = cart.total_price / 100.00;
    console.log("cartPrice", cartPrice);

    const remainingAmount = formatCurrency(`${updateDataMessage.data.free_shipping_goal}` - cartPrice, cart.currency);

    const addLinkToBar = `${updateDataMessage.data.add_link_to_bar}`
    console.log("addLinkToBar---", typeof(addLinkToBar));

    // if(addLinkToBar == "1"){
    //   // $(".v2-free-shipping-bar").html(`<a href="#">Your Link Text</a>`);
    // }

    if (cartPrice == 0) {

      // if(addLinkToBar == "1"){
      //   freeShippingBar.innerHTML = `<a href="${updateDataMessage.data.link_URL}" class="v2-free-shipping-link">${updateDataMessage.data.message1} <span style="color:${updateDataMessage.data.special_text_color}"> ${remainingAmount} </span> ${updateDataMessage.data.message2}</a>`; 
      // }
      freeShippingText.innerHTML  = `${updateDataMessage.data.message1} <span style="color:${updateDataMessage.data.special_text_color}"> ${remainingAmount} </span> ${updateDataMessage.data.message2}`;
    }
    else if (cartPrice > `${updateDataMessage.data.free_shipping_goal}`) {
      // if(addLinkToBar == "1"){
      //   freeShippingBar.innerHTML = `<a href="${updateDataMessage.data.link_URL}" class="v2-free-shipping-link">${updateDataMessage.data.message5}</a>`; 
      // }
      freeShippingText.textContent = `${updateDataMessage.data.message5}`;
    }
    else {
      // if(addLinkToBar == "1"){
      //   freeShippingBar.innerHTML = `<a href="${updateDataMessage.data.link_URL}" class="v2-free-shipping-link">${updateDataMessage.data.message3} <span style="color:${updateDataMessage.data.special_text_color}"> ${remainingAmount} </span> ${updateDataMessage.data.message4}</a>`; 
      // }
      freeShippingText.innerHTML = `${updateDataMessage.data.message3} <span style="color:${updateDataMessage.data.special_text_color}"> ${remainingAmount} </span> ${updateDataMessage.data.message4}`;
    }

    // styles for free shipping bar

    freeShippingBar.style.backgroundColor = `${updateDataMessage.data.background_color}`;
    freeShippingBar.style.backgroundImage = `${updateDataMessage.data.background_image}`;
    freeShippingBar.style.padding = `${updateDataMessage.data.bar_padding}px`;
    freeShippingBar.style.color = `${updateDataMessage.data.text_color}`;
    freeShippingBar.style.fontFamily = `${updateDataMessage.data.font_family}`;
    freeShippingBar.style.fontSize = `${updateDataMessage.data.font_size}px`;
    freeShippingBar.style.cursor = 'pointer';
   
    const disappearAfter = `${updateDataMessage.data.disappear_after}`;

    if(disappearAfter != 0) {
      setTimeout(function() { $(".v2-free-shipping-bar").hide(); }, disappearAfter * 1000)
    }

    const timeToFadeInOut = `${updateDataMessage.data.time_to_fade_in_out}`;

    if (timeToFadeInOut !== 0) {
      $(".v2-free-shipping-bar").css({ opacity: 0 }).animate({ opacity: 1 }, timeToFadeInOut * 1000);
    }

    if(addLinkToBar == "1"){
      freeShippingBar.addEventListener('click', function() {
        window.location.href = `${updateDataMessage.data.link_URL}`;
      });
    }


    // if (timeToFadeInOut != 0) {
    //   $(".free-shipping-bar").fadeIn(timeToFadeInOut * 1000);
    //   console.log("fade----",$(".free-shipping-bar").fadeIn(timeToFadeInOut * 1000));
    // }

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
      console.log("Error:--updatecart", textStatus);
    },
  };
  $.ajax(params);
}

// Listen for changes in the quantity input fields
document.addEventListener("change", updateCart);

// Find the "Add to Cart" button on the page
const addToCartButton = document.querySelector(".product-form__submit");

// Add a click event listener to the "Add to Cart" button
if (addToCartButton) {
  addToCartButton.addEventListener("click", updateFreeShippingBar);
}

// setInterval(function() {
//   updateFreeShippingBar();
// }, 10000);

// Update the free shipping bar when the page loads
updateFreeShippingBar();
