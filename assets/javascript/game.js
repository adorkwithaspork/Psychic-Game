
// Create an array for the computer to choose a random letter
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Create varibles
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessesSoFar = []

 // randomly chooses a letter from the computerChoice array. This is the computers guess
 var getRandomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 console.log(getRandomLetter)

// Thid function is run whenever the user presses a key
    document.onkeyup = function(event) {

        //Determmines which key was pressed
        var userGuess = event.key;
        console.log(event.key);
        
     
     
        //Logic if the computer and user guess the same key
        if(userGuess) {
            numGuesses--;
        }

        if (userGuess == getRandomLetter) {
            wins++;
    
        }
        else if(userGuess !== getRandomLetter) {
            losses++;
            };
        

        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>number of gussess left: " + numGuesses + "</p>"
          "<p>Guesses so Far: " + guessesSoFar + "<p>"

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      };
function newFunction() {
    console.log(computerChoices);
}

