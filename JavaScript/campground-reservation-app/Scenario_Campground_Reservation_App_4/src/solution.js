/**
 * Write a function named `additionalCapacity`
 */
//declare if a campsite is reserved.
//if not add the partySize to a declared variable.

function additionalCapacity(campgrounds) {
  let totalSize = 0;
  for (let i = 0; i < campgrounds.length; i++) {
    if (campgrounds[i].isReserved === false) {
      totalSize += campgrounds[i].partySize;
    }
  }
  return totalSize;
}
// Do not make changes below this line
module.exports = additionalCapacity;
