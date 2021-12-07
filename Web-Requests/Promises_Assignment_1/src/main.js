const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  const promise = tell(question);
  let result = [];
  result.push(`Your question was: ${question}`);
  return promise
    .then((fortune) => result.concat(`Your fortune is: ${fortune}`))
    .catch((error) => `There was an error: ${error}`);
  return result;
}

function fullSession(question) {
  const promise = tell(question);
  const result = [];
  welcome().then((welcome) => result.push(welcome));
  promise.then((fortune) => {
    result.push(`Your question was: ${question}`);
    result.push(`Your fortune is: ${fortune}`);
  });
  promise.catch((error) => result.push(`There was an error: ${error}`));
  goodbye().then((goodbye) => result.push(goodbye));
  return result;
}


module.exports = { getFortune, fullSession };
