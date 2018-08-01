
// Create an array for the computer to choose a random letter
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Create varibles
var wins = 0;
var losses = 0;
var numberOfGuessesLeft = 9;
// an array that will hold all of the users guesses
var guessedLetters = [];
// what the user picks by pressing a key
var userGuess = [];



// This function is run whenever the user presses a key
    document.onkeyup = function(event) {

        //Gathers Users guessed key letters
        var userGuess = event.key;
        guessedLetters.push(userGuess);
        console.log(guessedLetters);

        // randomly chooses a letter from the computerChoice array. This is the computers guess
        var letterToBeGuessed = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(letterToBeGuessed);
       
      
     
        //Logic if the computer and user guess the same key
        if(userGuess) {
            numberOfGuessesLeft--;
        }
    

        if (letterToBeGuessed == userGuess) {
            wins++;
        }

        else if(letterToBeGuessed !== userGuess) {
            losses++;
            userGuess = guessedLetters;
            guessedLetters.push(userGuess);
            };
        

        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>number of gussess left: " + numberOfGuessesLeft + "</p>"
          "<p>Guesses so Far: " + guessedLetters + "<p>"

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
        }


