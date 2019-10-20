//Array of possible beer styles
var beerStyles = ["helles", "pilsner", "bock", "wheat beer", "amber ale", "pale ale", "brown ale", "ipa", "porter", "stout"];

//Variables for tracking players guesses left
var wordInPlay = "";
var remainingLetters = wordInPlay.length;
var lettersOfTheWord = [];
var matchedLetters = [];
var guessedLetters = [];
var guessesLeft = 20;
var letterGuessed = "";
var hiddenLetters = "";
var wordCurrent = document.getElementById("current-word");
var guessedLetters = document.getElementById("letters-guessed");
var guessesLeft = document.getElementById("guessLeft");

//Game
function startGame() {
    wordInPlay = beerStyles[Math.floor(Math.random() * beerStyles.length)];
    lettersOfTheWord = wordInPlay.split(""); // ["p","i","l","s","n","e","r"];
    displayUnderscores();
    for (var i = 0; i < lettersOfTheWord.length; i++) {
        hiddenLetters += "_ "
    }
    wordCurrent.textContent = hiddenLetters;
}

document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    updatePage(letterGuessed);
}

function displayUnderscores() {
    var wordView = "";
    for (var i = 0; i < lettersOfTheWord.length; i++) {
        if (matchedLetters.indexOf(lettersOfTheWord[i]) !== -1) {
            wordView += lettersOfTheWord[i]

        }
        else {
            wordView += "&nbsp;&nbsp;";
        }
    }
    document.querySelector("#current-word").innerHTML = wordView
}

