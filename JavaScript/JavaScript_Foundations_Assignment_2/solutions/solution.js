/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Court Sneaker",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, item, size) {
  
}

function addProductToCart(product, cart) {}

function calculateTotal(cart) {}

function printReceipt(cart) {}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
