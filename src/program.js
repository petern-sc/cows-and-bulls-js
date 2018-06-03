const { matcher } = require("./matcher");
const { outputFormatter } = require('./outputFormatter');

const run = (secret, rl, output) => {
  rl.question("Guess: ", input => {
    if (input === "quit") {
      rl.close();
    } else {
      const matched = matcher({ guess: input, secret: secret });
      output(outputFormatter(matched));
      if (matched.fullMatch()) {
        output('YAY');
        rl.close();
      } else {
        run(secret, rl, output);
      }
    }
  });
};

module.exports = {
  run
};
