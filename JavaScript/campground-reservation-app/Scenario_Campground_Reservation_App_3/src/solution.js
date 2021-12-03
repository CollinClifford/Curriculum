/**
 * Write a function named `availableCampsites`
 */

//write a function that returns the campground number to an array if the campground is not reserved.
//determine if the campground is reserved
//push the number to the array.

function availableCampsites(campgrounds) {
  const available = [];
  for (let i = 0; i < campgrounds.length; i++) {
    if (campgrounds[i].isReserved === false) {
      available.push(campgrounds[i].number);
    }
  }
  return available;
}

// Do not make changes below this line
module.exports = availableCampsites;
