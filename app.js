/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = ''; // 'shell-1', 'shell-2', or 'shell-3'
let reveal = ''; // 'pearl-1', 'pearl-2', or 'pearl-3'
let results = ''; // 'Win!' or 'Lose'

let lift = 0;
let wins = 0;

/* Actions */
function loadPage() {
    displayShells();
    displayResults();
    displayScoreboard();
}

/* Components */
function displayShells() {
    guess1.classList.remove('win', 'lose', 'hidden');
    guess2.classList.remove('win', 'lose', 'hidden');
    guess3.classList.remove('win', 'lose', 'hidden');
}

/* Component */
// get DOM
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const display1 = document.getElementById(display1);
const display2 = document.getElementById(display2);
const display3 = document.getElementById(display3);

// display

// event listeners

/* Run page load code */
loadPage();
