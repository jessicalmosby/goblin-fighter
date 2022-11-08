/* Imports */
import { renderGoblin } from './render.utils.js';

/* Get DOM Elements */
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#fin');
const adventurerImg2El = document.querySelector('#jake');
const goblinListEl = document.querySelector('.goblins');
const form = document.querySelector('form');

/* State */
let defeatedGoblinCount = 0;
let playerHP = 10;
let goblins = [
    { id: 1, name: 'Grobyn', hp: 1 },
    { id: 2, name: 'Goblin King', hp: 4 },
];
let currentId = 3;

/* Events */
form.addEvenListener('sumbit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

    goblins.push(newGoblin);
    displayGoblins();
});

/* Display Functions */
function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinListEl.append(goblinEl);
    }
}
displayGoblins();

// (don't forget to call any display functions you want to run on page load!)
