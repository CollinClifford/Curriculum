/**
 * Write a function named `findMyCampsites`
 
 The biggest feature that our users have requested is findMyCampsites. People want to know which campsites are available that can fit their party size and which have their desired view. Can you help us?

Write a function findMyCampsites. Given a campgrounds array, a type of view as a string, and the party size as a number, return an array with campsite numbers for the matching campsites.

currently available campsites (isReserved === false)
with the view that matches the input string (e.g. ocean or forest)
that can host the party size of the input number, or greater
If no sites are available, return the string 'Sorry, no campsites with that view are available to host your party'
 */

function findMyCampsites(campgrounds, view, size) {
  const available = [];
  for (let i = 0; i < campgrounds.length; i++) {
    if (
      campgrounds[i].isReserved === false &&
      campgrounds[i].view === view &&
      campgrounds[i].partySize >= size
    ) {
      available.push(campgrounds[i].number);
    }
  }
  if (available.length === 0) {
    return "Sorry, no campsites with that view are available to host your party";
  }
  return available;
}

// Do not make changes below this line
module.exports = findMyCampsites;
