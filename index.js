var WordExport = require("./Word");
var inquirer = require("inquirer");

// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var continueGame = true;

// var totalLoops = guessesLeft + newWordExport.numLettersInTheWord;
// console.log(totalLoops);

//     if (continueGame == true) {
//         // Create a "Prompt" with a series of questions.


// init the game 
var newWordExport = new WordExport();

//array of word choices for the game
var arrayOfWordChoices = ["clapping", "window", "basketball"];

// Randomly chooses a choice from the options array. This is the Computer's selection of the hangman word.
var hangmanWordSelected = arrayOfWordChoices[Math.floor(Math.random() * arrayOfWordChoices.length)];

//create array of letter objects - starts with calling newWordExport - based on Word and Letter constructors
newWordExport.createArrayOfObjects(hangmanWordSelected);
var returnVal = newWordExport.returnStringFn();

//guesses left for user
var maxGuesses = 9;

//current guess count - used for debugging
var guessCount = 0;

initGame();


//guess a letter function - all game logic is here
function guessALetter() {

    // console.log("inside guessALetter");
    // console.log(guessCount + "::::" + maxGuesses + "::::::" + newWordExport.numLettersInTheWord);
    if (guessCount < maxGuesses) {
        // Create a "Prompt" with a series of questions.
        inquirer
            .prompt([
                // Here we give the user a list to choose from.
                {
                    type: "input",
                    message: "Guess a letter to play",
                    name: "user_letter_guessed"
                },
            ])
            .then(function (userInput) {

                // console.log(userInput.user_letter_guessed);

                // pass the guessed letter to the userGuessedALetterFn
                var guessResult = newWordExport.userGuessedALetterFn(userInput.user_letter_guessed);

                // console.log("letter count: " + newWordExport.numLettersInTheWord);
                // console.log("successful guess result: " + guessResult[0]);

                if (guessResult[0] == newWordExport.numLettersInTheWord) {
                    console.log("---------------You win!!--------------");
                    // display list of letters guessed 
                    console.log("\n" + newWordExport.singleWordArray.join(" ") + "\n");

                    // init the game
                    newWordExport = new WordExport();

                    // Randomly chooses a choice from the options array. This is the Computer's selection of the hangman word.
                    hangmanWordSelected = arrayOfWordChoices[Math.floor(Math.random() * arrayOfWordChoices.length)];

                    //create array of letter objects - starts with calling newWordExport - based on Word and Letter constructors
                    newWordExport.createArrayOfObjects(hangmanWordSelected);
                    returnVal = newWordExport.returnStringFn();

                    //guesses left for user
                    maxGuesses = 9;

                    //current guess count - used for debugging
                    guessCount = 0;

                    initGame();
                }
                else {
                    //if guessResult[1] == true then skip incrementing the guessCount
                    if (!guessResult[1])
                        guessCount++;

                    console.log("You have " + (maxGuesses - guessCount) + " incorrect guesses left.\n");
                    // console.log(guessCount);

                    //get the string of letters guessed correctly - letters that haven't been guessed are denoted by '_'
                    returnVal = newWordExport.returnStringFn();
                    // display list of letters guessed 
                    console.log("\n" + returnVal + "\n");

                    // console.log(guessResult[1]);

                    guessALetter();
                }

                if (guessCount == maxGuesses) {
                    console.log("You Lose.  Game over");
                    console.log("The word was: " + newWordExport.singleWordArray.join(" "));
                    return;
                }



            });
    }

}

function initGame() {

    inquirer
        .prompt([

            // Here we ask the user if they want to play again?
            {
                type: "confirm",
                message: "Do you want to play Hangman for Node.JS?",
                name: "confirm",
            }
        ])
        .then(function (userInput) {

            if (userInput.confirm) {
                // console.log("at initial guessALetter call");

                // display initial blank hangman list of letters
                console.log("\n" + returnVal + "\n");

                guessALetter();
                // initGame();

            }
            else {
                continueGame = false;
                console.log("Have a nice day!");
            }

        });
}
