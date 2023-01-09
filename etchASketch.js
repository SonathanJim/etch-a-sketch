const displayContainer = document.getElementById('displayContainer');
const display = document.getElementById('display');

let resolution = 16;

createGrid(resolution);

function createGrid(resolution) {
    display.style.display = 'grid';
    for(let i=0; i<resolution; i++) {
        display.style.gridTemplateColumns += ' auto'
        for(let j=0; j<resolution; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            let cellWidth = (displayContainer.clientWidth/resolution);
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellWidth}px`;
            display.appendChild(cell);
        }
    }
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i<cells.length; i++) {
        cells[i].addEventListener('mouseenter', function(e) {
            e.target.classList.add('cell-hovered');
    });
    }
}

const restartButton = document.getElementById('leftButton');
restartButton.addEventListener('click', function() {
    display.innerHTML = '';
    display.style.gridTemplateColumns = ''
    resolution = prompt('how many squares per side?(10-50)');
    if ((resolution<51) && (resolution>9)) {
        createGrid(resolution)
    } else { 
        alert(`RESOLUTION MUST BE BELOW 50!!!
        (and above 10)
        please click reset`)
    };
});