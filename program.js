const { matcher } = require("./matcher");

const run = (secret, rl) => {
  rl.question("Guess: ", input => {
    if (input === "quit") {
      rl.close();
    } else {
      const matched = matcher({ guess: input, secret: secret });
      if (matched.fullMatch()) {
        rl.close();
      } else {
        console.log(matched);
        run(secret, rl);
      }
    }
  });
};

module.exports = {
  run
};
