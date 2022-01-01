function validateZip(req, res, next) {
  const zip = req.params.zip;
  console.log(zip);
  if (zip.length === 5 && typeof zip === "number") {
    next();
  } else {
    res.send(`Zip (${zip}) is invalid`);
  }
}
module.exports = validateZip;
