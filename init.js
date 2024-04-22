// Initializing the playboard
let playBoard = document.querySelector('#board');

// Populating the playboard
for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 3; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    playBoard.appendChild(row);
}