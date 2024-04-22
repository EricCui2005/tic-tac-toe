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

// Function to control the flow of the game
// playerOneName: name of player one
// playerTwoName: name of player two
function GameController(playerOneName = "Player One", playerTwoName = "Player Two") {
    
    // Array of players
    const players = [
        {
            name: playerOneName,
            mark: 1
        },
        {
            name: playerTwoName,
            mark: 2
        }
    ];

    let activePlayer = players[0];

    // Function to switch the active player
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    // Function to return the active player
    const getActivePlayer = () => activePlayer;

    // Function to check for a win
    // gamestate: the current state of the gameboard
    // return: 0 for no winner, 1 for player1 win, 2 for player2 win
    const checkWin = (gamestate) => {

        // Check rows for a win
        for (let i = 0; i < 3; i++) {
            if (gamestate[i][0] === gamestate[i][1] && gamestate[i][1] === gamestate[i][2] && gamestate[i][0] !== 0) {
                return gamestate[i][0];
            }
        }

        // Check columns for a win
        for (let j = 0; j < 3; j++) {
            if (gamestate[0][j] === gamestate[1][j] && gamestate[1][j] === gamestate[2][j] && gamestate[0][j] !== 0) {
                return gamestate[0][j];
            }
        }

        // Check diagonal (top-left to bottom-right)
        if (gamestate[0][0] === gamestate[1][1] && gamestate[1][1] === gamestate[2][2] && gamestate[0][0] !== 0) {
            return gamestate[0][0];
        }

        // Check diagonal (top-right to bottom-left)
        if (gamestate[0][2] === gamestate[1][1] && gamestate[1][1] === gamestate[2][0] && gamestate[0][2] !== 0) {
            return gamestate[0][2];
        }

        // Check if the entire board is filled
        let isFilled = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gamestate[i][j] === 0) {
                    isFilled = false;
                    break;
                }
            }
            if (!isFilled) {
                break;
            }
        }
        if (isFilled) {
            return -1; // Return -1 to indicate a draw
        }

        // No winner found
        return 0;
    }

    // Function to play a game of tic tac toe in the console
    function playConsoleGame() {
        console.log("Welcome to Tic Tac Toe!");

        // Initializing an empty gameboard
        let board = Gameboard();

        // Printing the initial state of the gameboard
        board.printBoard();

        // Game loop until win condition
        while(checkWin(board.getBoard()) === 0) {
            
            // Geting the active player's move
            let row, column;
            do {
                row = parseInt(prompt(`${activePlayer.name}, enter a row (0-2): `));
                column = parseInt(prompt(`${activePlayer.name}, enter a column (0-2): `));
            } while (isNaN(row) || isNaN(column) || row < 0 || row > 2 || column < 0 || column > 2 || board.getBoard()[row][column] !== 0);

            board.addMark(row, column, activePlayer.mark);
            board.printBoard();
            switchPlayerTurn();
        }

        // Checking winner
        let winner = checkWin(board.getBoard());

        // Outputting winner
        if (winner === -1) {
            console.log("It's a draw!");
        } else if (winner === 1) {
            console.log('Player one wins!');
        } else {
            console.log('Player two wins!');
        }
    }

    // Returning the GameController object
    return { players, switchPlayerTurn, getActivePlayer, checkWin, playConsoleGame };
}