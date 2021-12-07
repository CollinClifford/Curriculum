const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios.get("http://localhost:5000/constellations").then((response) => {
    const result = response.data.map((constellation) => {
      return constellation.name;
    });
    console.log(result);
  });
}

function getConstellationsByQuadrant(quadrant) {
  axios.get("http://localhost:5000/constellations").then((response) => {
    const result = response.data.filter((constellation) => {
      return constellation.quadrant === quadrant;
    });
    console.log(result);
  });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
