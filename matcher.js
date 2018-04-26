const matcher = (guess, secret) => {
  let bulls = 0;
  const guessArray = guess.split('');
  const secretArray = secret.split('');

  guessArray.forEach((digit, index) => {
    if (digit === secretArray[index]) {
      bulls += 1
    }
  });


  return {
    bulls: bulls,
    cows: 0,
  }
}

module.exports = {
  matcher
}