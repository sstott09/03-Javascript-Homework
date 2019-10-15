
var wordInPlay = null;
var lettersOfTheWord = [];
var matchedLetters = [];
var guessedLetters = [];
var guessesLeft = 0;
var totalGuesses = 0;
var letterGuessed = null;
var wins = 0;
var beerStyles = ["lager", "pilsner", "bock", "wheat beer", "amber ale", "pale ale", "brown ale", "ipa", "porter", "stout"];

function startGame() {
    wordInPlay = songs[Math.floor(Math.random() * beerStyles.length)];
    lettersOfTheWord = wordInPlay.split(""); // ["c","a","t"]
    displayUnderscores()
        ;
}
document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    updatePage(letterGuessed)
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