const display = document.getElementById('display');
const container = document.getElementById('container')

let dimension;
let resolution = 16;

setAspect();

createGrid(resolution);

function setAspect () {
    if (window.innerWidth>window.innerHeight) {
        display.style.width = `${container.clientHeight*0.8}px`
        display.style.height = `${container.clientHeight*0.8}px`
    } else {
        display.style.width = `${container.clientWidth*0.8}px`
        display.style.height = `${container.clientWidth*0.8}px`
        container.style.height = `${container.clientWidth+100}px`
    }
}
function createGrid(resolution) {
    display.style.display = 'grid';
    display.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`
    display.style.gridTemplateRows = `repeat(${resolution}, 1fr)`

    for (let i = 0; i<resolution*resolution; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        display.insertAdjacentElement('beforeEnd', cell);
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
    if ((resolution<100) && (resolution>2)) {
        createGrid(resolution)
    } else { 
        alert(`RESOLUTION MUST BE BELOW 100!!!
        (and above 2)
        please click reset`)
    };
});
