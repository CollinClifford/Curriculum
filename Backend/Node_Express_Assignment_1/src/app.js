const express = require("express");

const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

const app = express();

app.use("/check/:zip", validateZip, (req, res, next) => {
  if (getZoos(zip)) {
    res.send(`${req.params.zip} exists in our records.`);
  } else {
    res.send(`${req.params.zip} does not exist in our records.`);
  }
});

app.use((err, req, res, next) => {
  res.send(`That route could not be found!`);
});

module.exports = app;
