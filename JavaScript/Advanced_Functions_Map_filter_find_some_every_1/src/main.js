/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
  let result = null;
  result = parks.find(park => park.name === name);
  return result;
}

function allParksAboveCertainSize(parks, minSize) {
  const parkSize = parks.every(park => park.areaInSquareKm > minSize);
  return parkSize;
}

function getBigParkNames(parks, minSize) {
  const bigParks = parks.filter(park => park.areaInSquareKm > minSize);
  const parkNames = bigParks.map(park => park.name);
  return parkNames;
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  const parkState = parks.filter(park => park.location.state === state);
  const parkSize = parkState.some(park => park.areaInSquareKm > minSize);
  return parkSize;
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
