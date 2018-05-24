const secretGenerator = () => {
  let secret = '';
  for (var i = 0; i < 4; i++) {
    secret += getRandomInt(9)
  }

  return secret;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  secretGenerator
}