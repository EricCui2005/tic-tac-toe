import { Gameboard, GameController } from './game.js';

// Initializing the playboard
let playBoard = document.querySelector('#board');

// Populating the playboard
for (let i = 0; i < 3; i++) {

    // Creating a new row to be added
    let row = document.createElement('div');

    // Adding classes and id's for identification
    row.classList.add('row');
    row.id = 'row' + i;

    // Populating the row with cells
    for (let j = 0; j < 3; j++) {
        let cell = document.createElement('button');

        // Adding classes and id's for identification
        cell.classList.add('cell');
        cell.id = 'row' + j;

        cell.addEventListener('click', () => {
            
        });
        row.appendChild(cell);
    }
    playBoard.appendChild(row);
}

let playButton = document.getElementById('play');
