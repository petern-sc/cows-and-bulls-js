const matcher = (guess, secret) => {
  let bulls = 0;
  let potentialCows = 0;
  const guessArray = guess.split('');
  const secretArray = secret.split('');

  guessArray.forEach((guessDigit, index) => {
    if (guessDigit === secretArray[index]) {
      bulls += 1
    }
    secretArray.forEach((secretDigit, index) => {
      if (secretDigit === guessDigit) {
        potentialCows += 1
      }
    })
  });

  const cows = potentialCows - bulls;

  return {
    bulls: bulls,
    cows: cows,
  }
}

module.exports = {
  matcher
}