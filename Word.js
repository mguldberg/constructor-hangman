var letterExport = require("./Letter");

//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var newLetterInTheWord = new letterExport();

var Word = function () {

    this.numLettersInTheWord = 0;
    this.arrayOfLettersObjects = [];
    // An array of new Letter objects representing the letters of the underlying word
    this.createObjectOfLetters = function (underlyingWord) {

        var singleWordArray = Array.from(underlyingWord);

        for (i = 0; i < singleWordArray.length; i++) {
            this.arrayOfLettersObjects.push(new letterExport(singleWordArray[i]));
            this.numLettersInTheWord++;
        }

        console.log(this.arrayOfLettersObjects);
    }

    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.returnStringFn = function () {

        var displayLetterArray = [];

        for (i = 0; i < this.numLettersInTheWord; i++) {

            displayLetterArray.push(this.arrayOfLettersObjects[i].displayChar() + " ");

        }
        return displayLetterArray.toString("");
    }

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.userGuessedALetterFn = function (guessedLetter) {
        var guessedOrNot = lettersInTheWord.wasThisACorrectGuess(guessedLetter)
        if (guessedOrNot) {
            return "you guessed correctly";
        }
        else {
            return "sorry, that wasn't correct"
        }
    }


}

module.exports = Word;