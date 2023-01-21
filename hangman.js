// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// Array of options + attempt counter
const wordList = ["python", "java", "swift", "javascript"];
let attempts = 8;

// Determine random correct answer from array of options
let correctAnswer = wordList[Math.floor(Math.random() * (wordList.length))];

// Cover up correct answer with "-"
let hint = "-".repeat(correctAnswer.length);

// Game hangman ->
console.log("H A N G M A N");
gameLoop(attempts);
console.log('\nThanks for playing!');


function gameLoop(attempts) {
    String.prototype.replaceAt = function (index, replacement) {
        if (index >= this.length) return this.valueOf();
        return this.substring(0, index) + replacement + this.substring(index + 1);
    }
    while (attempts--) {
        let answer = input(`\n${hint}\nInput a letter: `);
        let indexOfAnswer = correctAnswer.indexOf(answer);
        if (correctAnswer.includes(answer)) {
            for(indexOfAnswer; indexOfAnswer < correctAnswer.length; indexOfAnswer++) {
                if (correctAnswer[indexOfAnswer] === answer) {
                    hint = hint.replaceAt(indexOfAnswer, answer);
                }
            }
        } else {
            console.log("That letter doesn't appear in the word.")
        }
    }
}