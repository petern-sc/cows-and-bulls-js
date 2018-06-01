const { secretGenerator } = require("./secretGenerator");
const { run } = require("./program");

const secret = secretGenerator();
console.log('this is the secret', secret);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

run(secret, rl, console.log);
