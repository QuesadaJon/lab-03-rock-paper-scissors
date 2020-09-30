// import functions and grab DOM elements
const throwPaper = document.querySelector('#paper');
const throwScissors = document.querySelector('#scissors');
const throwRock = document.querySelector('#paper');
const playGame = document.getElementById('submit');
const results = document.getElementById('results-span');
const games = document.getElementById('games-span');
const sets = document.getElementById('sets-span');

// initialize state
let setsWon = 0;
let gamesWon = 0;
let gamesPlayed = 0;

// set event listeners to update state and DOM