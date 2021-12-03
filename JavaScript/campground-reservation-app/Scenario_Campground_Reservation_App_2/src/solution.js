/**
 * Write a function named `campgroundCapacity`
 */

//write a function that returns the maximum number of people who can stay at the campgrounds.

function campgroundCapacity(campgrounds) {
  let total = 0;
  for (let i = 0; i < campgrounds.length; i++) {
    total += campgrounds[i].partySize;
  }
  return total;
}

// Do not make changes below this line

module.exports = campgroundCapacity;
