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

window.onload = function() {
	var computerGuess = String.fromCharCode[Math.floor(Math.random).computerChoices.length];
	computerGuess.push(computerGuess);

	console.log(computerGuess);

	// Function to capture user's keyboard input //

	document.onkeydown = function(event) {
		var keyPress = String.fromCharCode(event.KeyCode).toLowerCase();

		addLetter = keypress;
	};

	// Function to catch repeatLetters

	function addLetter(usersKeypress) {
		var repeatGuess = lettersGuessed.some(function(item) {
			return item === usersKeypress;
		});

		if (repeatGuess) {
			alert(userKeypress + " already guessed. Try again!");
		}
	}
};
