

           var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var wins = 0;
        var losses = 0;
        var guesses = 0;
        var guessesLeft = 9
        var guessedLetters = [];
        var lettertoGuess = null;

        //Users Guess//

        document.onkeyup = function (event) {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase()
          console.log('my user guess: ',userGuess)
            //Computer selects a random number//

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log('computer guess: ',computerGuess)
            

            if (userGuess == computerGuess) {
                wins++;
                console.log('i win')
            } else  {
                losses++;
                console.log('i lose')
            }

        }

    



