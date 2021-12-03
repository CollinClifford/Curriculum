/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0
  for (let item in cart) {
    const name = cart[item];
    const amount = name.quantity;
    const price = name.priceInCents;
    total += price * amount;
  } return total
}

function printCartInventory(cart) {
  let inventory = "";
  for (let item in cart) {
    const name = cart[item];
    const amount = name.quantity;
    inventory += `${amount}x${item}\n`
  } return inventory
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
