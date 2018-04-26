Cows & Bulls Part I

Bulls and Cows is a code-breaking game (which is what Mastermind was
based on) with the following rules.

1. The creator hides a secret 4 digit number
2. The guesser attempts to guess the secret number
3. The creator responds according to the following rules;
      3.1 For each digit that matches and is in the correct position = Bull
      3.2 For each digit that matches and is in the incorrect position = Cow

For example ;

Secret = 1234
Guess = 9213

Response: 1 Bull, 2 Cows  [ this is not part of the output, but an
explanation (the bull = '2', the cows = '1', '3') ]

4. The guesser wins when they correctly identify the secret number

The puzzle is to build a computer assisted version of the game. The
computer will play the creator, and the player the guesser.

The requirements are;

1. Generate a secret
2. Obtain a guess from the user
3. Provide a response to the guess
4. Inform the user if they have successfully guessed the answer

Simple !