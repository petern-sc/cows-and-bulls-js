const { secretGenerator } = require("./secretGenerator");
const { run } = require("./program");
const readline = require("readline");

const secret = secretGenerator();
console.log('this is the secret', secret);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

run(secret, rl, console.log);
