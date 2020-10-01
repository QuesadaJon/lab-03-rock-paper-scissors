import { getRandomThrow } from './get-random-throw.js';
// import functions and grab DOM elements
const throwRock = document.querySelector('#rock-input');
const throwScissors = document.querySelector('#scissors-input');
const throwPaper = document.querySelector('#paper-input');
const playGame = document.getElementById('submit');
const results = document.getElementById('results-span');
const games = document.getElementById('games-span');
const userInput = document.getElementById('user-input-span');
// initialize state
let gamesWon = 0;
let gamesPlayed = 0;
console.log(gamesWon, gamesPlayed);
// set event listeners to update state and DOM
playGame.addEventListener('click', () => {
    //throw hand and find out what was thrown
    gamesPlayed++;
    const handThrown = getRandomThrow();
    return results.textContent = `computer threw ${handThrown}`; 
    
});