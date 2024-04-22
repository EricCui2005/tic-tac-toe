let playBoard = document.getElementById('board');

// Function to update the game board UI
// gamestate: a board object
function updateBoard(gamestate) {

    // Iterating through the rows of the board
    for (let i = 0; i < 3; i++) {
        let row = document.getElementById('row' + i);
        let cells = row.children;

        // Iterating through the cells of the row
        for (let j = 0; j < 3; j++) {
            let cell = cells[j];
            cell.textContent = gamestate[i][j] === 1 ? 'X' : gamestate[i][j] === 2 ? 'O' : '';
        }
    }
}