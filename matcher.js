const matcher = ({ guess, secret }) => {
  const guessArray = guess.split('');
  const secretArray = secret.split('');

  return new Match(
    getCows(guessArray, secretArray),
    getBulls(guessArray, secretArray)
  )
}

class Match {
  constructor(cows, bulls){
    this.cows = cows;
    this.bulls = bulls;
  }
  fullMatch() {
    return this.bulls === 4
  }
}

const getBulls = (guessArray, secretArray) => {
  let bulls = 0;
  guessArray.forEach((guessDigit, guessIndex) => {
    if (guessDigit === secretArray[guessIndex]) {
      bulls += 1
    }
  });
  return bulls;
}

const getCows = (guessArray, secretArray) => {
  let cows = 0;
  guessArray.forEach((guessDigit, guessIndex) => {
    secretArray.forEach((secretDigit, secretIndex) => {
      if ((secretDigit === guessDigit) && (guessIndex !== secretIndex)) {
        cows += 1
      }
    })
  });
  return cows;
}

module.exports = {
  matcher
}