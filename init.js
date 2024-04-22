import { GameController } from './game.js';

let game = GameController('Player 1', 'Player 2');

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
        cell.id = `cell${i}${j}`;
        row.appendChild(cell);
    }
    playBoard.appendChild(row);
}

// Creating event manager to update board
let buttonDetector = document.getElementById('board');
buttonDetector.addEventListener('click', (e) => {

    // Identifies and performs logic on a button
    let target = e.target;
    if (target.classList.contains('cell')) {

        // Parsing row and column of button based on id
        let row = parseInt(target.id[4]);
        let column = parseInt(target.id[5]);

        // Moving on the board
        game.playMove(row, column, game.getActivePlayer());
        game.checkWin();

        game.printConsoleBoard();
    }
});

// Play and reset buttons
let playButton = document.getElementById('play');
let resetButton = document.getElementById('reset');