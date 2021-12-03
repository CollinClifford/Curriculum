/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter(park => park.location.state === state)
}

function getWishlistParksForUser(parks, users, name) {
  const wlPark = [];
  return parks.filter(park => {
    const userWL = users[name].wishlist;
    if (userWL.includes(park.id)) {
      wlPark.push(park);
      return wlPark;
    } 
  })
}

function userHasVisitedAllParksInState(parks, users, state, name) {
  const filteredPark = parks.filter(park => park.location.state === state);
  const filteredUser = users[name].visited;
  return filteredPark.every(park => filteredUser.includes(park.id));
}


function userHasVisitedParkOnWishlist(users, name1, name2) {
  const filteredVisitedUser = users[name1].visited;
  const filteredWishfulUser = users[name2].wishlist;
  return filteredVisitedUser.every(user => filteredWishfulUser.includes(user));
}


function getUsersForUserWishlist(users, name) {
  return Object.keys(users).filter(user => users[user].visited.some(id => users[name].wishlist.includes(id)))
}


module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
