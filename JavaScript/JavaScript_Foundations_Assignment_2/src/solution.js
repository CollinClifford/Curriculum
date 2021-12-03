/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents = 0) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

// Using let and const
// Using template strings
// Using inline if statements, if it makes sense
// Looping over objects with let/in
// Destructuring and the rest operator
// Using function parameter destructuring and defaults
// Writing readable code


function chooseItemByNameAndSize(products = 0, name, size) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name === name) {
      for (let j = 0; j < product.availableSizes.length; j++) {
        const sizes = product.availableSizes[j];
        if (sizes === size) {
          const result = product;
          return result;
        }
      }
    }
    return null;
  }
}

function addProductToCart(product, cart = {}) {
  const existingCart = cart[product.name];
  if (existingCart) {
    existingCart.quantity += 1;
  } else {
    cart[product.name] = {
      priceInCents: product.priceInCents,
      quantity: 1
    }
  } return cart;
}

function calculateTotal(cart) {
  let total = 0;
  for (let name in cart) {
    const item = cart[name];
    const amount = item.quantity;
    const price = item.priceInCents;
    total += price * amount;
  }
  return total;
}

function printReceipt(cart = {}) {
  let receipt = null;
  let itemize = "";
  for (let name in cart) {
    const item = cart[name];
    const amount = item.quantity;
    const cost = item.priceInCents * amount;
    const dollarAmount = printablePrice(cost);
    const total = calculateTotal(cart);
    itemize += `${amount}x${name} - ${dollarAmount}\n`;
    receipt = itemize + `Total: $${(total / 100).toFixed(2)}`;
  }
  return receipt;
}

// `"2xCourt Sneaker - $176.00\n1xBlack Hat - $23.00\nTotal: $199.00"`

function printReceipt(cart = {}) {
  if (Object.keys(cart).length === 0) return null;
  let receipt = null;
  let itemize = "";
  for (let name in cart) {
  const { 
    priceInCents,
    quantity
  } = cart[name]
  const dollarAmount = printablePrice(priceInCents * quantity);
  itemize += `${quantity}x${name} - ${dollarAmount}\n`
} const total = calculateTotal(cart) 
return receipt = itemize + `Total: $${(total/100).toFixed(2)}` 
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
