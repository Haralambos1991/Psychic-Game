// Here is the array of the letters that the user will choose and below are the efforts remaing for him.
var computerChoices = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
];

var wins = 0;
var loses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

// document.onkeydown = function(event) {
document.addEventListener("keydown", function(event) {
	var keyPress = String.fromCharCode(event.KeyCode).toLowerCase();
	// addLetter = keyPress;
	handleKeypress(event.key);
});

function handleKeypress(key) {
	console.log("key", key);

	computerGuess(key);
}

const computerGuess = function(letter) {
	var computerGuessString = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	console.log(computerGuess);

	// Function to capture user's keyboard input //

	// Function to catch repeatLetters

	function addLetter(userskeyPress) {
		var repeatGuess = lettersGuessed.some(function(item) {
			return item === userskeyPress;
		});

		if (repeatGuess) {
			alert(userskeyPress + " already guessed. Try again!");

			// If its not a repeat guessed, check if its in the word
		} else {
			lettersGuessed.push(userskeyPress);
			console.log(lettersGuessed);

			// This will show users input in the browser //

			showLettersGuessed();
			// is user's input a match to the computer

			guessMatch(userskeyPress, computerGuessString);
		}
	}
	addLetter(letter);
};

// Right now i will create a function to show the letters guessed in the browser //

function showLettersGuessed() {
	var tempStr = lettersGuessed.join(", ");

	document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch(character, guessString) {
	console.log(character);
	console.log(guessString);

	if (character === guessString) {
		alert("You win!");
		wins = wins + 1;
		showWins();

		//toggle Game //
	} else if (guessesLeft === 0) {
		alert("Aw man, lets start over!.");
		resetVariables();
	} else {
		guessesLeft = guessesLeft - 1;
		showGuessesRemaining();
	}

	// function to show wins //

	function showWins() {
		document.getElementById("numWins").innerHTML = wins;
	}

	// function to show guesses remaining //

	function showGuessesRemaining() {
		var numGuesses = document.getElementById("numGuesses");
		numGuesses.innerHTML = guessesLeft;
	}

	function resetVariables() {
		lettersGuessed = [];
		guessesLeft = 10;
	}

	function startGame(key) {
		showGuessesRemaining();
		showWins();
	}
}

startGame();
