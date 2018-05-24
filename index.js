const { matcher } = require("./matcher");
const { secretGenerator } = require("./secretGenerator");

const secret = secretGenerator();
console.log('this is the secret', secret);

console.log(matcher({ guess: '1234', secret: secret }));
