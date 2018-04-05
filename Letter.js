// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var Letter = function (letter){
    // A string value to store the underlying character for the letter    
    this.stringChar = letter;
    // A boolean value that stores whether that letter has been guessed yet
    this.guessedOrNotBool = false;

    this.displayed = "_";
    
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.displayChar = function (){
        return this.displayed;
    };

    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.wasThisACorrectGuess = function (guessedLetter){
        // console.log("inside the wasThisACorrectGuess Fn");
        // console.log(this.stringChar);
        var guessedCorrectly= false;

        if (guessedLetter === this.stringChar && this.guessedOrNotBool == false){
            this.guessedOrNotBool = true;
            guessedCorrectly = true;
            this.displayed = this.stringChar;
        }
     
        return guessedCorrectly;
    }

}
module.exports = Letter;