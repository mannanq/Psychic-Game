var alphabets, compChoice, userChoice, wins, loss, guessLeft, guessedArray;

wins = 0;
loss = 0;
guessLeft = 9;
guessedArray = [];

alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

document.onkeyup = function(e) {
  // computer choice to choose from the alphabet array above

  compChoice = alphabets[Math.floor(Math.random() * alphabets.length)];

  // read what user entered:

  userChoice = e.key.toLowerCase();

  console.log(compChoice);
  console.log(userChoice);

  // push the user guesses to an array

  guessedArray.push(userChoice);

  // check if computer choice and user guess match
  if (userChoice === compChoice) {
    // if they do, increment win counter, reset guesses to 9 and empty the guessed array
    wins++;
    guessLeft = 9;
    guessedArray = [];
  } else {
    // if they don't match, then reduce guesses left
    guessLeft--;
  }

  // once guesses remaining reach 0, increment loss counter and reset guesses left to 9. Also reset guessed array
  if (guessLeft === 0) {
    loss++;
    guessLeft = 9;
    guessedArray = [];
  }
  //console.log(compChoice);

  //
  document.getElementById('lettersGuess').innerHTML = ' ' + guessedArray + ' ';

  document.getElementById('wins').innerHTML = ' ' + wins;
  document.getElementById('losses').innerHTML = ' ' + loss;
  document.getElementById('guessLeft').innerHTML = ' ' + guessLeft;
};

//
