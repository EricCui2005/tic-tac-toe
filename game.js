// Game board object
function Gameboard() {

    // Constant associated with the gameboard
    const rows = 3;
    const columns = 3;

    // Creating the array of the gameboard
    const board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(columns).fill(0);
    }
    
    // Returns the gameboard
    const getBoard = () => board;

    // Function to place a mark on the gameboard
    // row: row of the gameboard (0-indexed)
    // column: column of the gameboard (0-indexed)
    // player: player number (1 or 2)
    const addMark = (row, column, player) => {
        if (board[row][column] === 0) {
            board[row][column] = player;
        }
    }

    // Function to print the state of the board to the console
    const printBoard = () => {
        let boardString = "";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                boardString += board[i][j] + " ";
            }
            boardString += "\n";
        }
        console.log(boardString);
    }

    return { getBoard, addMark, printBoard };
}


// Player Object

// Gameflow object