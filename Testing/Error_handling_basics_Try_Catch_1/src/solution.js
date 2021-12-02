function getCarColor(car) {
  try {
    if (!car) {
      throw "Color unknown";
    } else {
      return car.color
    }
  } catch (error) {
    return "Color unknown"
  }
}

//do not remove
module.exports = getCarColor;