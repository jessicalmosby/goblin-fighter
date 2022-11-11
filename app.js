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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (playerHP <= 0) return;
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

function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;
    if (playerHP <= 0) return;
    if (Math.random() < 0.33) {
        goblinData.hp--;
        alert('You hit ' + goblinData.name);
    } else {
        alert('You tried to hit ' + goblinData.name + ' but missed.');
    }
    if (Math.random() < 0.5) {
        playerHP--;
        alert(goblinData.name + ' hit you!');
    } else {
        alert(goblinData.name + ' tried to hit you, but missed!');
    }

    if (goblinData.hp === 0) {
        defeatedGoblinCount++;
    }

    if (playerHP === 0) {
        alert('GAME OVER');
    }

    adventurerHPEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedGoblinCount;

    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
    faceEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';
}

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
// (don't forget to call any display functions you want to run on page load!)
displayGoblins();
