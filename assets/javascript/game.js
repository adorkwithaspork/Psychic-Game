
// Create an array for the computer to choose a random letter
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Create varibles
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
// an array that will hold all of the users guesses
var guessedLetters = [];
// what the user picks by pressing a key
var userGuess = [];



// This function is run whenever the user presses a key
    document.onkeyup = function(event) {

        //Gathers Users guessed key letters
        var userGuess = event.key;
        guessedLetters.push(userGuess);
       

        // randomly chooses a letter from the computerChoice array. This is the computers guess
        var letterToBeGuessed = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(letterToBeGuessed)
       

        //Clears the amount Guess Key Letters when they reach the end of their left # of guesses left
        var reset = function () {
        guessesRemaining = 9;
        guessedLetters = [];
      }
       
      
     
        //Logic if the computer and user guess the same key
        if (letterToBeGuessed == userGuess) {
            wins++;
            reset ();

        //If the user's guess equals 0 and runs out, the user loses and their guesses will start over for the user to try again 
       
        } else {
            guessesRemaining--;
        }


        //If the user's guess equals 0 and runs out, the user loses and their guesses will start over for the user to try again 
        if (guessesRemaining == 0) {
        losses++;
        guessesRemaining = 9;
        reset();
                };
     
    
        

        var html =
          "<p>Your Guesses so Far: " + guessedLetters + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Number of Guesses Left: " + guessesRemaining + "</p>"
        //   "<p>Guesses so Far: " + guessedLetters + "<p>"

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
        }


