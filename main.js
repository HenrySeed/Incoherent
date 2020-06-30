// control panel
let timeTotal = 10;
let skipsTotal = 3;

// trackers
let nounDictionary = [];
let newWord;

let timeLeft = timeTotal;
let skipsLeft = skipsTotal;
let totalScore = 0;
let gameScoreBoard = [];
let roundScoreBoard = [];

let timerInterval;

function loadWords() {
    nounDictionary = nouns.slice(0);
}

function getRandInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function openState(id) {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("gameMenu").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("endScreen").style.display = "none";

    document.getElementById(id).style.display = "block";
}

function generateWord() {
    if (nounDictionary.length === 0) nounDictionary = nouns.slice(0);
    newWord = nounDictionary.splice(getRandInt(nounDictionary.length), 1)[0];
    document.getElementById("word").innerHTML = newWord;
}

function skipWord() {
    roundScoreBoard.push({ word: newWord, correct: false });
    generateWord();
    skipsLeft -= 1;
    document.getElementById(
        "skipsLeft"
    ).innerHTML = `(${skipsLeft.toString()} left)`;
    if (skipsLeft === 0) {
        document.getElementById("skipButton").disabled = true;
    }
}

function gotWord() {
    roundScoreBoard.push({ word: newWord, correct: true });
    generateWord();
}

function genScoreBoard(scoreBoard) {
    let rows = scoreBoard.map(
        val =>
            `<td>${val.word}</td><td>${
                val.correct ? "Correct" : "Skipped"
            }</td>`
    );
    let boardHTML = rows.map(val => `<tr>${val}</tr>`).join("");

    boardHTML =
        `<table>${boardHTML}</table>` + `<div>Total Score: ${totalScore}</div>`;
    return boardHTML;
}

function printRoundScoreBoard() {
    document.getElementById("roundScoreboard").innerHTML =
        "<h3>This Rounds Scores:</h3>" + genScoreBoard(roundScoreBoard);
}
function printGameScoreBoard() {
    document.getElementById("gameScoreboard").innerHTML = genScoreBoard(
        gameScoreBoard
    );
}

function startGame() {
    openState("gameMenu");
}

function startTurn() {
    roundScoreBoard = [];
    // first hide start screen
    openState("gameScreen");
    document.getElementById(
        "skipsLeft"
    ).innerHTML = `(${skipsLeft.toString()} left)`;

    generateWord();
    // Update the count down every 1 second
    document.getElementById("timerContainer").style.height = `0%`;

    timerInterval = setInterval(function() {
        timeLeft -= 0.25;
        // If the count down is finished, write some text
        document.getElementById("timerContainer").style.height = `${(timeTotal -
            timeLeft) *
            timeTotal}%`;
        if (timeLeft < -0.25) {
            endTurn();
        }
    }, 250);
}

function endTurn() {
    clearInterval(timerInterval);
    timeLeft = timeTotal;
    skipsLeft = skipsTotal;
    document.getElementById("skipButton").disabled = false;
    openState("gameMenu");

    gameScoreBoard = gameScoreBoard.concat(roundScoreBoard);
    totalScore += gameScoreBoard.filter(val => val.correct).length;
    if (totalScore >= 10) {
        endGame();
    }

    printRoundScoreBoard();
}

function endGame() {
    openState("endScreen");
    printGameScoreBoard();
}

function reset() {
    totalScore = 0;
    roundScoreBoard = [];
    gameScoreBoard = [];
    document.getElementById("roundScoreboard").innerHTML = "";
    document.getElementById("gameScoreboard").innerHTML = "";
}

function openMainMenu() {
    reset();
    openState("mainMenu");
}
