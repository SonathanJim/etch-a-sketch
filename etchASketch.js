const container = document.querySelector('#container')
const display = document.querySelector('#display')

function createGrid(rows,cols) {
    display.innerHTML = "";
    for (let i = 0; i<(rows * cols); i++ ) {
        let cell = document.createElement('div');
        display.style.gridTemplateRows = rows;
        display.style.gridTemplateColumns = cols;
        cell.setAttribute('id',`cell${i}`);
        cell.setAttribute('class','cell');
        cell.style.padding = '1px';
        display.appendChild(cell);
    }
}

createGrid(16,16);