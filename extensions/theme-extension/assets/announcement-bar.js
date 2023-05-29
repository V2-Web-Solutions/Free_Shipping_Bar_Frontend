const ENV_LIVE_URL = "https://5b83-49-43-35-8.ngrok-free.app"

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

    if (cartPrice == 0) {

      freeShippingText.innerHTML = `${updateDataMessage.data.message1} <span style="color:${updateDataMessage.data.special_text_color}"> ${remainingAmount} </span> ${updateDataMessage.data.message2}`;
    }
    else if (cartPrice >= `${updateDataMessage.data.free_shipping_goal}`) {

      freeShippingText.textContent = `${updateDataMessage.data.message5}`;
    }
    else {

      freeShippingText.innerHTML = `${updateDataMessage.data.message3} <span style="color:${updateDataMessage.data.special_text_color}"> ${remainingAmount} </span> ${updateDataMessage.data.message4}`;
    }

    // styles for free shipping bar

    freeShippingBar.style.backgroundColor = `${updateDataMessage.data.background_color}`;
    freeShippingBar.style.backgroundImage = `${updateDataMessage.data.background_image}`;
    freeShippingBar.style.padding = `${updateDataMessage.data.bar_padding}px`;
    freeShippingBar.style.color = `${updateDataMessage.data.text_color}`;
    freeShippingBar.style.fontFamily = `${updateDataMessage.data.font_family}`;
    freeShippingBar.style.fontSize = `${updateDataMessage.data.font_size}px`;
    
   
    const disappearAfter = `${updateDataMessage.data.disappear_after}`;

    if(disappearAfter != 0) {
      setTimeout(function() { $(".v2-free-shipping-bar").hide(); }, disappearAfter * 1000)
    }

    const timeToFadeInOut = `${updateDataMessage.data.time_to_fade_in_out}`;

    if (timeToFadeInOut !== 0) {
      $(".v2-free-shipping-bar").css({ opacity: 0 }).animate({ opacity: 1 }, timeToFadeInOut * 1000);
    }

    const addLinkToBar = `${updateDataMessage.data.add_link_to_bar}`;

    if(addLinkToBar == "1"){
      freeShippingBar.style.cursor = 'pointer';
      freeShippingBar.addEventListener('click', function() {
        window.location.href = `${updateDataMessage.data.link_URL}`;
      });
    }

    const includeCloseButton = `${updateDataMessage.data.include_close_button}`;
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;"; // Add the close icon, such as an "X" symbol

    if (includeCloseButton == "1") {
      // Create close button element

      // Style the close button
      closeButton.style.position = "absolute";
      closeButton.style.top = "5px";
      closeButton.style.right = "10px";
      closeButton.style.cursor = "pointer";
      closeButton.style.fontSize = "24px";
      closeButton.style.fontWeight = "bold";
      closeButton.style.color = `${updateDataMessage.data.text_color}`;

      // Add click event listener to close the bar
      closeButton.addEventListener("click", function () {
        freeShippingBar.style.display = "none";
      });

      // Insert the close button after the free shipping bar
      freeShippingBar.parentNode.insertBefore(closeButton, freeShippingBar.nextSibling);
    }


    // Check if the current device width matches the specified conditions
    const deviceWidth = window.innerWidth;
    const displayOnMobileWidth = 768; // Set the desired width for displaying on mobile devices
    console.log("deviceWidth", deviceWidth, displayOnMobileWidth);

    // Check if the current page matches the specified conditions
    const currentPage = window.location.href;
    const displayOnPage = `${updateDataMessage.data.display_on_page}`; // Set to true to display on the home page
    // const displayOnURL = currentPage.includes("your-url"); // Replace "your-url" with the desired URL
    // const displayOnKeywords = currentPage.includes("keyword1") || currentPage.includes("keyword2"); // Replace "keyword1" and "keyword2" with desired keywords

    // Set the display style based on the device width condition
    // if (deviceWidth <= displayOnMobileWidth && (displayOnHomePage == "all" || isHomePage()) ) {
    //   console.log("aaaa");
    //   freeShippingBar.style.display = "block";
    // } else {
    //   console.log("bbbb");

    //   freeShippingBar.style.display = "none";
    // }

    // Check if the current URL matches the specified URL
    const specificURL = `${updateDataMessage.data.display_page_url}`; // Set the desired URL
    const isSpecificURL = window.location.href === specificURL;

    const displayOnHome = `${updateDataMessage.data.display_on_page}`; // Set the desired URL
    // const displayHome = window.location.href === displayOnHome;

    const str = `${updateDataMessage.data.display_page_keyword}`;

    // const str ='products,example2,example3,example4';

    // Check if the current page contains the specified keywords
    const keywordList = str.split(","); // Set the desired keywords
    const isPageWithKeywords = checkIfPageWithKeywords(keywordList); // Function to check if the current page contains the specified keywords
    

     // Set the display style based on the conditions
     const displayOnMobile = `${updateDataMessage.data.device_target}`; // Set to true to display on mobile devices
     console.log("displayOnMobile---",displayOnMobile, displayOnHome);
    //  const displayOnDesktop = `${updateDataMessage.data.device_target}`; // Set to true to display on desktop devices
    //  console.log("displayOnDesktop---",displayOnDesktop);


    //  if (
    //   (displayOnMobile && isMobileDevice && deviceWidth <= displayOnMobileWidth) ||
    //   (displayOnDesktop && !isMobileDevice && isHomePage) || isSpecificURL
    // ) {

    if(displayOnMobile == "displaymobile"){

      if ((isPageWithKeywords || isSpecificURL || displayOnPage == "all" || displayOnHome == "home" ) && displayOnMobile && deviceWidth <= displayOnMobileWidth) {
        
        freeShippingBar.style.display = "block";
      } else {
        console.log("iff else");
        freeShippingBar.style.display = "none";
        closeButton.style.display = "none";
      }
    } else if(displayOnMobile == "displaydesktop") {
      if ((isPageWithKeywords || isSpecificURL || displayOnPage == "all")  && displayOnDesktop && deviceWidth >= displayOnMobileWidth ) {
        console.log("elsee iff iff");
        freeShippingBar.style.display = "block";
      }else {
        console.log("elsee iff  elsee");
        freeShippingBar.style.display = "none";
        closeButton.style.display = "none";
      }
    } else {
      if (isPageWithKeywords || isSpecificURL || displayOnPage == "all") {
        console.log("elsee iff");
        freeShippingBar.style.display = "block";
      }else {
        console.log("elsee elsee");
        freeShippingBar.style.display = "none";
        closeButton.style.display = "none";
      }
    }
    

     // Set the display style based on the page conditions
    //  if(displayOnHomePage && isHomePage()){
    //   freeShippingBar.style.display = "block";
    //  }else {
    //   freeShippingBar.style.display = "none";
    // }

  } catch (error) {
    console.log("Error:", error);
  }
  
}

// Add event listener for window resize to update the free shipping bar based on device width
window.addEventListener("resize", updateFreeShippingBar);

// Function to check if the current page is the home page
function isHomePage() {
  return window.location.pathname === "/";
}

// Function to check if the current page contains the specified keywords
function checkIfPageWithKeywords(keywordList) {
  const currentPageURL = window.location.href;
  for (const keyword of keywordList) {
    console.log("currentPageURL---",currentPageURL,keyword,currentPageURL.includes(keyword));
    if (currentPageURL.includes(keyword)) {
      return true;
    }
  }
  return false;
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
