import { getRandomThrow, didUserWin } from './get-random-throw.js';
// import functions and grab DOM elements
const playGame = document.getElementById('submit');
const results = document.getElementById('results-span');
const games = document.getElementById('games-span');
const winCounter = document.getElementById('win-counter');
const resetButton = document.getElementById('reset-button');
const resetCounter = document.getElementById('reset-counter');

// initialize state
let timesReset = 0;
let gamesPlayed = 0;
let wins = 0;
console.log(timesReset, gamesPlayed);

// set event listeners to update state and DOM
playGame.addEventListener('click', () => {
    //throw hand and find out what was thrown
    const computerHandThrown = getRandomThrow();
    const playerHandThrown = document.querySelector(':checked');
    const playerHand = playerHandThrown.value;

    const gameResult = didUserWin(playerHand, computerHandThrown);
console.log(gameResult, playerHand, computerHandThrown);
    results.textContent = `computer threw ${computerHandThrown}, you ${gameResult}`; 

    gamesPlayed++;
    games.textContent = gamesPlayed;
   
    if (gameResult === 'win') {
        wins++;
        winCounter.textContent = wins;
    }

    console.log(gamesPlayed, timesReset, wins);

});

resetButton.addEventListener('click', () => {
    gamesPlayed = 0;
    wins = 0;
    timesReset++;
    resetCounter.textContent = timesReset;
    winCounter.textContent = wins;
    games.textContent = gamesPlayed;


})
