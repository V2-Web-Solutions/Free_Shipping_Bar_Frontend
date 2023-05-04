const open = window.XMLHttpRequest.prototype.open;

function openReplacement() {
  this.addEventListener("load", function () {
    if (
      [
        "/cart/add.js",
        "/cart/update.js",
        "/cart/change.js",
        "/cart/clear.js",
      ].includes(this._url)
    ) {
      calculateShipping(this.response);
    }
  });
  return open.apply(this, arguments);
}

window.XMLHttpRequest.prototype.open = openReplacement;

function calculateShipping(cartJson) {
  console.log("calculate new shipping");
  console.log(JSON.parse(cartJson));
}