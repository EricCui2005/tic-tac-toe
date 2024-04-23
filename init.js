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

let gameStatus = document.getElementById('game-status');

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
        updateUI();

        // Checking for a win
        const state = game.checkWin();
        if (state !== 0) {
            let winner = '';
            switch (state) {
                case 1:
                    gameStatus.textContent = 'Player 1 wins!';
                    break;
                case 2:
                    gameStatus.textContent = 'Player 2 wins!';
                    break;
                case -1:
                    gameStatus.textContent = 'It\'s a draw!';
            }
        }
    }
});

// Updates the board UI
function updateUI() {
    let board = game.getGameState();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.getElementById(`cell${i}${j}`);
            cell.textContent = board[i][j] === 1 ? 'X' : board[i][j] === 2 ? 'O' : '';
        }
    }
}

// Play and reset buttons
let playButton = document.getElementById('play');
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    game.resetGame();
    gameStatus.textContent = 'Playing...';
    updateUI();
});