/**
 * Write a function named `countByView`
 */
//two parameters
//declares the number of campsites available within the view.

function countByView(campgrounds, view) {
  let available = 0;
  for (let i = 0; i < campgrounds.length; i++) {
    if (campgrounds[i].view === view) {
      available += 1;
    }
  }
  return available;
}

// Do not make changes below this line
module.exports = countByView;
