/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  let sentence = "";
  for (let i = 0; i < products.length; i++) {
    if (products.length === 1) {
      sentence = `There is ${products.length} item for sale: ${products[i].name}.`;
    } else if (products.length === 2) {
      const twoProducts = [];
      for (let j = 0; j < products.length; j++) {
        twoProducts.push(products[j].name);
        sentence = `There are ${products.length} items for sale: `;
        sentence += twoProducts.join(" and ") + ".";
      }
    } else if (products.length > 2) {
      const moreProducts = [];
      for (let j = 0; j < products.length; j++) {
        moreProducts.push(products[j].name)
        sentence = `There are ${products.length} items for sale: `
        sentence += moreProducts.join(", ") + "."
      }
    } return sentence;
  } if (sentence === "") {
    return `There are no items for sale.`
  }
}

module.exports = {
  listAllItems,
};
