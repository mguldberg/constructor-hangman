var letterExport = require("./Letter");

//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var newLetterInTheWord = new letterExport();

var Word = function () {
    this.numLettersInTheWord = 0;
    this.arrayOfLettersObjects = [];
    this.lettersGuessedCorrectly = 0;
    this.singleWordArray = [];

    // An array of new Letter objects representing the letters of the underlying word
    this.createArrayOfObjects = function (underlyingWord) {
        this.singleWordArray = Array.from(underlyingWord);
        for (i = 0; i < this.singleWordArray.length; i++) {
            this.arrayOfLettersObjects.push(new letterExport(this.singleWordArray[i]));
            this.numLettersInTheWord++;
        }
        // console.log(this.arrayOfLettersObjects);
    }

    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.returnStringFn = function () {
        var displayLetterArray = [];
        for (i = 0; i < this.numLettersInTheWord; i++) {

            displayLetterArray.push(this.arrayOfLettersObjects[i].displayChar() + " ");

        }
        return displayLetterArray.join(" ");
    }

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.userGuessedALetterFn = function (guessedLetter) {
        // console.log("inside the guessed letter fn");
        // console.log(this.arrayOfLettersObjects.length);

        var guessedBoolean = false;

        for (i = 0; i < this.arrayOfLettersObjects.length; i++) {
            var guessedOrNot = this.arrayOfLettersObjects[i].wasThisACorrectGuess(guessedLetter);
            if (guessedOrNot) {
                this.lettersGuessedCorrectly++;
                guessedBoolean = true;
            }
            else {

            }
        }
        console.log("\n\n\nSo far you have guessed " + this.lettersGuessedCorrectly +" letters correctly.\n");

        if (guessedBoolean)
            console.log("\nYou guessed correctly\n");
        else
            console.log("\nThat guess was incorrect\n");

        // return the current # of letters in this word guess correctly, and if there was a successful guess (guessedBoolean)
        return [this.lettersGuessedCorrectly, guessedBoolean];
    }


}

module.exports = Word;