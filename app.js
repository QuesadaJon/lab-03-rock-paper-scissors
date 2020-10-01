import { getRandomThrow, didUserWin } from './get-random-throw.js';
// import functions and grab DOM elements
const playGame = document.getElementById('submit');
const results = document.getElementById('results-span');
const games = document.getElementById('games-span');
const winCounter = document.getElementById('win-counter');

// initialize state
let gamesWon = 0;
let gamesPlayed = 0;
let wins = 0;
console.log(gamesWon, gamesPlayed);

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
    console.log(gamesPlayed);

    if (gameResult === 'win') {
        wins++;
        winCounter.textContent = wins;
    }

});

