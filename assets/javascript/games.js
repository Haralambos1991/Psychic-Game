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
}

computerGuess = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
	var computerGuess = String.fromCharCode[Math.floor(Math.random).computerChoices.length];
	computerGuess.push(computerGuess);

	console.log(computerGuess);

	// Function to capture user's keyboard input //

	// Function to catch repeatLetters

	function addLetter(usersKeypress) {
		var repeatGuess = lettersGuessed.some(function(item) {
			return item === usersKeypress;
		});

		if (repeatGuess) {
			alert(userKeypress + " already guessed. Try again!");

			// If its not a repeat guessed, check if its in the word
		} else {
			lettersGuessed.push(usersKeypress);
			console.log(lettersGuessed);

			// This will show users input in the browser //

			showLettersGuessed();
			// is user's input a match to the computer

			guessMatch(usersKeypress);
		}
	}
};

// Right now i will create a function to show the letters guessed in the browser //

function showLettersGuessed(key) {
	var tempStr = lettersGuessed.join(", ");

	document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch(character) {
	console.log(character);
	console.log(computerGuess);

	if (character === computerGuess) {
		alert("You win!");
		wins = wins + 1;
		showWins();

		//toggle Game //
	} else if (guessesleft === 0) {
		alert("Aw man, lets start over!.");
		resetVariables();
	} else {
		guessesLeft = guessesleft - 1;
		showGuessesRemaining();
	}
}

// function to show wins //

function showWins(key) {
	document.getElementById("numWins").innerHTML = wins;
}

// function to show guesses remaining //

function showGuessesRemaining(key) {
	var game = document.getElementById("game");
	//game.innerHTML = JSON.stringify(showGuessesRemaining);
}

function resetVariables(key) {
	lettersGuessed = [];
	guessesLeft = 10;
}

function startGame(key) {
	showGuessesRemaining();
	showWins();
}

startGame();
