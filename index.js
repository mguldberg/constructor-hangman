var WordExport = require("./Word");
var inquirer = require("inquirer");

// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
var newWordExport = new WordExport();

var wordArray = ["timerer", "window"];

newWordExport.createArrayOfObjects(wordArray[0]);

var returnVal = newWordExport.returnStringFn();

console.log(returnVal);

var maxGuesses = 9;
var guessCount = 0;
// var totalLoops = guessesLeft + newWordExport.numLettersInTheWord;
// console.log(totalLoops);

guessALetter();

function guessALetter() {

    if (guessCount < maxGuesses) {
        // Create a "Prompt" with a series of questions.
        inquirer
            .prompt([
                // Here we give the user a list to choose from.
                {
                    type: "input",
                    message: "Guess a letter",
                    name: "user_letter_guessed"
                },
            ])
            .then(function (userInput) {

                console.log(userInput.user_letter_guessed);
                // pass the guessed letter to the userGuessedALetterFn
                
                var guessResult = newWordExport.userGuessedALetterFn(userInput.user_letter_guessed);

                console.log("letter count: " + newWordExport.numLettersInTheWord);
                console.log("guess result: " + guessResult);

                if (guessResult == newWordExport.numLettersInTheWord) {
                    console.log("you win!!");
                    guessCount = 100;
                }

                returnVal = newWordExport.returnStringFn();
                console.log(returnVal);
                guessCount++;
                console.log("you have " + (maxGuesses - guessCount) + " guesses left");
                console.log(guessCount);

                guessALetter();

                if (guessCount == 9) {
                    console.log("game over");
                }
                
            });
    }
}