var letters = ["a", "b", "c"]
//This array will hold what we have guessed//
var guessedLetters = [];
// This variable will randomly assigned one of the 3 letters
var letterToGuess = null;

// We will use this in order to start counting down
var wins = 0;
var loses = 0;

// Below we have created 3 functions in order to update the guess //

var updateGuessesLeft = function() {
// Here we are grabing the html element and setting it equal to the guessesLeft

document.querySelector("#guesses-left").innerHTML = guessesleft;
};

var updateLetterToGuess = function() {
// Here we get a random letterToGuess and assign it based on a random generator

lettersToGuess = letters[Math.floor(Math.random() * letters.length)]
};

var updateGuessesSoFar = function() {
 // Here we take the guess the user has tried //
 document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");   
};
// Function will be called when we reset everything //

var reset = function() {
guessesLeft = 9;
guessedLetters = [];
updateGuessesLeft();
updateGuessesSoFar();
};

//Execute on page load. //
updateLetterToGuess();
updateGuessesLeft();

//This function will capture the keyboards clicks//
document.onkeydown = function(event) {
    // Right now its gonna reduce guessesLeft by one //
    guessesLeft--;

    // Lowercase the letter
    var letter = String.fromCharCode(event.which).toLowerCase();

    // Then add the guess to the guessedLetters array
    guessedLetters.push(letter);

    //Then its going to run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();

    // We will check if there is a match //
    if (letter === letterToGuess) {
     
    // If there is, then we win and we will update the HTML //
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // Then i will reset the game //
    reset();
    }

  // If we are out of guesses...
  if (guessesLeft === 0)  {

