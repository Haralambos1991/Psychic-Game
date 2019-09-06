// Here i am defining the users choices by specifing the element id//
var wins= document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var guessesSoFar = document.getElementById("guessesSoFar");

// Here is the array of the letters that the user will choose and below are the efforts remaing for him.
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winsCount = 0;
var lossesCount = 0;
var defaultGuessesremaining = 9;
var guessesArray = [];

// This code has been created for the user to choose a random letter
/*var getRandomLetter = function() {
randomLetter= allLetters[Math.floor(Math.random().allLetters.length)]
console.log(randomLetter);
return randomLetter;
*/
var displayStats = function() {
 wins.innerHTML = "Wins: " + winsCount
 losses.innerHTML = "Losses: " + lossesCount
 guessesRemaining.innerHTML = "GuessesLeft: " + guessesRemainingCount
 guessesSoFar.innerHTML = "GuessesSoFar: " + guessesArray
}
//The game will be reset and start over again.
//var resetGame = function() {
  /*guessesArray = [];
  guessesRemainingCount = defaultGuessesRemaining
  currentLetter = getRandomletter();

  var userWon = function (userLetter) {
    return userLetter === currentLetter

  var userLost = function() {
    return guessesRemainingCount === 0;
  }
*/
var currentLetter = getRandomLetter(); {
  displayStats()
  document.onkeyup = function(_event) {
   guessesRemainingCount --;
   guessesRemaining.push(userLetters)

   if (userWon(userLetter))
      winsCount++
      resetGame();
  }

  if (userLost)
     lostCount++
     resetGame();
}

displayStats();
  


//